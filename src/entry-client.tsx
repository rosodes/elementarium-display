
import React, { startTransition } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './styles/periodicTable.css';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

// Performance measurement
const startTime = performance.now();
console.log('Client-side hydration started');

// Get container element
const container = document.getElementById('root');

// Handle the case where the 'root' element doesn't exist
if (!container) {
  throw new Error('Root element not found. Cannot mount app.');
}

// Create a new QueryClient with optimized settings
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

// Using React.lazy instead of direct variable assignment for ReactQueryDevtools
let ReactQueryDevtools = null;

// Dynamically import ReactQueryDevtools only in development
if (import.meta.env.DEV) {
  // Use dynamic import with proper type handling
  import('@tanstack/react-query-devtools')
    .then(module => {
      ReactQueryDevtools = module.ReactQueryDevtools;
      // Force a re-render to display devtools after they've been loaded
      if (container) {
        renderApp();
      }
    })
    .catch(err => {
      console.error('Failed to load React Query Devtools:', err);
    });
}

// Hydrate query state from server if available
if (window.__REACT_QUERY_STATE__) {
  // Use a modern async pattern that works with ESM
  (async () => {
    try {
      const { hydrate } = await import('@tanstack/react-query');
      hydrate(queryClient, window.__REACT_QUERY_STATE__);
      console.log('React Query state hydrated successfully');
    } catch (error) {
      console.error('Error hydrating React Query state:', error);
    }
  })();
}

// Determine initial language from URL
const getInitialLanguage = () => {
  const path = window.location.pathname;
  if (path.startsWith('/ru/') || path === '/ru') return 'ru';
  if (path.startsWith('/uk/') || path === '/uk') return 'uk';
  return 'en';
};

// Function to render the app - allows rerendering after devtools load
function renderApp() {
  const AppWithProviders = (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <LanguageProvider initialLanguage={getInitialLanguage()}>
            <HelmetProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </HelmetProvider>
          </LanguageProvider>
        </ThemeProvider>
        {import.meta.env.DEV && ReactQueryDevtools && (
          <React.Suspense fallback={null}>
            {React.createElement(ReactQueryDevtools)}
          </React.Suspense>
        )}
      </QueryClientProvider>
    </React.StrictMode>
  );

  // Use startTransition to mark hydration as non-urgent
  // This improves initial page responsiveness
  startTransition(() => {
    // Always hydrate since we're using SSR
    hydrateRoot(container, AppWithProviders);
    console.log(`Client hydration complete in ${(performance.now() - startTime).toFixed(1)}ms`);
  });
}

// Initial render
renderApp();

// Remove loading indicator
const loadingIndicator = document.getElementById('loading-indicator');
if (loadingIndicator) {
  loadingIndicator.style.opacity = '0';
  setTimeout(() => {
    loadingIndicator.parentNode?.removeChild(loadingIndicator);
  }, 300);
}

// Add global type for React Query state
declare global {
  interface Window {
    __REACT_QUERY_STATE__?: any;
  }
}
