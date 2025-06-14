import { type Element, type ElementsArray } from './elementTypes';
import { categories, getCategoryColor, getSeriesColor } from './elementCategories';
import { elements1to10 } from './elements1-10';
import { elements11to20 } from './elements11-20';
import { elements21to30 } from './elements21-30';
import { elements31to40 } from './elements31-40';
import { elements41to51 } from './elements41-51';
import { elements52to60 } from './elements52-60';
import { elements61to70 } from './elements61-70';
import { elements71to80 } from './elements71-80';
import { elements81to90 } from './elements81-90';
import { elements91to100 } from './elements91-100';
import { elements101to118 } from './elements101-118';
import { group1Elements } from './elements/group1';

// Combining all elements into one array
const elementsList: Element[] = [
  ...elements1to10,
  ...elements11to20,
  ...elements21to30,
  ...elements31to40,
  ...elements41to51,
  ...elements52to60,
  ...elements61to70,
  ...elements71to80,
  ...elements81to90,
  ...elements91to100,
  ...elements101to118
];

// Creating array with empty first element for compatibility
// But ensure it's properly typed
const elements: ElementsArray = [null, ...elementsList];

// Export a helper function to safely get elements
export const getElement = (index: number): Element | null => {
  if (index < 1 || index >= elements.length) return null;
  
  // Cast here is safe because we validated the index above
  // and our elements array contains complete Element objects
  return elements[index] as Element;
};

export { elements };
export type { Element, ElementsArray };
export { categories, getCategoryColor, getSeriesColor };
