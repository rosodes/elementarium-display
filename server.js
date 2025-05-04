const fs = require('fs');
const path = require('path');
const express = require('express');
const compression = require('compression');
const serveStatic = require('serve-static');
const { createServer: createViteServer } = require('vite');

/**
 * Creates the Express server for both development and production
 */
async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production'
) {
  const app = express();
  
  // Apply compression middleware with optimal settings
  app.use(compression({
    level: 6, // Balance between compression ratio and speed
    threshold: 1024, // Only compress responses larger than 1KB
    filter: (req, res) => {
      // Don't compress already compressed assets
      if (req.url.endsWith('.gz') || req.url.endsWith('.br')) {
        return false;
      }
      // Use compression for all HTTP requests
      return true;
    }
  }));

  // Security headers
  app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });

  let vite;
  if (!isProd) {
    // In development: use Vite's dev server
    vite = await createViteServer({
      root,
      server: { middlewareMode: true },
      appType: 'custom'
    });

    // Use Vite's connect instance as middleware
    app.use(vite.middlewares);
  } else {
    // In production: serve built files with optimal caching
    app.use(serveStatic(path.resolve(__dirname, 'dist/client'), {
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
    }));
    
    // Support for precompressed files
    app.use(serveStatic(path.resolve(__dirname, 'dist/client'), {
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
    }));
  }

  // Helper function to get mime type
  function getMimeType(path) {
    if (path.endsWith('.js')) return 'application/javascript';
    if (path.endsWith('.css')) return 'text/css';
    if (path.endsWith('.html')) return 'text/html';
    if (path.endsWith('.json')) return 'application/json';
    if (path.endsWith('.svg')) return 'image/svg+xml';
    return 'application/octet-stream';
  }

  // Serve index.html for all routes
  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;

      // Determine language from URL
      let lang;
      if (url.startsWith('/ru')) {
        lang = 'ru';
      } else if (url.startsWith('/uk')) {
        lang = 'uk';
      }

      if (isProd) {
        // Production: Read the pre-built index.html
        let indexHtml = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
        
        // Import the server bundle with dynamic import() for ESM compatibility
        const serverEntryPath = './dist/server/entry-server.js';
        const { render } = await import(serverEntryPath);
        
        // Set appropriate content type
        res.setHeader('Content-Type', 'text/html');
        
        // Add HTTP/2 early hints if supported
        if (res.writeEarlyHints) {
          res.writeEarlyHints({
            'Link': [
              '</dist/client/assets/entry-client-*.js>; rel=preload; as=script',
              '</dist/client/assets/vendor-*.js>; rel=preload; as=script',
              '</dist/client/assets/styles-*.css>; rel=preload; as=style'
            ]
          });
        }
        
        // Use streaming SSR
        const { stream, helmetContext, dehydratedState } = render(url, lang, {
          onShellReady() {
            // Send the first part of HTML
            const parts = indexHtml.split('<!--app-html-->');
            res.write(parts[0]);
            
            // Shell is ready, pipe it to client
            stream.pipe(res, { end: false });
          },
          onAllReady() {
            // Once everything is ready
            const helmet = helmetContext.helmet || {};
            
            // Add React Query hydration script
            const queryStateScript = dehydratedState ? 
              `<script>window.__REACT_QUERY_STATE__=${JSON.stringify(dehydratedState)}</script>` : '';
            
            // Finish the response with React Query state
            const parts = indexHtml.split('<!--app-html-->');
            res.write(`${queryStateScript}${parts[1] || ''}`);
            res.end();
          }
        });
        
        // Handle server-side errors
        stream.on('error', (err) => {
          console.error('Error during streaming SSR:', err);
          res.status(500).send('Internal Server Error');
        });
      } else {
        // Development: Transform the template with Vite
        let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        
        // Load the server entry from the Vite server
        const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
        
        // Set content type
        res.status(200).set({ 'Content-Type': 'text/html' });
        
        // Render the app HTML and get helmet data
        const { stream, helmetContext, dehydratedState } = render(url, lang, {
          onShellReady() {
            // Extract head content from helmet
            const helmet = helmetContext.helmet || {};
            let headContent = '';
            headContent += helmet.title?.toString() || '';
            headContent += helmet.meta?.toString() || '';
            headContent += helmet.link?.toString() || '';
            headContent += helmet.script?.toString() || '';
            
            // Replace head placeholder
            const htmlStart = template.replace('<!--app-head-->', headContent).split('<!--app-html-->')[0];
            res.write(htmlStart);
            
            // Pipe the stream to the response
            stream.pipe(res, { end: false });
          },
          onAllReady() {
            // Add React Query hydration script
            const queryStateScript = dehydratedState ? 
              `<script>window.__REACT_QUERY_STATE__=${JSON.stringify(dehydratedState)}</script>` : '';
            
            // Complete the response when all content is ready
            const htmlEnd = template.split('<!--app-html-->')[1];
            res.write(`${queryStateScript}${htmlEnd || ''}`);
            res.end();
          }
        });
        
        // Handle development errors
        stream.on('error', (err) => {
          vite.ssrFixStacktrace(err);
          console.error('SSR error:', err);
          res.status(500).end(err.stack);
        });
      }
    } catch (e) {
      if (!isProd) {
        vite.ssrFixStacktrace(e);
      }
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  return { app };
}

// Start the server
createServer().then(({ app }) => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
});
