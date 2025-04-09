import React from 'react';
import Element from '../Element';
import { elements } from '../../data/elements';
import EmptyCell from './EmptyCell';
import PeriodRow from './PeriodRow';
import { Element as ElementType } from '../../data/elementTypes';

// Updated the lanthanides and actinides functions to accept a skipFirstElement parameter
export const renderLanthanides = (onElementClick: (element: ElementType) => void, skipFirstElement: boolean = false) => {
  const periodNumber = "6*";
  
  // Start with element 58 if skipFirstElement is true, otherwise start with 57
  const startIndex = skipFirstElement ? 58 : 57;
  const endIndex = 71;
  
  const lanthanideElements = [];
  
  for (let i = startIndex; i <= endIndex; i++) {
    const element = elements.find(e => parseInt(e.atomic) === i);
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
    <PeriodRow periodLabel={periodNumber} elements={lanthanideElements} />
  );
};

export const renderActinides = (onElementClick: (element: ElementType) => void, skipFirstElement: boolean = false) => {
  const periodNumber = "7*";
  
  // Start with element 90 if skipFirstElement is true, otherwise start with 89
  const startIndex = skipFirstElement ? 90 : 89;
  const endIndex = 103;
  
  const actinideElements = [];
  
  for (let i = startIndex; i <= endIndex; i++) {
    const element = elements.find(e => parseInt(e.atomic) === i);
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
    <PeriodRow periodLabel={periodNumber} elements={actinideElements} />
  );
};

export const renderPeriod1 = (onElementClick: (element: ElementType) => void) => {
  const periodNumber = "1";
  const period1Elements = [];
  
  // Add H (1)
  const hydrogen = elements.find(e => e.atomic === "1");
  if (hydrogen) {
    period1Elements.push(
      <Element 
        key="hydrogen" 
        element={hydrogen} 
        onClick={() => onElementClick(hydrogen)} 
      />
    );
  }
  
  // Add empty cells for groups 2-17
  for (let i = 0; i < 16; i++) {
    period1Elements.push(<EmptyCell key={`empty-p1-${i}`} />);
  }
  
  // Add He (2)
  const helium = elements.find(e => e.atomic === "2");
  if (helium) {
    period1Elements.push(
      <Element 
        key="helium" 
        element={helium} 
        onClick={() => onElementClick(helium)} 
      />
    );
  }
  
  return (
    <PeriodRow periodLabel={periodNumber} elements={period1Elements} />
  );
};

export const renderPeriod2 = (onElementClick: (element: ElementType) => void) => {
  const periodNumber = "2";
  const period2Elements = [];
  
  // Add Li (3) and Be (4)
  for (let i = 3; i <= 4; i++) {
    const element = elements.find(e => e.atomic === i.toString());
    if (element) {
      period2Elements.push(
        <Element 
          key={`element-${i}`} 
          element={element} 
          onClick={() => onElementClick(element)} 
        />
      );
    }
  }
  
  // Add empty cells for groups 3-12
  for (let i = 0; i < 10; i++) {
    period2Elements.push(<EmptyCell key={`empty-p2-${i}`} />);
  }
  
  // Add B (5) through Ne (10)
  for (let i = 5; i <= 10; i++) {
    const element = elements.find(e => e.atomic === i.toString());
    if (element) {
      period2Elements.push(
        <Element 
          key={`element-${i}`} 
          element={element} 
          onClick={() => onElementClick(element)} 
        />
      );
    }
  }
  
  return (
    <PeriodRow periodLabel={periodNumber} elements={period2Elements} />
  );
};

export const renderPeriod3 = (onElementClick: (element: ElementType) => void) => {
  const periodNumber = "3";
  const period3Elements = [];
  
  // Add Na (11) and Mg (12)
  for (let i = 11; i <= 12; i++) {
    const element = elements.find(e => e.atomic === i.toString());
    if (element) {
      period3Elements.push(
        <Element 
          key={`element-${i}`} 
          element={element} 
          onClick={() => onElementClick(element)} 
        />
      );
    }
  }
  
  // Add empty cells for groups 3-12
  for (let i = 0; i < 10; i++) {
    period3Elements.push(<EmptyCell key={`empty-p3-${i}`} />);
  }
  
  // Add Al (13) through Ar (18)
  for (let i = 13; i <= 18; i++) {
    const element = elements.find(e => e.atomic === i.toString());
    if (element) {
      period3Elements.push(
        <Element 
          key={`element-${i}`} 
          element={element} 
          onClick={() => onElementClick(element)} 
        />
      );
    }
  }
  
  return (
    <PeriodRow periodLabel={periodNumber} elements={period3Elements} />
  );
};

export const renderPeriod4 = (onElementClick: (element: ElementType) => void) => {
  const periodNumber = "4";
  const period4Elements = [];
  
  // Add K (19) through Kr (36)
  for (let i = 19; i <= 36; i++) {
    const element = elements.find(e => e.atomic === i.toString());
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
    <PeriodRow periodLabel={periodNumber} elements={period4Elements} />
  );
};

export const renderPeriod5 = (onElementClick: (element: ElementType) => void) => {
  const periodNumber = "5";
  const period5Elements = [];
  
  // Add Rb (37) through Xe (54)
  for (let i = 37; i <= 54; i++) {
    const element = elements.find(e => e.atomic === i.toString());
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
    <PeriodRow periodLabel={periodNumber} elements={period5Elements} />
  );
};

export const renderPeriod6 = (onElementClick: (element: ElementType) => void) => {
  const periodNumber = "6";
  const period6Elements = [];
  
  // Add Cs (55) and Ba (56)
  for (let i = 55; i <= 56; i++) {
    const element = elements.find(e => e.atomic === i.toString());
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
  const lanthanum = elements.find(e => e.atomic === "57");
  if (lanthanum) {
    period6Elements.push(
      <Element 
        key="lanthanum" 
        element={lanthanum} 
        onClick={() => onElementClick(lanthanum)} 
      />
    );
  }
  
  // Add Hf (72) through Rn (86)
  for (let i = 72; i <= 86; i++) {
    const element = elements.find(e => e.atomic === i.toString());
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
    <PeriodRow periodLabel={periodNumber} elements={period6Elements} />
  );
};

export const renderPeriod7 = (onElementClick: (element: ElementType) => void) => {
  const periodNumber = "7";
  const period7Elements = [];
  
  // Add Fr (87) and Ra (88)
  for (let i = 87; i <= 88; i++) {
    const element = elements.find(e => e.atomic === i.toString());
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
  const actinium = elements.find(e => e.atomic === "89");
  if (actinium) {
    period7Elements.push(
      <Element 
        key="actinium" 
        element={actinium} 
        onClick={() => onElementClick(actinium)} 
      />
    );
  }
  
  // Add Rf (104) through Og (118)
  for (let i = 104; i <= 118; i++) {
    const element = elements.find(e => e.atomic === i.toString());
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
    <PeriodRow periodLabel={periodNumber} elements={period7Elements} />
  );
};
