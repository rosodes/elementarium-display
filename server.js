
const fs = require('fs');
const path = require('path');
const express = require('express');
const compression = require('compression');
const serveStatic = require('serve-static');
const { createServer: createViteServer } = require('vite');

async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production'
) {
  const app = express();
  
  // Apply compression middleware
  app.use(compression());

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
    // In production: serve built files
    app.use(serveStatic(path.resolve(__dirname, 'dist/client'), {
      index: false
    }));
  }

  // Serve index.html for all routes
  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;

      // Determine language from URL
      let lang;
      const urlParts = url.split('/').filter(Boolean);
      if (urlParts.length > 0 && ['en', 'ru', 'uk'].includes(urlParts[0])) {
        lang = urlParts[0];
      }

      if (isProd) {
        // In production: read the pre-built index.html
        let template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
        
        // Import the pre-built SSR bundle
        const { render } = require('./dist/server/entry-server.js');
        
        // Render the app HTML and get helmet data
        const { appHtml, helmetContext } = render(url, lang);

        // Insert helmet meta tags and app HTML into the template
        const helmet = helmetContext.helmet || {};
        const html = template
          .replace('<!--app-head-->', 
            `${helmet.title?.toString() || ''}
             ${helmet.meta?.toString() || ''}
             ${helmet.link?.toString() || ''}
             ${helmet.script?.toString() || ''}`)
          .replace('<!--app-html-->', appHtml);

        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
      } else {
        // In development: transform the template with Vite
        let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        
        // Load the server entry from the Vite server
        const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
        
        // Render the app HTML and get helmet data
        const { appHtml, helmetContext } = render(url, lang);

        // Insert helmet meta tags and app HTML into the template
        const helmet = helmetContext.helmet || {};
        const html = template
          .replace('<!--app-head-->', 
            `${helmet.title?.toString() || ''}
             ${helmet.meta?.toString() || ''}
             ${helmet.link?.toString() || ''}
             ${helmet.script?.toString() || ''}`)
          .replace('<!--app-html-->', appHtml);

        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
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
