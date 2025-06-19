
import { Element } from './elementTypes';

// Рефакторинг: создание отдельного файла для сверхтяжелых элементов
export const tennessine: Element = {
  atomic: "117",
  symbol: "Ts",
  name: "Tennessine",
  weight: "[294]",
  electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p5",
  series: "Post-transition",
  valence: "7",
  oxidation: "-1,1,3,5,7",
  radius: { covalent: "unknown" },
  discover: "2010",
  expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p5",
  electrons: [2, 8, 18, 32, 32, 18, 7],
  quantum: { l: 1, m: 1, n: 7 },
  isotopes: 2,
  group: 17,
  period: 7,
  category: "post-transition metal",
  radioactive: true,
  description: "Теннессин — синтетический сверхтяжелый элемент, один из галогенов седьмого периода. Крайне радиоактивен с очень коротким периодом полураспада.",
  history: {
    discovery: "2010",
    discoverer: "Объединенный институт ядерных исследований (Дубна) и Ок-Риджская национальная лаборатория",
    etymology: "Назван в честь штата Теннесси, США",
    timeline: [
      { year: "2010", event: "Первое получение элемента в лаборатории" },
      { year: "2016", event: "Официальное утверждение названия IUPAC" }
    ]
  },
  applications: {
    primary: ["Научные исследования"],
    secondary: ["Изучение сверхтяжелых элементов"],
    emerging: ["Теоретические исследования структуры атомного ядра"]
  },
  safety: {
    hazards: ["Высокая радиоактивность", "Крайне короткий период полураспада"],
    precautions: ["Работа только в специализированных лабораториях", "Использование защитного оборудования"],
    toxicity: "Неизвестна из-за крайне малых количеств",
    handling: "Требует специального оборудования для работы с радиоактивными материалами"
  },
  production: {
    methods: ["Слияние атомных ядер в ускорителе частиц"],
    sources: ["Синтез из берклия-249 и кальция-48"],
    annualProduction: "Несколько атомов в год",
    cost: "Миллионы долларов за атом"
  },
  biological: {
    role: "Неизвестна",
    essentiality: "Не является биологически значимым",
    toxicity: "Предположительно высокотоксичен из-за радиоактивности",
    metabolism: "Не участвует в биологических процессах"
  },
  compounds: {
    common: ["Не образует стабильных соединений"],
    notable: ["Теоретически может образовывать галогениды"],
    industrial: ["Не имеет промышленных применений"]
  }
};

export const nihonium: Element = {
  atomic: "113",
  symbol: "Nh",
  name: "Nihonium",
  weight: "[286]",
  electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p1",
  series: "Post-transition",
  valence: "3",
  oxidation: "1,3,5",
  radius: { covalent: "136" },
  discover: "2003",
  expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p1",
  electrons: [2, 8, 18, 32, 32, 18, 3],
  quantum: { l: 1, m: -1, n: 7 },
  isotopes: 3,
  group: 13,
  period: 7,
  category: "post-transition metal",
  radioactive: true,
  description: "Нихоний — синтетический сверхтяжелый элемент группы бора. Крайне радиоактивен и нестабилен.",
  history: {
    discovery: "2003",
    discoverer: "RIKEN (Япония)",
    etymology: "Nihon - японское название Японии",
    timeline: [
      { year: "2003", event: "Первое получение в лаборатории RIKEN" },
      { year: "2016", event: "Официальное признание и наименование IUPAC" }
    ]
  },
  applications: {
    primary: ["Фундаментальные исследования"],
    secondary: ["Изучение свойств сверхтяжелых элементов"],
    emerging: ["Исследования в области ядерной физики"]
  },
  safety: {
    hazards: ["Экстремальная радиоактивность", "Альфа-излучение"],
    precautions: ["Работа в защищенных условиях", "Специализированное оборудование"],
    toxicity: "Высокотоксичен из-за радиоактивности",
    handling: "Требует максимальных мер безопасности"
  },
  production: {
    methods: ["Ядерный синтез"],
    sources: ["Бомбардировка висмута-209 цинком-70"],
    annualProduction: "Единичные атомы",
    cost: "Чрезвычайно высокая"
  },
  biological: {
    role: "Отсутствует",
    essentiality: "Не является биологически значимым",
    toxicity: "Крайне токсичен",
    metabolism: "Не участвует в метаболизме"
  }
};

export const moscovium: Element = {
  atomic: "115",
  symbol: "Mc",
  name: "Moscovium",
  weight: "[289]",
  electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p3",
  series: "Post-transition",
  melt: "670",
  boil: "1400",
  valence: "5",
  oxidation: "1,3",
  radius: { covalent: "162" },
  discover: "2003",
  expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p3",
  electrons: [2, 8, 18, 32, 32, 18, 5],
  quantum: { l: 1, m: 1, n: 7 },
  isotopes: 1,
  group: 15,
  period: 7,
  category: "post-transition metal",
  radioactive: true,
  description: "Московий — синтетический сверхтяжелый элемент группы азота. Получен искусственно в лабораторных условиях.",
  history: {
    discovery: "2003",
    discoverer: "Объединенный институт ядерных исследований (Дубна) и Ливерморская национальная лаборатория",
    etymology: "Назван в честь Московской области, где расположен ОИЯИ",
    timeline: [
      { year: "2003", event: "Первый синтез элемента" },
      { year: "2016", event: "Официальное утверждение названия" }
    ]
  },
  applications: {
    primary: ["Научные исследования ядерной физики"],
    secondary: ["Изучение свойств сверхтяжелых ядер"],
    emerging: ["Поиск острова стабильности"]
  },
  safety: {
    hazards: ["Высокая радиоактивность", "Короткий период полураспада"],
    precautions: ["Специальные защитные меры", "Работа в изолированных условиях"],
    toxicity: "Предположительно высокотоксичен",
    handling: "Требует специализированного оборудования"
  }
};

export const oganesson: Element = {
  atomic: "118",
  symbol: "Og",
  name: "Oganesson",
  weight: "[294]",
  electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6",
  series: "Noble",
  valence: "8",
  oxidation: "0,+2",
  radius: { covalent: "unknown" },
  discover: "2002",
  expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6",
  electrons: [2, 8, 18, 32, 32, 18, 8],
  quantum: { l: 1, m: -1, n: 7 },
  isotopes: 3,
  group: 18,
  period: 7,
  category: "noble gas",
  radioactive: true,
  description: "Оганесон — синтетический сверхтяжелый благородный газ, завершающий седьмой период таблицы Менделеева.",
  history: {
    discovery: "2002",
    discoverer: "Объединенный институт ядерных исследований (Дубна) и Ливерморская национальная лаборатория",
    etymology: "Назван в честь Юрия Оганесяна, российского физика-ядерщика",
    timeline: [
      { year: "2002", event: "Первое получение элемента" },
      { year: "2016", event: "Официальное признание IUPAC" }
    ]
  }
};

export const livermorium: Element = {
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
  radius: { covalent: "175" },
  discover: "2000",
  expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p4",
  electrons: [2, 8, 18, 32, 32, 18, 6],
  quantum: { l: 1, m: 0, n: 7 },
  isotopes: 4,
  group: 16,
  period: 7,
  category: "post-transition metal",
  radioactive: true,
  description: "Ливерморий — синтетический сверхтяжелый элемент группы халькогенов.",
  history: {
    discovery: "2000",
    discoverer: "Объединенный институт ядерных исследований и Ливерморская национальная лаборатория",
    etymology: "Назван в честь Ливерморской национальной лаборатории"
  }
};

export const flerovium: Element = {
  atomic: "114",
  symbol: "Fl",
  name: "Flerovium",
  weight: "[289]",
  electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p2",
  series: "Post-transition",
  melt: "70",
  boil: "150",
  valence: "4",
  oxidation: "2,4",
  radius: { covalent: "143" },
  discover: "1998",
  expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p2",
  electrons: [2, 8, 18, 32, 32, 18, 4],
  quantum: { l: 1, m: 0, n: 7 },
  isotopes: 4,
  group: 14,
  period: 7,
  category: "post-transition metal",
  radioactive: true,
  description: "Флеровий — синтетический сверхтяжелый элемент группы углерода.",
  history: {
    discovery: "1998",
    discoverer: "Объединенный институт ядерных исследований",
    etymology: "Назван в честь Георгия Флёрова, советского физика-ядерщика"
  }
};

export const copernicium: Element = {
  atomic: "112",
  symbol: "Cn",
  name: "Copernicium",
  weight: "[285]",
  electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10",
  series: "Transition",
  valence: "2",
  oxidation: "2,4",
  radius: { covalent: "122" },
  discover: "1996",
  expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10",
  electrons: [2, 8, 18, 32, 32, 18, 2],
  quantum: { l: 2, m: 2, n: 6 },
  isotopes: 6,
  group: 12,
  period: 7,
  category: "transition metal",
  radioactive: true,
  description: "Коперниций — синтетический сверхтяжелый переходный металл.",
  history: {
    discovery: "1996",
    discoverer: "GSI Helmholtz Centre for Heavy Ion Research",
    etymology: "Назван в честь Николая Коперника"
  }
};

export const superHeavyElements: Element[] = [
  copernicium,
  nihonium,
  flerovium,
  moscovium,
  livermorium,
  tennessine,
  oganesson
];
