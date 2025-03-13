
import { CommonTranslations, commonEn, commonRu } from './modules/common';
import { LegendTranslations, legendEn, legendRu } from './modules/legend';
import { DetailsTranslations, detailsEn, detailsRu } from './modules/details';
import { CategoriesTranslations, categoriesEn, categoriesRu } from './modules/categories';
import { UITranslations, uiEn, uiRu } from './modules/ui';
import { ElementDetailsTranslations, elementDetailsEn, elementDetailsRu } from './modules/elementDetails';
import { FooterTranslations, footerEn, footerRu } from './modules/footer';

// Import element names for English and Russian
import { enElements } from './modules/elements/en';
import { ruElements } from './modules/elements/ru';

export interface TranslationData extends CommonTranslations {
  legend: LegendTranslations;
  details: DetailsTranslations;
  categories: CategoriesTranslations;
  ui: UITranslations;
  elementDetails: ElementDetailsTranslations;
  footer: FooterTranslations;
}

export type LanguageKey = 'en' | 'ru';

// Merge all translations
const en: TranslationData = {
  ...commonEn,
  legend: legendEn,
  details: detailsEn,
  categories: categoriesEn,
  ui: { ...uiEn, elements: enElements },
  elementDetails: elementDetailsEn,
  footer: footerEn
};

const ru: TranslationData = {
  ...commonRu,
  legend: legendRu,
  details: detailsRu,
  categories: categoriesRu,
  ui: { ...uiRu, elements: ruElements },
  elementDetails: elementDetailsRu,
  footer: footerRu
};

export const languages: Record<LanguageKey, TranslationData> = {
  en,
  ru
};
