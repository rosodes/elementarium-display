
import React from 'react';
import Element from '../../Element';
import { Element as ElementType } from '../../../data/elementTypes';
import PeriodRow from '../PeriodRow';
import EmptyCell from '../EmptyCell';

// Helper function to safely find element
const findElement = (atomicNumber: number | string): ElementType | null => {
  const elements = require('../../../data/elements').elements;
  const element = elements.find(e => e && e.atomic === atomicNumber.toString());
  if (!element || typeof element !== 'object') return null;
  if (!('atomic' in element)) return null;
  return element as ElementType;
};

export const renderPeriod1 = (onElementClick: (element: ElementType) => void) => {
  const periodLabel = "1";
  const period1Elements = [];
  
  // Add H (1)
  const hydrogen = findElement(1);
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
  const helium = findElement(2);
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
    <PeriodRow periodLabel={periodLabel} elements={period1Elements} />
  );
};

export const renderPeriod2 = (onElementClick: (element: ElementType) => void) => {
  const periodLabel = "2";
  const period2Elements = [];
  
  // Add Li (3) and Be (4)
  for (let i = 3; i <= 4; i++) {
    const element = findElement(i);
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
    const element = findElement(i);
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
    <PeriodRow periodLabel={periodLabel} elements={period2Elements} />
  );
};

export const renderPeriod3 = (onElementClick: (element: ElementType) => void) => {
  const periodLabel = "3";
  const period3Elements = [];
  
  // Add Na (11) and Mg (12)
  for (let i = 11; i <= 12; i++) {
    const element = findElement(i);
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
    const element = findElement(i);
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
    <PeriodRow periodLabel={periodLabel} elements={period3Elements} />
  );
};
