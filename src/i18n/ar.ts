
import { TranslationData } from ".";
import { legendEn } from "./modules/legend";
import { detailsEn } from "./modules/details";
import { categoriesEn } from "./modules/categories";
import { uiEn } from "./modules/ui";
import { elementDetailsEn } from "./modules/elementDetails";
import { footerEn } from "./modules/footer";
import { enElements } from "./modules/elements/en";

const commonAr = {
  title: "الجدول الدوري للعناصر",
  subtitle: "جدول دوري تفاعلي حديث يشمل بيانات علمية وتاريخًا واستخدامات.",
  selectLanguage: "اختر اللغة",
  search: "بحث",
  toggleTheme: "تغيير النمط"
};

export const ar: TranslationData = {
  ...commonAr,
  legend: legendEn,
  details: detailsEn,
  categories: categoriesEn,
  ui: { ...uiEn, elements: enElements },
  elementDetails: elementDetailsEn,
  footer: footerEn
};
