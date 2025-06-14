// Теперь каждое описание элемента (81–88) импортируется из отдельного файла.

// В ручную оставлена только Ac (89).
import { Element } from './elementTypes';

import thallium from './elements/thallium';
import lead from './elements/lead';
import bismuth from './elements/bismuth';
import polonium from './elements/polonium';
import astatine from './elements/astatine';
import radon from './elements/radon';
import francium from './elements/francium';
import radium from './elements/radium';

export const elements81to90: Element[] = [
  thallium,  // 81
  lead,      // 82
  bismuth,   // 83
  polonium,  // 84
  astatine,  // 85
  radon,     // 86
  francium,  // 87
  radium,    // 88
  // Ac (89)
  {
    atomic: "89",
    symbol: "Ac",
    name: "Actinium",
    weight: "[227]",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1",
    series: "Actinide",
    melt: "1323",
    boil: "3471",
    electroneg: "1.1",
    valence: "3",
    oxidation: "3c",
    radius: {
      calculated: "215",
      empirical: "195",
      covalent: "215"
    },
    discover: "1899",
    density: {
      stp: "10.07"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1",
    electrons: [2, 8, 18, 32, 18, 9, 2],
    quantum: {
      l: 2,
      m: -2,
      n: 6
    },
    isotopes: 12,
    group: 3,
    period: 7,
    radioactive: true
  }
];
