
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { Plugin } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import compression from 'vite-plugin-compression';

// Define the type for prerenderRoutes function to avoid import issues
interface PrerenderOptions {
  outputDir: string;
}

// Import the prerenderRoutes function dynamically at runtime
const prerenderPlugin = (): Plugin => {
  return {
    name: 'vite-plugin-prerender',
    apply: 'build',
    async closeBundle() {
      console.log('Prerendering routes for SEO...');
      const outputDir = path.resolve(__dirname, 'dist/client');
      
      try {
        // Use dynamic import with explicit file path
        const prerender = await import('./src/prerender.js');
        await prerender.prerenderRoutes(outputDir);
        console.log('Prerendering complete');
      } catch (err) {
        console.error('Error during prerendering:', err);
      }
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && prerenderPlugin(),
    // Add legacy browser support
    mode === 'production' && legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    // Add compression for static assets
    mode === 'production' && compression({
      algorithm: 'brotli',
      ext: '.br',
    }),
    mode === 'production' && compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Add alias for problematic packages
      'react-fast-compare': path.resolve(__dirname, 'node_modules/react-fast-compare/index.js'),
      'invariant': path.resolve(__dirname, 'node_modules/invariant/invariant.js'),
    },
  },
  // Performance optimizations
  build: {
    ssrManifest: true,
    manifest: true,
    minify: 'terser',
    target: 'es2018',
    cssCodeSplit: true,
    sourcemap: mode !== 'production',
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096, // 4KB
    reportCompressedSize: false, // Speed up build
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Default code splitting strategy
          if (id.includes('node_modules')) {
            // Split vendor chunks
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            if (id.includes('@radix-ui')) {
              return 'vendor-radix';
            }
            if (id.includes('recharts') || id.includes('d3')) {
              return 'vendor-charts';
            }
            return 'vendor'; // All other deps
          }
          // App code splitting
          if (id.includes('/components/element-details/')) {
            return 'element-details';
          }
          if (id.includes('/components/periodic-table/')) {
            return 'periodic-table';
          }
        }
      }
    },
    // Configure for SSR build
    outDir: command === 'build' && process.env.SSR === 'true' ? 'dist/server' : 'dist/client',
    ssr: command === 'build' && process.env.SSR === 'true' ? 'src/entry-server.tsx' : undefined,
  },
  // CSS optimization
  css: {
    devSourcemap: mode !== 'production',
    modules: {
      generateScopedName: mode === 'production' ? '[hash:base64:5]' : '[local]_[hash:base64:5]',
    }
  },
  // Optimize dependencies pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['react-helmet-async'],
    esbuildOptions: {
      // Fix for CJS/ESM interop issues
      preserveSymlinks: true,
    }
  },
}));
