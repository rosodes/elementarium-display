
import { type Element, type ElementsArray } from './elementTypes';
import { categories, getCategoryColor, getSeriesColor } from './elementCategories';
import { elements1to10 } from './elements1-10';
import { elements11to20 } from './elements11-20';
import { elements21to30 } from './elements21-30';
import { elements31to40 } from './elements31-40';
import { elements41to51 } from './elements41-51';

// Combining all elements into one array
const elementsList: Element[] = [
  ...elements1to10,
  ...elements11to20,
  ...elements21to30,
  ...elements31to40,
  ...elements41to51
];

// Creating array with empty first element for compatibility
const elements: ElementsArray = [null, ...elementsList];

export { elements };
export type { Element, ElementsArray };
export { categories, getCategoryColor, getSeriesColor };
