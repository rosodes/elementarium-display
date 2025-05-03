
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
      const outputDir = path.resolve(__dirname, 'dist/client');
      
      try {
        // Use path.join to import the prerender file
        const prerender = await import(path.join(process.cwd(), 'src/prerender.js'));
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
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // SSR specific configuration
  build: {
    ssrManifest: true,
    manifest: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // No UI chunk reference as it was causing the build error
        }
      }
    },
    // Configure for SSR build
    outDir: command === 'build' && process.env.SSR === 'true' ? 'dist/server' : 'dist/client',
    ssr: command === 'build' && process.env.SSR === 'true' ? 'src/entry-server.tsx' : undefined,
  },
}));
