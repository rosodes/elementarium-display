
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

export const categories = {
  "Alkali": "Alkali Metal",
  "Alkaline": "Alkaline Earth Metal",
  "Transition": "Transition Metal",
  "Post-transition": "Post-Transition Metal",
  "Metalloid": "Metalloid",
  "Nonmetal": "Nonmetal",
  "Noble": "Noble Gas",
  "Lanthanide": "Lanthanide",
  "Actinide": "Actinide",
  "Unknown": "Unknown"
};

// Create a type for the elements array that allows for the first empty placeholder
export type ElementsArray = [null | undefined | Partial<Element>, ...Element[]];

export const elements: ElementsArray = [
  null, // Empty placeholder for index 0
  {
    atomic: "1",
    symbol: "H",
    name: "Hydrogen",
    weight: "1.008",
    electronstring: "1s1",
    series: "Nonmetal",
    melt: "14.01",
    boil: "20.28",
    electroneg: "2.20",
    valence: "1",
    oxidation: "-1c,1c",
    radius: {
      calculated: "53",
      empirical: "25",
      covalent: "37",
      vanderwaals: "120"
    },
    discover: "1766",
    density: {
      stp: "0.0899"
    },
    affinity: "72.8",
    conductivity: {
      thermal: "0.1805"
    },
    abundance: {
      universe: "75",
      solar: "75",
      meteor: "2.4",
      crust: "0.15",
      ocean: "11",
      human: "10"
    },
    heat: {
      specific: "14300",
      vaporization: "0.452",
      fusion: "0.558"
    },
    ionize: {
      1: "1312.0"
    },
    expandedconfig: "1s1",
    electrons: [1],
    quantum: {
      l: 0,
      m: 0,
      n: 1
    },
    isotopes: 7,
    
    // For compatibility
    number: 1,
    atomicMass: "1.008",
    category: "nonmetal",
    group: 1,
    period: 1,
    block: "s",
    electronConfiguration: "1s¹",
    description: "Hydrogen is the lightest element and the most abundant chemical substance in the universe."
  },
  {
    atomic: "2",
    symbol: "He",
    name: "Helium",
    weight: "4.002602",
    electronstring: "1s2",
    series: "Noble",
    boil: "4.22",
    valence: "0",
    radius: {
      calculated: "31",
      covalent: "32",
      vanderwaals: "140"
    },
    discover: "1895",
    density: {
      stp: "0.1785"
    },
    affinity: "0",
    conductivity: {
      thermal: "0.1513"
    },
    abundance: {
      universe: "23",
      solar: "23",
      crust: "5.5e-7",
      ocean: "7.2e-10"
    },
    heat: {
      specific: "5193.1",
      vaporization: "0.083",
      fusion: "0.02"
    },
    ionize: {
      1: "2372.3",
      2: "5250.5"
    },
    expandedconfig: "1s2",
    electrons: [2],
    quantum: {
      l: 0,
      m: 0,
      n: 1
    },
    isotopes: 9,
    
    // For compatibility
    number: 2,
    atomicMass: "4.0026",
    category: "noble",
    group: 18,
    period: 1,
    block: "s",
    electronConfiguration: "1s²",
    description: "Helium is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas. It has the lowest boiling point of all elements."
  }
  // Add more elements here following the new format
  // For brevity, I'm only including the first two elements
];

// Helper functions to maintain compatibility with existing components
export const getElementByNumber = (number: number): Element | undefined => {
  if (number >= 1 && number < elements.length) {
    return elements[number] as Element;
  }
  return undefined;
};

export const getElementBySymbol = (symbol: string): Element | undefined => {
  return elements.find((element, index) => index > 0 && element && element.symbol === symbol) as Element | undefined;
};

export const getCategoryColor = (category: string): string => {
  const categoryMap: Record<string, string> = {
    "alkali": "bg-alkali",
    "alkaline": "bg-alkaline",
    "transition": "bg-transition",
    "post_transition": "bg-post_transition",
    "metalloid": "bg-metalloid",
    "nonmetal": "bg-nonmetal",
    "noble": "bg-noble",
    "lanthanide": "bg-lanthanide",
    "actinide": "bg-actinide",
    
    // Map for the new series names
    "Alkali": "bg-alkali",
    "Alkaline": "bg-alkaline",
    "Transition": "bg-transition",
    "Post-transition": "bg-post_transition",
    "Metalloid": "bg-metalloid",
    "Nonmetal": "bg-nonmetal",
    "Noble": "bg-noble",
    "Lanthanide": "bg-lanthanide",
    "Actinide": "bg-actinide"
  };
  
  return categoryMap[category] || "bg-unknown";
};

// Helper function to get a color based on the series
export const getSeriesColor = (series: string): string => {
  const seriesMap: Record<string, string> = {
    "Alkali": "bg-alkali",
    "Alkaline": "bg-alkaline",
    "Transition": "bg-transition",
    "Post-transition": "bg-post_transition",
    "Metalloid": "bg-metalloid",
    "Nonmetal": "bg-nonmetal",
    "Noble": "bg-noble",
    "Lanthanide": "bg-lanthanide",
    "Actinide": "bg-actinide"
  };
  
  return seriesMap[series] || "bg-unknown";
};
