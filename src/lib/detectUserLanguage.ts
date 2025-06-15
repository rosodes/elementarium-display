
// Универсальная функция для определения языка пользователя по best practices
const supportedLangs = ['en', 'ru', 'uk'];

export function detectUserLanguage(): string {
  // 1. Из URL (React Router: /:lang/...)
  let langFromUrl = '';
  if (typeof window !== 'undefined') {
    const path = window.location.pathname;
    const match = path.match(/^\/([a-zA-Z-]{2,5})\b/);
    if (match && supportedLangs.includes(match[1])) {
      langFromUrl = match[1];
    }
  }
  if (langFromUrl) return langFromUrl;

  // 2. localStorage (и legacy ключи)
  try {
    if (typeof window !== 'undefined') {
      const preferred = localStorage.getItem('preferredLanguage');
      if (preferred && supportedLangs.includes(preferred)) return preferred;
      const legacy = localStorage.getItem('language');
      if (legacy && supportedLangs.includes(legacy)) return legacy;
    }
  } catch {}

  // 3. (User profile settings, если когда-либо появятся — нет в текущей реализации)
  // 4. По языку браузера
  if (typeof navigator !== 'undefined') {
    const nav = navigator.language.split('-')[0];
    if (supportedLangs.includes(nav)) return nav;
  }

  // 5. Fallback на английский
  return 'en';
}
