
import { Element } from './elementTypes';

// Трансактиноиды (элементы 104-111)
export const rutherfordium: Element = {
  atomic: "104",
  symbol: "Rf",
  name: "Rutherfordium",
  weight: "[267]",
  electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d2",
  series: "Transition",
  melt: "2400",
  boil: "5800",
  electroneg: "1.6",
  valence: "4",
  oxidation: "4c",
  radius: { calculated: "150", covalent: "150" },
  discover: "1969",
  density: { stp: "23.2" },
  expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d2",
  electrons: [2, 8, 18, 32, 32, 10, 2],
  quantum: { l: 2, m: -1, n: 6 },
  isotopes: 16,
  group: 4,
  period: 7,
  category: "transition metal",
  radioactive: true,
  description: "Резерфордий — первый трансактиноидный элемент, синтетический сверхтяжелый переходный металл.",
  history: {
    discovery: "1969",
    discoverer: "Университет Калифорнии в Беркли и GSI",
    etymology: "Назван в честь Эрнеста Резерфорда",
    timeline: [
      { year: "1964-1969", event: "Споры о первооткрывательстве между советскими и американскими учеными" },
      { year: "1997", event: "Официальное утверждение названия IUPAC" }
    ]
  },
  applications: {
    primary: ["Научные исследования"],
    secondary: ["Изучение свойств трансактиноидных элементов"],
    emerging: ["Исследования сверхтяжелых ядер"]
  },
  safety: {
    hazards: ["Высокорадиоактивен", "Короткий период полураспада"],
    precautions: ["Работа в защищенных лабораториях", "Специальное оборудование"],
    toxicity: "Крайне токсичен из-за радиоактивности",
    handling: "Требует максимальных мер предосторожности"
  }
};

export const dubnium: Element = {
  atomic: "105",
  symbol: "Db",
  name: "Dubnium",
  weight: "[268]",
  electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d3",
  series: "Transition",
  valence: "5",
  oxidation: "5",
  radius: { calculated: "139", covalent: "139" },
  discover: "1970",
  density: { stp: "29.3" },
  expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d3",
  electrons: [2, 8, 18, 32, 32, 11, 2],
  quantum: { l: 2, m: 0, n: 6 },
  isotopes: 13,
  group: 5,
  period: 7,
  category: "transition metal",
  radioactive: true,
  description: "Дубний — синтетический трансактиноидный элемент группы ванадия.",
  history: {
    discovery: "1970",
    discoverer: "Объединенный институт ядерных исследований (Дубна)",
    etymology: "Назван в честь города Дубна"
  }
};

export const seaborgium: Element = {
  atomic: "106",
  symbol: "Sg",
  name: "Seaborgium",
  weight: "[269]",
  electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d4",
  series: "Transition",
  valence: "6",
  oxidation: "6",
  radius: { calculated: "128", covalent: "128" },
  discover: "1974",
  density: { stp: "35.0" },
  expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d4",
  electrons: [2, 8, 18, 32, 32, 12, 2],
  quantum: { l: 2, m: -1, n: 6 },
  isotopes: 15,
  group: 6,
  period: 7,
  category: "transition metal",
  radioactive: true,
  description: "Сиборгий — синтетический трансактиноидный элемент группы хрома.",
  history: {
    discovery: "1974",
    discoverer: "Университет Калифорнии в Беркли",
    etymology: "Назван в честь Гленна Сиборга"
  }
};

export const bohrium: Element = {
  atomic: "107",
  symbol: "Bh",
  name: "Bohrium",
  weight: "[270]",
  electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d5",
  series: "Transition",
  valence: "7",
  oxidation: "7",
  radius: { calculated: "121", covalent: "121" },
  discover: "1981",
  density: { stp: "37.1" },
  expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d5",
  electrons: [2, 8, 18, 32, 32, 13, 2],
  quantum: { l: 2, m: 0, n: 6 },
  isotopes: 13,
  group: 7,
  period: 7,
  category: "transition metal",
  radioactive: true,
  description: "Борий — синтетический трансактиноидный элемент группы марганца.",
  history: {
    discovery: "1981",
    discoverer: "GSI Helmholtz Centre for Heavy Ion Research",
    etymology: "Назван в честь Нильса Бора"
  }
};

export const hassium: Element = {
  atomic: "108",
  symbol: "Hs",
  name: "Hassium",
  weight: "[277]",
  electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d6",
  series: "Transition",
  valence: "8",
  oxidation: "4,8",
  radius: { calculated: "116", covalent: "116" },
  discover: "1984",
  density: { stp: "40.8" },
  expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d6",
  electrons: [2, 8, 18, 32, 32, 14, 2],
  quantum: { l: 2, m: 1, n: 6 },
  isotopes: 9,
  group: 8,
  period: 7,
  category: "transition metal",
  radioactive: true,
  description: "Хассий — синтетический трансактиноидный элемент группы железа.",
  history: {
    discovery: "1984",
    discoverer: "GSI Helmholtz Centre for Heavy Ion Research",
    etymology: "Назван в честь немецкой земли Гессен (Hassia на латыни)"
  }
};

export const meitnerium: Element = {
  atomic: "109",
  symbol: "Mt",
  name: "Meitnerium",
  weight: "[278]",
  electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d7",
  series: "Unknown",
  radius: { calculated: "109", covalent: "109" },
  discover: "1982",
  density: { stp: "37.4" },
  expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d7",
  electrons: [2, 8, 18, 32, 32, 15, 2],
  quantum: { l: 2, m: 2, n: 6 },
  isotopes: 8,
  group: 9,
  period: 7,
  category: "transition metal",
  radioactive: true,
  description: "Мейтнерий — синтетический трансактиноидный элемент группы кобальта.",
  history: {
    discovery: "1982",
    discoverer: "GSI Helmholtz Centre for Heavy Ion Research",
    etymology: "Назван в честь Лизы Мейтнер, австрийско-шведского физика"
  }
};

export const darmstadtium: Element = {
  atomic: "110",
  symbol: "Ds",
  name: "Darmstadtium",
  weight: "[281]",
  electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d8",
  series: "Unknown",
  radius: { calculated: "99", covalent: "128" },
  discover: "1994",
  density: { stp: "34.8" },
  expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d8",
  electrons: [2, 8, 18, 32, 32, 16, 2],
  quantum: { l: 2, m: -2, n: 6 },
  isotopes: 8,
  group: 10,
  period: 7,
  category: "transition metal",
  radioactive: true,
  description: "Дармштадтий — синтетический трансактиноидный элемент группы никеля.",
  history: {
    discovery: "1994",
    discoverer: "GSI Helmholtz Centre for Heavy Ion Research",
    etymology: "Назван в честь города Дармштадт"
  }
};

export const roentgenium: Element = {
  atomic: "111",
  symbol: "Rg",
  name: "Roentgenium",
  weight: "[280]",
  electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1 6d10",
  series: "Transition",
  electroneg: "1.3",
  valence: "11",
  radius: { calculated: "150", covalent: "138" },
  discover: "1994",
  density: { stp: "28.7" },
  expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1 6d10",
  electrons: [2, 8, 18, 32, 32, 18, 1],
  quantum: { l: 2, m: 2, n: 6 },
  isotopes: 10,
  group: 11,
  period: 7,
  category: "transition metal",
  radioactive: true,
  description: "Рентгений — синтетический трансактиноидный элемент группы меди.",
  history: {
    discovery: "1994",
    discoverer: "GSI Helmholtz Centre for Heavy Ion Research",
    etymology: "Назван в честь Вильгельма Рентгена"
  }
};

export const nobelium: Element = {
  atomic: "102",
  symbol: "No",
  name: "Nobelium",
  weight: "[259]",
  electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14",
  series: "Actinide",
  melt: "1100",
  electroneg: "1.3",
  valence: "2",
  oxidation: "2,3",
  radius: { calculated: "190", covalent: "168" },
  discover: "1958",
  density: { stp: "9.9" },
  expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14",
  electrons: [2, 8, 18, 32, 32, 8, 2],
  quantum: { l: 3, m: 2, n: 5 },
  isotopes: 13,
  group: 3,
  period: 7,
  category: "actinide",
  radioactive: true,
  description: "Нобелий — синтетический трансурановый элемент из семейства актиноидов.",
  history: {
    discovery: "1958",
    discoverer: "Университет Калифорнии в Беркли",
    etymology: "Назван в честь Альфреда Нобеля"
  }
};

export const transactinideElements: Element[] = [
  nobelium,
  rutherfordium,
  dubnium,
  seaborgium,
  bohrium,
  hassium,
  meitnerium,
  darmstadtium,
  roentgenium
];
