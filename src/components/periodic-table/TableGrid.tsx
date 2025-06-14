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
    // 8 строк (0: группы, 1-7: периоды), 19 колонок (0: периоды, 1-18: группы)
    const grid = Array(8).fill(null).map(() => Array(19).fill(null));
    // Верхняя строка — номера групп
    for (let i = 1; i <= 18; i++) {
      grid[0][i] = { type: 'group', number: i };
    }
    // Первый столбец — номера периодов
    for (let i = 1; i <= 7; i++) {
      grid[i][0] = { type: 'period', number: i };
    }

    // === Первая строка ===
    // H (1) и He (2)
    const h = findElement(1), he = findElement(2);
    if (h) grid[1][1] = { type: 'element', data: h };
    if (he) grid[1][18] = { type: 'element', data: he };

    // === Вторая строка ===
    // Li (3), Be (4), ... B (5) ... Ne (10)
    if (findElement(3)) grid[2][1] = { type: 'element', data: findElement(3)! }; // Li
    if (findElement(4)) grid[2][2] = { type: 'element', data: findElement(4)! }; // Be
    for (let an = 5, col = 13; an <= 10; an++, col++) {
      const el = findElement(an);
      if (el && col <= 18)
        grid[2][col] = { type: 'element', data: el };
    }

    // === Третья строка ===
    // Na (11), Mg (12), дальше Al...Ar в 13-18 группах
    if (findElement(11)) grid[3][1] = { type: 'element', data: findElement(11)! }; // Na
    if (findElement(12)) grid[3][2] = { type: 'element', data: findElement(12)! }; // Mg
    for (let an = 13, col = 13; an <= 18; an++, col++) {
      const el = findElement(an);
      if (el && col <= 18)
        grid[3][col] = { type: 'element', data: el };
    }

    // === Четвертая строка ===
    // K (19), Ca (20), Sc-Zn (21-30: 3-12 группа), Ga...Kr (31-36: 13-18 группа)
    if (findElement(19)) grid[4][1] = { type: 'element', data: findElement(19)! }; // K
    if (findElement(20)) grid[4][2] = { type: 'element', data: findElement(20)! }; // Ca
    for (let an = 21, col = 3; an <= 30; an++, col++) {
      const el = findElement(an);
      if (el && col <= 12)
        grid[4][col] = { type: 'element', data: el };
    }
    for (let an = 31, col = 13; an <= 36; an++, col++) {
      const el = findElement(an);
      if (el && col <= 18)
        grid[4][col] = { type: 'element', data: el };
    }

    // === Пятая строка ===
    // Rb (37), Sr (38), Y-Cd (39-48), In-Xe (49-54)
    if (findElement(37)) grid[5][1] = { type: 'element', data: findElement(37)! }; // Rb
    if (findElement(38)) grid[5][2] = { type: 'element', data: findElement(38)! }; // Sr
    for (let an = 39, col = 3; an <= 48; an++, col++) {
      const el = findElement(an);
      if (el && col <= 12)
        grid[5][col] = { type: 'element', data: el };
    }
    for (let an = 49, col = 13; an <= 54; an++, col++) {
      const el = findElement(an);
      if (el && col <= 18)
        grid[5][col] = { type: 'element', data: el };
    }

    // === Шестая строка === — корректировка по вашей схеме
    // Cs (55), Ba (56), La (57, обязательно! дальше разрыв), Hf (72)-Hg (80), Tl(81)-Rn(86)
    if (findElement(55)) grid[6][1] = { type: 'element', data: findElement(55)! }; // Cs
    if (findElement(56)) grid[6][2] = { type: 'element', data: findElement(56)! }; // Ba
    if (findElement(57)) grid[6][3] = { type: 'element', data: findElement(57)! }; // La (Лантан)
    // 4-12 столбец — Hf(72)-Hg(80)
    for (let an = 72, col = 4; an <= 80; an++, col++) {
      const el = findElement(an);
      if (el && col <= 12)
        grid[6][col] = { type: 'element', data: el };
    }
    // 13-18 столбец — Tl(81)-Rn(86)
    for (let an = 81, col = 13; an <= 86; an++, col++) {
      const el = findElement(an);
      if (el && col <= 18)
        grid[6][col] = { type: 'element', data: el };
    }

    // === Седьмая строка === — также корректировка
    // Fr (87), Ra (88), Ac (89, обязательно! дальше разрыв), Rf(104)-Cn(112), Nh(113)-Og(118)
    if (findElement(87)) grid[7][1] = { type: 'element', data: findElement(87)! }; // Fr
    if (findElement(88)) grid[7][2] = { type: 'element', data: findElement(88)! }; // Ra
    if (findElement(89)) grid[7][3] = { type: 'element', data: findElement(89)! }; // Ac (Актиний)
    // 4-12 столбец — Rf(104) - Cn(112)
    for (let an = 104, col = 4; an <= 112; an++, col++) {
      const el = findElement(an);
      if (el && col <= 12)
        grid[7][col] = { type: 'element', data: el };
    }
    // 13-18 столбец — Nh(113) - Og(118)
    for (let an = 113, col = 13; an <= 118; an++, col++) {
      const el = findElement(an);
      if (el && col <= 18)
        grid[7][col] = { type: 'element', data: el };
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
