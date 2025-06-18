
import { ElementTranslations } from './elementTypes';
import { LegendTranslations, DetailsTranslations, CategoriesTranslations, UITranslations } from './translationInterfaceTypes';
import { ElementDetailsTranslations } from './elementDetailsTypes';
import { FooterTranslations } from './footerTypes';
import { CommonTranslations } from './commonTypes';

export interface TranslationData extends CommonTranslations {
  legend: LegendTranslations;
  details: DetailsTranslations;
  categories: CategoriesTranslations;
  ui: UITranslations & { elements?: ElementTranslations };
  elementDetails: ElementDetailsTranslations;
  footer: FooterTranslations;
}

export type LanguageKey = 'en' | 'ru' | 'uk' | 'fr' | 'es' | 'de' | 'zh-CN' | 'zh-TW' | 'ja' | 'hi' | 'ar' | 'bn' | 'pt-BR' | 'pt-PT' | 'pa';

// Function to add new language dynamically
export const addLanguage = (key: string, translations: TranslationData) => {
  // This will be implemented in the language manager
  console.log(`Adding language: ${key}`, translations);
};

export type {
  ElementTranslations,
  LegendTranslations,
  DetailsTranslations,
  CategoriesTranslations,
  UITranslations,
  ElementDetailsTranslations,
  FooterTranslations,
  CommonTranslations
};
