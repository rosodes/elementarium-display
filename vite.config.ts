
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
      // Complete bypass of browserslist for Babel
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
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
      supported: { 
        bigint: true 
      },
    }
  },
}))
