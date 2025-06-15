
import React, { useEffect } from 'react';
import { translationValidator } from '../i18n/enhancedTranslationValidator';

interface TranslationValidationProviderProps {
  children: React.ReactNode;
}

// Провайдер для инициализации валидации на каждой странице
export const TranslationValidationProvider: React.FC<TranslationValidationProviderProps> = ({ children }) => {
  useEffect(() => {
    if (import.meta.env.DEV) {
      // Запускаем валидацию при монтировании любой страницы
      translationValidator.validateAllLanguages('en');
      
      // Логируем текущую страницу для отладки
      console.log('[Translation Validator] Page mounted, validation completed');
    }
  }, []);

  return <>{children}</>;
};
