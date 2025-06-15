
import { TranslationData } from ".";
import { commonEn } from "./modules/common";
import { legendEn } from "./modules/legend";
import { detailsEn } from "./modules/details";
import { categoriesEn } from "./modules/categories";
import { uiEn } from "./modules/ui";
import { elementDetailsEn } from "./modules/elementDetails";
import { footerEn } from "./modules/footer";
import { enElements } from "./modules/elements/en";

const commonHi = {
  title: "तत्वों की आवर्त सारणी",
  subtitle: "आधुनिक इंटरैक्टिव आवर्त सारणी, वैज्ञानिक डेटा, इतिहास और अनुप्रयोग सहित।",
  selectLanguage: "भाषा चुनें",
  search: "खोजें",
  toggleTheme: "थीम बदलें"
};

export const hi: TranslationData = {
  ...commonHi,
  legend: legendEn,
  details: detailsEn,
  categories: categoriesEn,
  ui: { ...uiEn, elements: enElements },
  elementDetails: elementDetailsEn,
  footer: footerEn
};
