
import React from 'react';
import Element from '../../Element';
import { Element as ElementType } from '../../../data/elementTypes';
import PeriodRow from '../PeriodRow';
import { elements } from '../../../data/elements';

// Helper function to safely find element
const findElement = (atomicNumber: number | string): ElementType | null => {
  const element = elements.find(e => e && e.atomic === atomicNumber.toString());
  if (!element || typeof element !== 'object') return null;
  if (!('atomic' in element)) return null;
  return element as ElementType;
};

export const renderPeriod4 = (onElementClick: (element: ElementType) => void) => {
  const periodLabel = "4";
  const period4Elements = [];
  
  // Add K (19) through Kr (36)
  for (let i = 19; i <= 36; i++) {
    const element = findElement(i);
    if (element) {
      period4Elements.push(
        <Element 
          key={`element-${i}`} 
          element={element} 
          onClick={() => onElementClick(element)} 
        />
      );
    }
  }
  
  return (
    <PeriodRow periodLabel={periodLabel} elements={period4Elements} />
  );
};

export const renderPeriod5 = (onElementClick: (element: ElementType) => void) => {
  const periodLabel = "5";
  const period5Elements = [];
  
  // Add Rb (37) through Xe (54)
  for (let i = 37; i <= 54; i++) {
    const element = findElement(i);
    if (element) {
      period5Elements.push(
        <Element 
          key={`element-${i}`} 
          element={element} 
          onClick={() => onElementClick(element)} 
        />
      );
    }
  }
  
  return (
    <PeriodRow periodLabel={periodLabel} elements={period5Elements} />
  );
};
