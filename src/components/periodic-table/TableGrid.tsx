
import React, { memo } from 'react';
import Element from '../Element';
import { Element as ElementType } from '../../data/elementTypes';
import { elements } from '../../data/elements';
import GroupNumbers from './GroupNumbers';

interface TableGridProps {
  onElementClick: (element: ElementType) => void;
}

// Helper function to safely find element
const findElement = (atomicNumber: number): ElementType | null => {
  const element = elements.find(e => e && e.atomic === atomicNumber.toString());
  if (!element || typeof element !== 'object') return null;
  if (!('atomic' in element)) return null;
  return element as ElementType;
};

const TableGrid = memo(({ onElementClick }: TableGridProps) => {
  // Create all elements that should be in the periodic table
  const renderAllElements = () => {
    const elementComponents = [];
    
    // Period 1: H(1), He(2)
    [1, 2].forEach(atomicNum => {
      const element = findElement(atomicNum);
      if (element) {
        elementComponents.push(
          <Element 
            key={`element-${atomicNum}`}
            element={element} 
            onClick={() => onElementClick(element)}
          />
        );
      }
    });
    
    // Period 2: Li(3) to Ne(10)
    for (let i = 3; i <= 10; i++) {
      const element = findElement(i);
      if (element) {
        elementComponents.push(
          <Element 
            key={`element-${i}`}
            element={element} 
            onClick={() => onElementClick(element)}
          />
        );
      }
    }
    
    // Period 3: Na(11) to Ar(18)
    for (let i = 11; i <= 18; i++) {
      const element = findElement(i);
      if (element) {
        elementComponents.push(
          <Element 
            key={`element-${i}`}
            element={element} 
            onClick={() => onElementClick(element)}
          />
        );
      }
    }
    
    // Period 4: K(19) to Kr(36)
    for (let i = 19; i <= 36; i++) {
      const element = findElement(i);
      if (element) {
        elementComponents.push(
          <Element 
            key={`element-${i}`}
            element={element} 
            onClick={() => onElementClick(element)}
          />
        );
      }
    }
    
    // Period 5: Rb(37) to Xe(54)
    for (let i = 37; i <= 54; i++) {
      const element = findElement(i);
      if (element) {
        elementComponents.push(
          <Element 
            key={`element-${i}`}
            element={element} 
            onClick={() => onElementClick(element)}
          />
        );
      }
    }
    
    // Period 6: Cs(55) to Rn(86) - skip lanthanides (58-71)
    [55, 56, 57].forEach(atomicNum => {
      const element = findElement(atomicNum);
      if (element) {
        elementComponents.push(
          <Element 
            key={`element-${atomicNum}`}
            element={element} 
            onClick={() => onElementClick(element)}
          />
        );
      }
    });
    
    for (let i = 72; i <= 86; i++) {
      const element = findElement(i);
      if (element) {
        elementComponents.push(
          <Element 
            key={`element-${i}`}
            element={element} 
            onClick={() => onElementClick(element)}
          />
        );
      }
    }
    
    // Period 7: Fr(87) to Og(118) - skip actinides (90-103)
    [87, 88, 89].forEach(atomicNum => {
      const element = findElement(atomicNum);
      if (element) {
        elementComponents.push(
          <Element 
            key={`element-${atomicNum}`}
            element={element} 
            onClick={() => onElementClick(element)}
          />
        );
      }
    });
    
    for (let i = 104; i <= 118; i++) {
      const element = findElement(i);
      if (element) {
        elementComponents.push(
          <Element 
            key={`element-${i}`}
            element={element} 
            onClick={() => onElementClick(element)}
          />
        );
      }
    }
    
    return elementComponents;
  };

  return (
    <div className="periodic-table">
      <GroupNumbers />
      
      {/* Period labels */}
      <div className="period-1-label">1</div>
      <div className="period-2-label">2</div>
      <div className="period-3-label">3</div>
      <div className="period-4-label">4</div>
      <div className="period-5-label">5</div>
      <div className="period-6-label">6</div>
      <div className="period-7-label">7</div>
      
      {/* All elements as direct children */}
      {renderAllElements()}
    </div>
  );
});

TableGrid.displayName = 'TableGrid';

export default TableGrid;
