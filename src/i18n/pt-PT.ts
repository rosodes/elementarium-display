
import { TranslationData } from ".";
import { legendEn } from "./modules/legend";
import { detailsEn } from "./modules/details";
import { categoriesEn } from "./modules/categories";
import { uiEn } from "./modules/ui";
import { elementDetailsEn } from "./modules/elementDetails";
import { footerEn } from "./modules/footer";
import { enElements } from "./modules/elements/en";

const commonPtPT = {
  title: "Tabela Periódica dos Elementos",
  subtitle: "Tabela periódica interativa moderna com dados científicos, história e aplicações.",
  selectLanguage: "Selecionar idioma",
  search: "Pesquisar",
  toggleTheme: "Alternar tema"
};

export const ptPT: TranslationData = {
  ...commonPtPT,
  legend: legendEn,
  details: detailsEn,
  categories: categoriesEn,
  ui: { ...uiEn, elements: enElements },
  elementDetails: elementDetailsEn,
  footer: footerEn
};
