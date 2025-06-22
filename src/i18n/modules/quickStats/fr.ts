import type { QuickStatsTranslations } from "../../types/translationInterfaceTypes";

export const quickStatsFr: QuickStatsTranslations = {
  title: "Statistiques du Tableau Périodique",
  subtitle: "Analyse complète des 118 éléments chimiques avec détails par catégories, propriétés et caractéristiques",
  sections: {
    mainStats: {
      title: "Statistiques générales des éléments",
      totalElements: "Total des éléments",
      foundElements: "Éléments trouvés",
      naturalElements: "Éléments naturels",
      syntheticElements: "Éléments synthétiques",
      tableStructure: "Structure du tableau",
      descriptions: {
        total: "Éléments chimiques dans le tableau périodique",
        natural: "Se trouvent naturellement dans la nature",
        synthetic: "Créés artificiellement en laboratoire",
        structure: "périodes × groupes"
      }
    },
    blocks: {
      title: "Blocs électroniques des éléments",
      sBlock: "bloc s",
      pBlock: "bloc p",
      dBlock: "bloc d",
      fBlock: "bloc f",
      descriptions: {
        sBlock: "Métaux alcalins et alcalino-terreux",
        pBlock: "Métaux, non-métaux et gaz nobles",
        dBlock: "Métaux de transition avec orbitales d incomplètes",
        fBlock: "Lanthanides et actinides"
      }
    },
    states: {
      title: "États de la matière à température ambiante (20°C)",
      solids: "Solides",
      liquids: "Liquides",
      gases: "Gaz",
      descriptions: {
        solids: "La plupart des métaux et certains non-métaux",
        liquids: "Mercure (Hg) et brome (Br)",
        gases: "Gaz nobles, hydrogène, azote et autres"
      }
    },
    history: {
      title: "Périodes historiques de découverte des éléments",
      ancient: "Éléments anciens",
      classical: "Chimie classique",
      modern: "Éléments modernes",
      descriptions: {
        ancient: "Connus de l'humanité depuis l'antiquité",
        classical: "Découverts aux XVIIIe-XIXe siècles",
        modern: "Éléments transuraniens des XXe-XXIe siècles"
      }
    },
    categories: {
      title: "Classification détaillée des éléments chimiques",
      alkaliMetals: "Métaux alcalins",
      alkalineEarthMetals: "Métaux alcalino-terreux",
      transitionMetals: "Métaux de transition",
      postTransitionMetals: "Métaux post-transition",
      metalloids: "Métalloïdes",
      nonmetals: "Non-métaux",
      halogens: "Halogènes",
      nobleGases: "Gaz nobles",
      lanthanides: "Lanthanides",
      actinides: "Actinides",
      unknown: "Propriétés inconnues"
    }
  },
  labels: {
    percentage: "% du total",
    ofTotal: "% du total",
    outOf: "sur",
    elements: "éléments",
    periods: "périodes",
    groups: "groupes"
  }
}; 