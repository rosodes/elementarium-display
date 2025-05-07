
import { QueryClient } from '@tanstack/react-query';

// Memoized QueryClient for better state management
let queryClientInstance: QueryClient | null = null;

// Initialize React Query client with proper settings
export const createQueryClient = () => {
  // Return existing instance if already created
  if (queryClientInstance) return queryClientInstance;
  
  queryClientInstance = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000, // 5 minutes
      },
    },
  });
  
  return queryClientInstance;
};

// Detect initial language from browser or localStorage
export const getInitialLanguage = (): string => {
  // Handle SSR case
  if (typeof window === 'undefined') return 'en';
  
  // Check localStorage first
  let savedLang;
  try {
    savedLang = localStorage.getItem('language');
    if (savedLang) return savedLang;
  } catch {
    // Silent fail if localStorage is not available
  }
  
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
