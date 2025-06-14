
export function createOptimizationConfig(mode: string) {
  return {
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        '@tanstack/react-query',
        '@radix-ui/react-toast',
        '@radix-ui/react-tooltip'
      ],
      esbuildOptions: {
        target: 'es2020',
        treeShaking: true,
        define: {
          'global': 'globalThis'
        }
      },
    },
    
    define: {
      'import.meta.env.DEV': mode === 'development',
      'import.meta.env.PROD': mode === 'production',
      'global': 'globalThis',
    },
    
    esbuild: {
      target: 'es2020',
      treeShaking: true,
      legalComments: 'none'
    }
  };
}
