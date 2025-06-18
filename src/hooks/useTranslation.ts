
import { useLanguage } from '../context/LanguageContext';

export function useTranslation() {
  const { t, language } = useLanguage();
  
  // Return the translation function directly from the context
  return { t, language };
}
