// Элементы 101–110
import { Element } from './elementTypes';

export const elements101to110: Element[] = [
  // Mendelevium (101)
  {
    atomic: "101",
    symbol: "Md",
    name: "Mendelevium",
    weight: "[258]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f13",
    series: "Actinide",
    melt: "1100",
    electroneg: "1.3",
    valence: "3",  // Added missing valence
    oxidation: "2,3c",
    radius: {
      calculated: "186",
      covalent: "186"
    },
    discover: "1955",
    density: {
      stp: "10.3"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f13",
    electrons: [2, 8, 18, 32, 31, 8, 2],
    quantum: {
      l: 3,
      m: 0,
      n: 5
    },
    isotopes: 3,
    group: 3,
    period: 7
  },

  // Nobelium (102)
  {
    atomic: "102",
    symbol: "No",
    name: "Nobelium",
    weight: "[259]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14",
    series: "Actinide",
    melt: "1100",
    electroneg: "1.3",
    valence: "3",
    oxidation: "2,3",
    radius: {
      calculated: "186",
      covalent: "186"
    },
    discover: "1958",
    density: {
      stp: "10.3"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14",
    electrons: [2, 8, 18, 32, 32, 8, 2],
    quantum: {
      l: 3,
      m: 1,
      n: 5
    },
    isotopes: 10,
    group: 3,
    period: 7
  },

  // Lawrencium (103)
  {
    atomic: "103",
    symbol: "Lr",
    name: "Lawrencium",
    weight: "[266]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p1",
    series: "Actinide",
    melt: "1927",
    electroneg: "1.3",
    valence: "3",
    oxidation: "3c",
    radius: {
      calculated: "186",
      covalent: "161"
    },
    discover: "1961",
    density: {
      stp: "14.4"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p1",
    electrons: [2, 8, 18, 32, 32, 8, 3],
    quantum: {
      l: 1,
      m: -1,
      n: 7
    },
    isotopes: 11,
    group: 3,
    period: 7
  },

  // Rutherfordium (104)
  {
    atomic: "104",
    symbol: "Rf",
    name: "Rutherfordium",
    weight: "[267]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d2",
    series: "Transition",
    melt: "2373",
    boil: "5833",
    electroneg: "1.3",
    valence: "4",
    oxidation: "4c",
    radius: {
      calculated: "150",
      covalent: "150"
    },
    discover: "1969",
    density: {
      stp: "23.2"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d2",
    electrons: [2, 8, 18, 32, 32, 10, 2],
    quantum: {
      l: 2,
      m: -2,
      n: 6
    },
    isotopes: 16,
    group: 4,
    period: 7
  },

  // Dubnium (105)
  {
    atomic: "105",
    symbol: "Db",
    name: "Dubnium",
    weight: "[270]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d3",
    series: "Transition",
    melt: "NA",
    boil: "NA",
    electroneg: "1.3",
    valence: "5",
    oxidation: "5",
    radius: {
      calculated: "150",
      covalent: "150"
    },
    discover: "1970",
    density: {
      stp: "29.3"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d3",
    electrons: [2, 8, 18, 32, 32, 11, 2],
    quantum: {
      l: 2,
      m: -1,
      n: 6
    },
    isotopes: 11,
    group: 5,
    period: 7
  },

  // Seaborgium (106)
  {
    atomic: "106",
    symbol: "Sg",
    name: "Seaborgium",
    weight: "[271]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d4",
    series: "Transition",
    melt: "NA",
    boil: "NA",
    electroneg: "1.3",
    valence: "6",
    oxidation: "6",
    radius: {
      calculated: "150",
      covalent: "150"
    },
    discover: "1974",
    density: {
      stp: "35.0"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d4",
    electrons: [2, 8, 18, 32, 32, 12, 2],
    quantum: {
      l: 2,
      m: 0,
      n: 6
    },
    isotopes: 14,
    group: 6,
    period: 7
  },

  // Bohrium (107)
  {
    atomic: "107",
    symbol: "Bh",
    name: "Bohrium",
    weight: "[272]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d5",
    series: "Transition",
    melt: "NA",
    boil: "NA",
    electroneg: "1.3",
    valence: "7",
    oxidation: "7",
    radius: {
      calculated: "150",
      covalent: "150"
    },
    discover: "1981",
    density: {
      stp: "37.1"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d5",
    electrons: [2, 8, 18, 32, 32, 13, 2],
    quantum: {
      l: 2,
      m: 0,
      n: 6
    },
    isotopes: 12,
    group: 7,
    period: 7
  },

  // Hassium (108)
  {
    atomic: "108",
    symbol: "Hs",
    name: "Hassium",
    weight: "[270]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d6",
    series: "Transition",
    melt: "NA",
    boil: "NA",
    electroneg: "1.3",
    valence: "8",
    oxidation: "4,8",
    radius: {
      calculated: "150",
      covalent: "150"
    },
    discover: "1984",
    density: {
      stp: "40.8"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d6",
    electrons: [2, 8, 18, 32, 32, 14, 2],
    quantum: {
      l: 2,
      m: 1,
      n: 6
    },
    isotopes: 14,
    group: 8,
    period: 7
  },

  // Meitnerium (109)
  {
    atomic: "109",
    symbol: "Mt",
    name: "Meitnerium",
    weight: "[276]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d7",
    series: "Transition",
    melt: "NA",
    boil: "NA",
    electroneg: "1.3",
    valence: "9",
    oxidation: "NA",
    radius: {
      calculated: "150",
      covalent: "150"
    },
    discover: "1982",
    density: {
      stp: "37.4"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d7",
    electrons: [2, 8, 18, 32, 32, 15, 2],
    quantum: {
      l: 2,
      m: 1,
      n: 6
    },
    isotopes: 7,
    group: 9,
    period: 7
  },

  // Darmstadtium (110)
  {
    atomic: "110",
    symbol: "Ds",
    name: "Darmstadtium",
    weight: "[281]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1 6d9",
    series: "Transition",
    melt: "NA",
    boil: "NA",
    electroneg: "1.3",
    valence: "10",
    oxidation: "NA",
    radius: {
      calculated: "150",
      covalent: "150"
    },
    discover: "1994",
    density: {
      stp: "34.8"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1 6d9",
    electrons: [2, 8, 18, 32, 32, 17, 1],
    quantum: {
      l: 2,
      m: 0,
      n: 6
    },
    isotopes: 9,
    group: 10,
    period: 7
  }
];
