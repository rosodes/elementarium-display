
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
  
  // Create a 2D grid array representing the periodic table structure
  const createPeriodicGrid = () => {
    // Initialize 8 rows (header + 7 periods) and 19 columns (period label + 18 groups)
    const grid = Array(8).fill(null).map(() => Array(19).fill(null));
    
    // Row 0: Group numbers
    grid[0][0] = { type: 'empty' };
    for (let i = 1; i <= 18; i++) {
      grid[0][i] = { type: 'group', number: i };
    }
    
    // Period labels
    for (let period = 1; period <= 7; period++) {
      grid[period][0] = { type: 'period', number: period };
    }
    
    // Define element positions manually for correct periodic table layout
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
      { atomic: 19, row: 4, col: 1 },  { atomic: 20, row: 4, col: 2 },
      { atomic: 21, row: 4, col: 3 },  { atomic: 22, row: 4, col: 4 },
      { atomic: 23, row: 4, col: 5 },  { atomic: 24, row: 4, col: 6 },
      { atomic: 25, row: 4, col: 7 },  { atomic: 26, row: 4, col: 8 },
      { atomic: 27, row: 4, col: 9 },  { atomic: 28, row: 4, col: 10 },
      { atomic: 29, row: 4, col: 11 }, { atomic: 30, row: 4, col: 12 },
      { atomic: 31, row: 4, col: 13 }, { atomic: 32, row: 4, col: 14 },
      { atomic: 33, row: 4, col: 15 }, { atomic: 34, row: 4, col: 16 },
      { atomic: 35, row: 4, col: 17 }, { atomic: 36, row: 4, col: 18 },
      
      // Period 5 - full row
      { atomic: 37, row: 5, col: 1 },  { atomic: 38, row: 5, col: 2 },
      { atomic: 39, row: 5, col: 3 },  { atomic: 40, row: 5, col: 4 },
      { atomic: 41, row: 5, col: 5 },  { atomic: 42, row: 5, col: 6 },
      { atomic: 43, row: 5, col: 7 },  { atomic: 44, row: 5, col: 8 },
      { atomic: 45, row: 5, col: 9 },  { atomic: 46, row: 5, col: 10 },
      { atomic: 47, row: 5, col: 11 }, { atomic: 48, row: 5, col: 12 },
      { atomic: 49, row: 5, col: 13 }, { atomic: 50, row: 5, col: 14 },
      { atomic: 51, row: 5, col: 15 }, { atomic: 52, row: 5, col: 16 },
      { atomic: 53, row: 5, col: 17 }, { atomic: 54, row: 5, col: 18 },
      
      // Period 6 - with lanthanide gap
      { atomic: 55, row: 6, col: 1 },  { atomic: 56, row: 6, col: 2 },
      { atomic: 57, row: 6, col: 3 },  // La
      { atomic: 72, row: 6, col: 4 },  { atomic: 73, row: 6, col: 5 },
      { atomic: 74, row: 6, col: 6 },  { atomic: 75, row: 6, col: 7 },
      { atomic: 76, row: 6, col: 8 },  { atomic: 77, row: 6, col: 9 },
      { atomic: 78, row: 6, col: 10 }, { atomic: 79, row: 6, col: 11 },
      { atomic: 80, row: 6, col: 12 }, { atomic: 81, row: 6, col: 13 },
      { atomic: 82, row: 6, col: 14 }, { atomic: 83, row: 6, col: 15 },
      { atomic: 84, row: 6, col: 16 }, { atomic: 85, row: 6, col: 17 },
      { atomic: 86, row: 6, col: 18 },
      
      // Period 7 - with actinide gap
      { atomic: 87, row: 7, col: 1 },  { atomic: 88, row: 7, col: 2 },
      { atomic: 89, row: 7, col: 3 },  // Ac
      { atomic: 104, row: 7, col: 4 }, { atomic: 105, row: 7, col: 5 },
      { atomic: 106, row: 7, col: 6 }, { atomic: 107, row: 7, col: 7 },
      { atomic: 108, row: 7, col: 8 }, { atomic: 109, row: 7, col: 9 },
      { atomic: 110, row: 7, col: 10 }, { atomic: 111, row: 7, col: 11 },
      { atomic: 112, row: 7, col: 12 }, { atomic: 113, row: 7, col: 13 },
      { atomic: 114, row: 7, col: 14 }, { atomic: 115, row: 7, col: 15 },
      { atomic: 116, row: 7, col: 16 }, { atomic: 117, row: 7, col: 17 },
      { atomic: 118, row: 7, col: 18 },
    ];
    
    // Place elements in grid
    elementPositions.forEach(({ atomic, row, col }) => {
      const element = findElement(atomic);
      if (element) {
        console.log(`Placing element ${element.symbol} (${atomic}) at position [${row}, ${col}]`);
        grid[row][col] = { type: 'element', element };
      }
    });
    
    return grid;
  };

  const grid = createPeriodicGrid();
  
  return (
    <div 
      className="periodic-table-manual-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: '40px repeat(18, 60px)',
        gridTemplateRows: '35px repeat(7, 70px)',
        gap: '4px',
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '20px',
        boxSizing: 'border-box',
        border: '2px solid blue' // Debug border
      }}
    >
      {grid.map((row, rowIndex) => 
        row.map((cell, colIndex) => {
          const key = `cell-${rowIndex}-${colIndex}`;
          
          if (!cell) {
            return <div key={key} className="empty-cell"></div>;
          }
          
          if (cell.type === 'group') {
            return (
              <div 
                key={key}
                className="group-number"
                style={{
                  fontSize: '0.8rem',
                  color: '#6b7280',
                  fontWeight: '600',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '35px'
                }}
              >
                {cell.number}
              </div>
            );
          }
          
          if (cell.type === 'period') {
            return (
              <div 
                key={key}
                className="period-number"
                style={{
                  fontSize: '1rem',
                  color: '#6b7280',
                  fontWeight: '600',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '70px'
                }}
              >
                {cell.number}
              </div>
            );
          }
          
          if (cell.type === 'element') {
            return (
              <Element 
                key={key}
                element={cell.element} 
                onClick={() => onElementClick(cell.element)}
                style={{
                  width: '60px',
                  height: '70px',
                  margin: '0',
                  boxSizing: 'border-box'
                }}
              />
            );
          }
          
          return <div key={key} className="empty-cell"></div>;
        })
      )}
    </div>
  );
});

TableGrid.displayName = 'TableGrid';

export default TableGrid;
