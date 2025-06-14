
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
  
  // Define all element positions in the periodic table
  const elementPositions = [
    // Period 1
    { atomic: 1, row: 2, col: 2 },   // H
    { atomic: 2, row: 2, col: 19 },  // He
    
    // Period 2
    { atomic: 3, row: 3, col: 2 },   // Li
    { atomic: 4, row: 3, col: 3 },   // Be
    { atomic: 5, row: 3, col: 14 },  // B
    { atomic: 6, row: 3, col: 15 },  // C
    { atomic: 7, row: 3, col: 16 },  // N
    { atomic: 8, row: 3, col: 17 },  // O
    { atomic: 9, row: 3, col: 18 },  // F
    { atomic: 10, row: 3, col: 19 }, // Ne
    
    // Period 3
    { atomic: 11, row: 4, col: 2 },  // Na
    { atomic: 12, row: 4, col: 3 },  // Mg
    { atomic: 13, row: 4, col: 14 }, // Al
    { atomic: 14, row: 4, col: 15 }, // Si
    { atomic: 15, row: 4, col: 16 }, // P
    { atomic: 16, row: 4, col: 17 }, // S
    { atomic: 17, row: 4, col: 18 }, // Cl
    { atomic: 18, row: 4, col: 19 }, // Ar
    
    // Period 4 - full row
    ...Array.from({ length: 18 }, (_, i) => ({
      atomic: 19 + i,
      row: 5,
      col: 2 + i
    })),
    
    // Period 5 - full row
    ...Array.from({ length: 18 }, (_, i) => ({
      atomic: 37 + i,
      row: 6,
      col: 2 + i
    })),
    
    // Period 6 - with lanthanide gap
    { atomic: 55, row: 7, col: 2 },  // Cs
    { atomic: 56, row: 7, col: 3 },  // Ba
    { atomic: 57, row: 7, col: 4 },  // La
    ...Array.from({ length: 15 }, (_, i) => ({
      atomic: 72 + i,
      row: 7,
      col: 5 + i
    })),
    
    // Period 7 - with actinide gap
    { atomic: 87, row: 8, col: 2 },  // Fr
    { atomic: 88, row: 8, col: 3 },  // Ra
    { atomic: 89, row: 8, col: 4 },  // Ac
    ...Array.from({ length: 15 }, (_, i) => ({
      atomic: 104 + i,
      row: 8,
      col: 5 + i
    })),
  ];

  return (
    <div className="w-full max-w-6xl mx-auto overflow-x-auto">
      <div 
        className="relative"
        style={{
          display: 'grid',
          gridTemplateColumns: '40px repeat(18, 60px)',
          gridTemplateRows: '35px repeat(7, 70px)',
          gap: '4px',
          minWidth: '1200px',
          padding: '20px'
        }}
      >
        {/* Group numbers (header row) */}
        {Array.from({ length: 18 }, (_, i) => (
          <div
            key={`group-${i + 1}`}
            style={{
              gridColumn: i + 2,
              gridRow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: '600',
              color: '#6b7280'
            }}
          >
            {i + 1}
          </div>
        ))}
        
        {/* Period labels (first column) */}
        {Array.from({ length: 7 }, (_, i) => (
          <div
            key={`period-${i + 1}`}
            style={{
              gridColumn: 1,
              gridRow: i + 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: '600',
              color: '#6b7280'
            }}
          >
            {i + 1}
          </div>
        ))}
        
        {/* Elements */}
        {elementPositions.map(({ atomic, row, col }) => {
          const element = findElement(atomic);
          if (!element) return null;
          
          return (
            <div
              key={`element-${atomic}`}
              style={{
                gridColumn: col,
                gridRow: row
              }}
            >
              <Element 
                element={element} 
                onClick={() => onElementClick(element)}
                data-atomic={element.atomic}
                className="w-full h-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
});

TableGrid.displayName = 'TableGrid';

export default TableGrid;
