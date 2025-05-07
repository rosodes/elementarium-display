
import { QueryClient } from '@tanstack/react-query';

// Мемоизированный QueryClient для лучшего управления состоянием
let queryClientInstance: QueryClient | null = null;

// Инициализация React Query client с оптимизированными настройками
export const createQueryClient = () => {
  if (!queryClientInstance) {
    queryClientInstance = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false, // Отключаем повторные попытки для ускорения
          refetchOnWindowFocus: false,
          staleTime: 5 * 60 * 1000, // 5 минут
          gcTime: 10 * 60 * 1000, // 10 минут для сборки мусора
        },
      },
    });
  }
  
  return queryClientInstance;
};

// Определяем начальный язык с оптимизацией
export const getInitialLanguage = (): string => {
  // Обрабатываем случай SSR
  if (typeof window === 'undefined') return 'en';
  
  // Кэшируем значение URL для предотвращения повторных вычислений
  const pathName = window.location.pathname;
  
  // Быстрая проверка языка из URL
  if (pathName.startsWith('/ru/') || pathName === '/ru') return 'ru';
  if (pathName.startsWith('/uk/') || pathName === '/uk') return 'uk';
  
  // Проверяем localStorage только если не нашли в URL
  try {
    const savedLang = localStorage.getItem('language');
    if (savedLang && ['en', 'ru', 'uk'].includes(savedLang)) return savedLang;
  } catch {
    // Молча игнорируем, если localStorage недоступен
  }
  
  // Затем проверяем язык браузера
  const browserLang = navigator.language.split('-')[0];
  return ['en', 'ru', 'uk'].includes(browserLang) ? browserLang : 'en';
};

// Удаляем индикатор загрузки с улучшенным таймингом
export const removeLoadingIndicator = (): void => {
  const indicator = document.getElementById('loading-indicator');
  if (!indicator) return;
  
  // Плавно скрываем индикатор с анимацией
  indicator.style.opacity = '0';
  indicator.style.transition = 'opacity 300ms ease-out';
  
  // Удаляем после завершения анимации
  setTimeout(() => {
    if (indicator.parentNode) {
      indicator.parentNode.removeChild(indicator);
    }
  }, 300);
};

// Очищаем типы для Window
declare global {
  interface Window {
    __REACT_QUERY_STATE__?: any;
  }
}
