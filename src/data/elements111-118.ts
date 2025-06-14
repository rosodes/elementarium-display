// Элементы 111–118
import { Element } from './elementTypes';

export const elements111to118: Element[] = [
  // Roentgenium (111)
  {
    atomic: "111",
    symbol: "Rg",
    name: "Roentgenium",
    weight: "[280]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1 6d10",
    series: "Transition",
    melt: "NA",
    boil: "NA",
    electroneg: "1.3",
    valence: "11",
    oxidation: "NA",
    radius: {
      calculated: "150",
      covalent: "138"
    },
    discover: "1994",
    density: {
      stp: "28.7"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1 6d10",
    electrons: [2, 8, 18, 32, 32, 18, 1],
    quantum: {
      l: 2,
      m: 2,
      n: 6
    },
    isotopes: 10,
    group: 11,
    period: 7
  },
  // Copernicium (112)
  {
    atomic: "112",
    symbol: "Cn",
    name: "Copernicium",
    weight: "[285]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10",
    series: "Transition",
    valence: "2",  // Added missing valence
    oxidation: "2,4",
    radius: {
      covalent: "122"
    },
    discover: "1996",
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10",
    electrons: [2, 8, 18, 32, 32, 18, 2],
    quantum: {
      l: 2,
      m: 2,
      n: 6
    },
    isotopes: 6,
    group: 12,
    period: 7
  },
  
  // Nihonium (113)
  {
    atomic: "113",
    symbol: "Nh",
    name: "Nihonium",
    weight: "[286]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p1",
    series: "Post-transition",
    valence: "3",  // Added missing valence
    oxidation: "1,3,5",
    radius: {
      covalent: "136"
    },
    discover: "2003",
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p1",
    electrons: [2, 8, 18, 32, 32, 18, 3],
    quantum: {
      l: 1,
      m: -1,
      n: 7
    },
    isotopes: 3,
    group: 13,
    period: 7
  },
  
  // Flerovium (114)
  {
    atomic: "114",
    symbol: "Fl",
    name: "Flerovium",
    weight: "[289]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p2",
    series: "Post-transition",
    melt: "70",
    boil: "150",
    valence: "4",  // Added missing valence
    oxidation: "2,4",
    radius: {
      covalent: "143"
    },
    discover: "1998",
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p2",
    electrons: [2, 8, 18, 32, 32, 18, 4],
    quantum: {
      l: 1,
      m: 0,
      n: 7
    },
    isotopes: 4,
    group: 14,
    period: 7
  },
  
  // Moscovium (115)
  {
    atomic: "115",
    symbol: "Mc",
    name: "Moscovium",
    weight: "[289]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p3",
    series: "Post-transition",
    melt: "670",
    boil: "1400",
    valence: "5",  // Added missing valence
    oxidation: "1,3",
    radius: {
      covalent: "162"
    },
    discover: "2003",
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p3",
    electrons: [2, 8, 18, 32, 32, 18, 5],
    quantum: {
      l: 1,
      m: 1, 
      n: 7
    },
    isotopes: 1,
    group: 15,
    period: 7
  },
  
  // Livermorium (116)
  {
    atomic: "116",
    symbol: "Lv",
    name: "Livermorium",
    weight: "[293]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p4",
    series: "Post-transition",
    melt: "709",
    boil: "1085",
    valence: "6",
    oxidation: "2,4",
    radius: {
      covalent: "175"
    },
    discover: "2000",
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p4",
    electrons: [2, 8, 18, 32, 32, 18, 6],
    quantum: {
      l: 1,
      m: 0,
      n: 7
    },
    isotopes: 4,
    group: 16,
    period: 7
  },
  // ——— ДОБАВЛЕНО: Элемент 117 (Теннессин) ———
  {
    atomic: "117",
    symbol: "Ts",
    name: "Tennessine",
    weight: "[294]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p5",
    series: "Post-transition",
    valence: "7",
    oxidation: "-1,1,3,5,7",
    radius: {
      covalent: "unknown"
    },
    discover: "2010",
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p5",
    electrons: [2, 8, 18, 32, 32, 18, 7],
    quantum: {
      l: 1,
      m: 1,
      n: 7
    },
    isotopes: 2,
    group: 17,
    period: 7
  },
  // —— ДОБАВЛЯЕМ: Элемент 118 (Оганессон) ——
  {
    atomic: "118",
    symbol: "Og",
    name: "Oganesson",
    weight: "[294]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6",
    series: "Noble",
    valence: "8",
    oxidation: "0,+2",
    radius: {
      covalent: "unknown"
    },
    discover: "2002",
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6",
    electrons: [2, 8, 18, 32, 32, 18, 8],
    quantum: {
      l: 1,
      m: -1,
      n: 7
    },
    isotopes: 3,
    group: 18,
    period: 7
  }
];
