import { type Element, type ElementsArray } from './elementTypes';
import { getCategoryColor } from './elementCategories';

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
import { elements101to110 } from './elements101-110';
import { elements111to118 } from './elements111-118';

// F-blocks are strict ranges:
import { elements58to71 } from './elements58-71'; // Ce–Lu (lanthanoids, 58–71)
import { elements90to103 } from './elements90-103'; // Th–Lr (actinoids, 90–103)

// Создаем массив всех элементов в правильном порядке (1-118)
// Нужно аккуратно объединить все файлы, учитывая что некоторые элементы
// находятся в отдельных файлах лантаноидов и актиноидов

const createFullElementsArray = (): (Element | null)[] => {
  const result: (Element | null)[] = [];
  
  // Элементы 1-10
  result.push(...elements1to10);
  
  // Элементы 11-20
  result.push(...elements11to20);
  
  // Элементы 21-30
  result.push(...elements21to30);
  
  // Элементы 31-40
  result.push(...elements31to40);
  
  // Элементы 41-51
  result.push(...elements41to51);
  
  // Элементы 52-57 (из elements52to60, но только до 57, так как 58-60 дублируются в лантаноидах)
  const elements52to57 = elements52to60.slice(0, 6); // Te(52), I(53), Xe(54), Cs(55), Ba(56), La(57)
  result.push(...elements52to57);
  
  // Лантаноиды 58-71 (из отдельного файла)
  result.push(...elements58to71);
  
  // Элементы 72-80 (из elements71to80 - на самом деле это 72-80)
  result.push(...elements71to80);
  
  // Элементы 81-89 (из elements81to90, но только до 89, так как 90 дублируется в актиноидах)
  const elements81to89 = elements81to90.slice(0, 9); // Tl(81) - Ac(89)
  result.push(...elements81to89);
  
  // Актиноиды 90-103 (из отдельного файла)
  result.push(...elements90to103);
  
  // Элементы 104-110 (из elements101to110 - на самом деле это 104-110)
  result.push(...elements101to110);
  
  // Элементы 111-118
  result.push(...elements111to118);
  
  return result;
};

// Combine all elements in order (1-118)
const elements: (Element | null)[] = createFullElementsArray();

// Helper function to get element by atomic number
export const getElement = (atomicNumber: number): Element | null => {
  if (atomicNumber < 1 || atomicNumber > elements.length) {
    return null;
  }
  return elements[atomicNumber - 1];
};

// Helper function to get all elements
export const getAllElements = (): (Element | null)[] => {
  return elements;
};

// Helper function to get elements by category
export const getElementsByCategory = (category: string): Element[] => {
  return elements.filter((element): element is Element => 
    element !== null && element.category === category
  );
};

// Helper function to get elements by series
export const getElementsBySeries = (series: string): Element[] => {
  return elements.filter((element): element is Element => 
    element !== null && element.series === series
  );
};

// Функция для получения элементов по периоду
export function getElementsByPeriod(period: number): Element[] {
  return elements.filter(el => el && el.period === period);
}

// Функция для получения элементов по группе
export function getElementsByGroup(group: number): Element[] {
  return elements.filter(el => el && el.group === group);
}

// Статистика элементов
export const elementStats = {
  total: elements.length,
  natural: elements.filter(el => el && !el.radioactive).length,
  synthetic: elements.filter(el => el && el.radioactive).length,
  periods: 7,
  groups: 18
};

export { elements };
export type { Element, ElementsArray };
export { getCategoryColor };
