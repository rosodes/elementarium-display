
import { TranslationData, LanguageKey, languages, addLanguage } from './types';
import { loadLanguages } from './languageLoader';
import { validateLanguages } from './translationValidator';

// Load all languages
loadLanguages();

// Build-time validation for production builds
if (import.meta.env.NODE_ENV !== 'development') {
  import('./buildTimeValidator').then(({ validateTranslationsAtBuildTime }) => {
    try {
      validateTranslationsAtBuildTime();
    } catch (error) {
      console.error('❌ Build validation failed:', error);
      throw error; // This will cause the build to fail
    }
  });
}

// Запускаем улучшенную валидацию переводов только в DEV-режиме
if (typeof window !== 'undefined' && import.meta.env.DEV) {
  import('./enhancedTranslationValidator').then(({ translationValidator }) => {
    translationValidator.validateAllLanguages('en');
  });
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
