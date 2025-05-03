
import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import fs from 'fs';
import path from 'path';

/**
 * Determines language from URL for pre-rendering
 */
function getLanguageFromUrl(url: string): string {
  // Faster check for common language paths
  if (url.startsWith('/ru')) return 'ru';
  if (url.startsWith('/uk')) return 'uk';
  return 'en'; // Default to English
}

/**
 * Server-side rendering function for a given URL
 * @param url URL to render
 * @returns Object with HTML and headers
 */
export async function renderPage(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: Infinity, // During prerendering, we don't need to refetch
      },
    },
  });
  
  const language = getLanguageFromUrl(url);
  
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <LanguageProvider initialLanguage={language}>
            <HelmetProvider context={helmetContext}>
              <StaticRouter location={url}>
                <App />
              </StaticRouter>
            </HelmetProvider>
          </LanguageProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
  
  return {
    html,
    helmet: helmetContext.helmet,
    queryState: queryClient.getQueryState()
  };
}

/**
 * Prerender main routes for better SEO
 * @param outputDir The directory where the rendered files will be saved
 */
export async function prerenderRoutes(outputDir: string) {
  if (!outputDir) {
    throw new Error('Output directory is required for prerendering');
  }
  
  // Most important routes to prerender for SEO
  const routes = [
    '/',              // English homepage
    '/ru',            // Russian homepage
    '/uk',            // Ukrainian homepage
    '/element/1',     // Hydrogen page (English)
    '/ru/element/1',  // Hydrogen page (Russian)
    '/uk/element/1',  // Hydrogen page (Ukrainian)
    '/element/6',     // Carbon page (popular element)
    '/element/79',    // Gold page (popular element)
  ];
  
  console.log(`Starting prerendering of ${routes.length} routes to ${outputDir}...`);
  
  try {
    for (const route of routes) {
      console.log(`Prerendering route: ${route}`);
      
      const result = await renderPage(route);
      const { html } = result;
      const helmetData = result.helmet;
      
      // Reading the template
      const templatePath = path.resolve(outputDir, 'index.html');
      let template = '';
      
      try {
        template = fs.readFileSync(templatePath, 'utf-8');
      } catch (err) {
        console.error(`Failed to read template: ${err}`);
        continue;
      }
      
      // Extract head content from helmet
      const head = helmetData ? 
        `${helmetData.title?.toString() || ''}
        ${helmetData.meta?.toString() || ''}
        ${helmetData.link?.toString() || ''}
        ${helmetData.script?.toString() || ''}` : '';
      
      // Replace placeholders in the template
      const renderedHtml = template
        .replace('<!--app-html-->', html)
        .replace('<!--app-head-->', head);
      
      // Determine path for saving
      let outputPath = route;
      if (outputPath === '/') {
        outputPath = '/index';
      } else if (outputPath.endsWith('/')) {
        outputPath = outputPath.slice(0, -1);
      }
      outputPath = `${outputDir}${outputPath}.html`;
      
      // Create subdirectories if necessary
      const outputDirectory = path.dirname(outputPath);
      if (!fs.existsSync(outputDirectory)) {
        fs.mkdirSync(outputDirectory, { recursive: true });
      }
      
      // Write the file
      fs.writeFileSync(outputPath, renderedHtml);
      console.log(`✓ Prerendered: ${route} -> ${outputPath}`);
    }
    
    console.log('Prerendering complete!');
  } catch (err) {
    console.error(`Error during prerendering: ${err}`);
  }
}

// Export function for build scripts
export default prerenderRoutes;
