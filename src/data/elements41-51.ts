
import { Element } from './elementTypes';
import niobium from './elements/niobium';
import molybdenum from './elements/molybdenum';
import technetium from './elements/technetium';
import ruthenium from './elements/ruthenium';
import rhodium from './elements/rhodium';
import palladium from './elements/palladium';
import silver from './elements/silver';
import cadmium from './elements/cadmium';
import indium from './elements/indium';
import tin from './elements/tin';

export const elements41to51: Element[] = [
  niobium,
  molybdenum,
  technetium,
  ruthenium,
  rhodium,
  palladium,
  silver,
  cadmium,
  indium,
  tin,
  // Антимоний (Sb) — элемент 51, можно вынести аналогично по запросу
  {
    atomic: "51",
    symbol: "Sb",
    name: "Antimony",
    weight: "121.76",
    electronstring: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p3",
    series: "Metalloid",
    valence: "5",
    oxidation: "-3,3,5c",
    radius: { calculated: "145", covalent: "140" },
    expandedconfig: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p3",
    electrons: [2, 8, 18, 18, 5],
    quantum: { l: 1, m: 1, n: 5 },
    isotopes: 2,
    group: 15,
    period: 5,
  },
];
