
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider, dehydrate } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

// Enhanced getLanguageFromUrl with fallback and caching
function getLanguageFromUrl(url: string): string {
  // Use a faster approach with less string operations
  if (url.startsWith('/ru/')) return 'ru';
  if (url.startsWith('/uk/')) return 'uk';
  if (url.startsWith('/ru')) return 'ru';
  if (url.startsWith('/uk')) return 'uk';
  
  return 'en'; // Default to English
}

export function render(url: string, lang?: string, options: { onShellReady?: () => void, onAllReady?: () => void } = {}) {
  // Create helmet context to collect meta tags
  const helmetContext = {};
  
  // Create a new QueryClient for data fetching
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 1000 * 60 * 5, // 5 minutes
      },
    },
  });
  
  // Determine language from URL or use provided lang
  const initialLanguage = lang || getLanguageFromUrl(url);
  
  // Create the React element to render
  const jsx = (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <LanguageProvider initialLanguage={initialLanguage}>
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

  // Use streaming SSR for better performance with shorter timeout
  const stream = renderToPipeableStream(jsx, {
    onShellReady() {
      // Shell content is ready to be flushed to the client
      if (options.onShellReady) options.onShellReady();
    },
    onAllReady() {
      // All content is ready, including suspended data
      if (options.onAllReady) options.onAllReady();
    },
    onError(error) {
      console.error('Error during streaming SSR:', error);
    },
  });
  
  return {
    stream,
    helmetContext,
    queryClient,
    dehydratedState: dehydrate(queryClient)
  };
}
