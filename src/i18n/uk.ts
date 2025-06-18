
import { TranslationData } from "./types";
import { commonUk } from "./modules/common/uk";
import { legendUk } from "./modules/legend/uk";
import { detailsUk } from "./modules/details/uk";
import { categoriesUk } from "./modules/categories/uk";
import { uiUk } from "./modules/ui/uk";
import { elementDetailsUk } from "./modules/elementDetails/uk";
import { footerUk } from "./modules/footer/uk";
import { ukElements } from "./modules/elements/uk";

export const uk: TranslationData = {
  title: commonUk.title,
  subtitle: commonUk.subtitle,
  selectLanguage: commonUk.selectLanguage,
  search: commonUk.search,
  toggleTheme: commonUk.toggleTheme,
  legend: legendUk,
  details: detailsUk,
  categories: categoriesUk,
  ui: { ...uiUk, elements: ukElements },
  elementDetails: elementDetailsUk,
  footer: footerUk
};
