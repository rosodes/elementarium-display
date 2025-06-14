
import React, { memo } from 'react';
import Element from '../Element';
import { Element as ElementType } from '../../data/elementTypes';
import { elements } from '../../data/elements';

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
  console.log('TableGrid rendering...');
  
  return (
    <div className="w-full">
      <div className="periodic-table">
        {/* Заголовки групп */}
        <div className="group-numbers-row">
          <div></div>
          {Array.from({ length: 18 }, (_, i) => (
            <div key={i + 1}>{i + 1}</div>
          ))}
        </div>
        
        {/* Метки периодов */}
        <div className="period-1-label">1</div>
        <div className="period-2-label">2</div>
        <div className="period-3-label">3</div>
        <div className="period-4-label">4</div>
        <div className="period-5-label">5</div>
        <div className="period-6-label">6</div>
        <div className="period-7-label">7</div>
        
        {/* Все элементы */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118].map(atomicNumber => {
          const element = findElement(atomicNumber);
          if (!element) return null;
          
          return (
            <Element 
              key={atomicNumber}
              element={element} 
              onClick={() => onElementClick(element)}
              data-atomic={element.atomic}
            />
          );
        })}
      </div>
    </div>
  );
});

TableGrid.displayName = 'TableGrid';

export default TableGrid;
