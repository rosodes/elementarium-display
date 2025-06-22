import { TranslationData } from "./types";
import { commonFr } from "./modules/common/fr";
import { legendFr } from "./modules/legend/fr";
import { detailsFr } from "./modules/details/fr";
import { categoriesFr } from "./modules/categories/fr";
import { uiFr } from "./modules/ui";
import { elementDetailsFr } from "./modules/elementDetails/fr";
import { footerFr } from "./modules/footer/fr";
import { frElements } from "./modules/elements/fr";
import { quickStatsFr } from "./modules/quickStats/fr";

export const fr: TranslationData = {
  title: commonFr.title,
  subtitle: commonFr.subtitle,
  selectLanguage: commonFr.selectLanguage,
  search: commonFr.search,
  toggleTheme: commonFr.toggleTheme,
  CleanPeriodicTable: commonFr.CleanPeriodicTable,
  QuickStats: commonFr.QuickStats,
  MainPageInstructions: commonFr.MainPageInstructions,
  common: commonFr,
  legend: legendFr,
  details: detailsFr,
  categories: categoriesFr,
  ui: { ...uiFr, elements: frElements },
  elementDetails: elementDetailsFr,
  footer: footerFr,
  quickStats: quickStatsFr
};
