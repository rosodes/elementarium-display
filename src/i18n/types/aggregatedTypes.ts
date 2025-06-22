import { LanguageKey } from './languageTypes';
import { CommonTranslations } from './commonTypes';
import { LegendTranslations, DetailsTranslations, CategoriesTranslations, QuickStatsTranslations } from './translationInterfaceTypes';
import { UITranslations } from '../modules/ui';
import { ElementDetailsTranslations } from './elementDetailsTypes';
import { FooterTranslations } from './footerTypes';

export interface PeriodicTableTranslations {
  readonly title: string;
  readonly subtitle: string;
  readonly searchPlaceholder: string;
  readonly showAdvanced: string;
  readonly hideAdvanced: string;
  readonly elementsFound: string;
  readonly filtersActive: string;
  readonly searching: string;
  readonly noResults: string;
  readonly noResultsDescription: string;
  readonly clearSearch: string;
  readonly viewMode: string;
  readonly table: string;
  readonly cards: string;
  readonly compact: string;
}

export interface TranslationData extends CommonTranslations {
  readonly common: CommonTranslations;
  readonly legend: LegendTranslations;
  readonly details: DetailsTranslations;
  readonly categories: CategoriesTranslations;
  readonly ui: UITranslations & { elements: Record<string, string> };
  readonly elementDetails: ElementDetailsTranslations;
  readonly footer: FooterTranslations;
  readonly quickStats: QuickStatsTranslations;
  readonly PeriodicTable?: PeriodicTableTranslations;
  readonly loading?: string;
}

// Type for the languages object
export type LanguagesRecord = Readonly<Record<LanguageKey, TranslationData>>;

// Function types for language management
export type AddLanguageFunction = (key: LanguageKey, translations: TranslationData) => void;
