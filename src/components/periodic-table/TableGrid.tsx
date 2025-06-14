
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
  
  // Create a 8x19 grid (7 periods + header, 18 groups + period labels)
  const createGrid = () => {
    const grid = Array(8).fill(null).map(() => Array(19).fill(null));
    
    // Add group numbers in first row
    for (let i = 1; i <= 18; i++) {
      grid[0][i] = { type: 'group', number: i };
    }
    
    // Add period numbers in first column
    for (let i = 1; i <= 7; i++) {
      grid[i][0] = { type: 'period', number: i };
    }
    
    // Period 1: H and He
    const h = findElement(1);
    const he = findElement(2);
    if (h) grid[1][1] = { type: 'element', data: h };
    if (he) grid[1][18] = { type: 'element', data: he };
    
    // Period 2: Li to Ne
    for (let i = 3; i <= 10; i++) {
      const element = findElement(i);
      if (element) {
        if (i <= 4) {
          // Li, Be
          grid[2][i - 2] = { type: 'element', data: element };
        } else {
          // B to Ne
          grid[2][i + 8] = { type: 'element', data: element };
        }
      }
    }
    
    // Period 3: Na to Ar
    for (let i = 11; i <= 18; i++) {
      const element = findElement(i);
      if (element) {
        if (i <= 12) {
          // Na, Mg
          grid[3][i - 10] = { type: 'element', data: element };
        } else {
          // Al to Ar
          grid[3][i] = { type: 'element', data: element };
        }
      }
    }
    
    // Period 4: K to Kr (полный ряд)
    for (let i = 19; i <= 36; i++) {
      const element = findElement(i);
      if (element) {
        grid[4][i - 17] = { type: 'element', data: element };
      }
    }
    
    // Period 5: Rb to Xe (полный ряд)
    for (let i = 37; i <= 54; i++) {
      const element = findElement(i);
      if (element) {
        grid[5][i - 35] = { type: 'element', data: element };
      }
    }
    
    // Period 6: Cs, Ba, La-Lu (57-71), Hf-Rn (72-86)
    // Cs, Ba
    const cs = findElement(55);
    const ba = findElement(56);
    if (cs) grid[6][1] = { type: 'element', data: cs };
    if (ba) grid[6][2] = { type: 'element', data: ba };
    
    // La placeholder
    const la = findElement(57);
    if (la) grid[6][3] = { type: 'element', data: la };
    
    // Hf to Rn
    for (let i = 72; i <= 86; i++) {
      const element = findElement(i);
      if (element) {
        grid[6][i - 68] = { type: 'element', data: element };
      }
    }
    
    // Period 7: Fr, Ra, Ac, Rf-Og (104-118)
    // Fr, Ra
    const fr = findElement(87);
    const ra = findElement(88);
    if (fr) grid[7][1] = { type: 'element', data: fr };
    if (ra) grid[7][2] = { type: 'element', data: ra };
    
    // Ac placeholder
    const ac = findElement(89);
    if (ac) grid[7][3] = { type: 'element', data: ac };
    
    // Rf to Og
    for (let i = 104; i <= 118; i++) {
      const element = findElement(i);
      if (element) {
        grid[7][i - 100] = { type: 'element', data: element };
      }
    }
    
    return grid;
  };

  const grid = createGrid();

  return (
    <div className="w-full">
      <div 
        className="periodic-table grid gap-1"
        style={{
          gridTemplateColumns: '40px repeat(18, 76px)',
          gridTemplateRows: '35px repeat(7, 76px)',
          justifyContent: 'center',
          margin: '0 auto',
          padding: '20px'
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const key = `${rowIndex}-${colIndex}`;
            
            if (!cell) {
              return <div key={key} />; // Empty cell
            }
            
            if (cell.type === 'group') {
              return (
                <div 
                  key={key}
                  className="flex items-center justify-center text-xs font-semibold text-gray-600 dark:text-gray-400"
                >
                  {cell.number}
                </div>
              );
            }
            
            if (cell.type === 'period') {
              return (
                <div 
                  key={key}
                  className="flex items-center justify-center text-sm font-semibold text-gray-600 dark:text-gray-400"
                >
                  {cell.number}
                </div>
              );
            }
            
            if (cell.type === 'element') {
              return (
                <Element 
                  key={key}
                  element={cell.data} 
                  onClick={() => onElementClick(cell.data)}
                  data-atomic={cell.data.atomic}
                  className="w-[76px] h-[76px]"
                />
              );
            }
            
            return <div key={key} />;
          })
        )}
      </div>
    </div>
  );
});

TableGrid.displayName = 'TableGrid';

export default TableGrid;
