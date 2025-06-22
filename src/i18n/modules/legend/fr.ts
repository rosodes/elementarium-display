import type { LegendTranslations } from "../../types/translationInterfaceTypes";

export const legendFr: LegendTranslations = {
  title: "Schéma de couleurs des éléments",
  description: "Chaque catégorie d'éléments a sa propre couleur selon les normes internationales",
  categories: {
    hydrogen: {
      label: "Hydrogène",
      description: "Élément unique - le plus léger et le plus simple"
    },
    alkaliMetal: {
      label: "Métaux alcalins",
      description: "Métaux très réactifs du groupe 1 (Li, Na, K, Rb, Cs, Fr)"
    },
    alkalineEarthMetal: {
      label: "Métaux alcalino-terreux",
      description: "Métaux réactifs du groupe 2 (Be, Mg, Ca, Sr, Ba, Ra)"
    },
    transitionMetal: {
      label: "Métaux de transition",
      description: "Métaux du bloc d avec valence variable"
    },
    postTransitionMetal: {
      label: "Métaux post-transition",
      description: "Métaux du bloc p (Al, Ga, In, Sn, Tl, Pb, Bi)"
    },
    metalloid: {
      label: "Métalloïdes",
      description: "Éléments aux propriétés intermédiaires (B, Si, Ge, As, Sb, Te)"
    },
    nonmetal: {
      label: "Non-métaux",
      description: "Éléments non métalliques (C, N, O, P, S, Se)"
    },
    halogen: {
      label: "Halogènes",
      description: "Non-métaux très réactifs du groupe 17 (F, Cl, Br, I, At)"
    },
    nobleGas: {
      label: "Gaz nobles",
      description: "Gaz inertes du groupe 18 (He, Ne, Ar, Kr, Xe, Rn, Og)"
    },
    lanthanide: {
      label: "Lanthanides",
      description: "Terres rares du bloc f (Ce-Lu)"
    },
    actinide: {
      label: "Actinides",
      description: "Éléments radioactifs du bloc f (Th-Lr)"
    },
    unknown: {
      label: "Propriétés inconnues",
      description: "Éléments synthétiques aux propriétés indéterminées"
    }
  },
  additionalInfo: {
    title: "Désignations supplémentaires",
    radioactive: "Éléments radioactifs",
    lanthanides: "6* - Lanthanides (période 6)",
    actinides: "7* - Actinides (période 7)"
  },
  accessibility: "Toutes les couleurs respectent la norme WCAG AAA pour un contraste et une accessibilité maximums",
  elementCount: {
    one: "élément",
    few: "éléments", 
    many: "éléments"
  }
};
