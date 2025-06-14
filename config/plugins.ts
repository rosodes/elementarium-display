
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import legacy from '@vitejs/plugin-legacy';
import { componentTagger } from 'lovable-tagger';

export function createPlugins(mode: string) {
  const isProd = mode === 'production';
  
  return [
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
        ] : [],
        plugins: isProd ? [
          // Remove development-only code
          ['babel-plugin-transform-remove-console', { exclude: ['error', 'warn'] }]
        ] : []
      }
    }),
    
    // Only include componentTagger in development
    mode === 'development' && componentTagger(),
    
    // Legacy support for production with optimized targets
    isProd && legacy({
      targets: [
        'Chrome >= 87',
        'Firefox >= 78', 
        'Safari >= 14',
        'Edge >= 88'
      ],
      polyfills: false,
      modernPolyfills: false,
      renderLegacyChunks: false // Skip legacy chunks if modern browsers support is sufficient
    }),
    
    // Enhanced compression for production
    isProd && compression({ 
      algorithm: 'brotliCompress', 
      ext: '.br',
      threshold: 1024,
      compressionOptions: {
        level: 11
      }
    }),
    isProd && compression({ 
      algorithm: 'gzip', 
      ext: '.gz',
      threshold: 1024,
      compressionOptions: {
        level: 9
      }
    }),
    
    // Bundle analyzer (optional, can be enabled via environment variable)
    process.env.ANALYZE && isProd && (await import('rollup-plugin-visualizer')).visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  ].filter(Boolean);
}
