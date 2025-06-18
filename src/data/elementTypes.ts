
// Enhanced element type definitions with better structure and validation

export interface ElementRadius {
  calculated?: string;
  empirical?: string;
  covalent?: string;
  vanderwaals?: string;
}

export interface ElementDensity {
  stp?: string;
  liquid?: string;
}

export interface ElementConductivity {
  thermal?: string;
  electrical?: string;
}

export interface ElementAbundance {
  universe?: string;
  solar?: string;
  meteor?: string;
  crust?: string;
  ocean?: string;
  human?: string;
}

export interface ElementHeat {
  specific?: string;
  vaporization?: string;
  fusion?: string;
}

export interface ElementIonization {
  [key: string]: string;
}

export interface ElementQuantum {
  l: number;
  m: number;
  n: number;
}

export interface ElementIsotope {
  symbol: string;
  abundance?: number;
  stable: boolean;
  halfLife?: string;
  comment?: string;
}

export interface ElementPhysicalProperties {
  melt?: string;
  boil?: string;
  electroneg?: string;
  density?: ElementDensity;
  conductivity?: ElementConductivity;
  abundance?: ElementAbundance;
  heat?: ElementHeat;
  affinity?: string;
  ionize?: ElementIonization;
}

export interface ElementConfiguration {
  electronstring: string;
  expandedconfig: string;
  electrons: number[];
  quantum: ElementQuantum;
}

export interface Element {
  atomic: string;
  symbol: string;
  name: string;
  weight: string;
  series: ElementSeries;
  valence: string;
  oxidation: string;
  radius: ElementRadius;
  discover?: string;
  isotopes: number;
  isotopesDetailed?: ElementIsotope[];
  group: number;
  period: number;
  block?: ElementBlock;
  category?: string;
  atomicMass?: string;
  electronConfiguration?: string;
  description?: string;
  summary?: string;
  radioactive?: boolean;
  // Physical properties
  melt?: string;
  boil?: string;
  electroneg?: string;
  density?: ElementDensity;
  conductivity?: ElementConductivity;
  abundance?: ElementAbundance;
  heat?: ElementHeat;
  affinity?: string;
  ionize?: ElementIonization;
  // Electronic configuration
  electronstring: string;
  expandedconfig: string;
  electrons: number[];
  quantum: ElementQuantum;
}

export type ElementSeries = 
  | "Alkali" 
  | "Alkaline" 
  | "Transition" 
  | "Post-transition" 
  | "Metalloid" 
  | "Nonmetal" 
  | "Noble" 
  | "Lanthanide" 
  | "Actinide";

export type ElementBlock = "s" | "p" | "d" | "f";

export type ElementCategory = 
  | "alkali metal"
  | "alkaline earth metal"
  | "transition metal"
  | "post-transition metal"
  | "metalloid"
  | "nonmetal"
  | "noble gas"
  | "lanthanide"
  | "actinide";

export type ElementsArray = (Element | null)[];

// Validation utilities
export const validateElement = (element: Partial<Element>): element is Element => {
  return !!(
    element.atomic &&
    element.symbol &&
    element.name &&
    element.weight &&
    element.series &&
    element.group &&
    element.period &&
    element.electronstring &&
    element.expandedconfig &&
    element.electrons &&
    element.quantum
  );
};

export const isRadioactiveElement = (element: Element): boolean => {
  return element.radioactive === true || parseInt(element.atomic) > 83;
};

export const getElementMass = (element: Element): number => {
  const mass = element.atomicMass || element.weight;
  const numericMatch = mass.match(/[\d.]+/);
  return numericMatch ? parseFloat(numericMatch[0]) : 0;
};
