
import { Element, ElementsArray } from './elementTypes';
import { categories, getCategoryColor, getSeriesColor } from './elementCategories';
import { elements1to10 } from './elements1-10';
import { elements11to20 } from './elements11-20';
import { elements21to30 } from './elements21-30';

// Объединение всех элементов в один массив
const elementsList: Element[] = [
  ...elements1to10,
  ...elements11to20,
  ...elements21to30
];

// Создаем массив с пустым первым элементом для совместимости
const elements: ElementsArray = [null, ...elementsList];

export {
  elements,
  Element,
  ElementsArray,
  categories,
  getCategoryColor,
  getSeriesColor
};
