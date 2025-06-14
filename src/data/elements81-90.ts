
// Теперь каждый элемент (81–89) импортируется из отдельного файла.
import { Element } from './elementTypes';

import thallium from './elements/thallium';
import lead from './elements/lead';
import bismuth from './elements/bismuth';
import polonium from './elements/polonium';
import astatine from './elements/astatine';
import radon from './elements/radon';
import francium from './elements/francium';
import radium from './elements/radium';
import actinium from './elements/actinium';

export const elements81to90: Element[] = [
  thallium,   // 81
  lead,       // 82
  bismuth,    // 83
  polonium,   // 84
  astatine,   // 85
  radon,      // 86
  francium,   // 87
  radium,     // 88
  actinium    // 89
];
