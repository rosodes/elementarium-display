
import { TranslationData, LanguageKey, languages, addLanguage } from './types';
import { loadLanguages } from './languageLoader';
import { validateLanguages } from './translationValidator';

// Load all languages
loadLanguages();

// Build-time validation for production builds
if (import.meta.env.NODE_ENV !== 'development') {
  import('./buildTimeValidator').then(({ validateTranslationsAtBuildTime, validateComponentContent }) => {
    try {
      console.log('🔍 Running build-time translation validation...');
      validateTranslationsAtBuildTime();
      validateComponentContent();
      console.log('✅ Build validation passed');
    } catch (error) {
      console.error('❌ Build validation failed:', error);
      // Force build failure
      process.exit(1);
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
