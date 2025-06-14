
import { type Element, type ElementsArray } from './elementTypes';
import { categories, getCategoryColor, getSeriesColor } from './elementCategories';
import { elements58to71 } from './elements58-71';
import { elements90to103 } from './elements90-103';
import { elements1to10 } from './elements1-10';
import { elements11to20 } from './elements11-20';
import { elements21to30 } from './elements21-30';
import { elements31to40 } from './elements31-40';
import { elements41to51 } from './elements41-51';
import { elements51to60 } from './elements51-60';
// ... элементы 61–70 больше не импортируем отдельно, только через elements58to71 ...
import { elements81to90 } from './elements81-90';
import { elements91to100 } from './elements91-100';
import { elements101to110 } from './elements101-110';
import { elements111to118 } from './elements111-118';
import { group1Elements } from './elements/group1';

// Новый комбинированный список с учётом новых файлов для f-блока:
const elementsList: Element[] = [
  ...elements1to10,
  ...elements11to20,
  ...elements21to30,
  ...elements31to40,
  ...elements41to51,
  ...elements51to60,   // только 51–57, без 58–60
  ...elements58to71,   // Ce–Lu лантаноиды (58–71)
  ...elements81to90,   // Tl–Ac
  ...elements90to103,  // Th–Lr актиноиды (90–103)
  ...elements91to100,  // пустой либо только для обратной совместимости
  ...elements101to110,
  ...elements111to118
];

// Creating array with empty first element for compatibility
const elements: ElementsArray = [null, ...elementsList];

// Export a helper function to safely get elements
export const getElement = (index: number): Element | null => {
  if (index < 1 || index >= elements.length) return null;
  return elements[index] as Element;
};

export { elements };
export type { Element, ElementsArray };
export { categories, getCategoryColor, getSeriesColor };
