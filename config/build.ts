
import path from 'path';

export function createBuildConfig(isProd: boolean) {
  return {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: !isProd,
    minify: 'terser' as const,
    terserOptions: {
      ecma: 2020 as const,
      compress: {
        drop_console: isProd,
        dead_code: true,
        passes: 2,
        pure_funcs: isProd ? ['console.log', 'console.info'] : []
      }
    },
    rollupOptions: {
      input: {
        main: path.resolve(process.cwd(), 'index.html'),
      },
      output: {
        format: 'es' as const,
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-query': ['@tanstack/react-query'],
          'vendor-ui': ['@radix-ui/react-toast', '@radix-ui/react-tooltip'],
          'vendor-utils': ['lucide-react', 'clsx', 'class-variance-authority']
        }
      },
    },
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    target: 'es2020' as const
  };
}
