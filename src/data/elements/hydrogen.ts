
import { Element } from "../elementTypes";
const hydrogen: Element = {
  atomic: "1",
  symbol: "H",
  name: "Hydrogen",
  weight: "1.008",
  electronstring: "1s1",
  series: "Nonmetal",
  valence: "1",
  oxidation: "1,-1",
  radius: { covalent: "31" },
  expandedconfig: "1s1",
  electrons: [1],
  quantum: { l: 0, m: 0, n: 1 },
  isotopes: 3,
  toxicity:
    "Hydrogen gas is non-toxic and does not harm the environment directly, but asphyxiation can occur at high concentrations due to oxygen displacement. Liquid hydrogen is extremely cold and can cause severe frostbite.",
  historyInfo:
    "Hydrogen was first recognized as a distinct element by Henry Cavendish in 1766. Its name comes from the Greek 'hydro' and 'genes', meaning 'water-forming', because it produces water when burned."
};
export default hydrogen;
