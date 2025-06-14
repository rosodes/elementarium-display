
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
    <div className="periodic-table">
      {/* Group numbers header */}
      <div className="group-numbers-row">
        <div></div>
        {Array.from({ length: 18 }, (_, i) => i + 1).map(groupNum => (
          <div key={`group-${groupNum}`}>
            {groupNum}
          </div>
        ))}
      </div>

      {/* Period labels */}
      <div className="period-1-label">1</div>
      <div className="period-2-label">2</div>
      <div className="period-3-label">3</div>
      <div className="period-4-label">4</div>
      <div className="period-5-label">5</div>
      <div className="period-6-label">6</div>
      <div className="period-7-label">7</div>

      {/* Period 1: H and He */}
      {findElement(1) && (
        <Element 
          element={findElement(1)!} 
          onClick={() => onElementClick(findElement(1)!)}
        />
      )}
      {findElement(2) && (
        <Element 
          element={findElement(2)!} 
          onClick={() => onElementClick(findElement(2)!)}
        />
      )}

      {/* Period 2: Li to Ne */}
      {[3, 4, 5, 6, 7, 8, 9, 10].map(atomicNum => {
        const element = findElement(atomicNum);
        return element ? (
          <Element 
            key={`element-${atomicNum}`}
            element={element} 
            onClick={() => onElementClick(element)}
          />
        ) : null;
      })}

      {/* Period 3: Na to Ar */}
      {[11, 12, 13, 14, 15, 16, 17, 18].map(atomicNum => {
        const element = findElement(atomicNum);
        return element ? (
          <Element 
            key={`element-${atomicNum}`}
            element={element} 
            onClick={() => onElementClick(element)}
          />
        ) : null;
      })}

      {/* Period 4: K to Kr (full row) */}
      {Array.from({ length: 18 }, (_, i) => i + 19).map(atomicNum => {
        const element = findElement(atomicNum);
        return element ? (
          <Element 
            key={`element-${atomicNum}`}
            element={element} 
            onClick={() => onElementClick(element)}
          />
        ) : null;
      })}

      {/* Period 5: Rb to Xe (full row) */}
      {Array.from({ length: 18 }, (_, i) => i + 37).map(atomicNum => {
        const element = findElement(atomicNum);
        return element ? (
          <Element 
            key={`element-${atomicNum}`}
            element={element} 
            onClick={() => onElementClick(element)}
          />
        ) : null;
      })}

      {/* Period 6: Cs to Rn with lanthanide gap */}
      {/* Cs, Ba, La */}
      {[55, 56, 57].map(atomicNum => {
        const element = findElement(atomicNum);
        return element ? (
          <Element 
            key={`element-${atomicNum}`}
            element={element} 
            onClick={() => onElementClick(element)}
          />
        ) : null;
      })}
      
      {/* Hf to Rn (skip lanthanides 58-71) */}
      {Array.from({ length: 15 }, (_, i) => i + 72).map(atomicNum => {
        const element = findElement(atomicNum);
        return element ? (
          <Element 
            key={`element-${atomicNum}`}
            element={element} 
            onClick={() => onElementClick(element)}
          />
        ) : null;
      })}

      {/* Period 7: Fr to Og with actinide gap */}
      {/* Fr, Ra, Ac */}
      {[87, 88, 89].map(atomicNum => {
        const element = findElement(atomicNum);
        return element ? (
          <Element 
            key={`element-${atomicNum}`}
            element={element} 
            onClick={() => onElementClick(element)}
          />
        ) : null;
      })}
      
      {/* Rf to Og (skip actinides 90-103) */}
      {Array.from({ length: 15 }, (_, i) => i + 104).map(atomicNum => {
        const element = findElement(atomicNum);
        return element ? (
          <Element 
            key={`element-${atomicNum}`}
            element={element} 
            onClick={() => onElementClick(element)}
          />
        ) : null;
      })}
    </div>
  );
});

TableGrid.displayName = 'TableGrid';

export default TableGrid;
