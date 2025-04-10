
import { TranslationData, LanguageKey, languages, addLanguage } from './types';
import { loadLanguages } from './languageLoader';

// Load all languages
loadLanguages();

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
