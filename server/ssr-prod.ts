import path from 'path';
import fs from 'fs';
import { Request, Response, NextFunction } from 'express';
import { log } from './vite';
import { registerPathAliases } from './path-resolver';

// This will be imported dynamically in the SSR middleware
let serverEntryModule: any = null;

/**
 * Initialize the production SSR module
 */
export async function initSSRProd() {
  try {
    // Register path aliases for @/, @shared/, and @assets/ imports
    registerPathAliases();
    
    // In production, we import the pre-built server bundle
    const serverBundlePath = path.resolve(process.cwd(), 'dist', 'server', 'entry-server.js');
    
    if (fs.existsSync(serverBundlePath)) {
      serverEntryModule = await import(serverBundlePath);
      log('SSR production module initialized', 'ssr-prod');
      return true;
    } else {
      log(`Server bundle not found at ${serverBundlePath}`, 'ssr-prod');
      return false;
    }
  } catch (error) {
    console.error('Failed to initialize SSR production module:', error);
    return false;
  }
}

/**
 * Middleware for handling SSR in production mode
 */
export function ssrProdMiddleware() {
  return async (req: Request, res: Response, next: NextFunction) => {
    // Skip API routes and static assets
    if (req.path.startsWith('/api') || req.path.includes('.')) {
      return next();
    }

    try {
      // If the server module isn't loaded, try to load it
      if (!serverEntryModule) {
        const initialized = await initSSRProd();
        if (!initialized) {
          log('SSR production module not initialized, falling back to client-side rendering', 'ssr-prod');
          return next();
        }
      }

      // Read the template
      const templatePath = path.resolve(process.cwd(), 'dist', 'public', 'index.html');
      let template = fs.readFileSync(templatePath, 'utf-8');
      
      try {
        // First check SSR config
        const ssrConfigPath = path.resolve(process.cwd(), 'dist', 'server', 'ssr-config.js');
        let SSR_ENABLED = true;
        let getSSRHeadTags: (path: string) => string = () => '';
        
        try {
          if (fs.existsSync(ssrConfigPath)) {
            const ssrConfig = await import(ssrConfigPath);
            SSR_ENABLED = ssrConfig.SSR_ENABLED;
            getSSRHeadTags = ssrConfig.getSSRHeadTags;
          }
        } catch (configError) {
          console.warn('Failed to load SSR config, using defaults:', configError);
        }
        
        // Add SEO head tags regardless of SSR mode
        const headTags = getSSRHeadTags(req.originalUrl);
        template = template.replace('</head>', `${headTags}</head>`);
        
        // Skip full SSR if it's disabled in config
        if (!SSR_ENABLED) {
          log(`SSR is disabled in config, using static HTML with SEO tags only`, 'ssr-prod');
          return res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
        }
        
        // Render the app
        const { render } = serverEntryModule;
        const { html: appHtml, state } = await render({ url: req.originalUrl });
        
        // Create a script tag with the dehydrated state
        const stateScript = `<script id="__SSR_STATE__" type="application/json">${state}</script>`;
        
        // Insert the rendered app HTML and state into the template
        const finalHtml = template
          .replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`)
          .replace('</head>', `${stateScript}</head>`);
        
        res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
      } catch (ssrError) {
        console.error('SSR render error:', ssrError);
        
        try {
          // Add a special warning comment for debugging in production
          const errorMessage = ssrError instanceof Error ? ssrError.message.replace(/-->/g, '--&gt;') : 'Unknown error';
          const debugComment = `<!-- SSR Error: ${errorMessage} -->`;
          template = template.replace('<html', `${debugComment}\n<html`);
          
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