
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
        ] : []
      }
    }),
    mode === 'development' && componentTagger(),
    isProd && legacy({
      targets: [
        'last 2 Chrome versions',
        'last 2 Firefox versions', 
        'last 2 Safari versions',
        'last 2 Edge versions'
      ],
      polyfills: false,
      modernPolyfills: false
    }),
    isProd && compression({ algorithm: 'brotliCompress', ext: '.br' }),
    isProd && compression({ algorithm: 'gzip', ext: '.gz' }),
  ].filter(Boolean);
}
