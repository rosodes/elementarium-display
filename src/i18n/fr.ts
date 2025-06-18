
import { TranslationData } from "./types";
import { commonFr } from "./modules/common/fr";
import { legendFr } from "./modules/legend/fr";
import { detailsFr } from "./modules/details/fr";
import { categoriesFr } from "./modules/categories/fr";
import { uiFr } from "./modules/ui/fr";
import { elementDetailsFr } from "./modules/elementDetails/fr";
import { footerFr } from "./modules/footer/fr";
import { frElements } from "./modules/elements/fr";

export const fr: TranslationData = {
  title: commonFr.title,
  subtitle: commonFr.subtitle,
  selectLanguage: commonFr.selectLanguage,
  search: commonFr.search,
  toggleTheme: commonFr.toggleTheme,
  legend: legendFr,
  details: detailsFr,
  categories: categoriesFr,
  ui: { ...uiFr, elements: frElements },
  elementDetails: elementDetailsFr,
  footer: footerFr
};
