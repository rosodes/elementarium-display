
import React from 'react';
import Element from '../Element';
import { Element as ElementType } from '../../data/elementTypes';
import PeriodRow from './PeriodRow';
import { elements } from '../../data/elements';

// Helper function to safely find element
const findElement = (atomicNumber: number | string): ElementType | null => {
  const element = elements.find(e => e && e.atomic === atomicNumber.toString());
  if (!element || typeof element !== 'object') return null;
  if (!('atomic' in element)) return null;
  return element as ElementType;
};

export const renderLanthanides = (onElementClick: (element: ElementType) => void, skipFirstElement: boolean = false) => {
  const periodLabel = "6*";
  
  // Start with element 57 for La, then 58-71 for lanthanides
  const startIndex = 57;
  const endIndex = 71;
  
  const lanthanideElements = [];
  
  for (let i = startIndex; i <= endIndex; i++) {
    const element = findElement(i);
    if (element) {
      lanthanideElements.push(
        <Element 
          key={`lanthanide-${i}`}
          element={element}
          onClick={() => onElementClick(element)}
        />
      );
    }
  }
  
  return (
    <PeriodRow 
      periodLabel={periodLabel} 
      elements={lanthanideElements} 
      className="lanthanides-row"
    />
  );
};

export const renderActinides = (onElementClick: (element: ElementType) => void, skipFirstElement: boolean = false) => {
  const periodLabel = "7*";
  
  // Start with element 89 for Ac, then 90-103 for actinides
  const startIndex = 89;
  const endIndex = 103;
  
  const actinideElements = [];
  
  for (let i = startIndex; i <= endIndex; i++) {
    const element = findElement(i);
    if (element) {
      actinideElements.push(
        <Element 
          key={`actinide-${i}`}
          element={element}
          onClick={() => onElementClick(element)}
        />
      );
    }
  }
  
  return (
    <PeriodRow 
      periodLabel={periodLabel} 
      elements={actinideElements} 
      className="actinides-row"
    />
  );
};
