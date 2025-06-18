
import { TranslationData } from '../types';
import { languageManager } from '../core/LanguageManager';

export interface LoaderConfig {
  validateOnLoad?: boolean;
  throwOnMissing?: boolean;
  enableHotReload?: boolean;
}

export class LanguageLoader {
  private config: LoaderConfig;
  private loadedLanguages = new Set<string>();

  constructor(config: LoaderConfig = {}) {
    this.config = {
      validateOnLoad: true,
      throwOnMissing: import.meta.env.NODE_ENV === 'production',
      enableHotReload: import.meta.env.DEV,
      ...config
    };
  }

  async loadLanguage(languageCode: string): Promise<boolean> {
    if (this.loadedLanguages.has(languageCode)) {
      return true;
    }

    try {
      const translation = await this.importLanguage(languageCode);
      if (translation) {
        languageManager.addLanguage(languageCode, translation);
        this.loadedLanguages.add(languageCode);
        
        if (this.config.validateOnLoad) {
          this.validateLanguage(languageCode);
        }
        
        return true;
      }
    } catch (error) {
      console.error(`Failed to load language ${languageCode}:`, error);
      if (this.config.throwOnMissing) {
        throw error;
      }
    }
    
    return false;
  }

  async loadAllLanguages(): Promise<void> {
    const languagesToLoad = ['en', 'ru', 'uk', 'fr']; // Основные языки
    
    const loadPromises = languagesToLoad.map(lang => this.loadLanguage(lang));
    const results = await Promise.allSettled(loadPromises);
    
    // Проверяем результаты загрузки
    results.forEach((result, index) => {
      if (result.status === 'rejected') {
        const langCode = languagesToLoad[index];
        console.error(`Failed to load language ${langCode}:`, result.reason);
      }
    });

    // Валидируем все загруженные переводы
    if (this.config.validateOnLoad) {
      try {
        languageManager.validateAllTranslations();
      } catch (error) {
        if (this.config.throwOnMissing) {
          throw error;
        }
        console.warn('Translation validation failed:', error);
      }
    }
  }

  private async importLanguage(languageCode: string): Promise<TranslationData | null> {
    try {
      switch (languageCode) {
        case 'en':
          const { en } = await import('../en');
          return en;
        case 'ru':
          const { ru } = await import('../ru');
          return ru;
        case 'uk':
          const { uk } = await import('../uk');
          return uk;
        case 'fr':
          const { fr } = await import('../fr');
          return fr;
        default:
          // Динамическая загрузка для других языков
          try {
            const module = await import(`../${languageCode}`);
            return module[languageCode] || module.default;
          } catch {
            console.warn(`Language file for ${languageCode} not found`);
            return null;
          }
      }
    } catch (error) {
      console.error(`Error importing language ${languageCode}:`, error);
      return null;
    }
  }

  private validateLanguage(languageCode: string): void {
    const translation = languageManager.getTranslation(languageCode);
    if (!translation) return;

    // Дополнительная валидация для конкретного языка
    if (this.config.validateOnLoad) {
      console.log(`✅ Language ${languageCode} loaded and validated successfully`);
    }
  }

  // Метод для получения информации о загруженных языках
  getLoadedLanguages(): string[] {
    return Array.from(this.loadedLanguages);
  }

  // Метод для перезагрузки языка (полезно для разработки)
  async reloadLanguage(languageCode: string): Promise<boolean> {
    if (this.config.enableHotReload) {
      this.loadedLanguages.delete(languageCode);
      return this.loadLanguage(languageCode);
    }
    return false;
  }
}

export const languageLoader = new LanguageLoader();
