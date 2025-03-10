
import { Element } from '../elementTypes';

export const mendeleviumToLawrencium: Element[] = [
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
    valence: "3",
    oxidation: "2,3c",
    radius: {
      calculated: "186",
      covalent: "186"
    },
    discover: "1955",
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f13",
    electrons: [2, 8, 18, 32, 31, 8, 2],
    quantum: {
      l: 3,
      m: 1,
      n: 5
    },
    isotopes: 15,
    group: 3,
    period: 7,
    description: "Mendelevium is a synthetic element that was named after Dmitri Mendeleev. It has no known biological role and is highly radioactive, with its most stable isotope having a half-life of about 51 days."
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
    oxidation: "2c,3",
    radius: {
      calculated: "186",
      covalent: "186"
    },
    discover: "1958",
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14",
    electrons: [2, 8, 18, 32, 32, 8, 2],
    quantum: {
      l: 3,
      m: 2,
      n: 5
    },
    isotopes: 10,
    group: 3,
    period: 7,
    description: "Nobelium is a synthetic element named after Alfred Nobel. It is highly radioactive with its most stable isotope having a half-life of about 58 minutes. It has no known biological role or significant applications outside research."
  },

  // Lawrencium (103)
  {
    atomic: "103",
    symbol: "Lr",
    name: "Lawrencium",
    weight: "[262]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p1",
    series: "Actinide",
    melt: "1900",
    electroneg: "1.3",
    valence: "3",
    oxidation: "3c",
    radius: {
      calculated: "186",
      covalent: "186"
    },
    discover: "1961",
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 7p1",
    electrons: [2, 8, 18, 32, 32, 9, 2],
    quantum: {
      l: 3,
      m: 3,
      n: 5
    },
    isotopes: 11,
    group: 3,
    period: 7,
    description: "Lawrencium is a synthetic element named after Ernest Lawrence, the inventor of the cyclotron. It is highly radioactive with its most stable isotope having a half-life of about 11 hours. It concludes the actinide series."
  }
];
