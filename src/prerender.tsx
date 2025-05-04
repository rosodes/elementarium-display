
import React from 'react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { render } from './entry-server';
import { Writable } from 'stream';

// Using fileURLToPath to get proper file paths in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function prerenderRoutes(outDir: string): Promise<void> {
  const routes = ['/', '/en', '/ru', '/uk'];
  
  // Pre-render element pages for some key elements
  const keyElementIds = ['1', '6', '8', '26', '79', '92']; // H, C, O, Fe, Au, U
  const languages = ['en', 'ru', 'uk'];
  
  // Add element routes
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
      
      // Create the HTML file content
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
      
      // Fix: Convert PipeableStream to proper async iterable
      let content = '';
      if (stream) {
        // Handle Node.js streams
        if (typeof stream.pipe === 'function') {
          const chunks: Buffer[] = [];
          await new Promise<void>((resolve, reject) => {
            const writable = new Writable({
              write(chunk, encoding, callback) {
                chunks.push(Buffer.from(chunk, encoding as BufferEncoding));
                callback();
              },
              final(callback) {
                content = Buffer.concat(chunks).toString();
                resolve();
                callback();
              }
            });
            
            stream.pipe(writable);
            stream.on('error', reject);
          });
        } 
        // Handle streams with async iterator
        else if (Symbol.asyncIterator in stream) {
          const chunks: Buffer[] = [];
          for await (const chunk of stream) {
            chunks.push(chunk);
          }
          content = Buffer.concat(chunks).toString();
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
      html += '</body></html>';
      
      // Create the output directory if it doesn't exist
      const fileUrl = url === '/' ? '/index.html' : `${url.endsWith('/') ? url + 'index.html' : url + '.html'}`;
      const filePath = path.join(outDir, fileUrl);
      await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
      
      // Write the file
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
