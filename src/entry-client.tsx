
import React, { startTransition, Suspense } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './styles/periodicTable.css';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

// Global error logger
const logError = (error: Error, info: string) => {
  console.error(`🔴 Error in ${info}:`, error);
  console.error(`📑 Stack trace:`, error.stack);
  
  // Send to console in a visible format
  console.log('%c APP ERROR DETECTED ', 'background: #FF0000; color: white; font-size: 16px; font-weight: bold;');
  console.log(`Error message: ${error.message}`);
  console.log(`Location: ${info}`);
};

// Set up global error handler
if (typeof window !== 'undefined') {
  window.onerror = (message, source, lineno, colno, error) => {
    logError(error || new Error(String(message)), `Window error at ${source}:${lineno}:${colno}`);
    return false;
  };
}

// Performance measurement
const startTime = performance.now();
console.log('Client-side hydration started');

// Create a new QueryClient for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});

// Error fallback component
const ErrorFallback = () => (
  <div className="p-4 m-4 border border-red-500 rounded bg-red-50 text-red-800">
    <h2>Something went wrong</h2>
    <p>The application failed to load correctly. Please try refreshing the page.</p>
    <button 
      onClick={() => window.location.reload()} 
      className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
    >
      Refresh Page
    </button>
  </div>
);

// Get initial language from URL
const getInitialLanguage = () => {
  const path = window.location.pathname;
  if (path.startsWith('/ru/') || path === '/ru') return 'ru';
  if (path.startsWith('/uk/') || path === '/uk') return 'uk';
  return 'en'; // Default to English
};

// Main rendering function
function renderApp() {
  const container = document.getElementById('root');
  if (!container) {
    console.error('Root element not found. Creating a fallback container.');
    const fallbackContainer = document.createElement('div');
    fallbackContainer.id = 'root-fallback';
    document.body.appendChild(fallbackContainer);
    
    createRoot(fallbackContainer).render(<ErrorFallback />);
    return;
  }
  
  const helmetContext = {};

  // Completely removed the React Query state hydration code that could cause issues

  const AppWithProviders = (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <LanguageProvider initialLanguage={getInitialLanguage()}>
            <HelmetProvider context={helmetContext}>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </HelmetProvider>
          </LanguageProvider>
        </ThemeProvider>
        {/* Removed ReactQueryDevTools component entirely */}
      </QueryClientProvider>
    </React.StrictMode>
  );

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
    logError(error as Error, 'Root rendering');
    createRoot(container).render(<ErrorFallback />);
  }
}

// Initialize the app with error handling
try {
  renderApp();
} catch (error) {
  logError(error as Error, 'App initialization');
  
  // Last resort error display
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; margin: 20px; border: 1px solid #f56565; background: #fff5f5; color: #c53030;">
        <h2>Critical Error</h2>
        <p>The application couldn't start due to a fatal error.</p>
        <p>${error instanceof Error ? error.message : 'Unknown error'}</p>
        <button onclick="window.location.reload()" 
          style="margin-top: 10px; padding: 8px 16px; background: #c53030; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Refresh Page
        </button>
      </div>
    `;
  }
}

// Remove loading indicator
const loadingIndicator = document.getElementById('loading-indicator');
if (loadingIndicator) {
  loadingIndicator.style.opacity = '0';
  setTimeout(() => {
    loadingIndicator.parentNode?.removeChild(loadingIndicator);
  }, 300);
}

// TypeScript declaration for React Query state - simplified to avoid any issues
declare global {
  interface Window {
    __REACT_QUERY_STATE__?: any;
  }
}
