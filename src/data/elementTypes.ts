
export interface ElementRadius {
  readonly calculated?: string;
  readonly empirical?: string;
  readonly covalent?: string;
  readonly vanderwaals?: string;
}

export interface ElementDensity {
  readonly stp?: string;
}

export interface ElementConductivity {
  readonly thermal?: string;
}

export interface ElementAbundance {
  readonly universe?: string;
  readonly solar?: string;
  readonly meteor?: string;
  readonly crust?: string;
  readonly ocean?: string;
  readonly human?: string;
}

export interface ElementHeat {
  readonly specific?: string;
  readonly vaporization?: string;
  readonly fusion?: string;
}

export interface ElementIonize {
  readonly 1?: string;
  readonly 2?: string;
  readonly 3?: string;
  readonly 4?: string;
  readonly 5?: string;
  readonly 6?: string;
  readonly 7?: string;
  readonly 8?: string;
  readonly 9?: string;
  readonly 10?: string;
}

export interface ElementQuantum {
  readonly l: number;
  readonly m: number;
  readonly n: number;
}

// Define specific literal types for better type safety
export type ElementSeries = 
  | 'Alkali'
  | 'Alkaline'
  | 'Transition'
  | 'Post-transition'
  | 'Metalloid'
  | 'Nonmetal'
  | 'Noble'
  | 'Lanthanide'
  | 'Actinide'
  | 'Unknown';

export type ElementCategory = 
  | 'alkali metal'
  | 'alkaline earth metal'
  | 'transition metal'
  | 'post-transition metal'
  | 'metalloid'
  | 'nonmetal'
  | 'noble gas'
  | 'lanthanide'
  | 'actinide'
  | 'unknown';

export type ElementBlock = 's' | 'p' | 'd' | 'f';

export interface Element {
  readonly atomic: string;
  readonly symbol: string;
  readonly name?: string;
  readonly weight: string;
  readonly electronstring: string;
  readonly series: ElementSeries;
  readonly melt?: string;
  readonly boil?: string;
  readonly electroneg?: string;
  readonly valence: string;
  readonly oxidation?: string;
  readonly radius: ElementRadius;
  readonly discover?: string;
  readonly density?: ElementDensity;
  readonly affinity?: string;
  readonly conductivity?: ElementConductivity;
  readonly abundance?: ElementAbundance;
  readonly heat?: ElementHeat;
  readonly ionize?: ElementIonize;
  readonly expandedconfig: string;
  readonly electrons: readonly number[];
  readonly quantum: ElementQuantum;
  readonly isotopes: number;
  
  // For compatibility with existing components - make optional and readonly
  readonly number?: number;
  readonly atomicMass?: string;
  readonly category?: ElementCategory;
  readonly group?: number;
  readonly period?: number;
  readonly block?: ElementBlock;
  readonly electronConfiguration?: string;
  readonly atomicRadius?: number;
  readonly ionizationEnergy?: number;
  readonly meltingPoint?: number;
  readonly boilingPoint?: number;
  readonly discoveredBy?: string;
  readonly namedAfter?: string;
  readonly description?: string;
  readonly summary?: string;
}

// Better type for elements array with proper null handling
export type ElementsArray = readonly [null, ...Element[]];

// Helper type for safely accessing elements
export type SafeElement = Element | null;

// Type guards for better type safety
export const isElement = (element: unknown): element is Element => {
  return typeof element === 'object' && 
         element !== null && 
         'atomic' in element && 
         'symbol' in element &&
         'electronstring' in element;
};

export const isValidAtomicNumber = (num: unknown): num is number => {
  return typeof num === 'number' && num >= 1 && num <= 118 && Number.isInteger(num);
};
