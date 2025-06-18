
import { TranslationData } from "./types";
import { commonEn } from "./modules/common";
import { legendUk } from "./modules/legend/uk";
import { detailsEn } from "./modules/details";
import { categoriesEn } from "./modules/categories";
import { uiUk } from "./modules/ui/uk";
import { elementDetailsEn } from "./modules/elementDetails";
import { footerUk } from "./modules/footer/uk";
import { ukElements } from "./modules/elements/uk";

export const uk: TranslationData = {
  title: "Періодична таблиця елементів",
  subtitle: "Інтерактивна періодична таблиця з детальною інформацією про елементи",
  selectLanguage: "Оберіть мову",
  search: "Пошук",
  toggleTheme: "Переключити тему",
  legend: legendUk,
  details: detailsEn,
  categories: categoriesEn,
  ui: { ...uiUk, elements: ukElements },
  elementDetails: elementDetailsEn,
  footer: footerUk
};
