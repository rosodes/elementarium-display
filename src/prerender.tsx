
import React from 'react';
import type { Writable } from 'stream';
import { render } from './entry-server';

// Динамический импорт Node.js модулей только в среде Node
let fs: any;
let path: any;
let fileURLToPath: any;

// Условный импорт Node.js модулей
if (typeof process !== 'undefined' && process.versions && process.versions.node) {
  // Использование динамических импортов с top-level await
  const promises = Promise.all([
    import('fs').then(module => { fs = module; }),
    import('path').then(module => { path = module; }),
    import('url').then(module => { fileURLToPath = module.fileURLToPath; })
  ]);
}

export async function prerenderRoutes(outDir: string): Promise<void> {
  // Выполняется только в среде Node.js
  if (typeof process === 'undefined' || !process.versions || !process.versions.node) {
    console.warn('Prerendering is only available in Node.js environment');
    return;
  }

  // Если модули не загружены, загрузим их
  if (!fs || !path || !fileURLToPath) {
    const [fsModule, pathModule, urlModule] = await Promise.all([
      import('fs'),
      import('path'),
      import('url').then(module => module.fileURLToPath)
    ]);
    fs = fsModule;
    path = pathModule;
    fileURLToPath = urlModule;
  }

  // Получаем dirname корректно в ESM
  const __dirname = path ? path.dirname(fileURLToPath(import.meta.url)) : '';
  
  const routes = ['/', '/en', '/ru', '/uk'];
  
  // Pre-render страницы элементов для некоторых ключевых элементов
  const keyElementIds = ['1', '6', '8', '26', '79', '92']; // H, C, O, Fe, Au, U
  const languages = ['en', 'ru', 'uk'];
  
  // Добавление путей к элементам
  languages.forEach(lang => {
    keyElementIds.forEach(elementId => {
      routes.push(`/${lang}/element/${elementId}`);
      routes.push(`/element/${elementId}`);
    });
  });

  console.log(`Pre-rendering ${routes.length} routes...`);
  
  try {
    for (const url of routes) {
      // Определяем язык из URL
      let lang = 'en'; // Язык по умолчанию
      if (url.startsWith('/ru/') || url === '/ru') lang = 'ru';
      if (url.startsWith('/uk/') || url === '/uk') lang = 'uk';
      
      // Рендерим приложение для этого маршрута
      console.log(`Pre-rendering: ${url} (${lang})`);
      
      const { stream, helmetContext, dehydratedState } = render(url, lang, {
        onAllReady: () => {
          console.log(`Finished rendering ${url}`);
        }
      });
      
      // Создаем содержимое HTML-файла
      let html = '<!DOCTYPE html>\n<html lang="' + lang + '">';
      
      // Добавляем содержимое head из helmet
      const { helmet } = helmetContext as any;
      if (helmet) {
        html += helmet.title.toString();
        html += helmet.meta.toString();
        html += helmet.link.toString();
        html += helmet.script.toString();
      } else {
        html += '<head>';
        html += '<meta charset="UTF-8">';
        html += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
        html += '<title>Periodic Table</title>';
        html += '</head>';
      }
      
      // Начинаем body
      html += '<body>';
      
      // Добавляем индикатор загрузки
      html += '<div id="loading-indicator" style="position:fixed; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(255,255,255,0.8); z-index:9999; transition:opacity 0.3s ease-out;">';
      html += '<div class="spinner" style="width:40px; height:40px; border:4px solid rgba(0,0,0,0.1); border-left-color:#3b82f6; border-radius:50%; animation:spin 1s linear infinite;"></div>';
      html += '</div>';
      html += '<style>@keyframes spin{to{transform:rotate(360deg)}}</style>';
      
      // Добавляем контейнер приложения
      html += '<div id="root">';
      
      // Обработка потока контента кроссплатформенно
      let content = '';
      if (stream) {
        try {
          // Обработка Node.js потоков
          if (typeof stream.pipe === 'function') {
            const chunks: Buffer[] = [];
            await new Promise<void>((resolve, reject) => {
              // Создаем упрощенный writable для работы с pipe
              const writable = {
                write(chunk: any, encoding: string, callback: () => void) {
                  chunks.push(Buffer.from(chunk, encoding as BufferEncoding));
                  callback();
                },
                final(callback: () => void) {
                  content = Buffer.concat(chunks).toString();
                  resolve();
                  callback();
                }
              } as unknown as Writable;
              
              stream.pipe(writable);
            });
          } 
          // Обработка потоков с асинхронным итератором
          else if (typeof stream === 'object' && stream !== null && Symbol.asyncIterator in stream) {
            const chunks: Buffer[] = [];
            const asyncStream = stream as unknown as AsyncIterable<any>;
            
            for await (const chunk of asyncStream) {
              chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
            }
            
            content = Buffer.concat(chunks).toString();
          }
        } catch (error) {
          console.error('Error processing stream:', error);
        }
      }
      
      // Добавляем отрендеренный контент приложения
      html += content;
      html += '</div>';
      
      // Добавляем дегидрированное состояние для React Query
      if (dehydratedState) {
        html += `<script>window.__REACT_QUERY_STATE__ = ${JSON.stringify(dehydratedState)}</script>`;
      }
      
      // Закрываем body и html
      html += '<script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>';
      html += '<script type="module" src="/src/entry-client.tsx"></script>';
      html += '</body></html>';
      
      // Создаем выходной каталог, если он не существует
      const fileUrl = url === '/' ? '/index.html' : `${url.endsWith('/') ? url + 'index.html' : url + '.html'}`;
      const filePath = path.join(outDir, fileUrl);
      await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
      
      // Записываем файл
      await fs.promises.writeFile(filePath, html);
      console.log(`Pre-rendered: ${filePath}`);
    }
    
    console.log('Pre-rendering complete!');
  } catch (error) {
    console.error('Error during pre-rendering:', error);
    throw error;
  }
}

export default prerenderRoutes;
