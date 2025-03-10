
import { type Element, type ElementsArray } from './elementTypes';
import { categories, getCategoryColor, getSeriesColor } from './elementCategories';
import { elements1to10 } from './elements1-10';
import { elements11to20 } from './elements11-20';
import { elements21to30 } from './elements21-30';

// Combining all elements into one array
const elementsList: Element[] = [
  ...elements1to10,
  ...elements11to20,
  ...elements21to30
];

// Creating array with empty first element for compatibility
const elements: ElementsArray = [null, ...elementsList];

export { elements };
export type { Element, ElementsArray };
export { categories, getCategoryColor, getSeriesColor };
