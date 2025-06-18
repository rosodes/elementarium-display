
import { TranslationData } from ".";
import { legendEn } from "./modules/legend";
import { detailsEn } from "./modules/details";
import { categoriesEn } from "./modules/categories";
import { uiEn } from "./modules/ui";
import { elementDetailsEn } from "./modules/elementDetails";
import { footerEn } from "./modules/footer";
import { enElements } from "./modules/elements/en";

// Вынесем commonZhCN отдельно для удобства правок — добавим полный перевод
const commonZhCN = {
  title: "元素周期表",
  subtitle: "现代交互式元素周期表，包含科学数据、历史和应用。",
  selectLanguage: "选择语言",
  search: "搜索",
  toggleTheme: "切换主题"
};

export const zhCN: TranslationData = {
  ...commonZhCN,
  legend: legendEn,
  details: detailsEn,
  categories: categoriesEn,
  ui: { ...uiEn, elements: enElements },
  elementDetails: elementDetailsEn,
  footer: footerEn
};
