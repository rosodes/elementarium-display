
import { en } from './en';
import { ru } from './ru';
import { uk } from './uk';
import { addLanguage } from './types';

export function loadLanguages(): void {
  // Register all available languages
  addLanguage('en', en);
  addLanguage('ru', ru);
  addLanguage('uk', uk);
}
