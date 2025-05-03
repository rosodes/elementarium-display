import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './styles/periodicTable.css';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

const container = document.getElementById('root');

// Handle the case where the 'root' element doesn't exist
if (!container) {
  throw new Error('Root element not found. Cannot mount app.');
}

// Create a new QueryClient for each request
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

// Determine initial language from URL
const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname.split('/').filter(Boolean);
    if (path.length > 0 && ['en', 'ru', 'uk'].includes(path[0])) {
      return path[0];
    }
  }
  return undefined; // Use default from LanguageProvider
};

const AppWithProviders = (
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
);

// Determine if the app should hydrate existing HTML or create a new root
const hasPreRenderedContent = container.innerHTML && 
                              container.innerHTML.trim() !== '' &&
                              !container.innerHTML.includes('<!--app-html-->');

if (hasPreRenderedContent) {
  // If there's pre-rendered content, hydrate it
  hydrateRoot(container, AppWithProviders);
  console.log('Client hydration complete');
} else {
  // Otherwise, create a new root
  createRoot(container).render(AppWithProviders);
  console.log('Client render complete');
}
