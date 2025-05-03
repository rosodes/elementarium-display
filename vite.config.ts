
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { Plugin } from 'vite';

// Плагин для предварительного рендеринга основных маршрутов
const prerenderPlugin = (): Plugin => {
  return {
    name: 'vite-plugin-prerender',
    apply: 'build',
    async closeBundle() {
      console.log('Prerendering routes for SEO...');
      // Логика предварительного рендеринга может быть добавлена здесь
      // в полноценной реализации
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
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && prerenderPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Добавляем конфигурацию для SSR
  build: {
    ssrManifest: true, // Генерируем манифест для SSR
    manifest: true, // Генерируем манифест ассетов
  },
}));
