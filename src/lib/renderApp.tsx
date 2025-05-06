
import React, { startTransition } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '../context/ThemeContext';
import { LanguageProvider } from '../context/LanguageContext';
import App from '../App';

// Wrap App with all providers
export const createAppWithProviders = (
  queryClient: QueryClient, 
  initialLanguage: string
) => {
  const helmetContext = {};
  
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <LanguageProvider initialLanguage={initialLanguage}>
            <HelmetProvider context={helmetContext}>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </HelmetProvider>
          </LanguageProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

// Main rendering function
export function renderApp(
  queryClient: QueryClient,
  initialLanguage: string,
  startTime: number
) {
  const container = document.getElementById('root');
  if (!container) {
    console.error('Root element not found. Creating a fallback container.');
    const fallbackContainer = document.createElement('div');
    fallbackContainer.id = 'root-fallback';
    document.body.appendChild(fallbackContainer);
    
    // Use plain HTML instead of relying on error handling module
    fallbackContainer.innerHTML = `
      <div style="padding: 20px; margin: 20px; border: 1px solid #f56565; background: #fff5f5; color: #c53030;">
        <h2>Application Error</h2>
        <p>Unable to find root element.</p>
        <button onclick="window.location.reload()" 
          style="margin-top: 10px; padding: 8px 16px; background: #c53030; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Refresh Page
        </button>
      </div>
    `;
    return;
  }
  
  const AppWithProviders = createAppWithProviders(queryClient, initialLanguage);

  try {
    startTransition(() => {
      const isSSR = container.innerHTML.trim().length > 0;
      
      if (isSSR) {
        console.log('Attempting SSR hydration');
        hydrateRoot(container, AppWithProviders);
      } else {
        console.log('No SSR HTML found, falling back to client-side rendering');
        createRoot(container).render(AppWithProviders);
      }
      
      console.log(`Client hydration/render complete in ${(performance.now() - startTime).toFixed(1)}ms`);
    });
  } catch (error) {
    console.error('Error rendering application:', error);
    // Use plain HTML instead of requiring error handling module
    container.innerHTML = `
      <div style="padding: 20px; margin: 20px; border: 1px solid #f56565; background: #fff5f5; color: #c53030;">
        <h2>Application Error</h2>
        <p>Failed to render application.</p>
        <button onclick="window.location.reload()" 
          style="margin-top: 10px; padding: 8px 16px; background: #c53030; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Refresh Page
        </button>
      </div>
    `;
  }
}
