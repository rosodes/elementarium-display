
import path from 'path';

export function createBuildConfig(isProd: boolean) {
  return {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: !isProd,
    minify: isProd ? 'terser' as const : false,
    terserOptions: isProd ? {
      ecma: 2020 as const,
      compress: {
        drop_console: true,
        drop_debugger: true,
        dead_code: true,
        passes: 3,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        unsafe_arrows: true,
        unsafe_methods: true,
        unsafe_proto: true
      },
      mangle: {
        safari10: true,
        properties: {
          regex: /^_/
        }
      },
      format: {
        comments: false
      }
    } : undefined,
    rollupOptions: {
      input: {
        main: path.resolve(process.cwd(), 'index.html'),
      },
      output: {
        format: 'es' as const,
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        // Optimized manual chunks for better caching
        manualChunks: (id: string) => {
          // Vendor chunks for better caching
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            if (id.includes('@tanstack/react-query')) {
              return 'vendor-query';
            }
            if (id.includes('@radix-ui')) {
              return 'vendor-ui';
            }
            if (id.includes('lucide-react') || id.includes('clsx') || id.includes('class-variance-authority')) {
              return 'vendor-utils';
            }
            if (id.includes('recharts')) {
              return 'vendor-charts';
            }
            // Group smaller libraries together
            return 'vendor-misc';
          }
          
          // Component-based chunks
          if (id.includes('/src/components/element-details/')) {
            return 'chunk-element-details';
          }
          if (id.includes('/src/components/periodic-table/')) {
            return 'chunk-periodic-table';
          }
          if (id.includes('/src/i18n/')) {
            return 'chunk-i18n';
          }
        }
      },
      external: (id: string) => {
        // Externalize heavy dependencies that can be loaded from CDN if needed
        return false; // Keep all dependencies bundled for now
      }
    },
    // Enable CSS code splitting for smaller initial bundles
    cssCodeSplit: true,
    // Optimize asset inlining threshold
    assetsInlineLimit: 2048, // Reduced from 4096 to avoid bloating JS
    target: 'es2020' as const,
    // Additional optimizations
    reportCompressedSize: false, // Disable to speed up build
    chunkSizeWarningLimit: 1000 // Set warning for large chunks
  };
}
