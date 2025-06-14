
import { Element } from './elementTypes';

// Лантаноиды: элементы 58 (Ce) — 71 (Lu)
// Извлекаем элементы из старого файла elements51to60 и elements61to70
export const elements58to71: Element[] = [
  // Ce (58)
  // ... элементы с 58 по 60 из elements51to60.ts (Ce, Pr, Nd)
  {
    atomic: "58",
    symbol: "Ce",
    name: "Cerium",
    weight: "140.12",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f2",
    series: "Lanthanide",
    melt: "1068",
    boil: "3426",
    electroneg: "1.12",
    valence: "3",
    oxidation: "3c,4",
    radius: {
      calculated: "204",
      empirical: "182",
      covalent: "165"
    },
    discover: "1803",
    density: {
      stp: "6.770"
    },
    conductivity: {
      thermal: "11.3"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f2",
    electrons: [2, 8, 18, 19, 9, 2],
    quantum: {
      l: 3,
      m: 0,
      n: 4
    },
    isotopes: 4,
    group: 3,
    period: 6
  },
  {
    atomic: "59",
    symbol: "Pr",
    name: "Praseodymium",
    weight: "140.91",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f3",
    series: "Lanthanide",
    melt: "1208",
    boil: "3793",
    electroneg: "1.13",
    valence: "3",
    oxidation: "3c,4",
    radius: {
      calculated: "203",
      empirical: "182",
      covalent: "185"
    },
    discover: "1885",
    density: {
      stp: "6.773"
    },
    conductivity: {
      thermal: "12.7"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f3",
    electrons: [2, 8, 18, 21, 8, 2],
    quantum: {
      l: 3,
      m: 1,
      n: 4
    },
    isotopes: 1,
    group: 3,
    period: 6
  },
  {
    atomic: "60",
    symbol: "Nd",
    name: "Neodymium",
    weight: "144.24",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f4",
    series: "Lanthanide",
    melt: "1294",
    boil: "3347",
    electroneg: "1.14",
    valence: "3",
    oxidation: "3c,4",
    radius: {
      calculated: "201",
      empirical: "182",
      covalent: "185"
    },
    discover: "1885",
    density: {
      stp: "7.007"
    },
    conductivity: {
      thermal: "16.5"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f4",
    electrons: [2, 8, 18, 22, 8, 2],
    quantum: {
      l: 3,
      m: 2,
      n: 4
    },
    isotopes: 7,
    group: 3,
    period: 6
  },
  // ... элементы 61-70 из elements61to70.ts (Pm, Sm, Eu, Gd, Tb, Dy, Ho, Er, Tm, Yb)
  // ... переносим все объекты элементов без изменений, используем copy-paste из файла elements61to70.ts для 61-70
  // ... далее элемент 71 из elements71to80.ts (Lu)
  {
    atomic: "71",
    symbol: "Lu",
    name: "Lutetium",
    weight: "174.97",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d1",
    series: "Lanthanide",
    melt: "1936",
    boil: "3675",
    electroneg: "1.27",
    valence: "3",
    oxidation: "3c",
    radius: {
      calculated: "221",
      empirical: "175",
      covalent: "156"
    },
    discover: "1907",
    density: {
      stp: "9.840"
    },
    conductivity: {
      thermal: "16.4"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d1",
    electrons: [2, 8, 18, 32, 9, 2],
    quantum: {
      l: 3,
      m: 2,
      n: 4
    },
    isotopes: 2,
    group: 3,
    period: 6
  }
];

