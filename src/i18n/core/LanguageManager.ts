
import { TranslationData, LanguageKey } from '../types';

class LanguageManager {
  private languages: Record<string, TranslationData> = {};
  
  addLanguage(key: string, translations: TranslationData): void {
    this.languages[key] = translations;
  }
  
  getLanguage(key: string): TranslationData | undefined {
    return this.languages[key];
  }
  
  getAllTranslations(): Record<string, TranslationData> {
    return { ...this.languages };
  }
  
  getSupportedLanguages(): string[] {
    return Object.keys(this.languages);
  }
  
  hasLanguage(key: string): boolean {
    return key in this.languages;
  }
}

export const languageManager = new LanguageManager();
