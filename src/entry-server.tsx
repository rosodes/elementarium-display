
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

export function render(url: string, lang?: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const queryClient = new QueryClient();
  const initialLanguage = lang || getLanguageFromUrl(url);
  
  const appHtml = renderToString(
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
  );
  
  return { appHtml, helmetContext };
}

/**
 * Extracts language code from URL
 */
function getLanguageFromUrl(url: string): string {
  const parts = url.split('/').filter(Boolean);
  
  if (parts.length > 0) {
    const possibleLang = parts[0];
    if (['en', 'ru', 'uk'].includes(possibleLang)) {
      return possibleLang;
    }
  }
  
  return 'en'; // Default to English
}
