
import { en } from './en';
import { ru } from './ru';

export interface TranslationData {
  title: string;
  subtitle: string;
  selectLanguage: string;
  search: string;
  toggleTheme: string;
  
  legend: {
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
  };
  
  details: {
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
  };
  
  categories: {
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
  };
  
  footer: {
    madeWith: string;
    by: string;
    dataNote?: string;
    credits?: string;
  };
  
  ui: {
    close?: string;
    back?: string;
    more?: string;
    view?: string;
    loading?: string;
    radioactive?: string;
    themeToggle?: string;
    elements?: {
      [key: string]: string;
    };
  };
  
  elementDetails: {
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
    atomicRadius?: string;
    shell?: string;
    calculated?: string;
    empirical?: string;
    covalent?: string;
    additionalInfo?: string;
  };
}

export type LanguageKey = 'en' | 'ru';

export const languages: Record<LanguageKey, TranslationData> = {
  en,
  ru
};
