import { Element } from "../elementTypes";

const chlorine: Element = {
  atomic: "17",
  symbol: "Cl",
  name: "Chlorine",
  weight: "35.45",
  electronstring: "1s2 2s2 2p6 3s2 3p5",
  series: "Halogen",
  melt: "171.6",
  boil: "239.11",
  electroneg: "3.16",
  valence: "1,3,5,7",
  oxidation: "-1c,1c,3c,5c,7c",
  radius: {
    calculated: "79",
    empirical: "100",
    covalent: "99",
    vanderwaals: "175"
  },
  discover: "1774",
  density: {
    stp: "3.2"
  },
  affinity: "349.0",
  conductivity: {
    thermal: "0.0089"
  },
  abundance: {
    universe: "0.0001",
    solar: "0.0008",
    meteor: "0.037",
    crust: "0.017",
    ocean: "2.0",
    human: "0.12"
  },
  heat: {
    specific: "479",
    vaporization: "20.41",
    fusion: "6.41"
  },
  ionize: {
    1: "1251.2",
    2: "2298",
    3: "3822",
    4: "5158.6"
  },
  expandedconfig: "1s² 2s² 2p⁶ 3s² 3p⁵",
  electrons: [2, 8, 7],
  quantum: { l: 1, m: 1, n: 3 },
  isotopes: 24,
  atomicMass: "35.4529",
  category: "halogen",
  group: 17,
  period: 3,
  block: "p",
  electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁵",
  description: "Chlorine is a halogen gas that is widely used for water purification and as a disinfectant."
};

export default chlorine;
