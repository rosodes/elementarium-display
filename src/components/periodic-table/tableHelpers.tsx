
import React from 'react';
import ElementCard from './ElementCard';
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

// Empty cell component for proper spacing
const EmptyCell = () => (
  <div className="w-[70px] h-[70px] flex-shrink-0"></div>
);

export const renderPeriod1 = (onElementClick: (element: ElementType) => void) => {
  const periodLabel = "1";
  const period1Elements = [];
  
  // H (1)
  const hydrogen = findElement(1);
  if (hydrogen) {
    period1Elements.push(
      <ElementCard key="element-1" element={hydrogen} onClick={onElementClick} />
    );
  }
  
  // Empty cells for positions 2-17
  for (let i = 0; i < 16; i++) {
    period1Elements.push(<EmptyCell key={`empty-1-${i}`} />);
  }
  
  // He (2)
  const helium = findElement(2);
  if (helium) {
    period1Elements.push(
      <ElementCard key="element-2" element={helium} onClick={onElementClick} />
    );
  }
  
  return <PeriodRow periodLabel={periodLabel} elements={period1Elements} />;
};

export const renderPeriod2 = (onElementClick: (element: ElementType) => void) => {
  const periodLabel = "2";
  const period2Elements = [];
  
  // Li (3) and Be (4)
  for (let i = 3; i <= 4; i++) {
    const element = findElement(i);
    if (element) {
      period2Elements.push(
        <ElementCard key={`element-${i}`} element={element} onClick={onElementClick} />
      );
    }
  }
  
  // Empty cells for positions 5-12
  for (let i = 0; i < 10; i++) {
    period2Elements.push(<EmptyCell key={`empty-2-${i}`} />);
  }
  
  // B (5) through Ne (10)
  for (let i = 5; i <= 10; i++) {
    const element = findElement(i);
    if (element) {
      period2Elements.push(
        <ElementCard key={`element-${i}`} element={element} onClick={onElementClick} />
      );
    }
  }
  
  return <PeriodRow periodLabel={periodLabel} elements={period2Elements} />;
};

export const renderPeriod3 = (onElementClick: (element: ElementType) => void) => {
  const periodLabel = "3";
  const period3Elements = [];
  
  // Na (11) and Mg (12)
  for (let i = 11; i <= 12; i++) {
    const element = findElement(i);
    if (element) {
      period3Elements.push(
        <ElementCard key={`element-${i}`} element={element} onClick={onElementClick} />
      );
    }
  }
  
  // Empty cells for positions 13-17 (d-block)
  for (let i = 0; i < 10; i++) {
    period3Elements.push(<EmptyCell key={`empty-3-${i}`} />);
  }
  
  // Al (13) through Ar (18)
  for (let i = 13; i <= 18; i++) {
    const element = findElement(i);
    if (element) {
      period3Elements.push(
        <ElementCard key={`element-${i}`} element={element} onClick={onElementClick} />
      );
    }
  }
  
  return <PeriodRow periodLabel={periodLabel} elements={period3Elements} />;
};

export const renderPeriod4 = (onElementClick: (element: ElementType) => void) => {
  const periodLabel = "4";
  const period4Elements = [];
  
  // K (19) through Kr (36) - complete period
  for (let i = 19; i <= 36; i++) {
    const element = findElement(i);
    if (element) {
      period4Elements.push(
        <ElementCard key={`element-${i}`} element={element} onClick={onElementClick} />
      );
    }
  }
  
  return <PeriodRow periodLabel={periodLabel} elements={period4Elements} />;
};

export const renderPeriod5 = (onElementClick: (element: ElementType) => void) => {
  const periodLabel = "5";
  const period5Elements = [];
  
  // Rb (37) through Xe (54) - complete period
  for (let i = 37; i <= 54; i++) {
    const element = findElement(i);
    if (element) {
      period5Elements.push(
        <ElementCard key={`element-${i}`} element={element} onClick={onElementClick} />
      );
    }
  }
  
  return <PeriodRow periodLabel={periodLabel} elements={period5Elements} />;
};

export const renderPeriod6 = (onElementClick: (element: ElementType) => void) => {
  const periodLabel = "6";
  const period6Elements = [];
  
  // Cs (55) and Ba (56)
  for (let i = 55; i <= 56; i++) {
    const element = findElement(i);
    if (element) {
      period6Elements.push(
        <ElementCard key={`element-${i}`} element={element} onClick={onElementClick} />
      );
    }
  }
  
  // La (57) - lanthanide placeholder
  const lanthanum = findElement(57);
  if (lanthanum) {
    period6Elements.push(
      <div key="lanthanide-placeholder" className="w-[70px] h-[70px] flex-shrink-0 
                                                  bg-gradient-to-br from-purple-100 to-purple-200 
                                                  dark:from-purple-900/60 dark:to-purple-800/60
                                                  border-2 border-purple-300/70 dark:border-purple-600/70 
                                                  rounded-xl flex items-center justify-center text-xs font-bold
                                                  text-purple-800 dark:text-purple-200 cursor-pointer"
           onClick={() => onElementClick(lanthanum)}>
        57*
      </div>
    );
  }
  
  // Hf (72) through Rn (86)
  for (let i = 72; i <= 86; i++) {
    const element = findElement(i);
    if (element) {
      period6Elements.push(
        <ElementCard key={`element-${i}`} element={element} onClick={onElementClick} />
      );
    }
  }
  
  return <PeriodRow periodLabel={periodLabel} elements={period6Elements} />;
};

export const renderPeriod7 = (onElementClick: (element: ElementType) => void) => {
  const periodLabel = "7";
  const period7Elements = [];
  
  // Fr (87) and Ra (88)
  for (let i = 87; i <= 88; i++) {
    const element = findElement(i);
    if (element) {
      period7Elements.push(
        <ElementCard key={`element-${i}`} element={element} onClick={onElementClick} />
      );
    }
  }
  
  // Ac (89) - actinide placeholder
  const actinium = findElement(89);
  if (actinium) {
    period7Elements.push(
      <div key="actinide-placeholder" className="w-[70px] h-[70px] flex-shrink-0 
                                                 bg-gradient-to-br from-orange-100 to-orange-200 
                                                 dark:from-orange-900/60 dark:to-orange-800/60
                                                 border-2 border-orange-300/70 dark:border-orange-600/70 
                                                 rounded-xl flex items-center justify-center text-xs font-bold
                                                 text-orange-800 dark:text-orange-200 cursor-pointer"
           onClick={() => onElementClick(actinium)}>
        89*
      </div>
    );
  }
  
  // Rf (104) through Og (118)
  for (let i = 104; i <= 118; i++) {
    const element = findElement(i);
    if (element) {
      period7Elements.push(
        <ElementCard key={`element-${i}`} element={element} onClick={onElementClick} />
      );
    }
  }
  
  return <PeriodRow periodLabel={periodLabel} elements={period7Elements} />;
};
