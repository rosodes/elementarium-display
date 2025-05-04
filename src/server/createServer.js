
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import { createServer as createViteServer } from 'vite';

// Import middleware
import { setupCompression } from './middleware/compression.js';
import { setupSecurityHeaders } from './middleware/security.js';
import { setupStaticFileServing } from './utils/staticFiles.js';
import { handleSSR } from './renderer/ssr.js';

/**
 * Creates the Express server for both development and production
 */
export async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production'
) {
  const app = express();
  
  // Get __dirname equivalent in ESM
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  
  // Apply compression middleware
  app.use(setupCompression());

  // Apply security headers
  app.use(setupSecurityHeaders());

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
    const staticMiddlewares = setupStaticFileServing(__dirname);
    staticMiddlewares.forEach(middleware => app.use(middleware));
  }

  // Serve index.html for all routes
  app.use('*', async (req, res) => {
    await handleSSR(req, res, { isProd, vite, dirname: __dirname });
  });

  return { app };
}
