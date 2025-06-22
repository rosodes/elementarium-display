import { TranslationData } from "./types";
import { commonRu } from "./modules/common/ru";
import { legendRu } from "./modules/legend/ru";
import { detailsRu } from "./modules/details/ru";
import { categoriesRu } from "./modules/categories/ru";
import { uiRu } from "./modules/ui";
import { elementDetailsRu } from "./modules/elementDetails/ru";
import { footerRu } from "./modules/footer/ru";
import { ruElements } from "./modules/elements/ru";
import { quickStatsRu } from "./modules/quickStats/ru";

export const ru: TranslationData = {
  title: commonRu.title,
  subtitle: commonRu.subtitle,
  selectLanguage: commonRu.selectLanguage,
  search: commonRu.search,
  toggleTheme: commonRu.toggleTheme,
  CleanPeriodicTable: commonRu.CleanPeriodicTable,
  QuickStats: commonRu.QuickStats,
  MainPageInstructions: commonRu.MainPageInstructions,
  common: commonRu,
  legend: legendRu,
  details: detailsRu,
  categories: categoriesRu,
  ui: { ...uiRu, elements: ruElements },
  elementDetails: elementDetailsRu,
  footer: footerRu,
  quickStats: quickStatsRu
};
