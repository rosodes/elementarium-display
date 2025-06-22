import type { QuickStatsTranslations } from "../../types/translationInterfaceTypes";

export const quickStatsEn: QuickStatsTranslations = {
  title: "Periodic Table Statistics",
  subtitle: "Complete analytics of all 118 chemical elements with detailed breakdown by categories, properties and characteristics",
  sections: {
    mainStats: {
      title: "General element statistics",
      totalElements: "Total elements",
      foundElements: "Elements found",
      naturalElements: "Natural elements",
      syntheticElements: "Synthetic elements",
      tableStructure: "Table structure",
      descriptions: {
        total: "Chemical elements in the periodic table",
        natural: "Occur naturally in nature",
        synthetic: "Created artificially in laboratories",
        structure: "periods × groups"
      }
    },
    blocks: {
      title: "Electronic blocks of elements",
      sBlock: "s-block",
      pBlock: "p-block",
      dBlock: "d-block",
      fBlock: "f-block",
      descriptions: {
        sBlock: "Alkali and alkaline earth metals",
        pBlock: "Metals, nonmetals and noble gases",
        dBlock: "Transition metals with unfilled d-orbitals",
        fBlock: "Lanthanides and actinides"
      }
    },
    states: {
      title: "States of matter at room temperature (20°C)",
      solids: "Solids",
      liquids: "Liquids",
      gases: "Gases",
      descriptions: {
        solids: "Most metals and some nonmetals",
        liquids: "Mercury (Hg) and bromine (Br)",
        gases: "Noble gases, hydrogen, nitrogen and others"
      }
    },
    history: {
      title: "Historical periods of element discovery",
      ancient: "Ancient elements",
      classical: "Classical chemistry",
      modern: "Modern elements",
      descriptions: {
        ancient: "Known to humanity since antiquity",
        classical: "Discovered in the 18th-19th centuries",
        modern: "Transuranium elements of the 20th-21st century"
      }
    },
    categories: {
      title: "Detailed classification of chemical elements",
      alkaliMetals: "Alkali metals",
      alkalineEarthMetals: "Alkaline earth metals",
      transitionMetals: "Transition metals",
      postTransitionMetals: "Post-transition metals",
      metalloids: "Metalloids",
      nonmetals: "Nonmetals",
      halogens: "Halogens",
      nobleGases: "Noble gases",
      lanthanides: "Lanthanides",
      actinides: "Actinides",
      unknown: "Unknown properties"
    }
  },
  labels: {
    percentage: "% of total",
    ofTotal: "% of total",
    outOf: "out of",
    elements: "elements",
    periods: "periods",
    groups: "groups"
  }
}; 