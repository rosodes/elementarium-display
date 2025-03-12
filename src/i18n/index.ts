
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
  };
  
  ui?: {
    close?: string;
    back?: string;
    more?: string;
    view?: string;
    loading?: string;
    radioactive?: string;
    elements?: {
      [key: string]: string;
    };
  };
  
  elementDetails?: {
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
  };
}

export type LanguageKey = 'en' | 'ru';

export const languages: Record<LanguageKey, TranslationData> = {
  en,
  ru
};
