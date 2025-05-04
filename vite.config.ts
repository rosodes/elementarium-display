
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'fs'
import path from 'path'
import compression from 'vite-plugin-compression'
import legacy from '@vitejs/plugin-legacy'
import { componentTagger } from "lovable-tagger"

// Read package.json to detect dependencies
const pkg = JSON.parse(readFileSync('./package.json', 'utf8'))

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      // Configure Babel to handle TypeScript properly
      babel: {
        babelrc: false,
        configFile: false,
        browserslistConfigFile: false,
        presets: [
          ['@babel/preset-env', {
            // Hard-code targets instead of using browserslist
            targets: { 
              chrome: "60",
              firefox: "60",
              safari: "12",
              edge: "79",
              node: "current"
            },
            useBuiltIns: 'usage',
            corejs: '3.22'
          }],
          ['@babel/preset-typescript', {
            // These settings help avoid TypeScript transformation issues
            isTSX: true,
            allowNamespaces: true,
            allExtensions: true,
            allowDeclareFields: true
          }]
        ]
      }
    }),
    legacy({
      // Hard-code targets here too for consistency
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
    // Add componentTagger plugin for development mode
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
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
        server: path.resolve(__dirname, 'src/entry-server.tsx'),
      },
      output: {
        format: 'es', // Ensure ESM output
        entryFileNames: '[name].[hash].js',
        chunkFileNames: 'chunks/[name].[hash].js',
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
      format: 'esm', // Explicitly set ESM format
      supported: { 
        bigint: true 
      },
    }
  },
  // Explicitly ensure that code is processed as ESM
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),
    '__IS_DEV__': mode === 'development',
  },
  // Ensure we're not transforming ESM to CommonJS
  esbuild: {
    format: 'esm',
    target: 'es2020',
    supported: {
      'dynamic-import': true,
      'import-meta': true,
    },
  }
}))
