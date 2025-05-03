
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { Plugin } from 'vite';

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
      const outputDir = path.resolve(__dirname, 'dist');
      
      try {
        // Fix the import to use .js extension which is what ESM expects after bundling
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
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      jsxImportSource: '@swc/react',
    }),
    mode === 'development' && componentTagger(),
    mode === 'production' && prerenderPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Full configuration for SSR
  build: {
    ssrManifest: true, // Generate manifest for SSR
    manifest: true, // Generate assets manifest
    rollupOptions: {
      output: {
        manualChunks: {
          // Split code into chunks for optimization
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['./src/components/ui'],
        }
      }
    }
  },
}));
