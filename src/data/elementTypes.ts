
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
  halfLife?: string;
  stable: boolean;
  comment?: string;
}

export interface ElementApplications {
  primary?: string[];
  secondary?: string[];
  emerging?: string[];
}

export interface ElementSafety {
  hazards?: string[];
  precautions?: string[];
  toxicity?: string;
  handling?: string;
}

export interface ElementProduction {
  methods?: string[];
  sources?: string[];
  annualProduction?: string;
  cost?: string;
}

export interface ElementBiological {
  role?: string;
  essentiality?: string;
  toxicity?: string;
  metabolism?: string;
}

export interface Element {
  atomic: string;
  symbol: string;
  name: string;
  weight: string;
  electronstring: string;
  series: string;
  melt?: string;
  boil?: string;
  electroneg?: string;
  valence?: string;
  oxidation?: string;
  radius?: ElementRadius;
  discover?: string;
  density?: ElementDensity;
  affinity?: string;
  conductivity?: ElementConductivity;
  abundance?: ElementAbundance;
  heat?: ElementHeat;
  ionize?: ElementIonization;
  expandedconfig?: string;
  electrons?: number[];
  quantum?: ElementQuantum;
  isotopes?: number;
  isotopesDetailed?: ElementIsotope[];
  group?: number;
  period?: number;
  block?: string;
  category?: string;
  atomicMass?: string;
  electronConfiguration?: string;
  description?: string;
  summary?: string;
  radioactive?: boolean;
  applications?: ElementApplications;
  safety?: ElementSafety;
  production?: ElementProduction;
  biological?: ElementBiological;
  history?: {
    discovery?: string;
    discoverer?: string;
    etymology?: string;
    timeline?: Array<{year: string, event: string}>;
  };
  compounds?: {
    common?: string[];
    notable?: string[];
    industrial?: string[];
  };
}

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
