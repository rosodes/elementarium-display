
import { Element } from '../elementTypes';

// Group 1: Alkali Metals
export const group1Elements: Element[] = [
  // Hydrogen (1) - technically in Group 1 but not an alkali metal
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
    group: 1,
    period: 1
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
      "3": "6910.0"
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
  
  // Potassium (19)
  {
    atomic: "19",
    symbol: "K",
    name: "Potassium",
    weight: "39.098",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s1",
    series: "Alkali",
    melt: "336.53",
    boil: "1032",
    electroneg: "0.82",
    valence: "1",
    oxidation: "1c",
    radius: {
      calculated: "243",
      empirical: "220",
      covalent: "196",
      vanderwaals: "275"
    },
    discover: "1807",
    density: {
      stp: "0.862"
    },
    affinity: "48.4",
    conductivity: {
      thermal: "102.5"
    },
    abundance: {
      universe: "0.0003",
      solar: "0.0004",
      meteor: "0.07",
      crust: "1.5",
      ocean: "0.042",
      human: "0.2"
    },
    heat: {
      specific: "757",
      vaporization: "79.1",
      fusion: "2.33"
    },
    ionize: {
      "1": "418.8",
      "2": "3052.0",
      "3": "4420.0"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s1",
    electrons: [2, 8, 8, 1],
    quantum: {
      l: 0,
      m: 0,
      n: 4
    },
    isotopes: 24,
    group: 1,
    period: 4
  },
  
  // Rubidium (37)
  {
    atomic: "37",
    symbol: "Rb",
    name: "Rubidium",
    weight: "85.468",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1",
    series: "Alkali",
    melt: "312.46",
    boil: "961",
    electroneg: "0.82",
    valence: "1",
    oxidation: "1c",
    radius: {
      calculated: "265",
      empirical: "235",
      covalent: "211"
    },
    discover: "1861",
    density: {
      stp: "1.532"
    },
    conductivity: {
      thermal: "58.2"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1",
    electrons: [2, 8, 18, 8, 1],
    quantum: {
      l: 0,
      m: 0,
      n: 5
    },
    isotopes: 20,
    group: 1,
    period: 5
  },
  
  // Cesium (55)
  {
    atomic: "55",
    symbol: "Cs",
    name: "Cesium",
    weight: "132.91",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1",
    series: "Alkali",
    melt: "301.59",
    boil: "944",
    electroneg: "0.79",
    valence: "1",
    oxidation: "1c",
    radius: {
      calculated: "298",
      empirical: "260",
      covalent: "225"
    },
    discover: "1860",
    density: {
      stp: "1.93"
    },
    conductivity: {
      thermal: "35.9"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1",
    electrons: [2, 8, 18, 18, 8, 1],
    quantum: {
      l: 0,
      m: 0,
      n: 6
    },
    isotopes: 22,
    group: 1,
    period: 6
  },
  
  // Francium (87)
  {
    atomic: "87",
    symbol: "Fr",
    name: "Francium",
    weight: "[223]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1",
    series: "Alkali",
    melt: "300",
    boil: "950",
    electroneg: "0.7",
    valence: "1",
    oxidation: "1c",
    radius: {
      calculated: "260",
      empirical: "260",
      covalent: "260"
    },
    discover: "1939",
    density: {
      stp: "1.87"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1",
    electrons: [2, 8, 18, 32, 18, 8, 1],
    quantum: {
      l: 0,
      m: 0,
      n: 7
    },
    isotopes: 23,
    group: 1,
    period: 7
  }
];
