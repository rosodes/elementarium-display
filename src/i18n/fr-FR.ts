
// Fichier principal d'export de la localisation française — module principal, structure miroir de en.ts

import { TranslationData } from ".";
import { commonFr } from "./modules/common/fr";
import { legendFr } from "./modules/legend/fr";
import { detailsFr } from "./modules/details/fr";
import { categoriesFr } from "./modules/categories/fr";
import { uiFr } from "./modules/ui/fr";
import { footerFr } from "./modules/footer/fr";

// Export unifié du bundle de localisation fr-FR, structure conforme à en.ts
export const frFR: TranslationData = {
  ...commonFr,
  legend: legendFr,
  details: detailsFr,
  categories: categoriesFr,
  ui: uiFr,
  elementDetails: {
    tabs: {
      overview: "Aperçu",
      properties: "Propriétés",
      structure: "Structure atomique",
      applications: "Applications",
      history: "Histoire",
      abundance: "Abondance",
      compounds: "Composés / Chimie",
      bio: "Rôle biologique / Toxicité",
      production: "Production / Synthèse",
      safety: "Sécurité / Précautions",
      symbol: "Symbole",
      stability: "Stabilité"
    },
    showMoreInfo: "Afficher plus d'informations",
    viewOnWikipedia: "Voir sur Wikipédia",
    closeDetails: "Fermer",
    stability: "Stabilité",
    notAvailable: "Information non disponible",
    backToTable: "Retour au tableau",
    previous: "Précédent",
    next: "Suivant"
  },
  footer: footerFr
};
