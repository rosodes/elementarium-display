
import { TranslationData } from ".";
import { commonEn } from "./modules/common";
import { legendEn } from "./modules/legend";
import { detailsEn } from "./modules/details";
import { categoriesEn } from "./modules/categories";
import { uiEn } from "./modules/ui";
import { elementDetailsEn } from "./modules/elementDetails";
import { footerEn } from "./modules/footer";
import { enElements } from "./modules/elements/en";

const commonPtBR = {
  title: "Tabela Periódica dos Elementos",
  subtitle: "Tabela periódica interativa moderna com dados científicos, história e aplicações.",
  selectLanguage: "Selecionar idioma",
  search: "Pesquisar",
  toggleTheme: "Alternar tema"
};

export const ptBR: TranslationData = {
  ...commonPtBR,
  legend: legendEn,
  details: detailsEn,
  categories: categoriesEn,
  ui: { ...uiEn, elements: enElements },
  elementDetails: elementDetailsEn,
  footer: footerEn
};
