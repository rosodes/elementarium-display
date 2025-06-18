import { Element } from "../elementTypes";
const argon: Element = {
  atomic: "18",
  symbol: "Ar",
  name: "Argon",
  weight: "39.948",
  electronstring: "1s2 2s2 2p6 3s2 3p6",
  series: "Noble",
  melt: "83.8",
  boil: "87.3",
  valence: "0",
  oxidation: "0", // Added missing oxidation
  radius: {
    calculated: "71",
    covalent: "97",
    vanderwaals: "188"
  },
  discover: "1894",
  density: {
    stp: "0.0017837"
  },
  affinity: "0",
  conductivity: {
    thermal: "0.01772"
  },
  abundance: {
    universe: "0.02",
    solar: "0.007",
    crust: "0.00015",
    ocean: "0.000045",
    human: "0"
  },
  heat: {
    specific: "520.33",
    vaporization: "6.5",
    fusion: "1.18"
  },
  ionize: {
    "1": "1520.6",
    "2": "2665.8",
    "3": "3931.0",
    "4": "5771.0",
    "5": "7238.0",
    "6": "8781.0",
    "7": "11995.0",
    "8": "13842.0",
    "9": "40760.0",
    "10": "46186.0"
  },
  expandedconfig: "1s2 2s2 2p6 3s2 3p6",
  electrons: [2, 8, 8],
  quantum: {
    l: 1,
    m: 1,
    n: 3
  },
  isotopes: 23,
  group: 18,
  period: 3,
  block: "p",
  category: "noble gas",
  atomicMass: "39.948",
  electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶",
  description: "Argon is a colorless, odorless, and unreactive noble gas. It is the third-most abundant gas in Earth's atmosphere, used in lighting and welding applications."
};
export default argon;
