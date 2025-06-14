
// Все элементы 101–118 через объединение массивов
import { Element } from './elementTypes';
import { elements101to110 } from './elements101-110';
import { elements111to118 } from './elements111-118';

export const elements101to118: Element[] = [
  ...elements101to110,
  ...elements111to118,
];
