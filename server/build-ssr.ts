import path from 'path';
import fs from 'fs';
import { build } from 'vite';
import { log } from './vite';

/**
 * Build both client and server bundles for SSR
 */
async function buildForSSR() {
  try {
    log('Building client bundle...', 'ssr-build');
    
    // Build the client bundle
    await build({
      root: path.resolve(process.cwd(), 'client'),
      build: {
        outDir: path.resolve(process.cwd(), 'dist', 'public'),
        emptyOutDir: true,
      },
    });
    
    log('Building server bundle...', 'ssr-build');
    
    // Build the server bundle
    await build({
      root: path.resolve(process.cwd(), 'client'),
      build: {
        outDir: path.resolve(process.cwd(), 'dist', 'server'),
        ssr: 'src/entry-server.tsx',
        emptyOutDir: true,
      },
    });
    
    log('SSR build completed successfully!', 'ssr-build');
  } catch (error) {
    console.error('SSR build error:', error);
    process.exit(1);
  }
}

// Run the build if this script is called directly
if (require.main === module) {
  buildForSSR();
}

export { buildForSSR };