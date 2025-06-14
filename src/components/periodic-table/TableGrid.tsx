
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
  
  // Main container with explicit grid styles
  const containerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '40px repeat(18, 60px)',
    gridTemplateRows: '35px repeat(7, 70px)',
    gap: '4px',
    width: 'fit-content',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    border: '3px solid blue', // Debug border
    boxSizing: 'border-box',
    position: 'relative',
    minWidth: '1200px',
    minHeight: '600px'
  };

  // Define all element positions with their exact grid coordinates
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
    { atomic: 19, row: 5, col: 2 },  { atomic: 20, row: 5, col: 3 },
    { atomic: 21, row: 5, col: 4 },  { atomic: 22, row: 5, col: 5 },
    { atomic: 23, row: 5, col: 6 },  { atomic: 24, row: 5, col: 7 },
    { atomic: 25, row: 5, col: 8 },  { atomic: 26, row: 5, col: 9 },
    { atomic: 27, row: 5, col: 10 }, { atomic: 28, row: 5, col: 11 },
    { atomic: 29, row: 5, col: 12 }, { atomic: 30, row: 5, col: 13 },
    { atomic: 31, row: 5, col: 14 }, { atomic: 32, row: 5, col: 15 },
    { atomic: 33, row: 5, col: 16 }, { atomic: 34, row: 5, col: 17 },
    { atomic: 35, row: 5, col: 18 }, { atomic: 36, row: 5, col: 19 },
    
    // Period 5 - full row
    { atomic: 37, row: 6, col: 2 },  { atomic: 38, row: 6, col: 3 },
    { atomic: 39, row: 6, col: 4 },  { atomic: 40, row: 6, col: 5 },
    { atomic: 41, row: 6, col: 6 },  { atomic: 42, row: 6, col: 7 },
    { atomic: 43, row: 6, col: 8 },  { atomic: 44, row: 6, col: 9 },
    { atomic: 45, row: 6, col: 10 }, { atomic: 46, row: 6, col: 11 },
    { atomic: 47, row: 6, col: 12 }, { atomic: 48, row: 6, col: 13 },
    { atomic: 49, row: 6, col: 14 }, { atomic: 50, row: 6, col: 15 },
    { atomic: 51, row: 6, col: 16 }, { atomic: 52, row: 6, col: 17 },
    { atomic: 53, row: 6, col: 18 }, { atomic: 54, row: 6, col: 19 },
    
    // Period 6 - with lanthanide gap
    { atomic: 55, row: 7, col: 2 },  { atomic: 56, row: 7, col: 3 },
    { atomic: 57, row: 7, col: 4 },  // La
    { atomic: 72, row: 7, col: 5 },  { atomic: 73, row: 7, col: 6 },
    { atomic: 74, row: 7, col: 7 },  { atomic: 75, row: 7, col: 8 },
    { atomic: 76, row: 7, col: 9 },  { atomic: 77, row: 7, col: 10 },
    { atomic: 78, row: 7, col: 11 }, { atomic: 79, row: 7, col: 12 },
    { atomic: 80, row: 7, col: 13 }, { atomic: 81, row: 7, col: 14 },
    { atomic: 82, row: 7, col: 15 }, { atomic: 83, row: 7, col: 16 },
    { atomic: 84, row: 7, col: 17 }, { atomic: 85, row: 7, col: 18 },
    { atomic: 86, row: 7, col: 19 },
    
    // Period 7 - with actinide gap
    { atomic: 87, row: 8, col: 2 },  { atomic: 88, row: 8, col: 3 },
    { atomic: 89, row: 8, col: 4 },  // Ac
    { atomic: 104, row: 8, col: 5 }, { atomic: 105, row: 8, col: 6 },
    { atomic: 106, row: 8, col: 7 }, { atomic: 107, row: 8, col: 8 },
    { atomic: 108, row: 8, col: 9 }, { atomic: 109, row: 8, col: 10 },
    { atomic: 110, row: 8, col: 11 }, { atomic: 111, row: 8, col: 12 },
    { atomic: 112, row: 8, col: 13 }, { atomic: 113, row: 8, col: 14 },
    { atomic: 114, row: 8, col: 15 }, { atomic: 115, row: 8, col: 16 },
    { atomic: 116, row: 8, col: 17 }, { atomic: 117, row: 8, col: 18 },
    { atomic: 118, row: 8, col: 19 },
  ];

  return (
    <div style={containerStyle}>
      {/* Group numbers header */}
      {Array.from({ length: 18 }, (_, i) => i + 1).map(groupNum => (
        <div
          key={`group-${groupNum}`}
          style={{
            gridColumn: groupNum + 1,
            gridRow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.8rem',
            color: '#6b7280',
            fontWeight: '600',
            height: '35px'
          }}
        >
          {groupNum}
        </div>
      ))}

      {/* Period labels */}
      {Array.from({ length: 7 }, (_, i) => i + 1).map(periodNum => (
        <div
          key={`period-${periodNum}`}
          style={{
            gridColumn: 1,
            gridRow: periodNum + 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1rem',
            color: '#6b7280',
            fontWeight: '600',
            height: '70px'
          }}
        >
          {periodNum}
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
              gridRow: row,
              width: '60px',
              height: '70px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Element 
              element={element} 
              onClick={() => onElementClick(element)}
              style={{
                width: '100%',
                height: '100%',
                margin: '0',
                boxSizing: 'border-box'
              }}
            />
          </div>
        );
      })}
    </div>
  );
});

TableGrid.displayName = 'TableGrid';

export default TableGrid;
