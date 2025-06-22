import type { LegendTranslations } from "../../types/translationInterfaceTypes";

export const legendEn: LegendTranslations = {
  title: "Element Color Scheme",
  description: "Each element category has its own color according to international standards",
  categories: {
    hydrogen: {
      label: "Hydrogen",
      description: "Unique element - the lightest and simplest"
    },
    alkaliMetal: {
      label: "Alkali metals",
      description: "Highly reactive metals of group 1 (Li, Na, K, Rb, Cs, Fr)"
    },
    alkalineEarthMetal: {
      label: "Alkaline earth metals",
      description: "Reactive metals of group 2 (Be, Mg, Ca, Sr, Ba, Ra)"
    },
    transitionMetal: {
      label: "Transition metals",
      description: "d-block metals with variable valency"
    },
    postTransitionMetal: {
      label: "Post-transition metals",
      description: "p-block metals (Al, Ga, In, Sn, Tl, Pb, Bi)"
    },
    metalloid: {
      label: "Metalloids",
      description: "Elements with intermediate properties (B, Si, Ge, As, Sb, Te)"
    },
    nonmetal: {
      label: "Nonmetals",
      description: "Nonmetallic elements (C, N, O, P, S, Se)"
    },
    halogen: {
      label: "Halogens",
      description: "Highly reactive nonmetals of group 17 (F, Cl, Br, I, At)"
    },
    nobleGas: {
      label: "Noble gases",
      description: "Inert gases of group 18 (He, Ne, Ar, Kr, Xe, Rn, Og)"
    },
    lanthanide: {
      label: "Lanthanides",
      description: "Rare earth f-block elements (Ce-Lu)"
    },
    actinide: {
      label: "Actinides",
      description: "Radioactive f-block elements (Th-Lr)"
    },
    unknown: {
      label: "Unknown properties",
      description: "Synthetic elements with undetermined properties"
    }
  },
  additionalInfo: {
    title: "Additional designations",
    radioactive: "Radioactive elements",
    lanthanides: "6* - Lanthanides (period 6)",
    actinides: "7* - Actinides (period 7)"
  },
  accessibility: "All colors meet WCAG AAA standard for maximum contrast and accessibility",
  elementCount: {
    one: "element",
    few: "elements", 
    many: "elements"
  }
};
