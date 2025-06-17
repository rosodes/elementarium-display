
export interface FooterTranslations {
  madeWith: string;
  by: string;
  dataNote: string;
  credits: string;
  version: string;
  copyright: string;
  license: string;
  contributors: string;
  // Main page content
  mainTitle: string;
  mainSubtitle: string;
  whyImportant: string;
  mainDescription1: string;
  mainDescription2: string;
  colorLegendTitle: string;
  colorCategoryColumn: string;
  descriptionColumn: string;
  sBlockDescription: string;
  pBlockDescription: string;
  dBlockDescription: string;
  fBlockDescription: string;
  alkaliMetalsDescription: string;
  postTransitionDescription: string;
  metalloidsDescription: string;
  unknownPropertiesDescription: string;
  nobleGasesDescription: string;
  radioactiveDescription: string;
}

export const footerEn: FooterTranslations = {
  madeWith: "Made with",
  by: "by React team",
  dataNote: "Data sourced from various scientific databases and publications",
  credits: "Based on the latest IUPAC recommendations",
  version: "Version 1.0.0",
  copyright: "© 2023 Periodic Table",
  license: "Open source under MIT license",
  contributors: "Thanks to all contributors",
  // Main page content
  mainTitle: "Periodic Table of Elements – Chemistry Fundamentals",
  mainSubtitle: "Why is the Periodic System important?",
  whyImportant: "Why is the Periodic System important?",
  mainDescription1: "The Periodic Table of Elements, created by Dmitri Mendeleev, is the foundation of modern chemistry. It helps understand the properties of elements, their structure and interactions. Thanks to it, scientists predicted the existence of new elements and explained natural patterns. Today the Periodic Table is used worldwide — in science, education and industry.",
  mainDescription2: "The Periodic Table is a unique scientific achievement serving as the basis of all modern chemistry. Created by Dmitri Ivanovich Mendeleev in 1869, it organizes all known chemical elements by their atomic numbers, combining them into groups and periods with similar properties. This approach allows quick access to element information, predicting characteristics of yet undiscovered substances, and seeing patterns in matter structure. Today the table has become an indispensable tool for students, teachers and scientists worldwide. It helps research new materials, develops medicine, energy, nanotechnology and many other fields of science and industry. The simplicity of its structure hides deep natural logic, helping to reveal the mysteries of the surrounding world. This reference contains all elements, their properties, history and modern scientific data.",
  colorLegendTitle: "Color Legend by Blocks and Element Categories",
  colorCategoryColumn: "Color / Category",
  descriptionColumn: "Description",
  sBlockDescription: "Alkali and alkaline earth metals (Na, Ca)",
  pBlockDescription: "Nonmetals, halogens, noble gases, some metals (C, O, F, Ne)",
  dBlockDescription: "Transition metals (Fe, Cu, Zn)",
  fBlockDescription: "Lanthanides and actinides (Ce, U)",
  alkaliMetalsDescription: "Example: lithium, sodium (Li, Na)",
  postTransitionDescription: "Example: aluminum, indium (Al, In)",
  metalloidsDescription: "Example: boron, silicon (B, Si)",
  unknownPropertiesDescription: "Elements with unknown or incomplete characteristics",
  nobleGasesDescription: "Example: helium, neon, argon (He, Ne, Ar)",
  radioactiveDescription: "Marked with pulsing indicator/background, easily noticeable in the table"
};
