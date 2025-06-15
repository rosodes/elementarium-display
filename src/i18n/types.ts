
// Re-export all types from individual files
export type { ElementTranslations } from './types/elementTypes';
export type { LegendTranslations, DetailsTranslations, CategoriesTranslations, UITranslations } from './types/translationInterfaceTypes';
export type { ElementDetailsTranslations } from './types/elementDetailsTypes';
export type { FooterTranslations } from './types/footerTypes';
export type { CommonTranslations } from './types/commonTypes';
export type { TranslationData, LanguagesRecord, AddLanguageFunction } from './types/aggregatedTypes';
export type { LanguageKey, ElementSymbolKey } from './types/languageTypes';
export { languages, addLanguage } from './types/mainTypes';
