import { TranslationData, LanguageKey, languages, addLanguage } from './types';
import { loadLanguages } from './languageLoader';
import { validateLanguages } from './translationValidator';

// Load all languages
loadLanguages();

// Запускаем валидацию переводов
import { languages } from './types';
if (typeof window !== 'undefined' && import.meta.env.DEV) {
  validateLanguages(languages, 'en');
}

export type {
  ElementTranslations,
  LegendTranslations,
  DetailsTranslations,
  CategoriesTranslations,
  UITranslations,
  ElementDetailsTranslations,
  FooterTranslations,
  CommonTranslations,
  TranslationData,
  LanguageKey
} from './types';

export { languages, addLanguage };
