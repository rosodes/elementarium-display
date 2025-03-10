
export interface ElementRadius {
  calculated?: string;
  empirical?: string;
  covalent?: string;
  vanderwaals?: string;
}

export interface ElementDensity {
  stp?: string;
}

export interface ElementConductivity {
  thermal?: string;
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

export interface ElementIonize {
  1?: string;
  2?: string;
  3?: string;
  4?: string;
  5?: string;
  6?: string;
  7?: string;
  8?: string;
  9?: string;
  10?: string;
}

export interface ElementQuantum {
  l: number;
  m: number;
  n: number;
}

export interface Element {
  atomic: string;
  symbol: string;
  name?: string;
  weight: string;
  electronstring: string;
  series: string;
  melt?: string;
  boil?: string;
  electroneg?: string;
  valence: string;
  oxidation?: string;
  radius: ElementRadius;
  discover?: string;
  density?: ElementDensity;
  affinity?: string;
  conductivity?: ElementConductivity;
  abundance?: ElementAbundance;
  heat?: ElementHeat;
  ionize?: ElementIonize;
  expandedconfig: string;
  electrons: number[];
  quantum: ElementQuantum;
  isotopes: number;
  
  // For compatibility with existing components
  number?: number;
  atomicMass?: string;
  category?: string;
  group?: number;
  period?: number;
  block?: string;
  electronConfiguration?: string;
  atomicRadius?: number;
  ionizationEnergy?: number;
  meltingPoint?: number;
  boilingPoint?: number;
  discoveredBy?: string;
  namedAfter?: string;
  description?: string;
}

export type ElementsArray = [null | undefined | Partial<Element>, ...Element[]];
