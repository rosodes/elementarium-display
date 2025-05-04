
import fs from 'fs';
import path from 'path';

/**
 * Handle server-side rendering for both dev and prod environments
 */
export async function handleSSR(req, res, { isProd, vite, dirname }) {
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
      await handleProdSSR(req, res, { url, lang, dirname });
    } else {
      await handleDevSSR(req, res, { url, lang, vite });
    }
  } catch (e) {
    if (!isProd && vite) {
      vite.ssrFixStacktrace(e);
    }
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
}

/**
 * Handle SSR in production mode
 */
async function handleProdSSR(req, res, { url, lang, dirname }) {
  // Read the pre-built index.html
  let indexHtml = fs.readFileSync(path.resolve(dirname, 'dist/client/index.html'), 'utf-8');
  
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
}

/**
 * Handle SSR in development mode
 */
async function handleDevSSR(req, res, { url, lang, vite }) {
  // Transform the template with Vite
  let template = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8');
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
