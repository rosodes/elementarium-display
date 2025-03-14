
import { Element as ElementType } from '../data/elements';

/**
 * Determine the appropriate font size for an element name based on its length
 */
export const getElementNameFontSize = (name: string | undefined): string => {
  if (!name) return 'text-[8px]';
  
  if (name.length > 18) return 'text-[5px] sm:text-[6px]';
  if (name.length > 15) return 'text-[6px] sm:text-[7px]';
  if (name.length > 12) return 'text-[7px] sm:text-[8px]';
  if (name.length > 9) return 'text-[8px] sm:text-[9px]';
  if (name.length > 7) return 'text-[9px] sm:text-[10px]';
  
  return 'text-[10px] sm:text-[11px]';
};

/**
 * Determine the electron block (s, p, d, f) of an element based on its configuration
 */
export const getElectronBlockType = (expandedConfig: string | undefined): string => {
  if (!expandedConfig) return '';
  
  if (expandedConfig.includes(' s')) return 's';
  if (expandedConfig.includes(' p')) return 'p';
  if (expandedConfig.includes(' d')) return 'd';
  if (expandedConfig.includes(' f')) return 'f';
  
  return '';
};

/**
 * Extract first oxidation state from oxidation string
 */
export const getFirstOxidationState = (oxidation: string | undefined): string => {
  if (!oxidation) return '';
  return oxidation.split(',')[0]?.replace('c', '') || '';
};

/**
 * Get the aria label for an element
 */
export const getElementAriaLabel = (
  element: ElementType,
  translatedName: string,
  atomicNumberText: string
): string => {
  return `${translatedName} (${element.symbol}), ${atomicNumberText} ${element.atomic}`;
};
