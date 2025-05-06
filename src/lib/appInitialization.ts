
import { QueryClient } from '@tanstack/react-query';

// Initialize React Query client with proper settings
export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000, // 5 minutes
      },
    },
  });
};

// Detect initial language from browser or localStorage
export const getInitialLanguage = (): string => {
  if (typeof window === 'undefined') return 'en';
  
  // Check localStorage first
  const savedLang = localStorage.getItem('language');
  if (savedLang) return savedLang;
  
  // Then check browser language
  const browserLang = navigator.language.split('-')[0];
  return ['en', 'ru', 'uk'].includes(browserLang) ? browserLang : 'en';
};

// Remove initial loading indicator
export const removeLoadingIndicator = (): void => {
  setTimeout(() => {
    const indicator = document.getElementById('loading-indicator');
    if (indicator && indicator.parentNode) {
      indicator.parentNode.removeChild(indicator);
    }
  }, 500);
};
