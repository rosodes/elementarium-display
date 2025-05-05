
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

// Create a custom DevTools component that only loads in development
function ReactQueryDevTools() {
  // Define a better type for the DevTools component that includes the initialIsOpen prop
  type DevToolsComponentType = React.ComponentType<{
    initialIsOpen?: boolean;
    [key: string]: any;
  }>;
  
  const [DevToolsComponent, setDevToolsComponent] = useState<DevToolsComponentType | null>(null);
  
  useEffect(() => {
    // Only load in development and in browser environment
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV) {
      console.log('Loading React Query DevTools dynamically...');
      
      // Dynamic import using ESM syntax
      import('@tanstack/react-query-devtools')
        .then((module) => {
          console.log('DevTools loaded successfully');
          // Extract the component and set it in state
          const { ReactQueryDevtools } = module;
          setDevToolsComponent(() => ReactQueryDevtools);
        })
        .catch((error) => {
          console.error('Failed to load React Query DevTools:', error);
        });
    }
  }, []);
  
  // Render the component only if it's loaded
  return DevToolsComponent ? <DevToolsComponent initialIsOpen={false} /> : null;
}

// Error fallback component for catching hydration errors
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

// Determine initial language from URL
const getInitialLanguage = () => {
  const path = window.location.pathname;
  if (path.startsWith('/ru/') || path === '/ru') return 'ru';
  if (path.startsWith('/uk/') || path === '/uk') return 'uk';
  return 'en'; // Default to English
};

// Main rendering function
function renderApp() {
  // Find the container and handle missing root
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

  // Check for hydration data
  if (window.__REACT_QUERY_STATE__) {
    try {
      console.log('Hydrating React Query state...');
      
      // Properly hydrate the query client with state data
      const dehydratedState = window.__REACT_QUERY_STATE__;
      if (dehydratedState && Array.isArray(dehydratedState.queries)) {
        console.log(`Found ${dehydratedState.queries.length} queries to hydrate`);
        dehydratedState.queries.forEach((query) => {
          queryClient.setQueryData(query.queryKey, query.state.data);
        });
      }
      console.log('React Query state hydrated successfully');
    } catch (error) {
      console.error('Error hydrating React Query state:', error);
    }
  } else {
    console.log('No React Query state to hydrate');
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
        {/* Dev tools */}
        <ReactQueryDevTools />
      </QueryClientProvider>
    </React.StrictMode>
  );

  try {
    // Use startTransition to mark hydration as non-urgent
    startTransition(() => {
      // Try to hydrate, but fallback to normal render if SSR HTML is missing
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
    // Render error fallback if hydration fails completely
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
    __REACT_QUERY_STATE__?: any;
  }
}
