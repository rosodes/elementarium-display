// Ensure only Tl (81)–Ac (89). Ac (89) is at the start of actinides block, but may also be referenced.
import { Element } from './elementTypes';

export const elements81to90: Element[] = [
  // Thallium (81)
  {
    atomic: "81",
    symbol: "Tl",
    name: "Thallium",
    weight: "204.38",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p1",
    series: "Post-transition",
    melt: "577",
    boil: "1746",
    electroneg: "1.62",
    valence: "3",
    oxidation: "1c,3c",
    radius: {
      calculated: "156",
      empirical: "190",
      covalent: "148"
    },
    discover: "1861",
    density: {
      stp: "11.85"
    },
    conductivity: {
      thermal: "46.1"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p1",
    electrons: [2, 8, 18, 32, 18, 3],
    quantum: {
      l: 1,
      m: -1,
      n: 6
    },
    isotopes: 28,
    group: 13,
    period: 6
  },

  // Lead (82)
  {
    atomic: "82",
    symbol: "Pb",
    name: "Lead",
    weight: "207.2",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p2",
    series: "Post-transition",
    melt: "600.61",
    boil: "2022",
    electroneg: "1.87",
    valence: "4",
    oxidation: "2c,4c",
    radius: {
      calculated: "154",
      empirical: "180",
      covalent: "147"
    },
    discover: "Ancient",
    density: {
      stp: "11.34"
    },
    conductivity: {
      thermal: "35.3"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p2",
    electrons: [2, 8, 18, 32, 18, 4],
    quantum: {
      l: 1,
      m: 0,
      n: 6
    },
    isotopes: 29,
    group: 14,
    period: 6
  },

  // Bismuth (83)
  {
    atomic: "83",
    symbol: "Bi",
    name: "Bismuth",
    weight: "208.98",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p3",
    series: "Post-transition",
    melt: "544.7",
    boil: "1837",
    electroneg: "2.02",
    valence: "5",
    oxidation: "3c,5",
    radius: {
      calculated: "143",
      empirical: "160",
      covalent: "146"
    },
    discover: "1753",
    density: {
      stp: "9.78"
    },
    conductivity: {
      thermal: "7.97"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p3",
    electrons: [2, 8, 18, 32, 18, 5],
    quantum: {
      l: 1,
      m: 1,
      n: 6
    },
    isotopes: 15,
    group: 15,
    period: 6
  },

  // Polonium (84) — проверяем маркеры для металлоида:
  {
    atomic: "84",
    symbol: "Po",
    name: "Polonium",
    weight: "[209]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p4",
    series: "Metalloid",
    melt: "527",
    boil: "1235",
    electroneg: "2.0",
    valence: "6",
    oxidation: "2,4c,6",
    radius: {
      calculated: "135",
      empirical: "190",
      covalent: "140"
    },
    discover: "1898",
    density: {
      stp: "9.196"
    },
    conductivity: {
      thermal: "20"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p4",
    electrons: [2, 8, 18, 32, 18, 6],
    quantum: {
      l: 1,
      m: 0,
      n: 6
    },
    isotopes: 33,
    group: 16,
    period: 6,
    category: "metalloid"
  },

  // Astatine (85)
  {
    atomic: "85",
    symbol: "At",
    name: "Astatine",
    weight: "[210]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p5",
    series: "Metalloid",
    melt: "575",
    boil: "610",
    electroneg: "2.2",
    valence: "7",
    oxidation: "-1,1,3,5,7",
    radius: {
      calculated: "127",
      covalent: "150"
    },
    discover: "1940",
    density: {
      stp: "7"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p5",
    electrons: [2, 8, 18, 32, 18, 7],
    quantum: {
      l: 1,
      m: 1,
      n: 6
    },
    isotopes: 24,
    group: 17,
    period: 6
  },

  // Radon (86)
  {
    atomic: "86",
    symbol: "Rn",
    name: "Radon",
    weight: "[222]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6",
    series: "Noble",
    melt: "202",
    boil: "211.5",
    electroneg: "2.2",
    valence: "0",
    oxidation: "2,6",
    radius: {
      calculated: "120",
      covalent: "150"
    },
    discover: "1900",
    density: {
      stp: "0.00973"
    },
    conductivity: {
      thermal: "0.00361"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6",
    electrons: [2, 8, 18, 32, 18, 8],
    quantum: {
      l: 1,
      m: 0,
      n: 6
    },
    isotopes: 20,
    group: 18,
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
  },

  // Radium (88)
  {
    atomic: "88",
    symbol: "Ra",
    name: "Radium",
    weight: "[226]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2",
    series: "Alkaline",
    melt: "973",
    boil: "2010",
    electroneg: "0.9",
    valence: "2",
    oxidation: "2c",
    radius: {
      calculated: "223",
      empirical: "215",
      covalent: "221"
    },
    discover: "1898",
    density: {
      stp: "5.5"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2",
    electrons: [2, 8, 18, 32, 18, 8, 2],
    quantum: {
      l: 0,
      m: 0,
      n: 7
    },
    isotopes: 15,
    group: 2,
    period: 7
  },

  // Actinium (89)
  {
    atomic: "89",
    symbol: "Ac",
    name: "Actinium",
    weight: "[227]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1",
    series: "Actinide",
    melt: "1323",
    boil: "3471",
    electroneg: "1.1",
    valence: "3",
    oxidation: "3c",
    radius: {
      calculated: "215",
      empirical: "195",
      covalent: "215"
    },
    discover: "1899",
    density: {
      stp: "10.07"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1",
    electrons: [2, 8, 18, 32, 18, 9, 2],
    quantum: {
      l: 2,
      m: -2,
      n: 6
    },
    isotopes: 12,
    group: 3,
    period: 7
  }
];
