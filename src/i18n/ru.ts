
import { TranslationData } from "./types";
import { commonRu } from "./modules/common/ru";
import { legendRu } from "./modules/legend/ru";
import { detailsRu } from "./modules/details/ru";
import { categoriesRu } from "./modules/categories/ru";
import { uiRu } from "./modules/ui/ru";
import { elementDetailsRu } from "./modules/elementDetails/ru";
import { footerRu } from "./modules/footer/ru";
import { ruElements } from "./modules/elements/ru";

export const ru: TranslationData = {
  title: commonRu.title,
  subtitle: commonRu.subtitle,
  selectLanguage: commonRu.selectLanguage,
  search: commonRu.search,
  toggleTheme: commonRu.toggleTheme,
  legend: legendRu,
  details: detailsRu,
  categories: categoriesRu,
  ui: { ...uiRu, elements: ruElements },
  elementDetails: elementDetailsRu,
  footer: footerRu
};
