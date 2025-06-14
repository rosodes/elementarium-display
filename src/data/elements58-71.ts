
// Лантаноиды: элементы 58 (Ce) — 71 (Lu)
import { Element } from './elementTypes';
import ce from './elements/lanthanides/ce';
import pr from './elements/lanthanides/pr';
import nd from './elements/lanthanides/nd';
import pm from './elements/lanthanides/pm';
import sm from './elements/lanthanides/sm';
import eu from './elements/lanthanides/eu';
import gd from './elements/lanthanides/gd';
import tb from './elements/lanthanides/tb';
import dy from './elements/lanthanides/dy';
import ho from './elements/lanthanides/ho';
import er from './elements/lanthanides/er';
import tm from './elements/lanthanides/tm';
import yb from './elements/lanthanides/yb';
import lu from './elements/lanthanides/lu';

export const elements58to71: Element[] = [
  // Ce (58)
  ce,
  // Pr (59)
  pr,
  // Nd (60)
  nd,
  pm,
  sm,
  eu,
  gd,
  tb,
  dy,
  ho,
  er,
  tm,
  yb,
  // 71 Lu, теперь d-блок, группа 3, серия Transition, корректная масса
  lu
];
