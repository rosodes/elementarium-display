
import { TranslationData } from ".";
import { commonRu } from "./modules/common";
import { legendRu } from "./modules/legend";
import { detailsRu } from "./modules/details";
import { categoriesRu } from "./modules/categories";
import { uiRu } from "./modules/ui";
import { elementDetailsRu } from "./modules/elementDetails";
import { footerRu } from "./modules/footer";
import { ruElements } from "./modules/elements/ru";

// Create a complete Russian translation by combining all modules
export const ru: TranslationData = {
  ...commonRu,
  legend: legendRu,
  details: detailsRu,
  categories: categoriesRu,
  ui: { ...uiRu, elements: ruElements },
  elementDetails: elementDetailsRu,
  footer: footerRu
};
