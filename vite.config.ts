
import { defineConfig } from 'vite';
import path from 'path';
import type { UserConfig } from 'vite';
import { createPlugins } from './config/plugins';
import { createBuildConfig } from './config/build';
import { createServerConfig } from './config/server';
import { createOptimizationConfig } from './config/optimization';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  
  const config: UserConfig = {
    plugins: createPlugins(mode),
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      mainFields: ['browser', 'module', 'main'],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    
    server: createServerConfig(),
    build: createBuildConfig(isProd),
    ...createOptimizationConfig(mode)
  };
  
  return config;
});
