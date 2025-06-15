
import { languages } from './types';
import cloneDeep from 'lodash/cloneDeep';

// Получить все пути до ключей в объекте
function getAllPaths(obj: any, prefix = ''): string[] {
  let paths: string[] = [];
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      paths = paths.concat(getAllPaths(obj[key], prefix ? `${prefix}.${key}` : key));
    } else {
      paths.push(prefix ? `${prefix}.${key}` : key);
    }
  }
  return paths;
}

// Получить значение по пути
function getByPath(obj: any, path: string): any {
  return path.split('.').reduce((acc, k) => (acc ? acc[k] : undefined), obj);
}

// Записать значение по пути
function setByPath(obj: any, path: string, value: any) {
  const keys = path.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!(keys[i] in current)) current[keys[i]] = {};
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}

// Улучшенный валидатор для всех языков и компонентов
export class TranslationValidator {
  private static instance: TranslationValidator;
  private missingTranslations: Map<string, string[]> = new Map();
  private componentUsage: Map<string, Set<string>> = new Map();
  
  static getInstance(): TranslationValidator {
    if (!TranslationValidator.instance) {
      TranslationValidator.instance = new TranslationValidator();
    }
    return TranslationValidator.instance;
  }

  // Валидация всех языков
  validateAllLanguages(fallbackLang: string = 'en') {
    const base = languages[fallbackLang];
    if (!base) {
      console.warn(`[Enhanced i18n validator] Fallback language "${fallbackLang}" not found!`);
      return;
    }

    const allPaths = getAllPaths(base);
    this.missingTranslations.clear();

    Object.entries(languages).forEach(([lang, translation]) => {
      if (lang === fallbackLang) return;
      
      let missing: string[] = [];
      for (const path of allPaths) {
        const value = getByPath(translation, path);
        if (typeof value === 'undefined' || value === null) {
          missing.push(path);
          // Автоподстановка заглушки
          setByPath(translation, path, `[MISSING ${lang}]: ${path}`);
        }
      }
      
      if (missing.length > 0) {
        this.missingTranslations.set(lang, missing);
        console.warn(`[Enhanced i18n validator] Missing translations for "${lang}":`, missing);
      }
    });

    // Отчет о валидации
    this.generateValidationReport();
  }

  // Трекинг использования переводов в компонентах
  trackComponentUsage(componentName: string, translationPath: string) {
    if (!this.componentUsage.has(componentName)) {
      this.componentUsage.set(componentName, new Set());
    }
    this.componentUsage.get(componentName)!.add(translationPath);
  }

  // Получение перевода с трекингом
  getTranslation(langObj: any, path: string, componentName?: string): any {
    if (componentName) {
      this.trackComponentUsage(componentName, path);
    }
    
    const val = getByPath(langObj, path);
    if (typeof val === 'undefined') {
      console.warn(`[Enhanced i18n validator] Missing translation path: ${path} in component: ${componentName || 'unknown'}`);
      return `[MISSING PATH]: ${path}`;
    }
    return val;
  }

  // Проверка компонента на полноту переводов
  validateComponent(componentName: string, requiredPaths: string[]) {
    const missingInComponents: Record<string, string[]> = {};
    
    Object.entries(languages).forEach(([lang, translation]) => {
      const missing = requiredPaths.filter(path => {
        const value = getByPath(translation, path);
        return typeof value === 'undefined' || value === null;
      });
      
      if (missing.length > 0) {
        missingInComponents[lang] = missing;
      }
    });

    if (Object.keys(missingInComponents).length > 0) {
      console.warn(`[Enhanced i18n validator] Component "${componentName}" has missing translations:`, missingInComponents);
    }

    return missingInComponents;
  }

  // Генерация отчета валидации
  generateValidationReport() {
    if (typeof window !== 'undefined' && import.meta.env.DEV) {
      console.group('📋 Translation Validation Report');
      
      // Общая статистика
      const totalLanguages = Object.keys(languages).length;
      const languagesWithIssues = this.missingTranslations.size;
      
      console.log(`🌐 Total languages: ${totalLanguages}`);
      console.log(`⚠️ Languages with missing translations: ${languagesWithIssues}`);
      
      // Детали по языкам
      if (this.missingTranslations.size > 0) {
        console.group('Missing translations by language:');
        this.missingTranslations.forEach((missing, lang) => {
          console.warn(`${lang}: ${missing.length} missing keys`, missing);
        });
        console.groupEnd();
      }
      
      // Использование компонентами
      if (this.componentUsage.size > 0) {
        console.group('Translation usage by components:');
        this.componentUsage.forEach((paths, component) => {
          console.log(`${component}: ${paths.size} translation keys`, Array.from(paths));
        });
        console.groupEnd();
      }
      
      console.groupEnd();
    }
  }

  // Получение статистики
  getValidationStats() {
    return {
      totalLanguages: Object.keys(languages).length,
      languagesWithIssues: this.missingTranslations.size,
      missingTranslations: Object.fromEntries(this.missingTranslations),
      componentUsage: Object.fromEntries(
        Array.from(this.componentUsage.entries()).map(([k, v]) => [k, Array.from(v)])
      )
    };
  }
}

// Экспорт singleton instance
export const translationValidator = TranslationValidator.getInstance();

// Хук для валидации переводов в компонентах
export function useTranslationValidation(componentName: string, requiredPaths: string[]) {
  if (import.meta.env.DEV) {
    translationValidator.validateComponent(componentName, requiredPaths);
  }
}
