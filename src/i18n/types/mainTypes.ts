
import { CommonTranslations } from './commonTypes';
import { LegendTranslations } from './legendTypes';
import { DetailsTranslations } from './detailsTypes';
import { CategoriesTranslations } from './categoriesTypes';
import { UITranslations } from './uiTypes';
import { ElementDetailsTranslations } from './elementDetailsTypes';
import { FooterTranslations } from './footerTypes';

export interface TranslationData extends CommonTranslations {
  legend: LegendTranslations;
  details: DetailsTranslations;
  categories: CategoriesTranslations;
  ui: UITranslations;
  elementDetails: ElementDetailsTranslations;
  footer: FooterTranslations;
  loading?: string;
}

export type LanguageKey = 'en' | 'ru' | 'uk';

export const languages: Record<LanguageKey, TranslationData> = {} as Record<LanguageKey, TranslationData>;

export function addLanguage(key: string, translations: TranslationData): void {
  (languages as Record<string, TranslationData>)[key] = translations;
}
