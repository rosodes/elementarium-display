
import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/periodicTable.css'
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider, hydrate } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

// Create QueryClient for data handling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

// Hydrate query state from server if available
if (window.__REACT_QUERY_STATE__) {
  hydrate(queryClient, window.__REACT_QUERY_STATE__);
}

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error('Failed to find the root element');

// Determine initial language from URL for SSR
const getInitialLanguage = () => {
  const path = window.location.pathname;
  if (path.startsWith('/ru/') || path === '/ru') return 'ru';
  if (path.startsWith('/uk/') || path === '/uk') return 'uk';
  return 'en';
};

// Create app with full context
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
    </QueryClientProvider>
  </React.StrictMode>
);

// Always use hydration since we're using SSR
hydrateRoot(rootElement, AppWithProviders);
console.log('Hydration complete');

// Add global type for React Query state
declare global {
  interface Window {
    __REACT_QUERY_STATE__?: any;
  }
}
