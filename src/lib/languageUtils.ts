// Утилиты для работы с языками согласно международным стандартам
const SUPPORTED_LANGUAGES = ['en', 'ru', 'uk', 'fr'] as const;
const DEFAULT_LANGUAGE = 'en'; // Канонический язык
const LANGUAGE_COOKIE_NAME = 'preferred-language';
const LANGUAGE_COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 год в секундах

export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

// Утилиты для работы с cookies
export const cookieUtils = {
  get(name: string): string | null {
    if (typeof document === 'undefined') return null;
    
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      const cookieValue = parts.pop()?.split(';').shift();
      return cookieValue || null;
    }
    return null;
  },

  set(name: string, value: string, maxAge: number = LANGUAGE_COOKIE_MAX_AGE): void {
    if (typeof document === 'undefined') return;
    
    document.cookie = `${name}=${value}; max-age=${maxAge}; path=/; SameSite=Lax`;
  },

  remove(name: string): void {
    if (typeof document === 'undefined') return;
    
    document.cookie = `${name}=; max-age=0; path=/`;
  }
};

// Парсинг Accept-Language заголовка
export function parseAcceptLanguage(acceptLanguage: string): string[] {
  if (!acceptLanguage) return [];

  return acceptLanguage
    .split(',')
    .map(lang => {
      const [code, qValue] = lang.trim().split(';q=');
      const quality = qValue ? parseFloat(qValue) : 1.0;
      const languageCode = code.split('-')[0].toLowerCase(); // Берем только основную часть (en из en-US)
      
      return { code: languageCode, quality };
    })
    .sort((a, b) => b.quality - a.quality) // Сортируем по качеству (приоритету)
    .map(item => item.code)
    .filter((code, index, arr) => arr.indexOf(code) === index); // Убираем дубликаты
}

// Получение Accept-Language из браузера
export function getBrowserLanguages(): string[] {
  if (typeof navigator === 'undefined') return [];

  const languages: string[] = [];

  // navigator.languages (массив предпочитаемых языков)
  if (navigator.languages) {
    languages.push(...navigator.languages.map(lang => lang.split('-')[0].toLowerCase()));
  }

  // navigator.language (основной язык)
  if (navigator.language) {
    const mainLang = navigator.language.split('-')[0].toLowerCase();
    if (!languages.includes(mainLang)) {
      languages.push(mainLang);
    }
  }

  // Убираем дубликаты и возвращаем уникальные языки
  return languages.filter((lang, index, arr) => arr.indexOf(lang) === index);
}

// Проверка поддержки языка
export function isSupportedLanguage(lang: string): lang is SupportedLanguage {
  return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage);
}

// Основная функция определения языка согласно best practices
export function detectUserLanguage(): SupportedLanguage {
  // 1. ПРИОРИТЕТ 1: Explicit selection in URL
  if (typeof window !== 'undefined') {
    const urlMatch = window.location.pathname.match(/^\/([a-z]{2})\//);
    if (urlMatch && isSupportedLanguage(urlMatch[1])) {
      return urlMatch[1];
    }
  }

  // 2. ПРИОРИТЕТ 2: Cookie with saved preference
  const savedLanguage = cookieUtils.get(LANGUAGE_COOKIE_NAME);
  if (savedLanguage && isSupportedLanguage(savedLanguage)) {
    return savedLanguage;
  }

  // 3. ПРИОРИТЕТ 3: Accept-Language header (браузерные предпочтения)
  const browserLanguages = getBrowserLanguages();
  for (const browserLang of browserLanguages) {
    if (isSupportedLanguage(browserLang)) {
      return browserLang;
    }
  }

  // 4. FALLBACK: Default language (английский - канонический)
  return DEFAULT_LANGUAGE;
}

// Сохранение выбранного языка
export function saveLanguagePreference(language: SupportedLanguage): void {
  cookieUtils.set(LANGUAGE_COOKIE_NAME, language);
  
  // Также сохраняем в localStorage для совместимости
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('preferredLanguage', language);
  }
}

// Получение канонического URL для языка
export function getCanonicalUrl(language: SupportedLanguage, path: string = ''): string {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  
  if (language === DEFAULT_LANGUAGE) {
    // Для английского языка используем канонический URL без префикса
    return `${baseUrl}${path}`;
  } else {
    // Для других языков добавляем языковой префикс
    return `${baseUrl}/${language}${path}`;
  }
}

// Определение текущего языка из URL
export function getCurrentLanguageFromUrl(): SupportedLanguage {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
  
  const urlMatch = window.location.pathname.match(/^\/([a-z]{2})\//);
  if (urlMatch && isSupportedLanguage(urlMatch[1])) {
    return urlMatch[1];
  }
  
  return DEFAULT_LANGUAGE;
} 