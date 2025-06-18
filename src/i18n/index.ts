
import { TranslationData, LanguageKey, addLanguage } from './types';
import { languageLoader } from './loaders/LanguageLoader';
import { languageManager } from './core/LanguageManager';

// Загружаем базовые языки синхронно для избежания ошибок
import { en } from './en';
import { ru } from './ru'; 
import { uk } from './uk';
import { fr } from './fr';

// Добавляем базовые языки в менеджер
languageManager.addLanguage('en', en);
languageManager.addLanguage('ru', ru);
languageManager.addLanguage('uk', uk);
languageManager.addLanguage('fr', fr);

// Валидация только в продакшене
if (import.meta.env.NODE_ENV === 'production') {
  import('./validation/TranslationValidator').then(({ translationValidator }) => {
    try {
      console.log('🔍 Running build-time translation validation...');
      translationValidator.throwIfInvalid(languageManager.getAllTranslations());
      console.log('✅ Build validation passed');
    } catch (error) {
      console.error('❌ Build validation failed:', error);
      process.exit(1);
    }
  });
}

// Enhanced validation for development
if (typeof window !== 'undefined' && import.meta.env.DEV) {
  import('./validation/TranslationValidator').then(({ translationValidator }) => {
    const result = translationValidator.validateTranslations(languageManager.getAllTranslations());
    if (!result.isValid) {
      console.warn('⚠️ Translation validation warnings:', result);
    }
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

export { languageManager, languageLoader };
export const languages = languageManager.getAllTranslations();
export { addLanguage };
