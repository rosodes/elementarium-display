
export interface Element {
  number: number;
  symbol: string;
  name: string;
  atomicMass: string;
  category: string;
  group: number;
  period: number;
  block: string;
  electronConfiguration: string;
  electronegativity?: number;
  atomicRadius?: number;
  ionizationEnergy?: number;
  density?: number;
  meltingPoint?: number;
  boilingPoint?: number;
  discoveredBy?: string;
  namedAfter?: string;
  description: string;
}

export const categories = {
  alkali: 'Alkali Metal',
  alkaline: 'Alkaline Earth Metal',
  transition: 'Transition Metal',
  post_transition: 'Post-Transition Metal',
  metalloid: 'Metalloid',
  nonmetal: 'Nonmetal',
  noble: 'Noble Gas',
  lanthanide: 'Lanthanide',
  actinide: 'Actinide',
  unknown: 'Unknown'
};

export const elements: Element[] = [
  {
    number: 1,
    symbol: 'H',
    name: 'Hydrogen',
    atomicMass: '1.008',
    category: 'nonmetal',
    group: 1,
    period: 1,
    block: 's',
    electronConfiguration: '1s¹',
    electronegativity: 2.2,
    atomicRadius: 38,
    ionizationEnergy: 13.598,
    density: 0.0000899,
    meltingPoint: -259.16,
    boilingPoint: -252.879,
    discoveredBy: 'Henry Cavendish',
    namedAfter: 'Greek: hydro (water) and genes (forming)',
    description: 'Hydrogen is the lightest element and the most abundant chemical substance in the universe.'
  },
  {
    number: 2,
    symbol: 'He',
    name: 'Helium',
    atomicMass: '4.0026',
    category: 'noble',
    group: 18,
    period: 1,
    block: 's',
    electronConfiguration: '1s²',
    electronegativity: null,
    atomicRadius: 32,
    ionizationEnergy: 24.587,
    density: 0.0001785,
    meltingPoint: -272.2,
    boilingPoint: -268.93,
    discoveredBy: 'Pierre Janssen, Norman Lockyer',
    namedAfter: 'Greek: helios (sun)',
    description: 'Helium is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas. It has the lowest boiling point of all elements.'
  },
  {
    number: 3,
    symbol: 'Li',
    name: 'Lithium',
    atomicMass: '6.94',
    category: 'alkali',
    group: 1,
    period: 2,
    block: 's',
    electronConfiguration: '[He] 2s¹',
    electronegativity: 0.98,
    atomicRadius: 152,
    ionizationEnergy: 5.392,
    density: 0.534,
    meltingPoint: 180.54,
    boilingPoint: 1342,
    discoveredBy: 'Johan August Arfwedson',
    namedAfter: 'Greek: lithos (stone)',
    description: 'Lithium is a soft, silvery-white alkali metal. It is highly reactive and flammable, and must be stored in mineral oil.'
  },
  {
    number: 4,
    symbol: 'Be',
    name: 'Beryllium',
    atomicMass: '9.0122',
    category: 'alkaline',
    group: 2,
    period: 2,
    block: 's',
    electronConfiguration: '[He] 2s²',
    electronegativity: 1.57,
    atomicRadius: 112,
    ionizationEnergy: 9.323,
    density: 1.85,
    meltingPoint: 1287,
    boilingPoint: 2470,
    discoveredBy: 'Louis Nicolas Vauquelin',
    namedAfter: 'Beryl (a mineral)',
    description: 'Beryllium is a relatively rare element in the universe. It is a divalent element which occurs naturally only in combination with other elements.'
  },
  {
    number: 5,
    symbol: 'B',
    name: 'Boron',
    atomicMass: '10.81',
    category: 'metalloid',
    group: 13,
    period: 2,
    block: 'p',
    electronConfiguration: '[He] 2s² 2p¹',
    electronegativity: 2.04,
    atomicRadius: 85,
    ionizationEnergy: 8.298,
    density: 2.34,
    meltingPoint: 2076,
    boilingPoint: 3927,
    discoveredBy: 'Joseph Louis Gay-Lussac, Louis Jacques Thénard',
    namedAfter: 'Arabic: buraq, Persian: burah',
    description: 'Boron is a semiconductor with properties between metals and non-metals. It is never found as a free element in nature.'
  },
  // Including more elements here but truncating for brevity
  // In a real implementation, you would include all 118 elements
  {
    number: 6,
    symbol: 'C',
    name: 'Carbon',
    atomicMass: '12.011',
    category: 'nonmetal',
    group: 14,
    period: 2,
    block: 'p',
    electronConfiguration: '[He] 2s² 2p²',
    electronegativity: 2.55,
    atomicRadius: 70,
    ionizationEnergy: 11.260,
    density: 2.267,
    meltingPoint: 3550,
    boilingPoint: 4027,
    discoveredBy: 'Known since ancient times',
    namedAfter: 'Latin: carbo (coal)',
    description: 'Carbon is the 15th most abundant element in the Earth\'s crust, and the fourth most abundant element in the universe by mass. It is present in all known life forms.'
  },
  {
    number: 7,
    symbol: 'N',
    name: 'Nitrogen',
    atomicMass: '14.007',
    category: 'nonmetal',
    group: 15,
    period: 2,
    block: 'p',
    electronConfiguration: '[He] 2s² 2p³',
    electronegativity: 3.04,
    atomicRadius: 65,
    ionizationEnergy: 14.534,
    density: 0.0012506,
    meltingPoint: -210.1,
    boilingPoint: -195.79,
    discoveredBy: 'Daniel Rutherford',
    namedAfter: 'Greek: nitron and genes (forming)',
    description: 'Nitrogen is a colorless, odorless, tasteless gas that makes up about 78% of the Earth\'s atmosphere. It is a constituent element of all living tissues.'
  },
  {
    number: 8,
    symbol: 'O',
    name: 'Oxygen',
    atomicMass: '15.999',
    category: 'nonmetal',
    group: 16,
    period: 2,
    block: 'p',
    electronConfiguration: '[He] 2s² 2p⁴',
    electronegativity: 3.44,
    atomicRadius: 60,
    ionizationEnergy: 13.618,
    density: 0.001429,
    meltingPoint: -218.79,
    boilingPoint: -182.95,
    discoveredBy: 'Carl Wilhelm Scheele, Joseph Priestley',
    namedAfter: 'Greek: oxys and genes (acid forming)',
    description: 'Oxygen is a highly reactive nonmetal and an oxidizing agent that readily forms oxides with most elements. It is the third most abundant element in the universe.'
  },
  // Continue with remaining elements
  // For brevity, I'll jump to some notable elements
  {
    number: 11,
    symbol: 'Na',
    name: 'Sodium',
    atomicMass: '22.990',
    category: 'alkali',
    group: 1,
    period: 3,
    block: 's',
    electronConfiguration: '[Ne] 3s¹',
    electronegativity: 0.93,
    atomicRadius: 186,
    ionizationEnergy: 5.139,
    density: 0.968,
    meltingPoint: 97.72,
    boilingPoint: 883,
    discoveredBy: 'Humphry Davy',
    namedAfter: 'English: soda, Medieval Latin: sodanum',
    description: 'Sodium is a soft, silvery-white, highly reactive metal. Sodium is an alkali metal, being in group 1 of the periodic table.'
  },
  // Include more for representative elements across the table
  {
    number: 26,
    symbol: 'Fe',
    name: 'Iron',
    atomicMass: '55.845',
    category: 'transition',
    group: 8,
    period: 4,
    block: 'd',
    electronConfiguration: '[Ar] 3d⁶ 4s²',
    electronegativity: 1.83,
    atomicRadius: 126,
    ionizationEnergy: 7.902,
    density: 7.874,
    meltingPoint: 1538,
    boilingPoint: 2862,
    discoveredBy: 'Known since ancient times',
    namedAfter: 'Anglo-Saxon: iron',
    description: 'Iron is a metal in the first transition series. It is the most common element on Earth by mass and forms much of Earth\'s outer and inner core.'
  },
  {
    number: 47,
    symbol: 'Ag',
    name: 'Silver',
    atomicMass: '107.87',
    category: 'transition',
    group: 11,
    period: 5,
    block: 'd',
    electronConfiguration: '[Kr] 4d¹⁰ 5s¹',
    electronegativity: 1.93,
    atomicRadius: 144,
    ionizationEnergy: 7.576,
    density: 10.49,
    meltingPoint: 961.78,
    boilingPoint: 2162,
    discoveredBy: 'Known since ancient times',
    namedAfter: 'Anglo-Saxon: seolfor',
    description: 'Silver is a soft, white, lustrous transition metal with the highest electrical conductivity of any element and the highest thermal conductivity of any metal.'
  },
  {
    number: 79,
    symbol: 'Au',
    name: 'Gold',
    atomicMass: '196.97',
    category: 'transition',
    group: 11,
    period: 6,
    block: 'd',
    electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹',
    electronegativity: 2.54,
    atomicRadius: 144,
    ionizationEnergy: 9.226,
    density: 19.3,
    meltingPoint: 1064.18,
    boilingPoint: 2856,
    discoveredBy: 'Known since ancient times',
    namedAfter: 'Anglo-Saxon: gold',
    description: 'Gold is a bright, slightly reddish yellow, dense, soft, malleable, and ductile metal. Gold has been a valuable and highly sought-after precious metal for coinage, jewelry, and other arts.'
  },
  {
    number: 92,
    symbol: 'U',
    name: 'Uranium',
    atomicMass: '238.03',
    category: 'actinide',
    group: 3,
    period: 7,
    block: 'f',
    electronConfiguration: '[Rn] 5f³ 6d¹ 7s²',
    electronegativity: 1.38,
    atomicRadius: 156,
    ionizationEnergy: 6.194,
    density: 19.1,
    meltingPoint: 1132.2,
    boilingPoint: 4131,
    discoveredBy: 'Martin Heinrich Klaproth',
    namedAfter: 'Planet Uranus',
    description: 'Uranium is a silvery-white metal in the actinide series of the periodic table. It is weakly radioactive because all isotopes of uranium are unstable.'
  },
  {
    number: 118,
    symbol: 'Og',
    name: 'Oganesson',
    atomicMass: '(294)',
    category: 'unknown',
    group: 18,
    period: 7,
    block: 'p',
    electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶ (predicted)',
    electronegativity: null,
    atomicRadius: null,
    ionizationEnergy: null,
    density: null,
    meltingPoint: null,
    boilingPoint: null,
    discoveredBy: 'Joint Institute for Nuclear Research, Lawrence Livermore National Laboratory',
    namedAfter: 'Yuri Oganessian',
    description: 'Oganesson is a synthetic element and a noble gas. It has the highest atomic number and highest atomic mass of all known elements. The radioactive oganesson atom is very unstable.'
  }
];

// Full dataset would include all elements from 1-118
// This is truncated for brevity

export const getElementByNumber = (number: number): Element | undefined => {
  return elements.find(element => element.number === number);
};

export const getElementBySymbol = (symbol: string): Element | undefined => {
  return elements.find(element => element.symbol === symbol);
};

export const getCategoryColor = (category: string): string => {
  switch(category) {
    case 'alkali': return 'bg-alkali';
    case 'alkaline': return 'bg-alkaline';
    case 'transition': return 'bg-transition';
    case 'post_transition': return 'bg-post_transition';
    case 'metalloid': return 'bg-metalloid';
    case 'nonmetal': return 'bg-nonmetal';
    case 'noble': return 'bg-noble';
    case 'lanthanide': return 'bg-lanthanide';
    case 'actinide': return 'bg-actinide';
    default: return 'bg-unknown';
  }
};
