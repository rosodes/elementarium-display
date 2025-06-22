import { TranslationData, LanguageKey } from '../types';

interface LanguageConfig {
  code: string;
  name: string;
  nativeName: string;
  rtl: boolean;
  region?: string;
  fallbacks: string[];
  enabled: boolean;
  loadingState: 'idle' | 'loading' | 'loaded' | 'error';
  translations?: TranslationData;
  lastUpdated?: Date;
}

interface BrowserLanguageInfo {
  language: string;
  region?: string;
  confidence: number;
}

class EnhancedLanguageManager {
  private languages: Map<string, LanguageConfig> = new Map();
  private currentLanguage = 'en';
  private fallbackLanguage = 'en';
  private dynamicLoaders = new Map<string, () => Promise<TranslationData>>();
  private loadingPromises = new Map<string, Promise<TranslationData>>();
  private observers: Set<(language: string) => void> = new Set();

  constructor() {
    this.initializeDefaultLanguages();
  }

  private initializeDefaultLanguages() {
    const defaultLanguages: Record<string, Omit<LanguageConfig, 'loadingState' | 'enabled'>> = {
      // Основные языки
      'en': {
        code: 'en',
        name: 'English',
        nativeName: 'English',
        rtl: false,
        fallbacks: [],
      },
      'ru': {
        code: 'ru',
        name: 'Russian',
        nativeName: 'Русский',
        rtl: false,
        fallbacks: ['en'],
      },
      'zh-CN': {
        code: 'zh-CN',
        name: 'Chinese (Simplified)',
        nativeName: '简体中文',
        rtl: false,
        region: 'CN',
        fallbacks: ['zh-TW', 'en'],
      },
      'zh-TW': {
        code: 'zh-TW',
        name: 'Chinese (Traditional)',
        nativeName: '繁體中文',
        rtl: false,
        region: 'TW',
        fallbacks: ['zh-CN', 'en'],
      },
      'ar': {
        code: 'ar',
        name: 'Arabic',
        nativeName: 'العربية',
        rtl: true,
        fallbacks: ['en'],
      },
      'hi': {
        code: 'hi',
        name: 'Hindi',
        nativeName: 'हिन्दी',
        rtl: false,
        fallbacks: ['en'],
      },
      'es': {
        code: 'es',
        name: 'Spanish',
        nativeName: 'Español',
        rtl: false,
        fallbacks: ['en'],
      },
      'fr': {
        code: 'fr',
        name: 'French',
        nativeName: 'Français',
        rtl: false,
        fallbacks: ['en'],
      },
      'fr-FR': {
        code: 'fr-FR',
        name: 'French (France)',
        nativeName: 'Français (France)',
        rtl: false,
        region: 'FR',
        fallbacks: ['fr', 'en'],
      },
      'de': {
        code: 'de',
        name: 'German',
        nativeName: 'Deutsch',
        rtl: false,
        fallbacks: ['en'],
      },
      'ja': {
        code: 'ja',
        name: 'Japanese',
        nativeName: '日本語',
        rtl: false,
        fallbacks: ['en'],
      },
      'pt-BR': {
        code: 'pt-BR',
        name: 'Portuguese (Brazil)',
        nativeName: 'Português (Brasil)',
        rtl: false,
        region: 'BR',
        fallbacks: ['pt-PT', 'en'],
      },
      'pt-PT': {
        code: 'pt-PT',
        name: 'Portuguese (Portugal)',
        nativeName: 'Português (Portugal)',
        rtl: false,
        region: 'PT',
        fallbacks: ['pt-BR', 'en'],
      },
      'uk': {
        code: 'uk',
        name: 'Ukrainian',
        nativeName: 'Українська',
        rtl: false,
        fallbacks: ['ru', 'en'],
      },
      'bn': {
        code: 'bn',
        name: 'Bengali',
        nativeName: 'বাংলা',
        rtl: false,
        fallbacks: ['hi', 'en'],
      },
      'pa': {
        code: 'pa',
        name: 'Punjabi',
        nativeName: 'ਪੰਜਾਬੀ',
        rtl: false,
        fallbacks: ['hi', 'en'],
      },
      // Дополнительные языки
      'ko': {
        code: 'ko',
        name: 'Korean',
        nativeName: '한국어',
        rtl: false,
        fallbacks: ['ja', 'en'],
      },
      'it': {
        code: 'it',
        name: 'Italian',
        nativeName: 'Italiano',
        rtl: false,
        fallbacks: ['fr', 'en'],
      },
      'pl': {
        code: 'pl',
        name: 'Polish',
        nativeName: 'Polski',
        rtl: false,
        fallbacks: ['de', 'en'],
      },
      'tr': {
        code: 'tr',
        name: 'Turkish',
        nativeName: 'Türkçe',
        rtl: false,
        fallbacks: ['en'],
      },
      'he': {
        code: 'he',
        name: 'Hebrew',
        nativeName: 'עברית',
        rtl: true,
        fallbacks: ['ar', 'en'],
      },
      'fa': {
        code: 'fa',
        name: 'Persian',
        nativeName: 'فارسی',
        rtl: true,
        fallbacks: ['ar', 'en'],
      },
      'th': {
        code: 'th',
        name: 'Thai',
        nativeName: 'ไทย',
        rtl: false,
        fallbacks: ['en'],
      },
      'vi': {
        code: 'vi',
        name: 'Vietnamese',
        nativeName: 'Tiếng Việt',
        rtl: false,
        fallbacks: ['en'],
      },
      'nl': {
        code: 'nl',
        name: 'Dutch',
        nativeName: 'Nederlands',
        rtl: false,
        fallbacks: ['de', 'en'],
      },
      'sv': {
        code: 'sv',
        name: 'Swedish',
        nativeName: 'Svenska',
        rtl: false,
        fallbacks: ['en'],
      },
      'da': {
        code: 'da',
        name: 'Danish',
        nativeName: 'Dansk',
        rtl: false,
        fallbacks: ['sv', 'en'],
      },
      'no': {
        code: 'no',
        name: 'Norwegian',
        nativeName: 'Norsk',
        rtl: false,
        fallbacks: ['sv', 'en'],
      },
      'fi': {
        code: 'fi',
        name: 'Finnish',
        nativeName: 'Suomi',
        rtl: false,
        fallbacks: ['sv', 'en'],
      },
    };

    Object.entries(defaultLanguages).forEach(([code, config]) => {
      this.languages.set(code, {
        ...config,
        loadingState: 'idle',
        enabled: true,
      });
    });
  }

  // Регистрация динамического загрузчика для языка
  registerDynamicLoader(languageCode: string, loader: () => Promise<TranslationData>) {
    this.dynamicLoaders.set(languageCode, loader);
  }

  // Автодетекция языка пользователя
  detectUserLanguage(): BrowserLanguageInfo[] {
    const candidates: BrowserLanguageInfo[] = [];

    // Проверяем navigator.languages
    if (navigator.languages) {
      navigator.languages.forEach((lang, index) => {
        const parsed = this.parseLanguageTag(lang);
        candidates.push({
          language: parsed.language,
          region: parsed.region,
          confidence: Math.max(0.9 - index * 0.1, 0.1),
        });
      });
    }

    // Проверяем navigator.language
    if (navigator.language) {
      const parsed = this.parseLanguageTag(navigator.language);
      if (!candidates.some(c => c.language === parsed.language)) {
        candidates.push({
          language: parsed.language,
          region: parsed.region,
          confidence: 0.8,
        });
      }
    }

    // Проверяем сохраненные предпочтения
    const saved = localStorage.getItem('preferredLanguage');
    if (saved && this.isLanguageSupported(saved)) {
      candidates.unshift({
        language: saved,
        confidence: 1.0,
      });
    }

    return candidates.sort((a, b) => b.confidence - a.confidence);
  }

  private parseLanguageTag(tag: string): { language: string; region?: string } {
    const parts = tag.toLowerCase().split('-');
    return {
      language: parts[0],
      region: parts[1]?.toUpperCase(),
    };
  }

  // Проверка поддержки языка
  isLanguageSupported(languageCode: string): boolean {
    return this.languages.has(languageCode);
  }

  // Получение наилучшего совпадения для языка
  getBestLanguageMatch(candidates: BrowserLanguageInfo[]): string {
    for (const candidate of candidates) {
      // Точное совпадение
      if (this.isLanguageSupported(candidate.language)) {
        return candidate.language;
      }

      // Поиск по регионам
      if (candidate.region) {
        const withRegion = `${candidate.language}-${candidate.region}`;
        if (this.isLanguageSupported(withRegion)) {
          return withRegion;
        }
      }

      // Поиск базового языка для региональных вариантов
      const baseLanguages = Array.from(this.languages.keys())
        .filter(lang => lang.startsWith(candidate.language + '-'));
      
      if (baseLanguages.length > 0) {
        return baseLanguages[0];
      }
    }

    return this.fallbackLanguage;
  }

  // Автоматический выбор языка
  async autoSelectLanguage(): Promise<string> {
    const candidates = this.detectUserLanguage();
    const bestMatch = this.getBestLanguageMatch(candidates);
    
    await this.setLanguage(bestMatch);
    return bestMatch;
  }

  // Установка текущего языка
  async setLanguage(languageCode: string): Promise<void> {
    if (!this.isLanguageSupported(languageCode)) {
      console.warn(`Language ${languageCode} is not supported, falling back to ${this.fallbackLanguage}`);
      languageCode = this.fallbackLanguage;
    }

    const config = this.languages.get(languageCode)!;
    
    // Загружаем переводы, если они еще не загружены
    if (config.loadingState === 'idle') {
      await this.loadLanguage(languageCode);
    }

    this.currentLanguage = languageCode;
    localStorage.setItem('preferredLanguage', languageCode);
    
    // Устанавливаем направление текста
    document.documentElement.dir = config.rtl ? 'rtl' : 'ltr';
    document.documentElement.lang = languageCode;

    // Уведомляем наблюдателей
    this.notifyObservers(languageCode);
  }

  // Загрузка переводов для языка
  private async loadLanguage(languageCode: string): Promise<TranslationData> {
    const config = this.languages.get(languageCode);
    if (!config) {
      throw new Error(`Language ${languageCode} not found`);
    }

    // Избегаем повторной загрузки
    if (this.loadingPromises.has(languageCode)) {
      return this.loadingPromises.get(languageCode)!;
    }

    config.loadingState = 'loading';

    const loadingPromise = this.performLanguageLoad(languageCode);
    this.loadingPromises.set(languageCode, loadingPromise);

    try {
      const translations = await loadingPromise;
      config.translations = translations;
      config.loadingState = 'loaded';
      config.lastUpdated = new Date();
      
      this.loadingPromises.delete(languageCode);
      return translations;
    } catch (error) {
      config.loadingState = 'error';
      this.loadingPromises.delete(languageCode);
      console.error(`Failed to load language ${languageCode}:`, error);
      throw error;
    }
  }

  private async performLanguageLoad(languageCode: string): Promise<TranslationData> {
    // Сначала пробуем динамический загрузчик
    const dynamicLoader = this.dynamicLoaders.get(languageCode);
    if (dynamicLoader) {
      try {
        return await dynamicLoader();
      } catch (error) {
        console.warn(`Dynamic loader failed for ${languageCode}:`, error);
      }
    }

    // Затем пробуем статический импорт
    try {
      const module = await import(`../${languageCode}.ts`);
      return module[languageCode] || module.default;
    } catch (error) {
      console.warn(`Static import failed for ${languageCode}:`, error);
    }

    // Наконец, пробуем загрузить удаленно
    try {
      const response = await fetch(`/i18n/${languageCode}.json`);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.warn(`Remote load failed for ${languageCode}:`, error);
    }

    throw new Error(`All loading methods failed for ${languageCode}`);
  }

  // Получение перевода с fallback
  async getTranslation(key: string, defaultValue?: string, interpolations?: Record<string, any>): Promise<string> {
    const currentConfig = this.languages.get(this.currentLanguage);
    if (!currentConfig) {
      return defaultValue || key;
    }

    // Загружаем текущий язык, если необходимо
    if (currentConfig.loadingState === 'idle') {
      await this.loadLanguage(this.currentLanguage);
    }

    // Пробуем получить перевод для текущего языка
    let translation = this.extractTranslation(currentConfig.translations, key);
    
    // Если перевод не найден, пробуем fallback языки
    if (!translation) {
      for (const fallbackLang of currentConfig.fallbacks) {
        const fallbackConfig = this.languages.get(fallbackLang);
        if (fallbackConfig?.translations) {
          translation = this.extractTranslation(fallbackConfig.translations, key);
          if (translation) break;
        }
      }
    }

    // Применяем интерполяции
    if (translation && interpolations) {
      translation = this.interpolateString(translation, interpolations);
    }

    return translation || defaultValue || key;
  }

  private extractTranslation(translations: TranslationData | undefined, key: string): string | null {
    if (!translations) return null;

    const keys = key.split('.');
    let current: any = translations;

    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        return null;
      }
    }

    return typeof current === 'string' ? current : null;
  }

  private interpolateString(template: string, values: Record<string, any>): string {
    return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, key) => {
      return values[key]?.toString() || match;
    });
  }

  // Получение всех переводов для текущего языка
  async getCurrentTranslations(): Promise<TranslationData | null> {
    const config = this.languages.get(this.currentLanguage);
    if (!config) return null;

    if (config.loadingState === 'idle') {
      await this.loadLanguage(this.currentLanguage);
    }

    return config.translations || null;
  }

  // Получение информации о языке
  getLanguageInfo(languageCode: string): LanguageConfig | null {
    return this.languages.get(languageCode) || null;
  }

  // Получение списка всех поддерживаемых языков
  getSupportedLanguages(): LanguageConfig[] {
    return Array.from(this.languages.values()).filter(lang => lang.enabled);
  }

  // Получение текущего языка
  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  // Подписка на изменения языка
  subscribe(callback: (language: string) => void): () => void {
    this.observers.add(callback);
    return () => this.observers.delete(callback);
  }

  private notifyObservers(language: string): void {
    this.observers.forEach(callback => {
      try {
        callback(language);
      } catch (error) {
        console.error('Error in language change observer:', error);
      }
    });
  }

  // Предзагрузка языков
  async preloadLanguages(languageCodes: string[]): Promise<void> {
    const promises = languageCodes
      .filter(code => this.isLanguageSupported(code))
      .map(code => this.loadLanguage(code).catch(error => {
        console.warn(`Failed to preload ${code}:`, error);
      }));

    await Promise.allSettled(promises);
  }

  // Получение статистики загрузки
  getLoadingStats(): Record<string, { state: string; lastUpdated?: Date }> {
    const stats: Record<string, { state: string; lastUpdated?: Date }> = {};
    
    this.languages.forEach((config, code) => {
      stats[code] = {
        state: config.loadingState,
        lastUpdated: config.lastUpdated,
      };
    });

    return stats;
  }

  // Очистка кеша
  clearCache(): void {
    this.languages.forEach(config => {
      if (config.loadingState === 'loaded') {
        config.loadingState = 'idle';
        config.translations = undefined;
        config.lastUpdated = undefined;
      }
    });
    this.loadingPromises.clear();
  }
}

export const enhancedLanguageManager = new EnhancedLanguageManager();
export type { LanguageConfig, BrowserLanguageInfo }; 