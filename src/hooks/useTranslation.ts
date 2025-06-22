import { useLanguage } from '../context/LanguageContext';
import { languages } from '../i18n';

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const getTranslatedData = () => {
    return languages[language] || languages.en;
  };

  const t = getTranslatedData();

  // Функция для получения переведенного названия элемента
  const getElementName = (elementSymbol: string, fallbackName: string = '') => {
    const elementSymbolLower = elementSymbol.toLowerCase();
    const elementTranslations = t.ui?.elements;
    
    if (elementTranslations && elementTranslations[elementSymbolLower]) {
      return elementTranslations[elementSymbolLower];
    }
    
    // Возвращаем fallback название, если перевод не найден
    return fallbackName || elementSymbol;
  };

  return { 
    t, 
    getElementName,
    language 
  };
};
