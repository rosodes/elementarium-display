
import { Element } from '../elementTypes';

export const hydrogenToHelium: Element[] = [
  // Hydrogen (1)
  {
    atomic: "1",
    symbol: "H",
    name: "Hydrogen",
    weight: "1.008",
    electronstring: "1s1",
    series: "Nonmetal",
    melt: "14.01",
    boil: "20.28",
    electroneg: "2.20",
    valence: "1",
    oxidation: "-1c,1c",
    radius: {
      calculated: "53",
      empirical: "25",
      covalent: "37",
      vanderwaals: "120"
    },
    discover: "1766",
    density: {
      stp: "0.0899"
    },
    affinity: "72.8",
    conductivity: {
      thermal: "0.1805"
    },
    abundance: {
      universe: "75",
      solar: "75",
      meteor: "2.4",
      crust: "0.15",
      ocean: "11",
      human: "10"
    },
    heat: {
      specific: "14300",
      vaporization: "0.452",
      fusion: "0.558"
    },
    ionize: {
      1: "1312.0"
    },
    expandedconfig: "1s1",
    electrons: [1],
    quantum: {
      l: 0,
      m: 0,
      n: 1
    },
    isotopes: 7,
    group: 1,
    period: 1,
    block: "s",
    electronConfiguration: "1s¹",
    description: "Hydrogen is the lightest element and the most abundant chemical substance in the universe. It is a colorless, odorless, tasteless, non-toxic, highly combustible gas with the molecular formula H₂."
  },
  // Helium (2)
  {
    atomic: "2",
    symbol: "He",
    name: "Helium",
    weight: "4.002602",
    electronstring: "1s2",
    series: "Noble",
    boil: "4.22",
    valence: "0",
    radius: {
      calculated: "31",
      covalent: "32",
      vanderwaals: "140"
    },
    discover: "1895",
    density: {
      stp: "0.1785"
    },
    affinity: "0",
    conductivity: {
      thermal: "0.1513"
    },
    abundance: {
      universe: "23",
      solar: "23",
      crust: "5.5e-7",
      ocean: "7.2e-10"
    },
    heat: {
      specific: "5193.1",
      vaporization: "0.083",
      fusion: "0.02"
    },
    ionize: {
      1: "2372.3",
      2: "5250.5"
    },
    expandedconfig: "1s2",
    electrons: [2],
    quantum: {
      l: 0,
      m: 0,
      n: 1
    },
    isotopes: 9,
    group: 18,
    period: 1,
    block: "s",
    electronConfiguration: "1s²",
    description: "Helium is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas. It has the lowest boiling point of all elements and can only be solidified under extreme pressure."
  }
];
