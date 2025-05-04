import serveStatic from 'serve-static';
import path from 'path';
import { getMimeType } from './mimeTypes.js';

/**
 * Configure and return static file middleware for production
 */
export function setupStaticFileServing(dirname) {
  const staticMiddleware = [
    // Regular static files with caching
    serveStatic(path.resolve(dirname, 'dist/client'), {
      index: false,
      immutable: true,
      maxAge: '30d', // Cache static assets for 30 days
      setHeaders: (res, filePath) => {
        // Apply appropriate cache control headers
        if (filePath.includes('assets/')) {
          if (filePath.endsWith('.js') || filePath.endsWith('.css')) {
            // JS and CSS assets with hash in filename
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
          } else if (
            filePath.endsWith('.jpg') || filePath.endsWith('.png') || 
            filePath.endsWith('.gif') || filePath.endsWith('.svg') ||
            filePath.endsWith('.webp')
          ) {
            // Image assets
            res.setHeader('Cache-Control', 'public, max-age=604800, stale-while-revalidate=86400');
          }
        } else {
          // Other assets - shorter cache, must revalidate
          res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
        }
      }
    }),
    
    // Support for precompressed files
    serveStatic(path.resolve(dirname, 'dist/client'), {
      index: false,
      extensions: ['br', 'gz'],
      // Serve brotli and gzip compressed files when available
      setHeaders: (res, path) => {
        if (path.endsWith('.br')) {
          res.setHeader('Content-Encoding', 'br');
          res.setHeader('Content-Type', getMimeType(path.slice(0, -3)));
        } else if (path.endsWith('.gz')) {
          res.setHeader('Content-Encoding', 'gzip');
          res.setHeader('Content-Type', getMimeType(path.slice(0, -3)));
        }
      }
    })
  ];
  
  return staticMiddleware;
}
