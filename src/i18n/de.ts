
import { TranslationData } from ".";
import { commonEn } from "./modules/common";
import { legendEn } from "./modules/legend";
import { detailsEn } from "./modules/details";
import { categoriesEn } from "./modules/categories";
import { uiEn } from "./modules/ui";
import { elementDetailsEn } from "./modules/elementDetails";
import { footerEn } from "./modules/footer";
import { enElements } from "./modules/elements/en";

const commonDe = {
  title: "Periodensystem der Elemente",
  subtitle: "Modernes interaktives Periodensystem mit wissenschaftlichen Daten, Geschichte und Anwendungen.",
  selectLanguage: "Sprache wählen",
  search: "Suchen",
  toggleTheme: "Thema wechseln"
};

export const de: TranslationData = {
  ...commonDe,
  legend: legendEn,
  details: detailsEn,
  categories: categoriesEn,
  ui: { ...uiEn, elements: enElements },
  elementDetails: elementDetailsEn,
  footer: footerEn
};
