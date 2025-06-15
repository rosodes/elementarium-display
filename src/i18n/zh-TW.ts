
import { TranslationData } from ".";
import { legendEn } from "./modules/legend";
import { detailsEn } from "./modules/details";
import { categoriesEn } from "./modules/categories";
import { uiEn } from "./modules/ui";
import { elementDetailsEn } from "./modules/elementDetails";
import { footerEn } from "./modules/footer";
import { enElements } from "./modules/elements/en";

const commonZhTW = {
  title: "元素週期表",
  subtitle: "現代互動式元素週期表，包含科學數據、歷史與應用。",
  selectLanguage: "選擇語言",
  search: "搜尋",
  toggleTheme: "切換主題"
};

export const zhTW: TranslationData = {
  ...commonZhTW,
  legend: legendEn,
  details: detailsEn,
  categories: categoriesEn,
  ui: { ...uiEn, elements: enElements },
  elementDetails: elementDetailsEn,
  footer: footerEn
};
