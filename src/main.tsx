
import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/periodicTable.css'
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

// Инициализация QueryClient для работы с данными
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 минут
    },
  },
});

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error('Failed to find the root element');

// Определение начального языка из URL для SSR
const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname.split('/').filter(Boolean);
    if (path.length > 0 && ['en', 'ru', 'uk'].includes(path[0])) {
      return path[0];
    }
  }
  return undefined; // По умолчанию используем логику из LanguageProvider
};

// Создаем приложение с полным контекстом
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

// Определяем, был ли контент предварительно отрендерен
const hasPreRenderedContent = rootElement.innerHTML && 
                             rootElement.innerHTML.trim() !== '' &&
                             !rootElement.innerHTML.includes('<!--app-html-->');

if (hasPreRenderedContent) {
  // Если есть предварительно отрендеренный контент, используем гидратацию
  hydrateRoot(rootElement, AppWithProviders);
  console.log('Hydration mode: SSR hydration');
} else {
  // Если нет предварительно отрендеренного контента, используем обычный рендеринг
  createRoot(rootElement).render(AppWithProviders);
  console.log('Hydration mode: CSR render');
}
