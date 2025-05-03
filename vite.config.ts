
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { Plugin } from 'vite';
import { prerenderRoutes } from './src/prerender';

// Плагин для предварительного рендеринга основных маршрутов
const prerenderPlugin = (): Plugin => {
  return {
    name: 'vite-plugin-prerender',
    apply: 'build',
    async closeBundle() {
      console.log('Prerendering routes for SEO...');
      const outputDir = path.resolve(__dirname, 'dist');
      
      try {
        await prerenderRoutes(outputDir);
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
      // Улучшаем поддержку SSR
      fastRefresh: mode !== 'production',
    }),
    mode === 'development' && componentTagger(),
    mode === 'production' && prerenderPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Полная конфигурация для SSR
  build: {
    ssrManifest: true, // Генерируем манифест для SSR
    manifest: true, // Генерируем манифест ассетов
    rollupOptions: {
      output: {
        manualChunks: {
          // Разделяем код на чанки для оптимизации
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@/components/ui'],
        }
      }
    }
  },
}));
