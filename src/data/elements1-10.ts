import { Element } from './elementTypes';

export const elements1to10: Element[] = [
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
    category: "noble gas",
    group: 18,
    period: 1,
    block: "s",
    electronConfiguration: "1s²",
    description: "Helium is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas. It has the lowest boiling point of all elements."
  },
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
    period: 2,
    category: "alkali metal"
  },
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
    period: 2,
    category: "alkaline earth metal"
  },
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
    period: 2,
    category: "metalloid"
  },
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
    period: 2,
    category: "nonmetal"
  },
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
    period: 2,
    category: "nonmetal"
  },
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
    period: 2,
    category: "nonmetal"
  },
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
    period: 2,
    category: "nonmetal"
  },
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
    period: 2,
    category: "noble gas"
  }
];
