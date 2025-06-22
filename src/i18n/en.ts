import { TranslationData } from "./types";
import { commonEn } from "./modules/common/en";
import { legendEn } from "./modules/legend/en";
import { detailsEn } from "./modules/details/en";
import { categoriesEn } from "./modules/categories/en";
import { uiEn } from "./modules/ui";
import { elementDetailsEn } from "./modules/elementDetails/en";
import { footerEn } from "./modules/footer/en";
import { enElements } from "./modules/elements/en";
import { quickStatsEn } from "./modules/quickStats/en";

// Create a complete English translation by combining all modules
export const en: TranslationData = {
  title: commonEn.title,
  subtitle: commonEn.subtitle,
  selectLanguage: commonEn.selectLanguage,
  search: commonEn.search,
  toggleTheme: commonEn.toggleTheme,
  CleanPeriodicTable: commonEn.CleanPeriodicTable,
  QuickStats: commonEn.QuickStats,
  MainPageInstructions: commonEn.MainPageInstructions,
  common: commonEn,
  legend: legendEn,
  details: detailsEn,
  categories: categoriesEn,
  ui: { ...uiEn, elements: enElements },
  elementDetails: elementDetailsEn,
  footer: footerEn,
  quickStats: quickStatsEn
};
