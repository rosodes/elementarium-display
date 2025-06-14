
import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '../context/ThemeContext';
import { LanguageProvider } from '../context/LanguageContext';
import { logError, setupGlobalErrorHandler } from './errorHandling';
import App from '../App';

// Optimized app creation with minimal providers
export const createAppWithProviders = (
  queryClient: QueryClient, 
  initialLanguage: string
) => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider initialLanguage={initialLanguage}>
          <HelmetProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </HelmetProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// Streamlined rendering function
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
  
  setupGlobalErrorHandler();
  
  const AppWithProviders = createAppWithProviders(queryClient, initialLanguage);

  // Simplified SSR detection
  const hasSSRContent = container.hasAttribute('data-ssr') && 
                       container.firstElementChild !== null;
  
  try {
    if (hasSSRContent) {
      hydrateRoot(container, AppWithProviders);
      if (startTime) console.log(`Hydration: ${(performance.now() - startTime).toFixed(1)}ms`);
    } else {
      container.innerHTML = '';
      createRoot(container).render(AppWithProviders);
      if (startTime) console.log(`Render: ${(performance.now() - startTime).toFixed(1)}ms`);
    }
  } catch (error) {
    const renderError = error instanceof Error ? error : new Error(String(error));
    logError(renderError, 'Application rendering failed');
    
    // Minimal error fallback
    container.innerHTML = `
      <div style="padding: 20px; margin: 20px; border: 1px solid #f56565; background: #fff5f5; color: #c53030; border-radius: 8px;">
        <h2>Application Error</h2>
        <p>Failed to load. Please refresh the page.</p>
        <button onclick="window.location.reload()" 
          style="padding: 8px 16px; background: #c53030; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Refresh
        </button>
      </div>
    `;
  }
}
