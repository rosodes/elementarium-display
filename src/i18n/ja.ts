
import { TranslationData } from ".";
import { commonEn } from "./modules/common";
import { legendEn } from "./modules/legend";
import { detailsEn } from "./modules/details";
import { categoriesEn } from "./modules/categories";
import { uiEn } from "./modules/ui";
import { elementDetailsEn } from "./modules/elementDetails";
import { footerEn } from "./modules/footer";
import { enElements } from "./modules/elements/en";

const commonJa = {
  title: "元素の周期表",
  subtitle: "科学データ、歴史、応用を備えた現代のインタラクティブな周期表。",
  selectLanguage: "言語を選択",
  search: "検索",
  toggleTheme: "テーマを切り替え"
};

export const ja: TranslationData = {
  ...commonJa,
  legend: legendEn,
  details: detailsEn,
  categories: categoriesEn,
  ui: { ...uiEn, elements: enElements },
  elementDetails: elementDetailsEn,
  footer: footerEn
};
