import { type Element, type ElementsArray } from './elementTypes';
import { categories, getCategoryColor, getSeriesColor } from './elementCategories';
import { elements58to71 } from './elements58-71';
import { elements90to103 } from './elements90-103';
import { elements1to10 } from './elements1-10';
import { elements11to20 } from './elements11-20';
import { elements21to30 } from './elements21-30';
import { elements31to40 } from './elements31-40';
import { elements41to51 } from './elements41-51';
// В elements51to60 теперь не должно быть элементов 58–60!
import { elements51to60 } from './elements51-60';
// ... теперь НЕ импортируем elements61to70 (с 61–71 — изъяты из старого файла) ...
// elements71to80 в проекте используются для переходных металлов, Lu больше не там!
// elements81to90 теперь без 90 (Th), только 81–89
import { elements81to90 } from './elements81-90';
import { elements91to100 } from './elements91-100';
import { elements101to110 } from './elements101-110';
import { elements111to118 } from './elements111-118';
import { group1Elements } from './elements/group1';

// Новый комбинированный список с учётом отдельных файлов для f-блока:
const elementsList: Element[] = [
  ...elements1to10,
  ...elements11to20,
  ...elements21to30,
  ...elements31to40,
  ...elements41to51,
  ...elements51to60,
  ...elements58to71, // теперь лантаноиды полностью отдельным массивом
  ...elements81to90,
  ...elements90to103, // теперь актиноиды полностью отдельным массивом
  ...elements91to100,
  ...elements101to110,
  ...elements111to118
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
