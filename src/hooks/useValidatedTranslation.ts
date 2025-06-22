import { useLanguage } from '../context/LanguageContext';
import { translationValidator } from '../i18n/enhancedTranslationValidator';

// Хук для использования переводов с валидацией
export function useValidatedTranslation(componentName: string) {
  const { t, language } = useLanguage();
  
  // Функция для получения перевода с валидацией
  const getValidatedTranslation = (path: string, fallback?: string) => {
    // Добавляем префикс componentName к пути
    const fullPath = `${componentName}.${path}`;
    
    if (import.meta.env.DEV) {
      const value = translationValidator.getTranslation(t, fullPath, componentName);
      return value !== `[MISSING PATH]: ${fullPath}` ? value : (fallback || value);
    }
    
    // В продакшене просто получаем значение
    const keys = fullPath.split('.');
    let current = t;
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = (current as any)[key];
      } else {
        return fallback || `Missing: ${fullPath}`;
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
