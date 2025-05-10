import path from 'path';
import fs from 'fs';
import { createServer } from 'vite';
import type { ViteDevServer } from 'vite';
import type { Request, Response, NextFunction } from 'express';
import { log } from './vite';
import { registerPathAliases } from './path-resolver';

let vite: ViteDevServer | null = null;

/**
 * Initialize the Vite dev server for SSR
 */
export async function initSSRDevServer() {
  try {
    // Register path aliases for @/, @shared/, and @assets/ imports
    registerPathAliases();
    
    // Create Vite server in middleware mode
    vite = await createServer({
      server: { middlewareMode: true },
      appType: 'custom',
      root: path.resolve(process.cwd(), 'client'),
      resolve: {
        alias: {
          '@': path.resolve(process.cwd(), 'client/src'),
          '@shared': path.resolve(process.cwd(), 'shared'),
          '@assets': path.resolve(process.cwd(), 'attached_assets'),
        }
      }
    });
    
    log('SSR development server initialized', 'ssr-dev');
    return vite;
  } catch (error) {
    console.error('Failed to initialize SSR dev server:', error);
    return null;
  }
}

/**
 * Middleware for handling SSR in development mode
 */
export function ssrDevMiddleware() {
  return async (req: Request, res: Response, next: NextFunction) => {
    // Skip API routes and static assets
    if (req.path.startsWith('/api') || req.path.includes('.')) {
      return next();
    }

    try {
      if (!vite) {
        log('SSR dev server not initialized, falling back to client-side rendering', 'ssr-dev');
        return next();
      }

      // Read the template
      const templatePath = path.resolve(process.cwd(), 'client', 'index.html');
      let template = fs.readFileSync(templatePath, 'utf-8');
      
      // Apply Vite HTML transforms
      template = await vite.transformIndexHtml(req.originalUrl, template);
      
      try {
        // First attempt a dynamic load of SSR config
        const { SSR_ENABLED, SSR_MODE, getSSRHeadTags } = await vite.ssrLoadModule('/src/lib/ssr-config.ts');
        
        // Add SEO head tags regardless of SSR mode
        const headTags = getSSRHeadTags(req.originalUrl);
        template = template.replace('</head>', `${headTags}</head>`);
        
        // Skip full SSR if it's disabled in config
        if (!SSR_ENABLED) {
          log(`SSR is disabled in config, using static HTML with SEO tags only`, 'ssr-dev');
          const finalHtml = template;
          return res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
        }
        
        // If SSR is enabled, load the server entry module
        const entryPath = '/src/entry-server.tsx';
        const { render } = await vite.ssrLoadModule(entryPath);
        
        // Render the app
        const { html: appHtml, state } = await render({ url: req.originalUrl });
        
        // Create a script tag with the dehydrated state
        const stateScript = `<script id="__SSR_STATE__" type="application/json">${state}</script>`;
        
        // Insert the rendered app and state into the template
        const finalHtml = template
          .replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`)
          .replace('</head>', `${stateScript}</head>`);
        
        res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
      } catch (ssrError: any) {
        // If there's an error in SSR, fix the stack trace and continue
        vite.ssrFixStacktrace(ssrError);
        console.error('SSR render error:', ssrError);
        
        try {
          // Add a special warning comment for debugging
          const debugComment = `<!-- SSR Error: ${ssrError.message ? ssrError.message.replace(/-->/g, '--&gt;') : 'Unknown error'} -->`;
          template = template.replace('<html', `${debugComment}\n<html`);
          
          // Try to load head tags even if SSR fails
          try {
            const { getSSRHeadTags } = await vite.ssrLoadModule('/src/lib/ssr-config.ts');
            const headTags = getSSRHeadTags(req.originalUrl);
            template = template.replace('</head>', `${headTags}</head>`);
          } catch (headError) {
            console.warn('Failed to add SEO tags in fallback:', headError);
          }
          
          // Add a special state flag to indicate SSR failure for the client
          const fallbackState = JSON.stringify({ ssrFailed: true, url: req.originalUrl });
          const stateScript = `<script id="__SSR_STATE__" type="application/json">${fallbackState}</script>`;
          template = template.replace('</head>', `${stateScript}</head>`);
        } catch (fallbackError) {
          console.error('Error in SSR fallback processing:', fallbackError);
        }
        
        // Send the template without SSR as fallback
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      }
    } catch (error) {
      console.error('SSR middleware error:', error);
      next(error);
    }
  };
}