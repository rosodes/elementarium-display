
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
      // Explicitly disable browserslist for Babel and use direct configuration instead
      babel: {
        babelrc: false,
        configFile: false,
        presets: [
          ['@babel/preset-env', {
            // Specify targets explicitly instead of relying on browserslist
            targets: { 
              browsers: ['> 0.5%', 'last 2 versions', 'not dead', 'not IE 11'],
              node: 'current'
            },
            useBuiltIns: 'usage',
            corejs: '3.22'
          }]
        ]
      }
    }),
    legacy({
      // Use same explicit targets for legacy plugin
      targets: ['> 0.5%', 'last 2 versions', 'not dead', 'not IE 11'],
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
    },
  },
}))
