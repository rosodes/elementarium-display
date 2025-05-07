
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import compression from 'vite-plugin-compression';
import legacy from '@vitejs/plugin-legacy';
import { componentTagger } from 'lovable-tagger';
import type { UserConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  
  const config: UserConfig = {
    plugins: [
      react({
        // Используем автоматический JSX runtime для оптимизации размера
        jsxRuntime: 'automatic',
        babel: {
          babelrc: false,
          configFile: false,
          // Отключаем лишние преобразования для современных браузеров
          presets: isProd ? [
            [
              '@babel/preset-env',
              {
                targets: {
                  // Используем только современные браузеры
                  esmodules: true
                },
                // Отключаем ненужные полифилы
                useBuiltIns: false,
                // Используем только минимальные преобразования
                bugfixes: true,
                // Не преобразовываем модули, Vite это сделает
                modules: false
              }
            ]
          ] : []
        }
      }),
      // Добавляем componentTagger только для разработки
      mode === 'development' && componentTagger(),
      
      // Для продакшена генерируем два варианта бандлов
      isProd && legacy({
        // Основной бандл только для современных браузеров
        targets: [
          'last 2 Chrome versions',
          'last 2 Firefox versions', 
          'last 2 Safari versions',
          'last 2 Edge versions'
        ],
        // Отключаем полифилы для современных браузеров
        polyfills: false,
        modernPolyfills: false
      }),
      
      // Оптимизируем размер с помощью сжатия
      isProd && compression({
        algorithm: 'brotliCompress',
        ext: '.br',
      }),
      isProd && compression({
        algorithm: 'gzip',
        ext: '.gz',
      }),
    ].filter(Boolean),
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        // Предоставляем пустые модули для встроенных модулей Node.js
        path: 'path-browserify',
        fs: 'browserify-zlib',
        crypto: 'crypto-browserify',
        stream: 'stream-browserify',
        buffer: 'buffer',
        util: 'util',
        process: 'process/browser',
        zlib: 'browserify-zlib',
        querystring: 'query-string',
      },
      // Обеспечиваем правильное разрешение модулей ESM
      mainFields: ['browser', 'module', 'jsnext:main', 'jsnext', 'main'],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    
    server: {
      host: "::",
      port: 8080
    },
    
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      // Генерируем sourcemap только в режиме разработки
      sourcemap: !isProd,
      minify: 'terser',
      terserOptions: {
        // Оптимизируем код для современных браузеров
        ecma: 2020,
        compress: {
          // Удаляем все console.log в продакшене
          drop_console: isProd,
          // Более агрессивное устранение мертвого кода
          dead_code: true,
          // Улучшенная оптимизация
          passes: 2
        }
      },
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
        },
        output: {
          format: 'es', // Используем ESM формат для современных браузеров
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/chunks/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]',
          // Оптимизируем чанки для повышения кэширования
          manualChunks(id) {
            if (id.includes('node_modules')) {
              // Разделяем vendor библиотеки
              if (id.includes('react') || id.includes('react-dom')) {
                return 'vendor-react';
              }
              if (id.includes('@tanstack')) {
                return 'vendor-tanstack';
              }
              return 'vendor';
            }
          }
        },
      },
      // Отключаем транспиляцию для CSS, используем современные возможности
      cssCodeSplit: true,
      // Размер гарантированно инлайненных ресурсов
      assetsInlineLimit: 4096,
    },
    
    optimizeDeps: {
      // Принудительное включение этих зависимостей для обеспечения надлежащего предварительного бандлинга
      include: [
        '@tanstack/react-query',
        'react',
        'react-dom',
        'react-helmet-async',
        'react-router-dom',
        '@radix-ui/react-toast',
        'next-themes'
      ],
      // Явно исключаем модули Node.js
      exclude: ['fs', 'path'],
      esbuildOptions: {
        target: 'es2020',
        supported: { 
          bigint: true 
        },
        // Принудительное применение treeShaking
        treeShaking: true,
        // Определяем глобальные переменные для среды браузера
        define: {
          'global': 'globalThis',
          'process.env.NODE_ENV': JSON.stringify(mode)
        }
      },
    },
    
    // Define environment variables
    define: {
      'import.meta.env.DEV': mode === 'development',
      'import.meta.env.PROD': mode === 'production',
      // Заменяем process.env прямыми значениями
      'process.env': JSON.stringify({
        NODE_ENV: mode
      }),
      // Убедимся, что глобальные объекты правильно определены для ESM
      'global': 'globalThis',
    },
    
    // Обеспечиваем использование ESM
    esbuild: {
      format: 'esm',
      target: 'es2020',
      supported: {
        'dynamic-import': true,
        'import-meta': true,
      },
    },
    
    // SSR specific options
    ssr: {
      // Внешние пакеты, которые не должны быть бандлины для SSR
      external: ['react-helmet-async'],
      // Принудительно бандлить эти пакеты для SSR
      noExternal: [
        '@tanstack/react-query',
        'react',
        'react-dom',
        '@radix-ui/**',
        'next-themes'
      ]
    }
  };
  
  return config;
});
