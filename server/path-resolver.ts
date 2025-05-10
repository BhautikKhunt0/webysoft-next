import path from 'path';
import Module from 'module';

/**
 * Register path aliases for SSR
 * This allows Node.js to resolve imports using the @ prefix and other aliases
 */
export function registerPathAliases() {
  // Save the original module resolution function
  const originalResolveFilename = (Module as any)._resolveFilename;
  
  // Override the resolution function to handle aliases
  (Module as any)._resolveFilename = function(request: string, parent: any, isMain: boolean, options: any) {
    // Handle @/ prefix for components and internal modules
    if (request.startsWith('@/')) {
      const resolvedPath = path.resolve(process.cwd(), 'client/src', request.substring(2));
      return originalResolveFilename(resolvedPath, parent, isMain, options);
    }
    
    // Handle @shared/ prefix
    if (request.startsWith('@shared/')) {
      const resolvedPath = path.resolve(process.cwd(), 'shared', request.substring(8));
      return originalResolveFilename(resolvedPath, parent, isMain, options);
    }
    
    // Handle @assets/ prefix
    if (request.startsWith('@assets/')) {
      const resolvedPath = path.resolve(process.cwd(), 'attached_assets', request.substring(8));
      return originalResolveFilename(resolvedPath, parent, isMain, options);
    }
    
    // Use the original resolution for all other imports
    return originalResolveFilename(request, parent, isMain, options);
  };
}