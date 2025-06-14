import { Element } from './elementTypes';

// Актиноиды: элементы 90 (Th) — 103 (Lr)
export const elements90to103: Element[] = [
  // 90 Th
  {
    atomic: "90",
    symbol: "Th",
    name: "Thorium",
    weight: "232.04",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d2",
    series: "Actinide",
    melt: "2023",
    boil: "5061",
    electroneg: "1.3",
    valence: "4",
    oxidation: "2,3,4c",
    radius: {
      calculated: "206",
      empirical: "180",
      covalent: "206"
    },
    discover: "1829",
    density: {
      stp: "11.7"
    },
    conductivity: {
      thermal: "54.0"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d2",
    electrons: [2, 8, 18, 32, 18, 10, 2],
    quantum: {
      l: 2,
      m: -1,
      n: 6
    },
    isotopes: 12,
    group: 3,
    period: 7,
  },
  // 91 Pa
  {
    atomic: "91",
    symbol: "Pa",
    name: "Protactinium",
    weight: "231.04",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f2 6d1",
    series: "Actinide",
    melt: "1841",
    boil: "4300",
    electroneg: "1.5",
    valence: "5",
    oxidation: "3,4,5c",
    radius: {
      calculated: "200",
      empirical: "161",
      covalent: "161"
    },
    discover: "1913",
    density: {
      stp: "15.4"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f2 6d1",
    electrons: [2, 8, 18, 32, 20, 9, 2],
    quantum: {
      l: 2,
      m: -2,
      n: 5
    },
    isotopes: 14,
    group: 3,
    period: 7
  },
  // 92 U
  {
    atomic: "92",
    symbol: "U",
    name: "Uranium",
    weight: "238.03",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f3 6d1",
    series: "Actinide",
    melt: "1405.3",
    boil: "4404",
    electroneg: "1.38",
    valence: "6",
    oxidation: "3,4,5,6c",
    radius: {
      calculated: "186",
      empirical: "156",
      covalent: "196"
    },
    discover: "1789",
    density: {
      stp: "19.05"
    },
    conductivity: {
      thermal: "27.6"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f3 6d1",
    electrons: [2, 8, 18, 32, 21, 9, 2],
    quantum: {
      l: 2,
      m: -1,
      n: 5
    },
    isotopes: 22,
    group: 3,
    period: 7
  },
  // 93 Np
  {
    atomic: "93",
    symbol: "Np",
    name: "Neptunium",
    weight: "237",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f4 6d1",
    series: "Actinide",
    melt: "912",
    boil: "4447",
    electroneg: "1.36",
    valence: "6",
    oxidation: "3,4,5,6,7",
    radius: {
      calculated: "184",
      empirical: "130",
      covalent: "130"
    },
    discover: "1940",
    density: {
      stp: "20.45"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f4 6d1",
    electrons: [2, 8, 18, 32, 22, 9, 2],
    quantum: {
      l: 2,
      m: 0,
      n: 5
    },
    isotopes: 16,
    group: 3,
    period: 7
  },
  // 94 Pu
  {
    atomic: "94",
    symbol: "Pu",
    name: "Plutonium",
    weight: "244",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f6",
    series: "Actinide",
    melt: "912.5",
    boil: "3503",
    electroneg: "1.28",
    valence: "6",
    oxidation: "3,4,5,6",
    radius: {
      calculated: "183",
      empirical: "151",
      covalent: "151"
    },
    discover: "1940",
    density: {
      stp: "19.816"
    },
    conductivity: {
      thermal: "6.74"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f6",
    electrons: [2, 8, 18, 32, 24, 8, 2],
    quantum: {
      l: 3,
      m: -3,
      n: 5
    },
    isotopes: 19,
    group: 3,
    period: 7
  },
  // 95 Am
  {
    atomic: "95",
    symbol: "Am",
    name: "Americium",
    weight: "243",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7",
    series: "Actinide",
    melt: "1449",
    boil: "2880",
    electroneg: "1.13",
    valence: "6",
    oxidation: "2,3,4,5,6",
    radius: {
      calculated: "180",
      empirical: "173",
      covalent: "173"
    },
    discover: "1944",
    density: {
      stp: "13.69"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7",
    electrons: [2, 8, 18, 32, 25, 8, 2],
    quantum: {
      l: 3,
      m: -2,
      n: 5
    },
    isotopes: 15,
    group: 3,
    period: 7
  },
  // 96 Cm
  {
    atomic: "96",
    symbol: "Cm",
    name: "Curium",
    weight: "247",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7 6d1",
    series: "Actinide",
    melt: "1613",
    boil: "3383",
    electroneg: "1.28",
    valence: "3",
    oxidation: "3,4",
    radius: {
      calculated: "174",
      empirical: "174",
      covalent: "174"
    },
    discover: "1944",
    density: {
      stp: "13.51"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7 6d1",
    electrons: [2, 8, 18, 32, 25, 9, 2],
    quantum: {
      l: 2,
      m: -2,
      n: 5
    },
    isotopes: 20,
    group: 3,
    period: 7
  },
  // 97 Bk
  {
    atomic: "97",
    symbol: "Bk",
    name: "Berkelium",
    weight: "247",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f9",
    series: "Actinide",
    melt: "1259",
    boil: "2900",
    electroneg: "1.3",
    valence: "3",
    oxidation: "3,4",
    radius: {
      calculated: "173",
      empirical: "170",
      covalent: "170"
    },
    discover: "1949",
    density: {
      stp: "14.78"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f9",
    electrons: [2, 8, 18, 32, 27, 8, 2],
    quantum: {
      l: 3,
      m: -1,
      n: 5
    },
    isotopes: 10,
    group: 3,
    period: 7
  },
  // 98 Cf
  {
    atomic: "98",
    symbol: "Cf",
    name: "Californium",
    weight: "251",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f10",
    series: "Actinide",
    melt: "1173",
    boil: "1743",
    electroneg: "1.3",
    valence: "3",
    oxidation: "2,3,4",
    radius: {
      calculated: "171",
      empirical: "185",
      covalent: "185"
    },
    discover: "1950",
    density: {
      stp: "15.1"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f10",
    electrons: [2, 8, 18, 32, 28, 8, 2],
    quantum: {
      l: 3,
      m: 0,
      n: 5
    },
    isotopes: 18,
    group: 3,
    period: 7
  },
  // 99 Es
  {
    atomic: "99",
    symbol: "Es",
    name: "Einsteinium",
    weight: "252",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f11",
    series: "Actinide",
    melt: "1133",
    boil: "1260",
    electroneg: "1.3",
    valence: "3",
    oxidation: "2,3",
    radius: {
      calculated: "169",
      covalent: "169"
    },
    discover: "1952",
    density: {
      stp: "8.84"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f11",
    electrons: [2, 8, 18, 32, 29, 8, 2],
    quantum: {
      l: 3,
      m: 1,
      n: 5
    },
    isotopes: 12,
    group: 3,
    period: 7
  },
  // 100 Fm
  {
    atomic: "100",
    symbol: "Fm",
    name: "Fermium",
    weight: "257",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f12",
    series: "Actinide",
    melt: "1800",
    electroneg: "1.3",
    valence: "3",
    oxidation: "2,3",
    radius: {
      calculated: "167",
      covalent: "167"
    },
    discover: "1952",
    density: {
      stp: "9.7"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f12",
    electrons: [2, 8, 18, 32, 30, 8, 2],
    quantum: {
      l: 3,
      m: 2,
      n: 5
    },
    isotopes: 10,
    group: 3,
    period: 7
  },
  // 101 Md
  {
    atomic: "101",
    symbol: "Md",
    name: "Mendelevium",
    weight: "[258]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f13",
    series: "Actinide",
    melt: "1100",
    electroneg: "1.3",
    valence: "3",
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
  // 102 No
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
  // 103 Lr
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
  }
];
