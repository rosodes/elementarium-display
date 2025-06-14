
import { type Element, type ElementsArray } from './elementTypes';
import { categories, getCategoryColor, getSeriesColor } from './elementCategories';

import { elements1to10 } from './elements1-10';
import { elements11to20 } from './elements11-20';
import { elements21to30 } from './elements21-30';
import { elements31to40 } from './elements31-40';
import { elements41to51 } from './elements41-51';
import { elements51to60 } from './elements51-60';

// F-blocks are strict ranges:
import { elements58to71 } from './elements58-71'; // Ce–Lu (lanthanoids, 58–71)
import { elements90to103 } from './elements90-103'; // Th–Lr (actinoids, 90–103)

import { elements61to70 } from './elements61-70'; // now empty, for compatibility
import { elements71to80 } from './elements71-80'; // 72–80 only
import { elements81to90 } from './elements81-90'; // 81–89 only
import { elements91to100 } from './elements91-100'; // now empty, for compatibility
import { elements101to110 } from './elements101-110'; // 104–110 only
import { elements111to118 } from './elements111-118';

// Compose master array with correct order and without gaps or overlaps
const elementsList: Element[] = [
  ...elements1to10,
  ...elements11to20,
  ...elements21to30,
  ...elements31to40,
  ...elements41to51,
  ...elements51to60,   // 51–57
  ...elements58to71,   // Ce–Lu (58–71 lanthanoids)
  ...elements71to80,   // 72–80
  ...elements81to90,   // 81–89
  ...elements90to103,  // Th–Lr (90–103 actinoids)
  ...elements101to110, // 104–110
  ...elements111to118  // 111–118
];

// Creating array with empty first element for compatibility
const elements: ElementsArray = [null, ...elementsList];

export const getElement = (index: number): Element | null => {
  if (index < 1 || index >= elements.length) return null;
  return elements[index] as Element;
};

export { elements };
export type { Element, ElementsArray };
export { categories, getCategoryColor, getSeriesColor };
