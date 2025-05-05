
import React, { startTransition, Suspense, lazy, useState, useEffect } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './styles/periodicTable.css';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

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

// ReactQueryDevTools using dynamic import
function ReactQueryDevTools() {
  const [DevToolsComponent, setDevToolsComponent] = useState<React.ComponentType<any> | null>(null);
  
  useEffect(() => {
    // Only load in development and in browser environment
    if (import.meta.env.DEV && typeof window !== 'undefined') {
      console.log('Loading React Query DevTools...');
      
      // Import using dynamic ESM import
      import('@tanstack/react-query-devtools')
        .then(module => {
          console.log('DevTools module loaded successfully:', module);
          
          // Check if the module has the expected export
          if (module && module.ReactQueryDevtools) {
            console.log('Found ReactQueryDevtools component, setting it');
            setDevToolsComponent(() => module.ReactQueryDevtools);
          } else {
            console.error('ReactQueryDevtools export not found. Available exports:', Object.keys(module));
          }
        })
        .catch(err => {
          console.error('Failed to load DevTools:', err);
        });
    }
  }, []);
  
  // Only render if the component is available
  if (!DevToolsComponent) return null;
  
  try {
    return <DevToolsComponent initialIsOpen={false} />;
  } catch (err) {
    console.error('Error rendering DevTools:', err);
    return null;
  }
}

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

  try {
    // Safe hydration of React Query state
    if (typeof window !== 'undefined' && window.__REACT_QUERY_STATE__) {
      const queryState = window.__REACT_QUERY_STATE__;
      if (queryState?.queries?.length) {
        console.log(`Hydrating ${queryState.queries.length} queries...`);
        queryState.queries.forEach(query => {
          if (query.queryKey && query.state?.data) {
            queryClient.setQueryData(query.queryKey, query.state.data);
          }
        });
        console.log('Query hydration complete');
      }
    }
  } catch (error) {
    console.error('Hydration error:', error);
  }

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
        <ReactQueryDevTools />
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
    console.error('Fatal rendering error:', error);
    createRoot(container).render(<ErrorFallback />);
  }
}

// Initialize the app
renderApp();

// Remove loading indicator
const loadingIndicator = document.getElementById('loading-indicator');
if (loadingIndicator) {
  loadingIndicator.style.opacity = '0';
  setTimeout(() => {
    loadingIndicator.parentNode?.removeChild(loadingIndicator);
  }, 300);
}

// TypeScript declaration for React Query state
declare global {
  interface Window {
    __REACT_QUERY_STATE__?: {
      queries: Array<{
        queryKey: unknown[];
        state: {
          data?: unknown;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      }>;
    };
  }
}
