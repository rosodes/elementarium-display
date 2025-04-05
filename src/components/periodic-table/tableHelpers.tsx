
import React from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import Element from '../Element';
import EmptyCell from './EmptyCell';
import ElementPlaceholder from './ElementPlaceholder';
import PeriodRow from './PeriodRow';
import { getElement } from '../../data/elements';

// Type for the element click handler
type ElementClickHandler = (element: ElementType) => void;

// Helper to create elements for a range
export const createElementsForRange = (start: number, end: number, onElementClick: ElementClickHandler) => {
  const elements: React.ReactNode[] = [];
  
  for (let i = start; i <= end; i++) {
    const element = getElement(i);
    if (element) {
      elements.push(<Element key={`element-${i}`} element={element} onClick={onElementClick} />);
    }
  }
  
  return elements;
};

// Create a row of empty cells
export const createEmptyCells = (count: number, prefix: string) => {
  const cells: React.ReactNode[] = [];
  for (let i = 0; i < count; i++) {
    cells.push(<EmptyCell key={`${prefix}-${i}`} keyId={`${prefix}-${i}`} />);
  }
  return cells;
};

// Render Period 1 (H and He)
export const renderPeriod1 = (onElementClick: ElementClickHandler) => {
  const row: React.ReactNode[] = [];
  
  const hydrogen = getElement(1);
  if (hydrogen) row.push(<Element key="element-1" element={hydrogen} onClick={onElementClick} />);
  
  row.push(...createEmptyCells(16, "empty-1"));
  
  const helium = getElement(2);
  if (helium) row.push(<Element key="element-2" element={helium} onClick={onElementClick} />);
  
  return <PeriodRow periodKey="period-1" periodNumber={1}>{row}</PeriodRow>;
};

// Render Period 2 (Li to Ne)
export const renderPeriod2 = (onElementClick: ElementClickHandler) => {
  const row: React.ReactNode[] = [];
  
  const lithium = getElement(3);
  const beryllium = getElement(4);
  
  if (lithium) row.push(<Element key="element-3" element={lithium} onClick={onElementClick} />);
  if (beryllium) row.push(<Element key="element-4" element={beryllium} onClick={onElementClick} />);
  
  row.push(...createEmptyCells(10, "empty-2"));
  
  row.push(...createElementsForRange(5, 10, onElementClick));
  
  return <PeriodRow periodKey="period-2" periodNumber={2}>{row}</PeriodRow>;
};

// Render Period 3 (Na to Ar)
export const renderPeriod3 = (onElementClick: ElementClickHandler) => {
  const row: React.ReactNode[] = [];
  
  const sodium = getElement(11);
  const magnesium = getElement(12);
  
  if (sodium) row.push(<Element key="element-11" element={sodium} onClick={onElementClick} />);
  if (magnesium) row.push(<Element key="element-12" element={magnesium} onClick={onElementClick} />);
  
  row.push(...createEmptyCells(10, "empty-3"));
  
  row.push(...createElementsForRange(13, 18, onElementClick));
  
  return <PeriodRow periodKey="period-3" periodNumber={3}>{row}</PeriodRow>;
};

// Render Period 4 (K to Kr)
export const renderPeriod4 = (onElementClick: ElementClickHandler) => {
  const row = createElementsForRange(19, 36, onElementClick);
  return <PeriodRow periodKey="period-4" periodNumber={4}>{row}</PeriodRow>;
};

// Render Period 5 (Rb to Xe)
export const renderPeriod5 = (onElementClick: ElementClickHandler) => {
  const row = createElementsForRange(37, 54, onElementClick);
  return <PeriodRow periodKey="period-5" periodNumber={5}>{row}</PeriodRow>;
};

// Render Period 6 (Cs to Rn)
export const renderPeriod6 = (onElementClick: ElementClickHandler) => {
  const row: React.ReactNode[] = [];
  
  // First add elements 55-56 (Cs, Ba)
  row.push(...createElementsForRange(55, 56, onElementClick));
  
  // Add La (57) directly without the placeholder
  const lanthanum = getElement(57);
  if (lanthanum) row.push(<Element key="element-57" element={lanthanum} onClick={onElementClick} />);
  
  // Add dashed connector placeholder
  row.push(<ElementPlaceholder key="lanthanide-placeholder" type="lanthanide" range="57-71" />);
  
  // Add elements 72-86 (Hf to Rn)
  row.push(...createElementsForRange(72, 86, onElementClick));
  
  return <PeriodRow periodKey="period-6" periodNumber={6}>{row}</PeriodRow>;
};

// Render Period 7 (Fr to Og)
export const renderPeriod7 = (onElementClick: ElementClickHandler) => {
  const row: React.ReactNode[] = [];
  
  // First add elements 87-88 (Fr, Ra)
  row.push(...createElementsForRange(87, 88, onElementClick));
  
  // Add Ac (89) directly without the placeholder
  const actinium = getElement(89);
  if (actinium) row.push(<Element key="element-89" element={actinium} onClick={onElementClick} />);
  
  // Add dashed connector placeholder
  row.push(<ElementPlaceholder key="actinide-placeholder" type="actinide" range="89-103" />);
  
  // Add elements 104-118
  row.push(...createElementsForRange(104, 118, onElementClick));
  
  return <PeriodRow periodKey="period-7" periodNumber={7}>{row}</PeriodRow>;
};

// Render Lanthanides row (57-71)
export const renderLanthanides = (onElementClick: ElementClickHandler) => {
  const row: React.ReactNode[] = [];
  
  // Create elements 58-71 (Ce to Lu)
  row.push(...createEmptyCells(3, "empty-la"));
  
  // Start with La (57) which is already in row 6
  const lanthanum = getElement(57);
  if (lanthanum) row.push(<Element key="element-57-copy" element={lanthanum} onClick={onElementClick} />);
  
  // Add remaining lanthanides 58-71
  row.push(...createElementsForRange(58, 71, onElementClick));
  
  return <PeriodRow periodKey="lanthanides" className="mt-4">{row}</PeriodRow>;
};

// Render Actinides row (89-103)
export const renderActinides = (onElementClick: ElementClickHandler) => {
  const row: React.ReactNode[] = [];
  
  // Create elements 90-103 (Th to Lr)
  row.push(...createEmptyCells(3, "empty-ac"));
  
  // Start with Ac (89) which is already in row 7
  const actinium = getElement(89);
  if (actinium) row.push(<Element key="element-89-copy" element={actinium} onClick={onElementClick} />);
  
  // Add remaining actinides 90-103
  row.push(...createElementsForRange(90, 103, onElementClick));
  
  return <PeriodRow periodKey="actinides">{row}</PeriodRow>;
};
