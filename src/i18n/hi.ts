
import { TranslationData } from ".";
import { legendEn } from "./modules/legend";
import { detailsEn } from "./modules/details";
import { categoriesEn } from "./modules/categories";
import { uiEn } from "./modules/ui";
import { elementDetailsEn } from "./modules/elementDetails";
import { footerEn } from "./modules/footer";
import { enElements } from "./modules/elements/en";

const commonHi = {
  title: "तत्वों की आवर्त सारणी",
  subtitle: "आधुनिक इंटरएक्टिव आवर्त सारणी, जिसमें वैज्ञानिक डेटा, इतिहास एवं अनुप्रयोग हैं।",
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
