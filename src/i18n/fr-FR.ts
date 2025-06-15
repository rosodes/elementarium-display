
import { TranslationData } from ".";
import { legendEn } from "./modules/legend";
// Модули можно отдельно перевести позже. Сейчас используем английские stub.
import { detailsEn } from "./modules/details";
import { categoriesEn } from "./modules/categories";
import { uiEn } from "./modules/ui";
import { elementDetailsEn } from "./modules/elementDetails";
import { footerEn } from "./modules/footer";
import { enElements } from "./modules/elements/en";

// Базовые переводы для главной страницы (заголовок, подзаголовок, язык, поиск, тема)
const commonFr = {
  title: "Tableau périodique des éléments",
  subtitle: "Tableau périodique moderne et interactif, avec données scientifiques, histoire et applications.",
  selectLanguage: "Choisir la langue",
  search: "Recherche",
  toggleTheme: "Changer de thème"
};

export const frFR: TranslationData = {
  ...commonFr,
  legend: legendEn,
  details: detailsEn,
  categories: categoriesEn,
  ui: { ...uiEn, elements: enElements },
  elementDetails: elementDetailsEn,
  footer: footerEn
};
