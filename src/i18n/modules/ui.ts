
import { ElementTranslations } from '../types/elementTypes';

export interface UITranslations {
  close?: string;
  back?: string;
  more?: string;
  view?: string;
  loading?: string;
  radioactive?: string;
  themeToggle?: string;
  language?: string;
  elements?: ElementTranslations;
  search?: string;
  filter?: string;
  reset?: string;
  noResults?: string;
  period?: string;
  group?: string;
  periodNumbersLabel?: string;
  groupNumbersLabel?: string;
  searchPlaceholder?: string;
  searchResults?: string;
  searchNoResults?: string;
  clearSearch?: string;
  searchShortcut?: string;
  accessibilityLabel?: string;
  elementTable?: string;
  focusMode?: string;
  usageDistribution?: string;
  simulatedData?: string;
  note?: string;
  elementRemoved?: string;
  elementBookmarked?: string;
  linkCopied?: string;
  linkCopiedToClipboard?: string;
  naturalElements?: string;
  syntheticElements?: string;
  hotkeySearch?: string;
  hotkeyHome?: string;
  hotkeyClose?: string;
  skipToContent?: string;
  // Navigation buttons
  backToHome?: string;
  previousElement?: string;
  nextElement?: string;
}

export { uiEn } from './ui/en';
export { uiRu } from './ui/ru';
export { uiUk } from './ui/uk';
