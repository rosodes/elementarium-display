
import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '../context/ThemeContext';
import { LanguageProvider } from '../context/LanguageContext';
import App from '../App';

// Создаем App со всеми провайдерами для улучшения производительности
export const createAppWithProviders = (
  queryClient: QueryClient, 
  initialLanguage: string
) => {
  const helmetContext = {};
  
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <LanguageProvider initialLanguage={initialLanguage}>
            <HelmetProvider context={helmetContext}>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </HelmetProvider>
          </LanguageProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

// Оптимизированная функция рендеринга
export function renderApp(
  queryClient: QueryClient,
  initialLanguage: string,
  startTime?: number
) {
  const container = document.getElementById('root');
  if (!container) {
    console.error('Root element not found');
    return;
  }
  
  const AppWithProviders = createAppWithProviders(queryClient, initialLanguage);

  // Улучшенное определение SSR с более надежными проверками
  const hasSSRContent = 
    container.hasAttribute('data-ssr') && 
    container.firstElementChild !== null &&
    container.innerHTML.trim().length > 20;
  
  try {
    if (hasSSRContent) {
      // Используем hydrateRoot для SSR
      hydrateRoot(container, AppWithProviders);
      if (startTime) console.log(`Hydration complete in ${(performance.now() - startTime).toFixed(1)}ms`);
    } else {
      // Клиентский рендеринг с очисткой контейнера
      container.innerHTML = '';
      createRoot(container).render(AppWithProviders);
      if (startTime) console.log(`Client render complete in ${(performance.now() - startTime).toFixed(1)}ms`);
    }
  } catch (error) {
    console.error('Error rendering application:', error);
    // Просто показываем ошибку без полного перерендера
    container.innerHTML = `
      <div style="padding: 20px; margin: 20px; border: 1px solid #f56565; background: #fff5f5; color: #c53030;">
        <h2>Application Error</h2>
        <p>Failed to render application.</p>
        <button onclick="window.location.reload()" 
          style="margin-top: 10px; padding: 8px 16px; background: #c53030; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Refresh Page
        </button>
      </div>
    `;
  }
}
