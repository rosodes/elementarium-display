
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import fs from 'fs';
import path from 'path';

/**
 * Определяет язык из URL для предварительного рендеринга
 */
function getLanguageFromUrl(url: string): string {
  const parts = url.split('/').filter(Boolean);
  
  if (parts.length > 0) {
    const possibleLang = parts[0];
    // Проверяем, является ли первый сегмент кодом языка
    if (['en', 'ru', 'uk'].includes(possibleLang)) {
      return possibleLang;
    }
  }
  
  return 'en'; // По умолчанию английский
}

/**
 * Функция для серверного рендеринга приложения с указанным URL
 * @param url URL для рендеринга
 * @returns Объект с HTML и заголовками
 */
export async function renderToString(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const queryClient = new QueryClient();
  const language = getLanguageFromUrl(url);
  
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <LanguageProvider initialLanguage={language}>
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
  
  return {
    html,
    helmet: helmetContext
  };
}

/**
 * Предварительный рендеринг основных маршрутов
 */
export async function prerenderRoutes(outputDir: string) {
  const routes = [
    '/',            // Главная страница на английском
    '/ru',          // Главная страница на русском
    '/uk',          // Главная страница на украинском
    '/element/1',   // Страница водорода на английском
    '/ru/element/1' // Страница водорода на русском
  ];
  
  try {
    for (const route of routes) {
      const result = await renderToString(route);
      const { html } = result;
      const helmetData = result.helmet?.helmet;
      
      // Чтение шаблона
      const templatePath = path.resolve(outputDir, 'index.html');
      let template = '';
      
      try {
        template = fs.readFileSync(templatePath, 'utf-8');
      } catch (err) {
        console.error(`Failed to read template: ${err}`);
        continue;
      }
      
      // Extract head content from helmet
      const head = helmetData ? 
        `${helmetData.title?.toString() || ''}
        ${helmetData.meta?.toString() || ''}
        ${helmetData.link?.toString() || ''}
        ${helmetData.script?.toString() || ''}` : '';
      
      // Замена маркеров в шаблоне
      const renderedHtml = template
        .replace('<!--app-html-->', html)
        .replace('<!--app-head-->', head);
      
      // Определяем путь для сохранения
      let outputPath = route;
      if (outputPath === '/') {
        outputPath = '/index';
      } else if (outputPath.endsWith('/')) {
        outputPath = outputPath.slice(0, -1);
      }
      outputPath = `${outputDir}${outputPath}.html`;
      
      // Создаем подкаталоги при необходимости
      const outputDirectory = path.dirname(outputPath);
      if (!fs.existsSync(outputDirectory)) {
        fs.mkdirSync(outputDirectory, { recursive: true });
      }
      
      // Записываем файл
      fs.writeFileSync(outputPath, renderedHtml);
      console.log(`Prerendered: ${route} -> ${outputPath}`);
    }
  } catch (err) {
    console.error(`Error during prerendering: ${err}`);
  }
}

// Экспортируем функцию для использования в скриптах сборки
export default renderToString;
