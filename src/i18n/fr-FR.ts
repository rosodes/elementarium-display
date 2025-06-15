
import { TranslationData } from ".";
// Французский перевод для ЛЕГЕНДЫ
const legendFr = {
  metals: "Métaux",
  nonmetals: "Non-métaux",
  metalloids: "Métalloïdes",
  alkali: "Métaux alcalins",
  alkaline: "Métaux alcalino-terreux",
  transition: "Métaux de transition",
  postTransition: "Métaux pauvres",
  lanthanides: "Lanthanides",
  actinides: "Actinides",
  noble: "Gaz nobles",
  sBlock: "Bloc s",
  pBlock: "Bloc p",
  dBlock: "Bloc d",
  fBlock: "Bloc f",
  radioactive: "Radioactif",
  title: "Légende",
  categoriesTitle: "Catégories",
  blocksTitle: "Blocs",
  otherTitle: "Autres",
};

// Французский перевод для групп (CATEGORIES)
const categoriesFr = {
  alkali: "Alcalins",
  alkaline: "Alcalino-terreux",
  transition: "Transition",
  postTransition: "Métaux pauvres",
  metalloid: "Métalloïdes",
  nonmetal: "Non-métaux",
  noble: "Gaz nobles",
  lanthanide: "Lanthanides",
  actinide: "Actinides",
  unknown: "Inconnu",
};

// Французский перевод для футера
const footerFr = {
  madeWith: "Fait avec ❤️",
  by: "par la communauté",
  dataNote: "Données scientifiques fournies à titre indicatif ; veuillez toujours vérifier auprès de sources officielles.",
  credits: "Crédits : Données issues de Wikipedia, PubChem, et autres bases scientifiques.",
  version: "Version",
  copyright: "© 2024 Tableau périodique interactif",
  license: "Licence : Creative Commons BY-SA",
  contributors: "Contributeurs",
};

// Базовые переводы для главной страницы (заголовок, подзаголовок, язык, поиск, тема)
const commonFr = {
  title: "Tableau périodique des éléments",
  subtitle: "Tableau périodique moderne et interactif, avec données scientifiques, histoire et applications.",
  selectLanguage: "Choisir la langue",
  search: "Recherche",
  toggleTheme: "Changer de thème"
};

import { detailsEn } from "./modules/details";
import { uiEn } from "./modules/ui";
import { elementDetailsEn } from "./modules/elementDetails";
import { enElements } from "./modules/elements/en";

export const frFR: TranslationData = {
  ...commonFr,
  legend: legendFr,
  details: detailsEn,
  categories: categoriesFr,
  ui: { ...uiEn, elements: enElements },
  elementDetails: elementDetailsEn,
  footer: footerFr
};
