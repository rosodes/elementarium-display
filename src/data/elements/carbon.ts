import { Element } from "../elementTypes";
const carbon: Element = {
  atomic: "6",
  symbol: "C",
  name: "Carbon",
  weight: "12.011",
  electronstring: "1s2 2s2 2p2",
  series: "Nonmetal",
  melt: "3800",
  boil: "4300",
  electroneg: "2.55",
  valence: "4",
  oxidation: "-4,-3,-2,-1,1c,2c,3c,4c",
  radius: {
    calculated: "67",
    empirical: "70",
    covalent: "77",
    vanderwaals: "170"
  },
  discover: "~3750 BCE",
  density: {
    stp: "2.267"
  },
  affinity: "121.8",
  conductivity: {
    thermal: "140"
  },
  abundance: {
    universe: "0.5",
    solar: "0.3",
    meteor: "1.5",
    crust: "0.02",
    ocean: "0.0028",
    human: "23"
  },
  heat: {
    specific: "710",
    vaporization: "715",
    fusion: "105"
  },
  ionize: {
    "1": "1086.5",
    "2": "2352.6",
    "3": "4620.5",
    "4": "6222.7",
    "5": "37831.0",
    "6": "47277.0"
  },
  expandedconfig: "1s2 2s2 2p2",
  electrons: [2, 4],
  quantum: {
    l: 1,
    m: 0,
    n: 2
  },
  isotopes: 15,
  group: 14,
  period: 2,
  category: "nonmetal"
};
export default carbon;
