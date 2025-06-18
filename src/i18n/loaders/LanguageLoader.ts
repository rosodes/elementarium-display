
import { TranslationData } from '../types';
import { languageManager } from '../core/LanguageManager';

class LanguageLoader {
  async loadLanguage(languageKey: string): Promise<TranslationData | null> {
    try {
      // Check if already loaded
      if (languageManager.hasLanguage(languageKey)) {
        return languageManager.getLanguage(languageKey) || null;
      }
      
      // Dynamic import based on language key
      const module = await this.getLanguageModule(languageKey);
      if (module && module[languageKey]) {
        languageManager.addLanguage(languageKey, module[languageKey]);
        return module[languageKey];
      }
      
      return null;
    } catch (error) {
      console.error(`Failed to load language: ${languageKey}`, error);
      return null;
    }
  }
  
  private async getLanguageModule(languageKey: string) {
    switch (languageKey) {
      case 'en':
        return import('../en');
      case 'ru':
        return import('../ru');
      case 'uk':
        return import('../uk');
      case 'fr':
        return import('../fr');
      case 'es':
        return import('../es');
      case 'de':
        return import('../de');
      case 'zh-CN':
        return import('../zh-CN');
      case 'zh-TW':
        return import('../zh-TW');
      case 'ja':
        return import('../ja');
      case 'hi':
        return import('../hi');
      case 'ar':
        return import('../ar');
      case 'bn':
        return import('../bn');
      case 'pt-BR':
        return import('../pt-BR');
      case 'pt-PT':
        return import('../pt-PT');
      case 'pa':
        return import('../pa');
      default:
        return null;
    }
  }
}

export const languageLoader = new LanguageLoader();
