
// Utility functions for runtime bundle optimization

// Preload critical chunks
export const preloadCriticalChunks = () => {
  // Preload vendor chunks that are likely to be needed
  const criticalChunks = [
    '/assets/vendor-react',
    '/assets/vendor-ui',
    '/assets/chunk-periodic-table'
  ];
  
  criticalChunks.forEach(chunk => {
    const link = document.createElement('link');
    link.rel = 'modulepreload';
    link.href = chunk;
    document.head.appendChild(link);
  });
};

// Dynamic import with error handling and retries
export const dynamicImportWithRetry = async (
  importFn: () => Promise<any>,
  retries = 2
): Promise<any> => {
  try {
    return await importFn();
  } catch (error) {
    if (retries > 0) {
      console.warn('Dynamic import failed, retrying...', error);
      await new Promise(resolve => setTimeout(resolve, 1000));
      return dynamicImportWithRetry(importFn, retries - 1);
    }
    throw error;
  }
};

// Prefetch non-critical chunks on idle
export const prefetchNonCriticalChunks = () => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      // Prefetch element details chunk when idle
      import('../components/element-details/ElementDetails');
    });
  }
};
