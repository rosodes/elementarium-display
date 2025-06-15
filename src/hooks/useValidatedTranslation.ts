
import { useLanguage } from '../context/LanguageContext';
import { translationValidator } from '../i18n/enhancedTranslationValidator';

// Хук для использования переводов с валидацией
export function useValidatedTranslation(componentName: string) {
  const { t, language } = useLanguage();
  
  // Функция для получения перевода с валидацией
  const getValidatedTranslation = (path: string, fallback?: string) => {
    if (import.meta.env.DEV) {
      const value = translationValidator.getTranslation(t, path, componentName);
      return value !== `[MISSING PATH]: ${path}` ? value : (fallback || value);
    }
    
    // В продакшене просто получаем значение
    const keys = path.split('.');
    let current = t;
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = (current as any)[key];
      } else {
        return fallback || `Missing: ${path}`;
      }
    }
    return current;
  };
  
  return {
    t: getValidatedTranslation,
    language,
    rawT: t
  };
}
