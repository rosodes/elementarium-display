
// Теперь каждое описание элемента импортируется из отдельного файла.

import { Element } from './elementTypes';

import hafnium from './elements/hafnium';
import tantalum from './elements/tantalum';
import tungsten from './elements/tungsten';
import rhenium from './elements/rhenium';
import osmium from './elements/osmium';
import iridium from './elements/iridium';
import platinum from './elements/platinum';
import gold from './elements/gold';
import mercury from './elements/mercury';

export const elements71to80: Element[] = [
  hafnium,    // 72
  tantalum,   // 73
  tungsten,   // 74
  rhenium,    // 75
  osmium,     // 76
  iridium,    // 77
  platinum,   // 78
  gold,       // 79
  mercury     // 80
];
