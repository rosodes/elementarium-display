
import { type Element, type ElementsArray } from '../elementTypes';
import { categories, getCategoryColor, getSeriesColor } from '../elementCategories';
import { hydrogenToHelium } from './elements1-2';
import { lithiumToNeon } from './elements3-10';
import { sodiumToCalcium } from './elements11-20';
import { scandiumToZinc } from './elements21-30';
import { galliumToZirconium } from './elements31-40';
import { niobiumToAntimony } from './elements41-51';
import { telluriumToNeodymium } from './elements52-60';
import { promethiumToYtterbium } from './elements61-70';
import { lutetiumToMercury } from './elements71-80';
import { thalliumToThorium } from './elements81-90';
import { protactiniumToFermium } from './elements91-100';
import { mendeleviumToLawrencium } from './elements101-103';
import { rutherfordiumToElement118 } from './elements104-118';

// Combining all elements into one array
const elementsList: Element[] = [
  ...hydrogenToHelium,
  ...lithiumToNeon,
  ...sodiumToCalcium,
  ...scandiumToZinc,
  ...galliumToZirconium,
  ...niobiumToAntimony,
  ...telluriumToNeodymium,
  ...promethiumToYtterbium,
  ...lutetiumToMercury,
  ...thalliumToThorium,
  ...protactiniumToFermium,
  ...mendeleviumToLawrencium,
  ...rutherfordiumToElement118
];

// Creating array with empty first element for compatibility
const elements: ElementsArray = [null, ...elementsList];

export { elements };
export type { Element, ElementsArray };
export { categories, getCategoryColor, getSeriesColor };
