
import { en } from './languages/en';
import { ru } from './languages/ru';

export type ElementTranslations = Record<string, string>;

export interface LegendTranslations {
  metals: string;
  nonmetals: string;
  metalloids: string;
  alkali: string;
  alkaline: string;
  transition: string;
  postTransition: string;
  lanthanides: string;
  actinides: string;
  noble: string;
  sBlock: string;
  pBlock: string;
  dBlock: string;
  fBlock: string;
  radioactive: string;
  title: string;
  categoriesTitle: string;
  blocksTitle: string;
  otherTitle: string;
}

export interface DetailsTranslations {
  properties: string;
  atomicNumber: string;
  symbol: string;
  name: string;
  atomicWeight: string;
  category: string;
  group: string;
  period: string;
  block: string;
  electronConfiguration: string;
  oxidationStates: string;
  electronegativity: string;
  atomicRadius: string;
  ionizationEnergy: string;
  meltingPoint: string;
  boilingPoint: string;
  density: string;
  yearDiscovered: string;
  naturalState: string;
  description: string;
}

export interface CategoriesTranslations {
  alkali: string;
  alkaline: string;
  transition: string;
  postTransition: string;
  metalloid: string;
  nonmetal: string;
  noble: string;
  lanthanide: string;
  actinide: string;
  unknown: string;
}

export interface UITranslations {
  close?: string;
  back?: string;
  more?: string;
  view?: string;
  loading?: string;
  radioactive?: string;
  themeToggle?: string;
  language?: string;
  elements?: ElementTranslations;
  search?: string;
  filter?: string;
  reset?: string;
  noResults?: string;
  period?: string;
  group?: string;
  periodNumbersLabel?: string;
  groupNumbersLabel?: string;
  searchPlaceholder?: string;
  searchResults?: string;
  searchNoResults?: string;
  clearSearch?: string;
  searchShortcut?: string;
  accessibilityLabel?: string;
  elementTable?: string;
  focusMode?: string;
}

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
}

export interface FooterTranslations {
  madeWith?: string;
  by?: string;
  dataNote?: string;
  credits?: string;
  version?: string;
  copyright?: string;
  license?: string;
  contributors?: string;
}

export interface CommonTranslations {
  title: string;
  subtitle: string;
  selectLanguage: string;
  search: string;
  toggleTheme: string;
}

export interface TranslationData {
  // Common translations
  title: string;
  subtitle: string;
  selectLanguage: string;
  search: string;
  toggleTheme: string;
  
  // Section translations
  legend: LegendTranslations;
  details: DetailsTranslations;
  categories: CategoriesTranslations;
  ui: UITranslations;
  elementDetails: ElementDetailsTranslations;
  footer: FooterTranslations;
}

export type LanguageKey = 'en' | 'ru';

export const languages: Record<LanguageKey, TranslationData> = {
  en,
  ru
};

// Helper function to add new languages to the system
export function addLanguage(key: string, translations: TranslationData): void {
  (languages as Record<string, TranslationData>)[key] = translations;
}
