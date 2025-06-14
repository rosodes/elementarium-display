
import React, { memo } from 'react';
import TableGridCell from './TableGridCell';
import { Element as ElementType } from '../../data/elementTypes';
import { elements } from '../../data/elements';

// Helper function to safely find element
const findElement = (atomicNumber: number): ElementType | null => {
  const element = elements.find(e => e && e.atomic === atomicNumber.toString());
  if (!element || typeof element !== 'object') return null;
  if (!('atomic' in element)) return null;
  return element as ElementType;
};

interface TableGridProps {
  onElementClick: (element: ElementType) => void;
}

const TableGrid = memo(({ onElementClick }: TableGridProps) => {
  // Create a 8x19 grid (7 periods + header, 18 groups + period labels)
  const createGrid = () => {
    const grid = Array(8).fill(null).map(() => Array(19).fill(null));
    for (let i = 1; i <= 18; i++) {
      grid[0][i] = { type: 'group', number: i };
    }
    for (let i = 1; i <= 7; i++) {
      grid[i][0] = { type: 'period', number: i };
    }
    // Period 1: H and He
    const h = findElement(1), he = findElement(2);
    if (h) grid[1][1] = { type: 'element', data: h };
    if (he) grid[1][18] = { type: 'element', data: he };

    // Period 2: Li to Ne
    for (let i = 3; i <= 10; i++) {
      const el = findElement(i);
      if (el) {
        if (i <= 4) grid[2][i - 2] = { type: 'element', data: el };
        else grid[2][i + 8] = { type: 'element', data: el };
      }
    }
    // Period 3: Na to Ar
    for (let i = 11; i <= 18; i++) {
      const el = findElement(i);
      if (el) {
        if (i <= 12) grid[3][i - 10] = { type: 'element', data: el };
        else grid[3][i] = { type: 'element', data: el };
      }
    }
    // Period 4: K to Br (19–35)
    for (let i = 19; i <= 35; i++) {
      const el = findElement(i);
      if (el) grid[4][i - 17] = { type: 'element', data: el };
    }
    // Kr (36): строго 19 колонка, 5 строка
    const kr = findElement(36);
    if (kr) grid[4][18] = { type: 'element', data: kr }; // <== исправлено

    // Period 5: Rb to Te (37–52)
    for (let i = 37; i <= 52; i++) {
      const el = findElement(i);
      if (el) grid[5][i - 35] = { type: 'element', data: el };
    }
    // I (53): 18th col, Xe (54): 19th col in 6th row
    const i53 = findElement(53);
    if (i53) grid[5][17] = { type: 'element', data: i53 }; // <== исправлено
    const xe = findElement(54);
    if (xe) grid[5][18] = { type: 'element', data: xe }; // <== исправлено

    // Period 6: Cs, Ba, La-Lu gap, Hf-Po (72-84)
    const cs = findElement(55), ba = findElement(56), la = findElement(57);
    if (cs) grid[6][1] = { type: 'element', data: cs };
    if (ba) grid[6][2] = { type: 'element', data: ba };
    if (la) grid[6][3] = { type: 'element', data: la };
    for (let i = 72; i <= 84; i++) {
      const el = findElement(i);
      if (el) grid[6][i - 68] = { type: 'element', data: el };
    }
    // At (85): 18-я колонка, Rn (86): 19-я колонка в 7 строке
    const at = findElement(85);
    if (at) grid[6][17] = { type: 'element', data: at }; // <== исправлено
    const rn = findElement(86);
    if (rn) grid[6][18] = { type: 'element', data: rn }; // <== исправлено

    // Period 7: Fr, Ra, Ac, Rf-Og (104–118)
    const fr = findElement(87), ra = findElement(88), ac = findElement(89);
    if (fr) grid[7][1] = { type: 'element', data: fr };
    if (ra) grid[7][2] = { type: 'element', data: ra };
    if (ac) grid[7][3] = { type: 'element', data: ac };
    for (let i = 104; i <= 118; i++) {
      const el = findElement(i);
      if (el) grid[7][i - 100] = { type: 'element', data: el };
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
          row.map((cell, colIndex) => (
            <TableGridCell
              key={`${rowIndex}-${colIndex}`}
              keyName={`${rowIndex}-${colIndex}`}
              cell={cell}
              onElementClick={onElementClick}
            />
          ))
        )}
      </div>
    </div>
  );
});

TableGrid.displayName = 'TableGrid';
export default TableGrid;

