
import { TranslationData, LanguageKey } from '../types';
import { translationValidator } from '../validation/TranslationValidator';

export interface LanguageInfo {
  code: string;
  name: string;
  nativeName: string;
  emoji: string;
  isRTL?: boolean;
  isComplete?: boolean;
}

export class LanguageManager {
  private translations: Record<string, TranslationData> = {};
  private supportedLanguages: LanguageInfo[] = [];
  
  // Базовая информация о языках
  private languageMetadata: Record<string, Omit<LanguageInfo, 'code' | 'isComplete'>> = {
    en: { name: 'English', nativeName: 'English', emoji: '🇬🇧' },
    ru: { name: 'Russian', nativeName: 'Русский', emoji: '🇷🇺' },
    uk: { name: 'Ukrainian', nativeName: 'Українська', emoji: '🇺🇦' },
    fr: { name: 'French', nativeName: 'Français', emoji: '🇫🇷' },
    de: { name: 'German', nativeName: 'Deutsch', emoji: '🇩🇪' },
    es: { name: 'Spanish', nativeName: 'Español', emoji: '🇪🇸' },
    it: { name: 'Italian', nativeName: 'Italiano', emoji: '🇮🇹' },
    pt: { name: 'Portuguese', nativeName: 'Português', emoji: '🇵🇹' },
    zh: { name: 'Chinese', nativeName: '中文', emoji: '🇨🇳' },
    ja: { name: 'Japanese', nativeName: '日本語', emoji: '🇯🇵' },
    ko: { name: 'Korean', nativeName: '한국어', emoji: '🇰🇷' },
    ar: { name: 'Arabic', nativeName: 'العربية', emoji: '🇸🇦', isRTL: true },
    hi: { name: 'Hindi', nativeName: 'हिन्दी', emoji: '🇮🇳' },
    pl: { name: 'Polish', nativeName: 'Polski', emoji: '🇵🇱' },
    tr: { name: 'Turkish', nativeName: 'Türkçe', emoji: '🇹🇷' },
    nl: { name: 'Dutch', nativeName: 'Nederlands', emoji: '🇳🇱' },
    sv: { name: 'Swedish', nativeName: 'Svenska', emoji: '🇸🇪' },
    da: { name: 'Danish', nativeName: 'Dansk', emoji: '🇩🇰' },
    no: { name: 'Norwegian', nativeName: 'Norsk', emoji: '🇳🇴' },
    fi: { name: 'Finnish', nativeName: 'Suomi', emoji: '🇫🇮' }
  };

  addLanguage(code: string, translation: TranslationData): void {
    this.translations[code] = translation;
    this.updateSupportedLanguages();
  }

  getTranslation(code: string): TranslationData | undefined {
    return this.translations[code];
  }

  getAllTranslations(): Record<string, TranslationData> {
    return { ...this.translations };
  }

  getSupportedLanguages(): LanguageInfo[] {
    return [...this.supportedLanguages];
  }

  isLanguageSupported(code: string): boolean {
    return code in this.translations;
  }

  getLanguageInfo(code: string): LanguageInfo | undefined {
    return this.supportedLanguages.find(lang => lang.code === code);
  }

  validateAllTranslations(): void {
    if (import.meta.env.NODE_ENV === 'production') {
      translationValidator.throwIfInvalid(this.translations);
    }
  }

  private updateSupportedLanguages(): void {
    this.supportedLanguages = Object.keys(this.translations).map(code => {
      const metadata = this.languageMetadata[code] || {
        name: code.toUpperCase(),
        nativeName: code.toUpperCase(),
        emoji: '🌐'
      };

      const isComplete = this.checkLanguageCompleteness(code);

      return {
        code,
        ...metadata,
        isComplete
      };
    });
  }

  private checkLanguageCompleteness(code: string): boolean {
    if (!this.translations[code] || !this.translations.en) return false;
    
    const validation = translationValidator.validateTranslations({
      en: this.translations.en,
      [code]: this.translations[code]
    });
    
    return validation.isValid;
  }

  // Метод для получения перевода с фолбэком
  getTranslationWithFallback(code: string, fallbackCode = 'en'): TranslationData {
    return this.translations[code] || this.translations[fallbackCode] || this.translations.en;
  }

  // Получение списка языков с указанием статуса завершенности
  getLanguageProgress(): Array<LanguageInfo & { completionPercentage: number }> {
    return this.supportedLanguages.map(lang => {
      const completionPercentage = this.calculateCompletionPercentage(lang.code);
      return {
        ...lang,
        completionPercentage
      };
    });
  }

  private calculateCompletionPercentage(code: string): number {
    if (!this.translations[code] || !this.translations.en) return 0;
    
    const baseKeys = translationValidator['getTranslationKeys'](this.translations.en);
    const langKeys = translationValidator['getTranslationKeys'](this.translations[code]);
    
    return Math.round((langKeys.length / baseKeys.length) * 100);
  }
}

export const languageManager = new LanguageManager();
