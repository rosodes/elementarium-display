
import { TranslationData } from '../types';

class TranslationValidator {
  validateTranslations(languages: Record<string, TranslationData>): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    const referenceLanguage = languages.en;
    if (!referenceLanguage) {
      errors.push('Reference language (en) not found');
      return { isValid: false, errors };
    }
    
    // Check structure consistency across languages
    Object.entries(languages).forEach(([langKey, translation]) => {
      const missingKeys = this.findMissingKeys(referenceLanguage, translation, langKey);
      errors.push(...missingKeys);
    });
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
  
  private findMissingKeys(reference: any, target: any, langKey: string, path = ''): string[] {
    const errors: string[] = [];
    
    if (typeof reference !== typeof target) {
      errors.push(`${langKey}: Type mismatch at ${path}`);
      return errors;
    }
    
    if (typeof reference === 'object' && reference !== null) {
      Object.keys(reference).forEach(key => {
        const currentPath = path ? `${path}.${key}` : key;
        if (!(key in target)) {
          errors.push(`${langKey}: Missing key "${currentPath}"`);
        } else {
          errors.push(...this.findMissingKeys(reference[key], target[key], langKey, currentPath));
        }
      });
    }
    
    return errors;
  }
  
  throwIfInvalid(languages: Record<string, TranslationData>): void {
    const result = this.validateTranslations(languages);
    if (!result.isValid) {
      throw new Error(`Translation validation failed:\n${result.errors.join('\n')}`);
    }
  }
}

export const translationValidator = new TranslationValidator();
