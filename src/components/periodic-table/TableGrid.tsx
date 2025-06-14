
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
  
  // Create a 2D array to represent the grid (excluding f-block elements)
  const createGridArray = () => {
    // Create 8 rows x 19 columns (including headers)
    const grid: (ElementType | string | null)[][] = Array(8).fill(null).map(() => Array(19).fill(null));
    
    // Fill group numbers (header row)
    for (let col = 1; col <= 18; col++) {
      grid[0][col] = `group-${col}`;
    }
    
    // Fill period numbers (first column)
    for (let row = 1; row <= 7; row++) {
      grid[row][0] = `period-${row}`;
    }
    
    // Define element positions (excluding lanthanides 58-71 and actinides 90-103)
    const elementPositions = [
      // Period 1
      { atomic: 1, row: 1, col: 1 },   // H
      { atomic: 2, row: 1, col: 18 },  // He
      
      // Period 2
      { atomic: 3, row: 2, col: 1 },   // Li
      { atomic: 4, row: 2, col: 2 },   // Be
      { atomic: 5, row: 2, col: 13 },  // B
      { atomic: 6, row: 2, col: 14 },  // C
      { atomic: 7, row: 2, col: 15 },  // N
      { atomic: 8, row: 2, col: 16 },  // O
      { atomic: 9, row: 2, col: 17 },  // F
      { atomic: 10, row: 2, col: 18 }, // Ne
      
      // Period 3
      { atomic: 11, row: 3, col: 1 },  // Na
      { atomic: 12, row: 3, col: 2 },  // Mg
      { atomic: 13, row: 3, col: 13 }, // Al
      { atomic: 14, row: 3, col: 14 }, // Si
      { atomic: 15, row: 3, col: 15 }, // P
      { atomic: 16, row: 3, col: 16 }, // S
      { atomic: 17, row: 3, col: 17 }, // Cl
      { atomic: 18, row: 3, col: 18 }, // Ar
      
      // Period 4 - full row
      ...Array.from({ length: 18 }, (_, i) => ({
        atomic: 19 + i,
        row: 4,
        col: 1 + i
      })),
      
      // Period 5 - full row
      ...Array.from({ length: 18 }, (_, i) => ({
        atomic: 37 + i,
        row: 5,
        col: 1 + i
      })),
      
      // Period 6 - with lanthanide gap (skip 58-71)
      { atomic: 55, row: 6, col: 1 },  // Cs
      { atomic: 56, row: 6, col: 2 },  // Ba
      { atomic: 57, row: 6, col: 3 },  // La (placeholder for lanthanides)
      ...Array.from({ length: 15 }, (_, i) => ({
        atomic: 72 + i,
        row: 6,
        col: 4 + i
      })),
      
      // Period 7 - with actinide gap (skip 90-103)
      { atomic: 87, row: 7, col: 1 },  // Fr
      { atomic: 88, row: 7, col: 2 },  // Ra
      { atomic: 89, row: 7, col: 3 },  // Ac (placeholder for actinides)
      ...Array.from({ length: 15 }, (_, i) => ({
        atomic: 104 + i,
        row: 7,
        col: 4 + i
      })),
    ];
    
    // Place elements in grid
    elementPositions.forEach(({ atomic, row, col }) => {
      const element = findElement(atomic);
      if (element) {
        grid[row][col] = element;
      }
    });
    
    return grid;
  };
  
  const grid = createGridArray();
  
  return (
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: '40px repeat(18, 60px)',
        gridTemplateRows: '35px repeat(7, 70px)',
        gap: '4px',
        minWidth: '1200px',
        padding: '20px',
        justifyItems: 'center',
        alignItems: 'center',
        margin: '0 auto'
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const key = `${rowIndex}-${colIndex}`;
          
          if (!cell) {
            return <div key={key} />; // Empty cell
          }
          
          if (typeof cell === 'string') {
            if (cell.startsWith('group-')) {
              const groupNumber = cell.split('-')[1];
              return (
                <div
                  key={key}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#6b7280',
                    height: '35px'
                  }}
                >
                  {groupNumber}
                </div>
              );
            }
            
            if (cell.startsWith('period-')) {
              const periodNumber = cell.split('-')[1];
              return (
                <div
                  key={key}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#6b7280',
                    height: '70px'
                  }}
                >
                  {periodNumber}
                </div>
              );
            }
          }
          
          if (typeof cell === 'object' && 'atomic' in cell) {
            return (
              <Element
                key={key}
                element={cell as ElementType}
                onClick={() => onElementClick(cell as ElementType)}
                data-atomic={cell.atomic}
                style={{
                  width: '60px',
                  height: '70px',
                  margin: '0'
                }}
              />
            );
          }
          
          return <div key={key} />;
        })
      )}
    </div>
  );
});

TableGrid.displayName = 'TableGrid';

export default TableGrid;
