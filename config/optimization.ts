
export function createOptimizationConfig(mode: string) {
  const isProd = mode === 'production';
  
  return {
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        '@tanstack/react-query',
        '@radix-ui/react-toast',
        '@radix-ui/react-tooltip',
        'lucide-react',
        'clsx'
      ],
      exclude: [
        // Exclude large dependencies that should be lazy loaded
        'recharts'
      ],
      esbuildOptions: {
        target: 'es2020' as const,
        define: {
          'global': 'globalThis'
        }
      },
    },
    
    define: {
      'import.meta.env.DEV': mode === 'development',
      'import.meta.env.PROD': mode === 'production',
      'global': 'globalThis',
      // Remove development code in production
      ...(isProd && {
        'console.log': '(() => {})',
        'console.debug': '(() => {})',
        'console.info': '(() => {})'
      })
    },
    
    esbuild: {
      target: 'es2020' as const,
      legalComments: 'none' as const,
      treeShaking: true,
      // Additional optimizations for production
      ...(isProd && {
        drop: ['console', 'debugger'],
        minifyIdentifiers: true,
        minifySyntax: true,
        minifyWhitespace: true
      })
    }
  };
}
