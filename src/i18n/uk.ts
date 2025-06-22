import { TranslationData } from "./types";
import { commonUk } from "./modules/common/uk";
import { legendUk } from "./modules/legend/uk";
import { detailsEn } from "./modules/details/en";
import { categoriesEn } from "./modules/categories/en";
import { uiUk } from "./modules/ui";
import { elementDetailsEn } from "./modules/elementDetails/en";
import { footerUk } from "./modules/footer/uk";
import { ukElements } from "./modules/elements/uk";
import { quickStatsUk } from "./modules/quickStats/uk";

export const uk: TranslationData = {
  title: commonUk.title,
  subtitle: commonUk.subtitle,
  selectLanguage: commonUk.selectLanguage,
  search: commonUk.search,
  toggleTheme: commonUk.toggleTheme,
  CleanPeriodicTable: commonUk.CleanPeriodicTable,
  QuickStats: commonUk.QuickStats,
  MainPageInstructions: commonUk.MainPageInstructions,
  common: commonUk,
  legend: legendUk,
  details: detailsEn,
  categories: categoriesEn,
  ui: { ...uiUk, elements: ukElements },
  elementDetails: elementDetailsEn,
  footer: footerUk,
  quickStats: quickStatsUk
};
