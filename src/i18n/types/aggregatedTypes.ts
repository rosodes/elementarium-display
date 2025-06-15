
import { LanguageKey } from './languageTypes';
import { CommonTranslations } from './commonTypes';
import { LegendTranslations, DetailsTranslations, CategoriesTranslations, UITranslations } from './translationInterfaceTypes';
import { ElementDetailsTranslations } from './elementDetailsTypes';
import { FooterTranslations } from './footerTypes';

export interface TranslationData extends CommonTranslations {
  readonly legend: LegendTranslations;
  readonly details: DetailsTranslations;
  readonly categories: CategoriesTranslations;
  readonly ui: UITranslations;
  readonly elementDetails: ElementDetailsTranslations;
  readonly footer: FooterTranslations;
  readonly loading?: string;
}

// Type for the languages object
export type LanguagesRecord = Readonly<Record<LanguageKey, TranslationData>>;

// Function types for language management
export type AddLanguageFunction = (key: LanguageKey, translations: TranslationData) => void;
