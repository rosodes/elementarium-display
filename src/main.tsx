
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/periodicTable.css'
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error('Failed to find the root element');

// Определяем, был ли контент предварительно отрендерен
const hasPreRenderedContent = rootElement.hasChildNodes();

// Создаем приложение с полным контекстом
const AppWithProviders = (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <HelmetProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

if (hasPreRenderedContent) {
  // Если есть предварительно отрендеренный контент, используем гидратацию
  hydrateRoot(rootElement, AppWithProviders);
} else {
  // Если нет предварительно отрендеренного контента, используем обычный рендеринг
  createRoot(rootElement).render(AppWithProviders);
}

// Добавляем маркер для отладки гидратации
console.log('Hydration mode:', hasPreRenderedContent ? 'SSR hydration' : 'CSR render');
