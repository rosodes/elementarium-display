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
  },
  
  // Lithium (3)
  {
    atomic: "3",
    symbol: "Li",
    name: "Lithium",
    weight: "6.94",
    electronstring: "1s2 2s1",
    series: "Alkali",
    melt: "453.69",
    boil: "1615",
    electroneg: "0.98",
    valence: "1",
    oxidation: "1c",
    radius: {
      calculated: "167",
      empirical: "145",
      covalent: "134",
      vanderwaals: "182"
    },
    discover: "1817",
    density: {
      stp: "0.534"
    },
    affinity: "59.6",
    conductivity: {
      thermal: "85"
    },
    abundance: {
      universe: "6e-7",
      solar: "6e-9",
      meteor: "0.00017",
      crust: "0.0017",
      ocean: "0.000018",
      human: "3e-6"
    },
    heat: {
      specific: "3570",
      vaporization: "147",
      fusion: "3"
    },
    ionize: {
      "1": "520.2",
      "2": "7298.1",
      "3": "11815.0"
    },
    expandedconfig: "1s2 2s1",
    electrons: [2, 1],
    quantum: {
      l: 0,
      m: 0,
      n: 2
    },
    isotopes: 9,
    group: 1,
    period: 2
  },
  
  // Beryllium (4)
  {
    atomic: "4",
    symbol: "Be",
    name: "Beryllium",
    weight: "9.0122",
    electronstring: "1s2 2s2",
    series: "Alkaline",
    melt: "1560",
    boil: "2742",
    electroneg: "1.57",
    valence: "2",
    oxidation: "2c",
    radius: {
      calculated: "112",
      empirical: "105",
      covalent: "90",
      vanderwaals: "153"
    },
    discover: "1798",
    density: {
      stp: "1.85"
    },
    affinity: "0",
    conductivity: {
      thermal: "190"
    },
    abundance: {
      universe: "1e-7",
      solar: "1e-7",
      meteor: "3e-5",
      crust: "0.00019",
      ocean: "6e-11",
      human: "4e-8"
    },
    heat: {
      specific: "1820",
      vaporization: "297",
      fusion: "7.95"
    },
    ionize: {
      "1": "899.5",
      "2": "1757.1",
      "3": "14848.7",
      "4": "21006.6"
    },
    expandedconfig: "1s2 2s2",
    electrons: [2, 2],
    quantum: {
      l: 0,
      m: 0,
      n: 2
    },
    isotopes: 12,
    group: 2,
    period: 2
  },
  
  // Boron (5)
  {
    atomic: "5",
    symbol: "B",
    name: "Boron",
    weight: "10.81",
    electronstring: "1s2 2s2 2p1",
    series: "Metalloid",
    melt: "2349",
    boil: "4200",
    electroneg: "2.04",
    valence: "3",
    oxidation: "3c",
    radius: {
      calculated: "87",
      empirical: "85",
      covalent: "82",
      vanderwaals: "192"
    },
    discover: "1808",
    density: {
      stp: "2.34"
    },
    affinity: "26.7",
    conductivity: {
      thermal: "27"
    },
    abundance: {
      universe: "1e-7",
      solar: "2e-6",
      meteor: "0.00016",
      crust: "0.00086",
      ocean: "0.00044",
      human: "7e-5"
    },
    heat: {
      specific: "1026",
      vaporization: "507",
      fusion: "50"
    },
    ionize: {
      "1": "800.6",
      "2": "2427.1",
      "3": "3659.7",
      "4": "25025.8",
      "5": "32826.7"
    },
    expandedconfig: "1s2 2s2 2p1",
    electrons: [2, 3],
    quantum: {
      l: 1,
      m: -1,
      n: 2
    },
    isotopes: 14,
    group: 13,
    period: 2
  },
  
  // Carbon (6)
  {
    atomic: "6",
    symbol: "C",
    name: "Carbon",
    weight: "12.011",
    electronstring: "1s2 2s2 2p2",
    series: "Nonmetal",
    melt: "3800",
    boil: "4300",
    electroneg: "2.55",
    valence: "4",
    oxidation: "-4,-3,-2,-1,1c,2c,3c,4c",
    radius: {
      calculated: "67",
      empirical: "70",
      covalent: "77",
      vanderwaals: "170"
    },
    discover: "~3750 BCE",
    density: {
      stp: "2.267"
    },
    affinity: "121.8",
    conductivity: {
      thermal: "140"
    },
    abundance: {
      universe: "0.5",
      solar: "0.3",
      meteor: "1.5",
      crust: "0.02",
      ocean: "0.0028",
      human: "23"
    },
    heat: {
      specific: "710",
      vaporization: "715",
      fusion: "105"
    },
    ionize: {
      "1": "1086.5",
      "2": "2352.6",
      "3": "4620.5",
      "4": "6222.7",
      "5": "37831.0",
      "6": "47277.0"
    },
    expandedconfig: "1s2 2s2 2p2",
    electrons: [2, 4],
    quantum: {
      l: 1,
      m: 0,
      n: 2
    },
    isotopes: 15,
    group: 14,
    period: 2
  },
  
  // Nitrogen (7)
  {
    atomic: "7",
    symbol: "N",
    name: "Nitrogen",
    weight: "14.007",
    electronstring: "1s2 2s2 2p3",
    series: "Nonmetal",
    melt: "63.15",
    boil: "77.36",
    electroneg: "3.04",
    valence: "5",
    oxidation: "-3c,-2,-1,1,2,3,4,5c",
    radius: {
      calculated: "56",
      empirical: "65",
      covalent: "75",
      vanderwaals: "155"
    },
    discover: "1772",
    density: {
      stp: "0.0012506"
    },
    affinity: "0",
    conductivity: {
      thermal: "0.02598"
    },
    abundance: {
      universe: "0.1",
      solar: "0.1",
      meteor: "0.14",
      crust: "0.002",
      ocean: "0.00005",
      human: "2.6"
    },
    heat: {
      specific: "1040",
      vaporization: "2.79",
      fusion: "0.36"
    },
    ionize: {
      "1": "1402.3",
      "2": "2856.0",
      "3": "4578.1",
      "4": "7475.0",
      "5": "9444.9",
      "6": "53266.6",
      "7": "64360.0"
    },
    expandedconfig: "1s2 2s2 2p3",
    electrons: [2, 5],
    quantum: {
      l: 1,
      m: 1,
      n: 2
    },
    isotopes: 16,
    group: 15,
    period: 2
  },
  
  // Oxygen (8)
  {
    atomic: "8",
    symbol: "O",
    name: "Oxygen",
    weight: "15.999",
    electronstring: "1s2 2s2 2p4",
    series: "Nonmetal",
    melt: "54.36",
    boil: "90.2",
    electroneg: "3.44",
    valence: "2",
    oxidation: "-2c,-1,1,2",
    radius: {
      calculated: "48",
      empirical: "60",
      covalent: "73",
      vanderwaals: "152"
    },
    discover: "1774",
    density: {
      stp: "0.001429"
    },
    affinity: "140.976",
    conductivity: {
      thermal: "0.02658"
    },
    abundance: {
      universe: "1",
      solar: "0.9",
      meteor: "40",
      crust: "46",
      ocean: "86",
      human: "61"
    },
    heat: {
      specific: "919",
      vaporization: "3.41",
      fusion: "0.222"
    },
    ionize: {
      "1": "1313.9",
      "2": "3388.3",
      "3": "5300.5",
      "4": "7469.2",
      "5": "10989.5",
      "6": "13326.5",
      "7": "71330.0",
      "8": "84078.0"
    },
    expandedconfig: "1s2 2s2 2p4",
    electrons: [2, 6],
    quantum: {
      l: 1,
      m: 0,
      n: 2
    },
    isotopes: 16,
    group: 16,
    period: 2
  },
  
  // Fluorine (9)
  {
    atomic: "9",
    symbol: "F",
    name: "Fluorine",
    weight: "18.998",
    electronstring: "1s2 2s2 2p5",
    series: "Nonmetal",
    melt: "53.53",
    boil: "85.03",
    electroneg: "3.98",
    valence: "1",
    oxidation: "-1c",
    radius: {
      calculated: "42",
      empirical: "50",
      covalent: "71",
      vanderwaals: "147"
    },
    discover: "1886",
    density: {
      stp: "0.001696"
    },
    affinity: "328.2",
    conductivity: {
      thermal: "0.0277"
    },
    abundance: {
      universe: "0.00004",
      solar: "0.00005",
      meteor: "0.0087",
      crust: "0.054",
      ocean: "0.00013",
      human: "0.0037"
    },
    heat: {
      specific: "824",
      vaporization: "3.27",
      fusion: "0.26"
    },
    ionize: {
      "1": "1681.0",
      "2": "3374.2",
      "3": "6050.4",
      "4": "8407.7",
      "5": "11022.7",
      "6": "15164.1",
      "7": "17868.0",
      "8": "92038.1",
      "9": "106434.3"
    },
    expandedconfig: "1s2 2s2 2p5",
    electrons: [2, 7],
    quantum: {
      l: 1,
      m: 1,
      n: 2
    },
    isotopes: 18,
    group: 17,
    period: 2
  },
  
  // Neon (10)
  {
    atomic: "10",
    symbol: "Ne",
    name: "Neon",
    weight: "20.180",
    electronstring: "1s2 2s2 2p6",
    series: "Noble",
    melt: "24.56",
    boil: "27.07",
    valence: "0",
    radius: {
      calculated: "38",
      covalent: "69",
      vanderwaals: "154"
    },
    discover: "1898",
    density: {
      stp: "0.0008999"
    },
    affinity: "0",
    conductivity: {
      thermal: "0.0491"
    },
    abundance: {
      universe: "0.13",
      solar: "0.1",
      crust: "3e-7",
      ocean: "1.2e-8"
    },
    heat: {
      specific: "1030",
      vaporization: "1.75",
      fusion: "0.34"
    },
    ionize: {
      "1": "2080.7",
      "2": "3952.3",
      "3": "6122.0",
      "4": "9371.0",
      "5": "12177.0",
      "6": "15238.0",
      "7": "19999.0",
      "8": "23069.5",
      "9": "115379.5",
      "10": "131432.0"
    },
    expandedconfig: "1s2 2s2 2p6",
    electrons: [2, 8],
    quantum: {
      l: 1,
      m: 0,
      n: 2
    },
    isotopes: 22,
    group: 18,
    period: 2
  },
  
  // Sodium (11)
  {
    atomic: "11",
    symbol: "Na",
    name: "Sodium",
    weight: "22.990",
    electronstring: "1s2 2s2 2p6 3s1",
    series: "Alkali",
    melt: "370.87",
    boil: "1156",
    electroneg: "0.93",
    valence: "1",
    oxidation: "1c",
    radius: {
      calculated: "190",
      empirical: "180",
      covalent: "154",
      vanderwaals: "227"
    },
    discover: "1807",
    density: {
      stp: "0.968"
    },
    affinity: "52.8",
    conductivity: {
      thermal: "140"
    },
    abundance: {
      universe: "0.002",
      solar: "0.004",
      meteor: "0.55",
      crust: "2.3",
      ocean: "1.1",
      human: "0.14"
    },
    heat: {
      specific: "1230",
      vaporization: "97.7",
      fusion: "2.6"
    },
    ionize: {
      "1": "495.8",
      "2": "4562.0",
      "3": "6910.0",
      "4": "9543.0",
      "5": "13353.0",
      "6": "16613.0",
      "7": "20117.0",
      "8": "25496.0",
      "9": "28932.0",
      "10": "141362.0"
    },
    expandedconfig: "1s2 2s2 2p6 3s1",
    electrons: [2, 8, 1],
    quantum: {
      l: 0,
      m: 0,
      n: 3
    },
    isotopes: 16,
    group: 1,
    period: 3
  },
  
  // Magnesium (12)
  {
    atomic: "12",
    symbol: "Mg",
    name: "Magnesium",
    weight: "24.305",
    electronstring: "1s2 2s2 2p6 3s2",
    series: "Alkaline",
    melt: "923",
    boil: "1363",
    electroneg: "1.31",
    valence: "2",
    oxidation: "1,2c",
    radius: {
      calculated: "145",
      empirical: "150",
      covalent: "130",
      vanderwaals: "173"
    },
    discover: "1755",
    density: {
      stp: "1.738"
    },
    affinity: "0",
    conductivity: {
      thermal: "160"
    },
    abundance: {
      universe: "0.06",
      solar: "0.07",
      meteor: "9.7",
      crust: "2.9",
      ocean: "0.13",
      human: "0.027"
    },
    heat: {
      specific: "1020",
      vaporization: "128",
      fusion: "8.7"
    },
    ionize: {
      "1": "737.7",
      "2": "1450.7",
      "3": "7732.7",
      "4": "10542.5",
      "5": "13630.0",
      "6": "17995.0",
      "7": "21703.0",
      "8": "25661.0",
      "9": "31653.0",
      "10": "35458.0"
    },
    expandedconfig: "1s2 2s2 2p6 3s2",
    electrons: [2, 8, 2],
    quantum: {
      l: 0,
      m: 0,
      n: 3
    },
    isotopes: 19,
    group: 2,
    period: 3
  },
  
  // Aluminum (13)
  {
    atomic: "13",
    symbol: "Al",
    name: "Aluminum",
    weight: "26.982",
    electronstring: "1s2 2s2 2p6 3s2 3p1",
    series: "Post-transition",
    melt: "933.47",
    boil: "2792",
    electroneg: "1.61",
    valence: "3",
    oxidation: "1,2,3c",
    radius: {
      calculated: "118",
      empirical: "125",
      covalent: "118",
      vanderwaals: "184"
    },
    discover: "Ancient",
    density: {
      stp: "2.7"
    },
    affinity: "42.5",
    conductivity: {
      thermal: "235"
    },
    abundance: {
      universe: "0.005",
      solar: "0.006",
      meteor: "0.91",
      crust: "8.1",
      ocean: "5e-7",
      human: "9e-5"
    },
    heat: {
      specific: "904",
      vaporization: "293",
      fusion: "10.7"
    },
    ionize: {
      "1": "577.5",
      "2": "1816.7",
      "3": "2744.8",
      "4": "11577.0",
      "5": "14842.0",
      "6": "18379.0",
      "7": "23326.0",
      "8": "27465.0",
      "9": "31853.0",
      "10": "38473.0"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p1",
    electrons: [2, 8, 3],
    quantum: {
      l: 1,
      m: -1,
      n: 3
    },
    isotopes: 22,
    group: 13,
    period: 3
  },
  
  // Silicon (14)
  {
    atomic: "14",
    symbol: "Si",
    name: "Silicon",
    weight: "28.085",
    electronstring: "1s2 2s2 2p6 3s2 3p2",
    series: "Metalloid",
    melt: "1687",
    boil: "3538",
    electroneg: "1.90",
    valence: "4",
    oxidation: "-4,4c",
    radius: {
      calculated: "111",
      empirical: "110",
      covalent: "111",
      vanderwaals: "210"
    },
    discover: "1824",
    density: {
      stp: "2.33"
    },
    affinity: "133.6",
    conductivity: {
      thermal: "150"
    },
    abundance: {
      universe: "0.07",
      solar: "0.09",
      meteor: "10.7",
      crust: "27",
      ocean: "0.0001",
      human: "0.026"
    },
    heat: {
      specific: "705",
      vaporization: "359",
      fusion: "50.2"
    },
    ionize: {
      "1": "786.5",
      "2": "1577.1",
      "3": "3231.6",
      "4": "4355.5",
      "5": "16091.0",
      "6": "19805.0",
      "7": "23780.0",
      "8": "29287.0",
      "9": "33878.0",
      "10": "38726.0"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p2",
    electrons: [2, 8, 4],
    quantum: {
      l: 1,
      m: 0,
      n: 3
    },
    isotopes: 17,
    group: 14,
    period: 3
  },
  
  // Phosphorus (15)
  {
    atomic: "15",
    symbol: "P",
    name: "Phosphorus",
    weight: "30.974",
    electronstring: "1s2 2s2 2p6 3s2 3p3",
    series: "Nonmetal",
    melt: "317.3",
    boil: "553.6",
    electroneg: "2.19",
    valence: "5",
    oxidation: "-3,3c,5c",
    radius: {
      calculated: "98",
      empirical: "100",
      covalent: "106",
      vanderwaals: "180"
    },
    discover: "1669",
    density: {
      stp: "1.82"
    },
    affinity: "72.0",
    conductivity: {
      thermal: "0.236"
    },
    abundance: {
      universe: "0.0007",
      solar: "0.0007",
      meteor: "0.11",
      crust: "0.099",
      ocean: "0.00007",
      human: "1.1"
    },
    heat: {
      specific: "769.7",
      vaporization: "12.4",
      fusion: "0.64"
    },
    ionize: {
      "1": "1011.8",
      "2": "1907.0",
      "3": "2914.1",
      "4": "4963.6",
      "5": "6273.9",
      "6": "21267.0",
      "7": "25431.0",
      "8": "29872.0",
      "9": "35905.0",
      "10": "40950.0"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p3",
    electrons: [2, 8, 5],
    quantum: {
      l: 1,
      m: 1,
      n: 3
    },
    isotopes: 23,
    group: 15,
    period: 3,
    block: "p",
    description: "Phosphorus is a nonmetal essential for life, primarily used in fertilizers."
  },
  
  // Sulfur (16)
  {
    atomic: "16",
    symbol: "S",
    name: "Sulfur",
    weight: "32.06",
    electronstring: "1s2 2s2 2p6 3s2 3p4",
    series: "Nonmetal",
    melt: "388.36",
    boil: "717.8",
    electroneg: "2.58",
    valence: "6",
    oxidation: "-2c,-1,1,2,3,4c,5,6c",
    radius: {
      calculated: "88",
      empirical: "100",
      covalent: "102",
      vanderwaals: "180"
    },
    discover: "Ancient",
    density: {
      stp: "2.07"
    },
    affinity: "200.4",
    conductivity: {
      thermal: "0.205"
    },
    abundance: {
      universe: "0.05",
      solar: "0.04",
      meteor: "3.2",
      crust: "0.042",
      ocean: "0.093",
      human: "0.2"
    },
    heat: {
      specific: "705",
      vaporization: "9.8",
      fusion: "1.73"
    },
    ionize: {
      "1": "999.6",
      "2": "2252.0",
      "3": "3357.0",
      "4": "4556.0",
      "5": "7004.0",
      "6": "8495.8",
      "7": "27107.0",
      "8": "31719.0",
      "9": "36621.0",
      "10": "43177.0"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p4",
    electrons: [2, 8, 6],
    quantum: {
      l: 1,
      m: 0,
      n: 3
    },
    isotopes: 24,
    group: 16,
    period: 3,
    block: "p",
    description: "Sulfur is a yellow crystalline solid used in the production of sulfuric acid and sulfur dioxide."
  },
  
  // Chlorine (17)
  {
    atomic: "17",
    symbol: "Cl",
    name: "Chlorine",
    weight: "35.45",
    electronstring: "1s2 2s2 2p6 3s2 3p5",
    series: "Nonmetal",
    melt: "171.6",
    boil: "239.11",
    electroneg: "3.16",
    valence: "7",
    oxidation: "-1c,1c,2,3,4,5c,6,7c",
    radius: {
      calculated: "79",
      empirical: "100",
      covalent: "99",
      vanderwaals: "175"
    },
    discover: "1774",
    density: {
      stp: "0.003214"
    },
    affinity: "349.0",
    conductivity: {
      thermal: "0.0089"
    },
    abundance: {
      universe: "0.0001",
      solar: "0.0008",
      meteor: "0.044",
      crust: "0.017",
      ocean: "1.9",
      human: "0.12"
    },
    heat: {
      specific: "479",
      vaporization: "10.2",
      fusion: "3.2"
    },
    ionize: {
      "1": "1251.2",
      "2": "2298.0",
      "3": "3822.0",
      "4": "5158.6",
      "5": "6542.0",
      "6": "9362.0",
      "7": "11018.0",
      "8": "33604.0",
      "9": "38600.0",
      "10": "43961.0"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p5",
    electrons: [2, 8, 7],
    quantum: {
      l: 1,
      m: 1,
      n: 3
    },
    isotopes: 24,
    group: 17,
    period: 3,
    block: "p",
    description: "Chlorine is a yellow-green gas used as a disinfectant and in many industrial processes."
  },
  
  // Argon (18)
  {
    atomic: "18",
    symbol: "Ar",
    name: "Argon",
    weight: "39.948",
    electronstring: "1s2 2s2 2p6 3s2 3p6",
    series: "Noble",
    melt: "83.80",
    boil: "87.30",
    valence: "0",
    radius: {
      calculated: "71",
      covalent: "97",
      vanderwaals: "188"
    },
    discover: "1894",
    density: {
      stp: "0.0017837"
    },
    affinity: "0",
    conductivity: {
      thermal: "0.01772"
    },
    abundance: {
      universe: "0.02",
      solar: "0.007",
      crust: "0.00015",
      ocean: "0.000045",
      human: "0"
    },
    heat: {
      specific: "520",
      vaporization: "6.5",
      fusion: "1.18"
    },
    ionize: {
      "1": "1520.6",
      "2": "2665.8",
      "3": "3931.0",
      "4": "5771.0",
      "5": "7238.0",
      "6": "8781.0",
      "7": "11995.0",
      "8": "13842.0",
      "9": "40760.0",
      "10": "46186.0"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6",
    electrons: [2, 8, 8],
    quantum: {
      l: 1,
      m: 0,
      n: 3
    },
    isotopes: 24,
    group: 18,
    period: 3,
    block: "p",
    description: "Argon is a colorless, odorless noble gas used in lighting and as an inert atmosphere for welding."
  }
];

// Add these helper functions for PeriodicTable.tsx to use
export const getCategoryColor = (category: string): string => {
  const categoryMap: Record<string, string> = {
    "nonmetal": "bg-emerald-200",
    "noble": "bg-purple-200",
    "alkali": "bg-red-200",
    "alkaline": "bg-orange-200",
    "metalloid": "bg-cyan-200",
    "post-transition": "bg-blue-200",
    "transition": "bg-yellow-200",
    "lanthanide": "bg-pink-200",
    "actinide": "bg-indigo-200",
    "unknown": "bg-gray-200"
  };
  
  return categoryMap[category.toLowerCase()] || "bg-gray-200";
};

export const getSeriesColor = (series: string): string => {
  const seriesMap: Record<string, string> = {
    "Nonmetal": "bg-emerald-200",
    "Noble": "bg-purple-200",
    "Alkali": "bg-red-200",
    "Alkaline": "bg-orange-200",
    "Metalloid": "bg-cyan-200",
    "Post-transition": "bg-blue-200",
    "Transition": "bg-yellow-200",
    "Lanthanide": "bg-pink-200",
    "Actinide": "bg-indigo-200",
    "Unknown": "bg-gray-200"
  };
  
  return seriesMap[series] || "bg-gray-200";
};
