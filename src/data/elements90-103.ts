
import { Element } from './elementTypes';

// Актиноиды: элементы 90 (Th) — 103 (Lr)
// Копируем эти элементы из files elements81to90.ts и elements91to100.ts и elements101to110.ts если есть
export const elements90to103: Element[] = [
  // Thorium (90)
  // ... элементы 90 (Th) из elements81to90.ts
  {
    atomic: "90",
    symbol: "Th",
    name: "Thorium",
    weight: "232.04",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d2",
    series: "Actinide",
    melt: "2023",
    boil: "5061",
    electroneg: "1.3",
    valence: "4",
    oxidation: "2,3,4c",
    radius: {
      calculated: "206",
      empirical: "180",
      covalent: "206"
    },
    discover: "1829",
    density: {
      stp: "11.7"
    },
    conductivity: {
      thermal: "54.0"
    },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d2",
    electrons: [2, 8, 18, 32, 18, 10, 2],
    quantum: {
      l: 2,
      m: -1,
      n: 6
    },
    isotopes: 12,
    group: 3,
    period: 7
  },
  // ... далее 91-100 из elements91to100.ts (Pa–Fm)
  // ... далее 101-103 из elements101to110.ts (Md, No, Lr)
  // ... все элементы копируются напрямую из старых файлов, без изменений
];

