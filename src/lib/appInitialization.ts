import { QueryClient } from '@tanstack/react-query';
import { detectUserLanguage } from './languageUtils';

// Создание React Query клиента
export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 минут
        gcTime: 10 * 60 * 1000, // 10 минут
        retry: (failureCount, error) => {
          // Не повторяем при ошибках 404 или других клиентских ошибках
          if (error instanceof Error && 'status' in error) {
            const status = (error as any).status;
            if (status >= 400 && status < 500) {
              return false;
            }
          }
          return failureCount < 3;
        }
      },
    },
  });
};

// Определяем начальный язык согласно best practices
export const getInitialLanguage = (): string => {
  // Используем новую систему с правильными приоритетами:
  // 1. Explicit selection in URL
  // 2. Cookie with saved preference
  // 3. Accept-Language header
  // 4. Fallback to English (canonical)
  
  return detectUserLanguage();
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
