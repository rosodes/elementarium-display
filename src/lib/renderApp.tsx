
import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '../context/ThemeContext';
import { LanguageProvider } from '../context/LanguageContext';
import { logError, setupGlobalErrorHandler } from './errorHandling';
import App from '../App';

// Create App with all providers for better performance
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

// Enhanced rendering function with better error handling
export function renderApp(
  queryClient: QueryClient,
  initialLanguage: string,
  startTime?: number
) {
  const container = document.getElementById('root');
  if (!container) {
    console.error('Root element not found');
    return;
  }
  
  // Setup global error handling before rendering
  setupGlobalErrorHandler();
  
  const AppWithProviders = createAppWithProviders(queryClient, initialLanguage);

  // Enhanced SSR detection with more reliable checks
  const hasSSRContent = 
    container.hasAttribute('data-ssr') && 
    container.firstElementChild !== null &&
    container.innerHTML.trim().length > 20;
  
  try {
    if (hasSSRContent) {
      // Use hydrateRoot for SSR
      hydrateRoot(container, AppWithProviders);
      if (startTime) console.log(`Hydration complete in ${(performance.now() - startTime).toFixed(1)}ms`);
    } else {
      // Client-side rendering with container cleanup
      container.innerHTML = '';
      createRoot(container).render(AppWithProviders);
      if (startTime) console.log(`Client render complete in ${(performance.now() - startTime).toFixed(1)}ms`);
    }
  } catch (error) {
    const renderError = error instanceof Error ? error : new Error(String(error));
    logError(renderError, 'Application rendering failed');
    
    // Show user-friendly error message
    container.innerHTML = `
      <div style="padding: 20px; margin: 20px; border: 1px solid #f56565; background: #fff5f5; color: #c53030; border-radius: 8px; font-family: system-ui, -apple-system, sans-serif;">
        <h2 style="margin: 0 0 10px 0; font-size: 18px;">Application Error</h2>
        <p style="margin: 0 0 15px 0;">The application failed to load. This might be due to a network issue or browser compatibility.</p>
        <button onclick="window.location.reload()" 
          style="margin-top: 10px; padding: 8px 16px; background: #c53030; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">
          Refresh Page
        </button>
        ${process.env.NODE_ENV === 'development' ? `
          <details style="margin-top: 15px;">
            <summary style="cursor: pointer; font-weight: bold;">Error Details (Development)</summary>
            <pre style="margin-top: 10px; padding: 10px; background: #f7f7f7; border-radius: 4px; overflow: auto; font-size: 12px;">${renderError.message}\n${renderError.stack}</pre>
          </details>
        ` : ''}
      </div>
    `;
  }
}
