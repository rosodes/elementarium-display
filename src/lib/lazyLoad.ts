
import { lazy, ComponentType } from 'react';

// Optimized lazy loading with preloading capabilities
export const createLazyComponent = <T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  preloadDeps?: Array<() => Promise<any>>
) => {
  const LazyComponent = lazy(() => {
    // Preload dependencies if specified
    if (preloadDeps) {
      preloadDeps.forEach(dep => dep().catch(() => {}));
    }
    return importFn();
  });

  // Add preload method
  (LazyComponent as any).preload = () => {
    importFn().catch(() => {});
    preloadDeps?.forEach(dep => dep().catch(() => {}));
  };

  return LazyComponent;
};

// Preload on hover utility
export const preloadOnHover = (componentLoader: any) => ({
  onMouseEnter: () => {
    if (componentLoader.preload) {
      componentLoader.preload();
    }
  }
});

// Preload on intersection (for components that might come into view)
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
    { threshold }
  );

  if (elementRef.current) {
    observer.observe(elementRef.current);
  }

  return () => observer.disconnect();
};
