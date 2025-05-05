
import { QueryClient } from '@tanstack/react-query';

// Create a new QueryClient for React Query
export const createQueryClient = (): QueryClient => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 1,
        retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
      },
    },
  });
};

// Get initial language from URL
export const getInitialLanguage = (): string => {
  if (typeof window === 'undefined') return 'en';
  
  const path = window.location.pathname;
  if (path.startsWith('/ru/') || path === '/ru') return 'ru';
  if (path.startsWith('/uk/') || path === '/uk') return 'uk';
  return 'en'; // Default to English
};

// Remove loading indicator
export const removeLoadingIndicator = (): void => {
  const loadingIndicator = document.getElementById('loading-indicator');
  if (loadingIndicator) {
    loadingIndicator.style.opacity = '0';
    setTimeout(() => {
      loadingIndicator.parentNode?.removeChild(loadingIndicator);
    }, 300);
  }
};
