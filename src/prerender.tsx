
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

/**
 * Функция для серверного рендеринга приложения с указанным URL
 * @param url URL для рендеринга
 * @returns Объект с HTML и заголовками
 */
export async function renderToString(url: string) {
  const helmetContext = {};
  
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
  
  return {
    html,
    helmet: helmetContext
  };
}

// Экспортируем функцию для использования в скриптах сборки
export default renderToString;
