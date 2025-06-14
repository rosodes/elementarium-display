
import { Element } from '../../elementTypes';
import { hydrogen } from './hydrogen';
import { lithium } from './lithium';
import { sodium } from './sodium';
import { potassium } from './potassium';
import { rubidium } from './rubidium';
import { cesium } from './cesium';
import { francium } from './francium';

// Group 1: Alkali Metals (plus Hydrogen)
export const group1Elements: Element[] = [
  hydrogen,
  lithium,
  sodium,
  potassium,
  rubidium,
  cesium,
  francium
];

// Export individual elements for direct access
export {
  hydrogen,
  lithium,
  sodium,
  potassium,
  rubidium,
  cesium,
  francium
};
