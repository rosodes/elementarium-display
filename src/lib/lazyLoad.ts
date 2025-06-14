
import { lazy, ComponentType } from 'react';
import { dynamicImportWithRetry } from './bundleOptimization';

// Enhanced lazy loading with retry mechanism and preloading
export const createLazyComponent = <T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  preloadDeps?: Array<() => Promise<any>>
) => {
  const LazyComponent = lazy(() => 
    dynamicImportWithRetry(importFn).then(module => {
      // Preload dependencies if specified
      if (preloadDeps) {
        preloadDeps.forEach(dep => 
          dynamicImportWithRetry(dep).catch(() => {})
        );
      }
      return module;
    })
  );

  // Add preload method with retry
  (LazyComponent as any).preload = () => {
    dynamicImportWithRetry(importFn).catch(() => {});
    preloadDeps?.forEach(dep => 
      dynamicImportWithRetry(dep).catch(() => {})
    );
  };

  return LazyComponent;
};

// Preload on hover utility with debouncing
export const preloadOnHover = (componentLoader: any) => {
  let timeoutId: number;
  
  return {
    onMouseEnter: () => {
      timeoutId = window.setTimeout(() => {
        if (componentLoader.preload) {
          componentLoader.preload();
        }
      }, 100); // Small delay to avoid excessive preloading
    },
    onMouseLeave: () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  };
};

// Preload on intersection with improved performance
export const preloadOnIntersection = (
  elementRef: React.RefObject<HTMLElement>,
  componentLoader: any,
  threshold = 0.1
) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && componentLoader.preload) {
          componentLoader.preload();
          observer.unobserve(entry.target);
        }
      });
    },
    { 
      threshold,
      rootMargin: '50px' // Start loading slightly before element comes into view
    }
  );

  if (elementRef.current) {
    observer.observe(elementRef.current);
  }

  return () => observer.disconnect();
};
