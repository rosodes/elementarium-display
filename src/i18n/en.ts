
import { TranslationData } from ".";
import { commonEn } from "./modules/common";
import { legendEn } from "./modules/legend";
import { detailsEn } from "./modules/details";
import { categoriesEn } from "./modules/categories";
import { uiEn } from "./modules/ui";
import { elementDetailsEn } from "./modules/elementDetails";
import { footerEn } from "./modules/footer";
import { enElements } from "./modules/elements/en";

// Create a complete English translation by combining all modules
export const en: TranslationData = {
  title: commonEn.title,
  subtitle: commonEn.subtitle,
  selectLanguage: commonEn.selectLanguage,
  search: commonEn.search,
  toggleTheme: commonEn.toggleTheme,
  legend: legendEn,
  details: detailsEn,
  categories: categoriesEn,
  ui: { ...uiEn, elements: enElements },
  elementDetails: elementDetailsEn,
  footer: footerEn
};
