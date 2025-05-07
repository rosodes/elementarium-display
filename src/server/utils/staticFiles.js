
import serveStatic from 'serve-static';
import path from 'path';
import { getMimeType } from './mimeTypes.js';

/**
 * Configure and return static file middleware for production
 */
export function setupStaticFileServing(dirname) {
  const staticMiddleware = [
    // Regular static files with caching
    serveStatic(path.resolve(dirname, 'dist/client'), {
      index: false,
      immutable: true,
      maxAge: '30d', // Cache static assets for 30 days
      setHeaders: (res, filePath) => {
        // Для хешированных ассетов устанавливаем долгий кеш
        if (filePath.includes('/assets/') && 
            (filePath.match(/\.[a-f0-9]{8}\.(js|css|woff2|jpg|png|svg|webp)$/i))) {
          // JS, CSS и статичные ассеты с хешем в имени файла кешируем надолго
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
        else if (filePath.match(/\.(jpg|jpeg|png|gif|webp|avif|svg|ico)$/i)) {
          // Изображения
          res.setHeader('Cache-Control', 'public, max-age=604800, stale-while-revalidate=86400');
        }
        else if (filePath.match(/\.(js|css|woff2|ttf|otf)$/i)) {
          // Другие статичные ассеты
          res.setHeader('Cache-Control', 'public, max-age=86400');
        }
        else {
          // Другие файлы - короткий кеш
          res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
        }
        
        // Устанавливаем ETag для всех ответов
        if (!res.getHeader('ETag')) {
          const stat = fs.statSync(filePath);
          const etag = `"${stat.size.toString(16)}-${stat.mtime.getTime().toString(16)}"`;
          res.setHeader('ETag', etag);
        }
      }
    }),
    
    // Поддержка предварительно сжатых файлов
    serveStatic(path.resolve(dirname, 'dist/client'), {
      index: false,
      extensions: ['br', 'gz'],
      // Serve brotli and gzip compressed files when available
      setHeaders: (res, path) => {
        if (path.endsWith('.br')) {
          res.setHeader('Content-Encoding', 'br');
          res.setHeader('Content-Type', getMimeType(path.slice(0, -3)));
          res.setHeader('Vary', 'Accept-Encoding');
        } else if (path.endsWith('.gz')) {
          res.setHeader('Content-Encoding', 'gzip');
          res.setHeader('Content-Type', getMimeType(path.slice(0, -3)));
          res.setHeader('Vary', 'Accept-Encoding');
        }
      }
    })
  ];
  
  return staticMiddleware;
}
