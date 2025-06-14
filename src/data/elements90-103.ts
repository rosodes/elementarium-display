
// Теперь каждый элемент (90–103) импортируется из отдельного файла.
import { Element } from './elementTypes';

import thorium from './elements/thorium';
import protactinium from './elements/protactinium';
import uranium from './elements/uranium';
import neptunium from './elements/neptunium';
import plutonium from './elements/plutonium';
import americium from './elements/americium';
import curium from './elements/curium';
import berkelium from './elements/berkelium';
import californium from './elements/californium';
import einsteinium from './elements/einsteinium';
import fermium from './elements/fermium';
import mendelevium from './elements/mendelevium';
import nobelium from './elements/nobelium';
import lawrencium from './elements/lawrencium';

export const elements90to103: Element[] = [
  thorium,        // 90
  protactinium,   // 91
  uranium,        // 92
  neptunium,      // 93
  plutonium,      // 94
  americium,      // 95
  curium,         // 96
  berkelium,      // 97
  californium,    // 98
  einsteinium,    // 99
  fermium,        // 100
  mendelevium,    // 101
  nobelium,       // 102
  lawrencium      // 103
];
