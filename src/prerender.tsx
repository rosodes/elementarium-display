
import React from 'react';
import type { Writable } from 'stream';
import { render } from './entry-server';

// Define types for dynamically imported Node.js modules
type FSModule = typeof import('fs');
type PathModule = typeof import('path');
type FileURLToPathFn = (url: string) => string;

// Use a more reliable approach for dynamic imports in Node.js environment
export async function prerenderRoutes(outDir: string): Promise<void> {
  // Execute only in Node.js environment
  if (typeof process === 'undefined' || !process.versions || !process.versions.node) {
    console.warn('Prerendering is only available in Node.js environment');
    return;
  }

  console.log('Starting prerendering process...');
  
  // Dynamically import Node.js modules
  const [fs, path, { fileURLToPath }] = await Promise.all([
    import('fs') as Promise<FSModule>,
    import('path') as Promise<PathModule>,
    import('url').then(module => ({ fileURLToPath: module.fileURLToPath as FileURLToPathFn }))
  ]);
  
  // Get dirname correctly in ESM
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  
  // Pre-render pages for some key elements
  const routes = ['/', '/en', '/ru', '/uk'];
  
  // Pre-render element pages for some key elements
  const keyElementIds = ['1', '6', '8', '26', '79', '92']; // H, C, O, Fe, Au, U
  const languages = ['en', 'ru', 'uk'];
  
  // Add element paths
  languages.forEach(lang => {
    keyElementIds.forEach(elementId => {
      routes.push(`/${lang}/element/${elementId}`);
      routes.push(`/element/${elementId}`);
    });
  });

  console.log(`Pre-rendering ${routes.length} routes...`);
  
  try {
    for (const url of routes) {
      // Determine language from URL
      let lang = 'en'; // Default language
      if (url.startsWith('/ru/') || url === '/ru') lang = 'ru';
      if (url.startsWith('/uk/') || url === '/uk') lang = 'uk';
      
      // Render the app for this route
      console.log(`Pre-rendering: ${url} (${lang})`);
      
      const { stream, helmetContext, dehydratedState } = render(url, lang, {
        onAllReady: () => {
          console.log(`Finished rendering ${url}`);
        }
      });
      
      // Create HTML file content
      let html = '<!DOCTYPE html>\n<html lang="' + lang + '">';
      
      // Add head content from helmet
      const { helmet } = helmetContext as any;
      if (helmet) {
        html += helmet.title.toString();
        html += helmet.meta.toString();
        html += helmet.link.toString();
        html += helmet.script.toString();
      } else {
        html += '<head>';
        html += '<meta charset="UTF-8">';
        html += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
        html += '<title>Periodic Table</title>';
        html += '</head>';
      }
      
      // Start body
      html += '<body>';
      
      // Add loading indicator
      html += '<div id="loading-indicator" style="position:fixed; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(255,255,255,0.8); z-index:9999; transition:opacity 0.3s ease-out;">';
      html += '<div class="spinner" style="width:40px; height:40px; border:4px solid rgba(0,0,0,0.1); border-left-color:#3b82f6; border-radius:50%; animation:spin 1s linear infinite;"></div>';
      html += '</div>';
      html += '<style>@keyframes spin{to{transform:rotate(360deg)}}</style>';
      
      // Add app container
      html += '<div id="root">';
      
      // Process stream content cross-platform
      let content = '';
      if (stream) {
        try {
          // Process Node.js streams
          if (typeof stream.pipe === 'function') {
            const chunks: Buffer[] = [];
            await new Promise<void>((resolve, reject) => {
              // Create simplified writable for pipe
              const writable = {
                write(chunk: any, encoding: string, callback: () => void) {
                  chunks.push(Buffer.from(chunk, encoding as BufferEncoding));
                  callback();
                },
                final(callback: () => void) {
                  content = Buffer.concat(chunks).toString();
                  resolve();
                  callback();
                }
              } as unknown as Writable;
              
              stream.pipe(writable);
            });
          } 
          // Process streams with async iterator
          else if (typeof stream === 'object' && stream !== null && Symbol.asyncIterator in stream) {
            const chunks: Buffer[] = [];
            const asyncStream = stream as unknown as AsyncIterable<any>;
            
            for await (const chunk of asyncStream) {
              chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
            }
            
            content = Buffer.concat(chunks).toString();
          }
        } catch (error) {
          console.error('Error processing stream:', error);
        }
      }
      
      // Add rendered app content
      html += content;
      html += '</div>';
      
      // Add dehydrated state for React Query
      if (dehydratedState) {
        html += `<script>window.__REACT_QUERY_STATE__ = ${JSON.stringify(dehydratedState)}</script>`;
      }
      
      // Close body and html
      html += '<script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>';
      html += '<script type="module" src="/src/entry-client.tsx"></script>';
      html += '</body></html>';
      
      // Create output directory if it doesn't exist
      const fileUrl = url === '/' ? '/index.html' : `${url.endsWith('/') ? url + 'index.html' : url + '.html'}`;
      const filePath = path.join(outDir, fileUrl);
      await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
      
      // Write file
      await fs.promises.writeFile(filePath, html);
      console.log(`Pre-rendered: ${filePath}`);
    }
    
    console.log('Pre-rendering complete!');
  } catch (error) {
    console.error('Error during pre-rendering:', error);
    throw error;
  }
}

export default prerenderRoutes;
