import path from 'path';
import fs from 'fs';
import { createServer } from 'vite';
import type { ViteDevServer } from 'vite';
import type { Request, Response, NextFunction } from 'express';
import { log } from './vite';

let vite: ViteDevServer | null = null;

/**
 * Initialize the Vite dev server for SSR
 */
export async function initSSRDevServer() {
  try {
    // Create Vite server in middleware mode
    vite = await createServer({
      server: { middlewareMode: true },
      appType: 'custom',
      root: path.resolve(process.cwd(), 'client'),
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
        // Load the server entry module
        const entryPath = '/src/entry-server.tsx';
        const { render } = await vite.ssrLoadModule(entryPath);
        
        // Render the app
        const { html: appHtml } = await render({ url: req.originalUrl });
        
        // Insert the rendered app into the template
        const finalHtml = template.replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`);
        
        res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
      } catch (ssrError: any) {
        // If there's an error in SSR, fix the stack trace and continue
        vite.ssrFixStacktrace(ssrError);
        console.error('SSR render error:', ssrError);
        
        // Send the template without SSR as fallback
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      }
    } catch (error) {
      console.error('SSR middleware error:', error);
      next(error);
    }
  };
}