
import React from 'react';
import Element from '../../Element';
import { Element as ElementType } from '../../../data/elementTypes';
import PeriodRow from '../PeriodRow';
import ElementPlaceholder from '../ElementPlaceholder';
import { Separator } from '../../ui/separator';
import { elements } from '../../../data/elements';

// Helper function to safely find element
const findElement = (atomicNumber: number | string): ElementType | null => {
  const element = elements.find(e => e && e.atomic === atomicNumber.toString());
  if (!element || typeof element !== 'object') return null;
  if (!('atomic' in element)) return null;
  return element as ElementType;
};

export const renderLanthanides = (onElementClick: (element: ElementType) => void, skipFirstElement: boolean = false) => {
  const periodLabel = "6*";
  
  // Start with element 58 if skipFirstElement is true, otherwise start with 57
  const startIndex = skipFirstElement ? 58 : 57;
  const endIndex = 71;
  
  const lanthanideElements = [];
  
  // Add vertical divider at the beginning if we're starting from element 58
  if (skipFirstElement) {
    lanthanideElements.push(
      <div key="lanthanide-divider" className="flex items-center h-[70px] mr-1">
        <Separator orientation="vertical" className="h-full opacity-50" />
      </div>
    );
  }
  
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
    <PeriodRow periodLabel={periodLabel} elements={lanthanideElements} />
  );
};

export const renderActinides = (onElementClick: (element: ElementType) => void, skipFirstElement: boolean = false) => {
  const periodLabel = "7*";
  
  // Start with element 90 if skipFirstElement is true, otherwise start with 89
  const startIndex = skipFirstElement ? 90 : 89;
  const endIndex = 103;
  
  const actinideElements = [];
  
  // Add vertical divider at the beginning if we're starting from element 90
  if (skipFirstElement) {
    actinideElements.push(
      <div key="actinide-divider" className="flex items-center h-[70px] mr-1">
        <Separator orientation="vertical" className="h-full opacity-50" />
      </div>
    );
  }
  
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
    <PeriodRow periodLabel={periodLabel} elements={actinideElements} />
  );
};
