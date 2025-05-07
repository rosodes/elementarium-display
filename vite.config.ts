
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import compression from 'vite-plugin-compression';
import legacy from '@vitejs/plugin-legacy';
import { componentTagger } from 'lovable-tagger';
import type { UserConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config: UserConfig = {
    plugins: [
      react({
        // Use standard React configuration
        jsxRuntime: 'automatic',
        babel: {
          babelrc: false,
          configFile: false,
        }
      }),
      // Add componentTagger plugin for development mode
      mode === 'development' && componentTagger(),
      legacy({
        targets: ['chrome >= 60', 'firefox >= 60', 'safari >= 12', 'edge >= 79'],
        modernPolyfills: true
      }),
      compression({
        algorithm: 'brotliCompress',
        ext: '.br',
      }),
      compression({
        algorithm: 'gzip',
        ext: '.gz',
      }),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        // Provide empty modules for Node.js built-ins to prevent browser errors
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
      // Ensure proper resolution of ESM modules
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
      sourcemap: true,
      minify: 'terser',
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
        },
        output: {
          format: 'es', // Ensure ESM output
          entryFileNames: '[name].[hash].js',
          chunkFileNames: 'chunks/[name].[hash].js',
        },
      },
    },
    optimizeDeps: {
      // Force-include these dependencies to ensure proper pre-bundling
      include: [
        '@tanstack/react-query',
        'react',
        'react-dom',
        'react-helmet-async',
        'react-router-dom',
        '@radix-ui/react-toast',
        'next-themes'
      ],
      // Explicitly exclude Node.js built-in modules
      exclude: ['fs', 'path'],
      esbuildOptions: {
        target: 'es2020',
        supported: { 
          bigint: true 
        },
        // Force tree-shaking
        treeShaking: true,
        // Define global variables for browser environment
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
      // Replace process.env with direct values
      'process.env': JSON.stringify({
        NODE_ENV: mode
      }),
      // Make sure global objects are properly defined for ESM
      'global': 'globalThis',
    },
    // Ensure we're using ESM
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
      // External packages that shouldn't be bundled for SSR
      external: ['react-helmet-async'],
      // Force bundle these packages for SSR to avoid CommonJS issues
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
