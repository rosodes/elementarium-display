
import { TranslationData } from "./types";
import { commonEn } from "./modules/common";
import { legendFr } from "./modules/legend/fr";
import { detailsEn } from "./modules/details";
import { categoriesFr } from "./modules/categories/fr";
import { uiFr } from "./modules/ui/fr";
import { elementDetailsFr } from "./modules/elementDetails/fr";
import { footerFr } from "./modules/footer/fr";
import { frElements } from "./modules/elements/fr";

export const fr: TranslationData = {
  title: "Tableau Périodique des Éléments",
  subtitle: "Tableau périodique interactif avec des informations détaillées sur les éléments",
  selectLanguage: "Sélectionner la langue",
  search: "Rechercher",
  toggleTheme: "Changer de thème",
  legend: legendFr,
  details: detailsEn,
  categories: categoriesFr,
  ui: { ...uiFr, elements: frElements },
  elementDetails: elementDetailsFr,
  footer: footerFr
};
