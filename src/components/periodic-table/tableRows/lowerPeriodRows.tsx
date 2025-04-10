
import React from 'react';
import Element from '../../Element';
import { Element as ElementType } from '../../../data/elementTypes';
import PeriodRow from '../PeriodRow';
import { elements } from '../../../data/elements';
import { Separator } from '../../ui/separator';

// Helper function to safely find element
const findElement = (atomicNumber: number | string): ElementType | null => {
  const element = elements.find(e => e && e.atomic === atomicNumber.toString());
  if (!element || typeof element !== 'object') return null;
  if (!('atomic' in element)) return null;
  return element as ElementType;
};

export const renderPeriod6 = (onElementClick: (element: ElementType) => void) => {
  const periodLabel = "6";
  const period6Elements = [];
  
  // Add Cs (55) and Ba (56)
  for (let i = 55; i <= 56; i++) {
    const element = findElement(i);
    if (element) {
      period6Elements.push(
        <Element 
          key={`element-${i}`} 
          element={element} 
          onClick={() => onElementClick(element)} 
        />
      );
    }
  }
  
  // Add La (57) placeholder
  const lanthanum = findElement(57);
  if (lanthanum) {
    period6Elements.push(
      <Element 
        key="lanthanum" 
        element={lanthanum} 
        onClick={() => onElementClick(lanthanum)} 
      />
    );
  }
  
  // Add vertical divider after La (57) with id for alignment reference
  period6Elements.push(
    <div key="divider-after-57" className="flex items-center h-[70px]" id="period6-divider">
      <Separator orientation="vertical" className="h-full opacity-70" />
    </div>
  );
  
  // Add Hf (72) through Rn (86)
  for (let i = 72; i <= 86; i++) {
    const element = findElement(i);
    if (element) {
      period6Elements.push(
        <Element 
          key={`element-${i}`} 
          element={element} 
          onClick={() => onElementClick(element)} 
        />
      );
    }
  }
  
  return (
    <PeriodRow periodLabel={periodLabel} elements={period6Elements} />
  );
};

export const renderPeriod7 = (onElementClick: (element: ElementType) => void) => {
  const periodLabel = "7";
  const period7Elements = [];
  
  // Add Fr (87) and Ra (88)
  for (let i = 87; i <= 88; i++) {
    const element = findElement(i);
    if (element) {
      period7Elements.push(
        <Element 
          key={`element-${i}`} 
          element={element} 
          onClick={() => onElementClick(element)} 
        />
      );
    }
  }
  
  // Add Ac (89) placeholder
  const actinium = findElement(89);
  if (actinium) {
    period7Elements.push(
      <Element 
        key="actinium" 
        element={actinium} 
        onClick={() => onElementClick(actinium)} 
      />
    );
  }
  
  // Add vertical divider after Ac (89) with id for alignment reference
  period7Elements.push(
    <div key="divider-after-89" className="flex items-center h-[70px]" id="period7-divider">
      <Separator orientation="vertical" className="h-full opacity-70" />
    </div>
  );
  
  // Add Rf (104) through Og (118)
  for (let i = 104; i <= 118; i++) {
    const element = findElement(i);
    if (element) {
      period7Elements.push(
        <Element 
          key={`element-${i}`} 
          element={element} 
          onClick={() => onElementClick(element)} 
        />
      );
    }
  }
  
  return (
    <PeriodRow periodLabel={periodLabel} elements={period7Elements} />
  );
};
