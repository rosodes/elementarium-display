
import { languages } from './types';
import cloneDeep from 'lodash/cloneDeep';

// Получить все пути до ключей в объекте, например: a.b.c
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

// Получить значение по пути или undefined
function getByPath(obj: any, path: string): any {
  return path.split('.').reduce((acc, k) => (acc ? acc[k] : undefined), obj);
}

// Основной валидатор для одного языка
export function validateLanguages(langs: Record<string, any>, fallbackLang: string = 'en') {
  const base = langs[fallbackLang];
  if (!base) {
    console.warn(`[i18n validator] Fallback language "${fallbackLang}" not found!`);
    return;
  }
  const allPaths = getAllPaths(base);

  Object.entries(langs).forEach(([lang, translation]) => {
    if (lang === fallbackLang) return;
    let missing: string[] = [];
    for (const path of allPaths) {
      const value = getByPath(translation, path);
      if (typeof value === 'undefined' || value === null) {
        missing.push(path);
        // Авто-подстановка заглушки для отрисовки (оставляем чтобы было видно в UI)
        setByPath(translation, path, `[MISSING ${lang}]: ${path}`);
      }
    }
    if (missing.length > 0) {
      // eslint-disable-next-line no-console
      console.warn(`[i18n validator] Missing translations for "${lang}":`, missing);
    }
  });
}

// Записать значение по пути (тут безопасно, потому что структура сборки одинаковая)
function setByPath(obj: any, path: string, value: any) {
  const keys = path.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!(keys[i] in current)) current[keys[i]] = {};
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}

// Получить перевод по пути или заглушку
export function getTranslation(langObj: any, path: string): any {
  const val = getByPath(langObj, path);
  return typeof val === 'undefined' ? `[MISSING PATH]: ${path}` : val;
}

