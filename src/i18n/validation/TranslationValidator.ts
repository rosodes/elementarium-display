
import { TranslationData, LanguageKey } from '../types';

export interface ValidationResult {
  isValid: boolean;
  missingKeys: string[];
  placeholderTexts: string[];
  errors: string[];
}

export class TranslationValidator {
  private requiredLanguages: LanguageKey[] = ['en', 'ru', 'uk'];
  
  // Список запрещенных текстов-заглушек
  private forbiddenPlaceholders = [
    'Information about discovery, etymology, historical facts and discoverers of this element will be shown here.',
    'Information about abundance and occurrence of this element in nature will be displayed here.',
    'Information about chemical compounds and main classes of compounds for this element will be shown here.',
    'Information about biological effects, significance and toxicity for this element will be shown here.',
    'Methods of production, industrial synthesis and relevant data for this element will be shown here.',
    'Safety precautions, hazards, handling and disposal guidelines for this element will be displayed here.',
    'Information not available',
    '[MISSING',
    'not available',
    'will be shown here',
    'will be displayed here'
  ];

  validateTranslations(translations: Record<string, TranslationData>): ValidationResult {
    const result: ValidationResult = {
      isValid: true,
      missingKeys: [],
      placeholderTexts: [],
      errors: []
    };

    // Проверка наличия обязательных языков
    for (const lang of this.requiredLanguages) {
      if (!translations[lang]) {
        result.errors.push(`Missing required language: ${lang}`);
        result.isValid = false;
      }
    }

    // Получаем структуру ключей из английского языка
    const baseStructure = this.getTranslationKeys(translations.en);
    
    // Проверяем каждый язык
    for (const [langCode, translation] of Object.entries(translations)) {
      if (!translation) continue;
      
      const langKeys = this.getTranslationKeys(translation);
      const missing = baseStructure.filter(key => !langKeys.includes(key));
      
      if (missing.length > 0) {
        result.missingKeys.push(...missing.map(key => `${langCode}.${key}`));
        result.isValid = false;
      }

      // Проверка на заглушки
      const placeholders = this.findPlaceholders(translation);
      if (placeholders.length > 0) {
        result.placeholderTexts.push(...placeholders.map(ph => `${langCode}: ${ph}`));
        result.isValid = false;
      }
    }

    return result;
  }

  private getTranslationKeys(obj: any, prefix = ''): string[] {
    const keys: string[] = [];
    
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = prefix ? `${prefix}.${key}` : key;
      
      if (typeof value === 'object' && value !== null) {
        keys.push(...this.getTranslationKeys(value, currentPath));
      } else {
        keys.push(currentPath);
      }
    }
    
    return keys;
  }

  private findPlaceholders(obj: any, path = ''): string[] {
    const placeholders: string[] = [];
    
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key;
      
      if (typeof value === 'string') {
        for (const placeholder of this.forbiddenPlaceholders) {
          if (value.includes(placeholder)) {
            placeholders.push(`${currentPath}: "${value}"`);
          }
        }
      } else if (typeof value === 'object' && value !== null) {
        placeholders.push(...this.findPlaceholders(value, currentPath));
      }
    }
    
    return placeholders;
  }

  throwIfInvalid(translations: Record<string, TranslationData>): void {
    const result = this.validateTranslations(translations);
    
    if (!result.isValid) {
      const errorMessage = [
        '🚨 TRANSLATION VALIDATION FAILED! 🚨',
        '',
        'Missing translation keys:',
        ...result.missingKeys.map(key => `  - ${key}`),
        '',
        'Found placeholder texts:',
        ...result.placeholderTexts.map(ph => `  - ${ph}`),
        '',
        'Errors:',
        ...result.errors.map(err => `  - ${err}`),
        '',
        '❌ BUILD FAILED: Fix all translation issues above'
      ].join('\n');
      
      console.error(errorMessage);
      throw new Error('Translation validation failed - check console for details');
    }
  }
}

export const translationValidator = new TranslationValidator();
