
import serveStatic from 'serve-static';
import path from 'path';
import { getMimeType } from './mimeTypes.js';
import fs from 'fs';

/**
 * Configure and return static file middleware for production
 */
export function setupStaticFileServing(dirname) {
  const staticMiddleware = [
    // Regular static files with optimized caching
    serveStatic(path.resolve(dirname, 'dist/client'), {
      index: false,
      immutable: true,
      maxAge: '30d', // Cache static assets for 30 days
      setHeaders: (res, filePath) => {
        // Content-Type setting for proper MIME types
        const contentType = getMimeType(filePath);
        if (contentType) {
          res.setHeader('Content-Type', contentType);
        }
        
        // Для хешированных ассетов устанавливаем долгий кеш
        if (filePath.match(/\.[a-f0-9]{8,}\.(js|css|woff2|jpg|png|svg|webp|avif)$/i)) {
          // JS, CSS и статичные ассеты с хешем в имени файла кешируем надолго
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
        else if (filePath.match(/\.(jpg|jpeg|png|gif|webp|avif|svg|ico)$/i)) {
          // Изображения с умеренным кешем
          res.setHeader('Cache-Control', 'public, max-age=604800, stale-while-revalidate=86400');
        }
        else if (filePath.match(/\.(js|css)$/i)) {
          // JavaScript и CSS файлы
          res.setHeader('Cache-Control', 'public, max-age=86400');
        }
        else if (filePath.match(/\.(woff2|ttf|otf|eot)$/i)) {
          // Шрифты с долгим кешем
          res.setHeader('Cache-Control', 'public, max-age=2592000, immutable');
        }
        else {
          // Другие файлы - короткий кеш
          res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
        }
        
        // Add Vary header for proper cache behavior
        if (filePath.endsWith('.css') || filePath.endsWith('.js') || filePath.endsWith('.html')) {
          res.setHeader('Vary', 'Accept-Encoding');
        }
        
        // Устанавливаем ETag для всех ответов
        if (!res.getHeader('ETag') && fs.existsSync(filePath)) {
          try {
            const stat = fs.statSync(filePath);
            const etag = `"${stat.size.toString(16)}-${stat.mtime.getTime().toString(16)}"`;
            res.setHeader('ETag', etag);
          } catch (err) {
            console.error('Error generating ETag:', err);
          }
        }
      }
    }),
    
    // Поддержка предварительно сжатых файлов с улучшенным обнаружением
    serveStatic(path.resolve(dirname, 'dist/client'), {
      index: false,
      setHeaders: (res, filePath) => {
        if (filePath.endsWith('.br')) {
          res.setHeader('Content-Encoding', 'br');
          res.setHeader('Content-Type', getMimeType(filePath.slice(0, -3)));
          res.setHeader('Vary', 'Accept-Encoding');
        } else if (filePath.endsWith('.gz')) {
          res.setHeader('Content-Encoding', 'gzip');
          res.setHeader('Content-Type', getMimeType(filePath.slice(0, -3)));
          res.setHeader('Vary', 'Accept-Encoding');
        }
      }
    })
  ];
  
  return staticMiddleware;
}
