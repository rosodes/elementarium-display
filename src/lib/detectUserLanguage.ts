// Импортируем новую систему определения языка
import { detectUserLanguage as newDetectUserLanguage, SupportedLanguage } from './languageUtils';

// Универсальная функция для определения языка пользователя согласно best practices
const supportedLangs = ['en', 'ru', 'uk', 'fr'];

export function detectUserLanguage(): string {
  // Используем новую систему с правильными приоритетами:
  // 1. Explicit selection in URL
  // 2. Cookie with saved preference  
  // 3. Accept-Language header
  // 4. Fallback to English (canonical)
  
  return newDetectUserLanguage();
}
