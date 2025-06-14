
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import compression from 'vite-plugin-compression';
import legacy from '@vitejs/plugin-legacy';
import { componentTagger } from 'lovable-tagger';
import type { UserConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  
  const config: UserConfig = {
    plugins: [
      react({
        jsxRuntime: 'automatic',
        babel: {
          babelrc: false,
          configFile: false,
          presets: isProd ? [
            [
              '@babel/preset-env',
              {
                targets: { esmodules: true },
                useBuiltIns: false,
                bugfixes: true,
                modules: false
              }
            ]
          ] : []
        }
      }),
      mode === 'development' && componentTagger(),
      isProd && legacy({
        targets: [
          'last 2 Chrome versions',
          'last 2 Firefox versions', 
          'last 2 Safari versions',
          'last 2 Edge versions'
        ],
        polyfills: false,
        modernPolyfills: false
      }),
      isProd && compression({ algorithm: 'brotliCompress', ext: '.br' }),
      isProd && compression({ algorithm: 'gzip', ext: '.gz' }),
    ].filter(Boolean),
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      mainFields: ['browser', 'module', 'main'],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    
    server: {
      host: "::",
      port: 8080
    },
    
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: !isProd,
      minify: 'terser',
      terserOptions: {
        ecma: 2020,
        compress: {
          drop_console: isProd,
          dead_code: true,
          passes: 2,
          pure_funcs: isProd ? ['console.log', 'console.info'] : []
        }
      },
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
        },
        output: {
          format: 'es',
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]',
          manualChunks: {
            'vendor-react': ['react', 'react-dom'],
            'vendor-router': ['react-router-dom'],
            'vendor-query': ['@tanstack/react-query'],
            'vendor-ui': ['@radix-ui/react-toast', '@radix-ui/react-tooltip'],
            'vendor-utils': ['lucide-react', 'clsx', 'class-variance-authority']
          }
        },
      },
      cssCodeSplit: true,
      assetsInlineLimit: 4096,
      target: 'es2020'
    },
    
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        '@tanstack/react-query',
        '@radix-ui/react-toast',
        '@radix-ui/react-tooltip'
      ],
      esbuildOptions: {
        target: 'es2020',
        treeShaking: true,
        define: {
          'global': 'globalThis'
        }
      },
    },
    
    define: {
      'import.meta.env.DEV': mode === 'development',
      'import.meta.env.PROD': mode === 'production',
      'global': 'globalThis',
    },
    
    esbuild: {
      target: 'es2020',
      treeShaking: true,
      legalComments: 'none'
    }
  };
  
  return config;
});
