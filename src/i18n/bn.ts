
import { TranslationData } from ".";
import { commonEn } from "./modules/common";
import { legendEn } from "./modules/legend";
import { detailsEn } from "./modules/details";
import { categoriesEn } from "./modules/categories";
import { uiEn } from "./modules/ui";
import { elementDetailsEn } from "./modules/elementDetails";
import { footerEn } from "./modules/footer";
import { enElements } from "./modules/elements/en";

const commonBn = {
  title: "মৌলিক মৌলসমূহের পর্যায় সারণি",
  subtitle: "আধুনিক ইন্টারেক্টিভ পর্যায় সারণি, বৈজ্ঞানিক তথ্য, ইতিহাস ও ব্যবহারসহ।",
  selectLanguage: "ভাষা নির্বাচন করুন",
  search: "অনুসন্ধান",
  toggleTheme: "থিম পরিবর্তন করুন"
};

export const bn: TranslationData = {
  ...commonBn,
  legend: legendEn,
  details: detailsEn,
  categories: categoriesEn,
  ui: { ...uiEn, elements: enElements },
  elementDetails: elementDetailsEn,
  footer: footerEn
};
