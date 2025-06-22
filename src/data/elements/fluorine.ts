import { Element } from "../elementTypes";

const fluorine: Element = {
  atomic: "9",
  symbol: "F",
  name: "Fluorine",
  weight: "18.998",
  electronstring: "1s2 2s2 2p5",
  series: "Halogen",
  melt: "53.48",
  boil: "85.03",
  electroneg: "3.98",
  valence: "1",
  oxidation: "-1c",
  radius: {
    calculated: "42",
    empirical: "50",
    covalent: "72",
    vanderwaals: "135"
  },
  discover: "1886",
  density: {
    stp: "1.696"
  },
  affinity: "328.0",
  conductivity: {
    thermal: "0.0279"
  },
  abundance: {
    universe: "4e-5",
    solar: "5e-5",
    meteor: "0.008",
    crust: "0.054",
    ocean: "0.00013",
    human: "0.0037"
  },
  heat: {
    specific: "824",
    vaporization: "6.62",
    fusion: "0.26"
  },
  ionize: {
    1: "1681.0",
    2: "3374.2",
    3: "6050.4",
    4: "8407.7"
  },
  expandedconfig: "1s² 2s² 2p⁵",
  electrons: [2, 7],
  quantum: { l: 1, m: 1, n: 2 },
  isotopes: 18,
  atomicMass: "18.998403163",
  category: "halogen",
  group: 17,
  period: 2,
  block: "p",
  electronConfiguration: "1s² 2s² 2p⁵",
  description: "Fluorine is the most electronegative element and the lightest halogen."
};

export default fluorine;
