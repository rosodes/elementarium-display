export interface ElementDetailsTranslations {
  showMoreInfo?: string;
  viewOnWikipedia?: string;
  closeDetails?: string;
  properties?: string;
  physicalProperties?: string;
  atomicProperties?: string;
  moreDetails?: string;
  overview?: string;
  history?: string;
  applications?: string;
  basicInfo?: string;
  series?: string;
  atomicWeight?: string;
  electronConfig?: string;
  discovered?: string;
  group?: string;
  period?: string;
  meltingPoint?: string;
  boilingPoint?: string;
  density?: string;
  electronegativity?: string;
  valence?: string;
  oxidationStates?: string;
  atomicStructure?: string;
  electronDistribution?: string;
  shell?: string;
  atomicRadius?: string;
  calculated?: string;
  empirical?: string;
  covalent?: string;
  additionalInfo?: string;
  atomicNumber?: string;
  symbol?: string;
  element?: string;
  is?: string;
  inPeriodGroup?: string;
  discoveredIn?: string;
  knownSinceAncient?: string;
  meltingBoilingPoints?: string;
  densityIs?: string;
  usedIn?: string;
  commonProperties?: string;
  elementTable?: string;
  electronShellVisualization?: string;
  previousElement?: string;
  nextElement?: string;
  isotopes?: string;
  // Additional properties that were missing
  industry?: string;
  discovery?: string;
  structure?: string;
  shells?: string;
  meltingBoilingPoint?: string;
  electronProperties?: string;
  electronAffinity?: string;
  abundance?: string;
  universe?: string;
  solar?: string;
  crust?: string;
  atomicRadii?: string;
  vanDerWaals?: string;
  quantumNumbers?: string;
  principal?: string;
  azimuthal?: string;
  magnetic?: string;
  orbitalDiagram?: string;
  keyApplications?: string;
  industrialUses?: string;
  everydayUses?: string;
  funFacts?: string;
  // F-block specific translations
  fBlockElements?: string;
  fBlockDescription?: string;
  // NEW: Add missing oxidation state message keys
  noOxidationStatesForNobleGases?: string;
  noOxidationStates?: string;
  // Required translation properties
  notAvailable: string;  // Required
  backToTable: string;   // Required
  previous: string;      // Required
  next: string;          // Required
}

// Import from individual language files
export { elementDetailsEn } from './elementDetails/en';
export { elementDetailsRu } from './elementDetails/ru';
export { elementDetailsUk } from './elementDetails/uk';
