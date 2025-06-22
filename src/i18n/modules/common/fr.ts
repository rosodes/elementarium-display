import type { CommonTranslations } from "../../types/commonTypes";

export const commonFr: CommonTranslations = {
  title: "Tableau Périodique des Éléments",
  subtitle: "Tableau périodique interactif avec des informations détaillées sur les éléments",
  selectLanguage: "Sélectionner la langue",
  search: "Rechercher",
  toggleTheme: "Changer de thème",
  
  // Traductions pour CleanPeriodicTable
  CleanPeriodicTable: {
    tableTitle: "Tableau périodique des éléments",
    tableSubtitle: "Tableau de Mendeleïev avec éléments interactifs",
    lanthanides: "Lanthanides",
    actinides: "Actinides",
    legendTitle: "Légende",
    radioactive: "Radioactif",
    group: "Groupe",
    period: "Période",
    ariaLabels: {
      periodicTable: "Tableau périodique interactif des éléments de Mendeleïev",
      mainTable: "Tableau principal des éléments chimiques",
      fBlock: "Éléments du bloc f : lanthanides et actinides",
      lanthanides: "Lanthanides",
      actinides: "Actinides",
      groupNumbers: "Numéros de groupes du tableau périodique",
      periodNumbers: "Numéros de périodes",
      group: "Groupe",
      period: "Période",
      radioactiveElement: "Élément radioactif",
      atomicNumber: "Numéro atomique",
      symbol: "Symbole",
      name: "Nom",
      atomicMass: "Masse atomique",
      elementInfo: "numéro atomique {atomic}, symbole {symbol}, catégorie {category}, masse atomique {weight}",
      unknown: "inconnue"
    },
    labels: {
      lanthanidesCount: "Lanthanides (58-71)",
      actinidesCount: "Actinides (90-103)",
      period6: "Période 6",
      period7: "Période 7",
      elements: "éléments"
    }
  },

  // Traductions pour QuickStats
  QuickStats: {
    totalElements: "Total des éléments",
    naturalElements: "Naturels",
    syntheticElements: "Synthétiques",
    structure: "Périodes × Groupes"
  },

  // Traductions pour les instructions de la page principale
  MainPageInstructions: {
    title: "Comment utiliser le tableau",
    clickElement: {
      title: "Cliquez sur un élément",
      description: "Cliquez sur n'importe quel élément pour voir des informations détaillées sur ses propriétés, son histoire et ses applications"
    },
    useSearch: {
      title: "Utilisez la recherche",
      description: "Recherchez des éléments par nom, symbole, numéro atomique ou catégorie pour un accès rapide"
    },
    studyColors: {
      title: "Étudiez les couleurs",
      description: "Chaque couleur correspond à une catégorie spécifique d'éléments selon la classification internationale"
    },
    legendToggle: {
      show: "🎨 Afficher la légende des couleurs",
      hide: "🎨 Masquer la légende des couleurs"
    }
  }
};
