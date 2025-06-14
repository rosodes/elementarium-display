
// Strict translation key types
export type LanguageKey = 'en' | 'ru' | 'uk';

// Element translation keys (symbols in lowercase)
export type ElementSymbolKey = 
  | 'h' | 'he' | 'li' | 'be' | 'b' | 'c' | 'n' | 'o' | 'f' | 'ne'
  | 'na' | 'mg' | 'al' | 'si' | 'p' | 's' | 'cl' | 'ar' | 'k' | 'ca'
  | 'sc' | 'ti' | 'v' | 'cr' | 'mn' | 'fe' | 'co' | 'ni' | 'cu' | 'zn'
  | 'ga' | 'ge' | 'as' | 'se' | 'br' | 'kr' | 'rb' | 'sr' | 'y' | 'zr'
  | 'nb' | 'mo' | 'tc' | 'ru' | 'rh' | 'pd' | 'ag' | 'cd' | 'in' | 'sn'
  | 'sb' | 'te' | 'i' | 'xe' | 'cs' | 'ba' | 'la' | 'ce' | 'pr' | 'nd'
  | 'pm' | 'sm' | 'eu' | 'gd' | 'tb' | 'dy' | 'ho' | 'er' | 'tm' | 'yb'
  | 'lu' | 'hf' | 'ta' | 'w' | 're' | 'os' | 'ir' | 'pt' | 'au' | 'hg'
  | 'tl' | 'pb' | 'bi' | 'po' | 'at' | 'rn' | 'fr' | 'ra' | 'ac' | 'th'
  | 'pa' | 'u' | 'np' | 'pu' | 'am' | 'cm' | 'bk' | 'cf' | 'es' | 'fm'
  | 'md' | 'no' | 'lr' | 'rf' | 'db' | 'sg' | 'bh' | 'hs' | 'mt' | 'ds'
  | 'rg' | 'cn' | 'nh' | 'fl' | 'mc' | 'lv' | 'ts' | 'og';

// Improved translation interfaces with better type safety
export interface ElementTranslations {
  readonly [K in ElementSymbolKey]?: string;
}

export interface LegendTranslations {
  readonly metals: string;
  readonly nonmetals: string;
  readonly metalloids: string;
  readonly alkali: string;
  readonly alkaline: string;
  readonly transition: string;
  readonly postTransition: string;
  readonly lanthanides: string;
  readonly actinides: string;
  readonly noble: string;
  readonly sBlock: string;
  readonly pBlock: string;
  readonly dBlock: string;
  readonly fBlock: string;
  readonly radioactive: string;
  readonly title: string;
  readonly categoriesTitle: string;
  readonly blocksTitle: string;
  readonly otherTitle: string;
}

export interface DetailsTranslations {
  readonly properties: string;
  readonly atomicNumber: string;
  readonly symbol: string;
  readonly name: string;
  readonly atomicWeight: string;
  readonly category: string;
  readonly group: string;
  readonly period: string;
  readonly block: string;
  readonly electronConfiguration: string;
  readonly oxidationStates: string;
  readonly electronegativity: string;
  readonly atomicRadius: string;
  readonly ionizationEnergy: string;
  readonly meltingPoint: string;
  readonly boilingPoint: string;
  readonly density: string;
  readonly yearDiscovered: string;
  readonly naturalState: string;
  readonly description: string;
}

export interface CategoriesTranslations {
  readonly alkali: string;
  readonly alkaline: string;
  readonly transition: string;
  readonly postTransition: string;
  readonly metalloid: string;
  readonly nonmetal: string;
  readonly noble: string;
  readonly lanthanide: string;
  readonly actinide: string;
  readonly unknown: string;
}

export interface UITranslations {
  readonly close?: string;
  readonly back?: string;
  readonly more?: string;
  readonly view?: string;
  readonly loading?: string;
  readonly radioactive?: string;
  readonly themeToggle?: string;
  readonly language?: string;
  readonly elements?: ElementTranslations;
  readonly search?: string;
  readonly filter?: string;
  readonly reset?: string;
  readonly noResults?: string;
  readonly period?: string;
  readonly group?: string;
  readonly periodNumbersLabel?: string;
  readonly groupNumbersLabel?: string;
  readonly searchPlaceholder?: string;
  readonly searchResults?: string;
  readonly searchNoResults?: string;
  readonly clearSearch?: string;
  readonly searchShortcut?: string;
  readonly accessibilityLabel?: string;
  readonly elementTable?: string;
  readonly focusMode?: string;
  readonly usageDistribution?: string;
  readonly simulatedData?: string;
  readonly note?: string;
  readonly elementRemoved?: string;
  readonly elementBookmarked?: string;
  readonly linkCopied?: string;
  readonly linkCopiedToClipboard?: string;
}

export interface ElementDetailsTranslations {
  readonly showMoreInfo?: string;
  readonly viewOnWikipedia?: string;
  readonly closeDetails?: string;
  readonly properties?: string;
  readonly physicalProperties?: string;
  readonly atomicProperties?: string;
  readonly moreDetails?: string;
  readonly overview?: string;
  readonly history?: string;
  readonly applications?: string;
  readonly basicInfo?: string;
  readonly series?: string;
  readonly atomicWeight?: string;
  readonly electronConfig?: string;
  readonly discovered?: string;
  readonly group?: string;
  readonly period?: string;
  readonly meltingPoint?: string;
  readonly boilingPoint?: string;
  readonly density?: string;
  readonly electronegativity?: string;
  readonly valence?: string;
  readonly oxidationStates?: string;
  readonly atomicStructure?: string;
  readonly electronDistribution?: string;
  readonly shell?: string;
  readonly atomicRadius?: string;
  readonly calculated?: string;
  readonly empirical?: string;
  readonly covalent?: string;
  readonly additionalInfo?: string;
  readonly atomicNumber?: string;
  readonly symbol?: string;
  readonly element?: string;
  readonly is?: string;
  readonly inPeriodGroup?: string;
  readonly discoveredIn?: string;
  readonly knownSinceAncient?: string;
  readonly meltingBoilingPoints?: string;
  readonly densityIs?: string;
  readonly usedIn?: string;
  readonly commonProperties?: string;
  readonly elementTable?: string;
  readonly electronShellVisualization?: string;
  readonly previousElement?: string;
  readonly nextElement?: string;
  readonly isotopes?: string;
  readonly industry?: string;
  readonly discovery?: string;
  readonly structure?: string;
  readonly shells?: string;
  readonly meltingBoilingPoint?: string;
  readonly electronProperties?: string;
  readonly electronAffinity?: string;
  readonly abundance?: string;
  readonly universe?: string;
  readonly solar?: string;
  readonly crust?: string;
  readonly atomicRadii?: string;
  readonly vanDerWaals?: string;
  readonly quantumNumbers?: string;
  readonly principal?: string;
  readonly azimuthal?: string;
  readonly magnetic?: string;
  readonly orbitalDiagram?: string;
  readonly keyApplications?: string;
  readonly industrialUses?: string;
  readonly everydayUses?: string;
  readonly funFacts?: string;
  // Required translation properties
  readonly notAvailable: string;
  readonly backToTable: string;
  readonly previous: string;
  readonly next: string;
}

export interface FooterTranslations {
  readonly madeWith?: string;
  readonly by?: string;
  readonly dataNote?: string;
  readonly credits?: string;
  readonly version?: string;
  readonly copyright?: string;
  readonly license?: string;
  readonly contributors?: string;
}

export interface CommonTranslations {
  readonly title: string;
  readonly subtitle: string;
  readonly selectLanguage: string;
  readonly search: string;
  readonly toggleTheme: string;
}

export interface TranslationData extends CommonTranslations {
  readonly legend: LegendTranslations;
  readonly details: DetailsTranslations;
  readonly categories: CategoriesTranslations;
  readonly ui: UITranslations;
  readonly elementDetails: ElementDetailsTranslations;
  readonly footer: FooterTranslations;
  readonly loading?: string;
}

// Type for the languages object
export type LanguagesRecord = Readonly<Record<LanguageKey, TranslationData>>;

// Function types for language management
export type AddLanguageFunction = (key: LanguageKey, translations: TranslationData) => void;
