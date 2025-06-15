
// Fichier principal d'export de la localisation française — module principal, structure miroir de en.ts

import { TranslationData } from ".";
import { commonFr } from "./modules/common/fr";
import { legendFr } from "./modules/legend/fr";
import { detailsFr } from "./modules/details/fr";
import { categoriesFr } from "./modules/categories/fr";
import { uiFr } from "./modules/ui/fr";
import { elementDetailsFr } from "./modules/elementDetails/fr";
import { footerFr } from "./modules/footer/fr";

// Export unifié du bundle de localisation fr-FR, structure conforme à en.ts
export const frFR: TranslationData = {
  ...commonFr,
  legend: legendFr,
  details: detailsFr,
  categories: categoriesFr,
  ui: uiFr,
  elementDetails: elementDetailsFr,
  footer: footerFr
};
