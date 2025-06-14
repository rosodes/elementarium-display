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
    const grid = Array(8)
      .fill(null)
      .map(() => Array(19).fill(null));
    // Верхняя строка — номера групп
    for (let i = 1; i <= 18; i++) {
      grid[0][i] = { type: "group", number: i };
    }
    // Первый столбец — номера периодов
    for (let i = 1; i <= 7; i++) {
      grid[i][0] = { type: "period", number: i };
    }

    // === Первая строка ===
    // H (1) и He (2)
    const h = findElement(1),
      he = findElement(2);
    if (h) grid[1][1] = { type: "element", data: h };
    if (he) grid[1][18] = { type: "element", data: he };

    // === Вторая строка ===
    if (findElement(3)) grid[2][1] = { type: "element", data: findElement(3)! }; // Li
    if (findElement(4)) grid[2][2] = { type: "element", data: findElement(4)! }; // Be
    for (let an = 5, col = 13; an <= 10; an++, col++) {
      const el = findElement(an);
      if (el && col <= 18) grid[2][col] = { type: "element", data: el };
    }

    // === Третья строка ===
    if (findElement(11)) grid[3][1] = { type: "element", data: findElement(11)! }; // Na
    if (findElement(12)) grid[3][2] = { type: "element", data: findElement(12)! }; // Mg
    for (let an = 13, col = 13; an <= 18; an++, col++) {
      const el = findElement(an);
      if (el && col <= 18) grid[3][col] = { type: "element", data: el };
    }

    // === Четвертая строка ===
    if (findElement(19)) grid[4][1] = { type: "element", data: findElement(19)! }; // K
    if (findElement(20)) grid[4][2] = { type: "element", data: findElement(20)! }; // Ca
    for (let an = 21, col = 3; an <= 30; an++, col++) {
      const el = findElement(an);
      if (el && col <= 12) grid[4][col] = { type: "element", data: el };
    }
    for (let an = 31, col = 13; an <= 36; an++, col++) {
      const el = findElement(an);
      if (el && col <= 18) grid[4][col] = { type: "element", data: el };
    }

    // === Пятая строка ===
    if (findElement(37)) grid[5][1] = { type: "element", data: findElement(37)! }; // Rb
    if (findElement(38)) grid[5][2] = { type: "element", data: findElement(38)! }; // Sr
    for (let an = 39, col = 3; an <= 48; an++, col++) {
      const el = findElement(an);
      if (el && col <= 12) grid[5][col] = { type: "element", data: el };
    }
    for (let an = 49, col = 13; an <= 54; an++, col++) {
      const el = findElement(an);
      if (el && col <= 18) grid[5][col] = { type: "element", data: el };
    }

    // === Шестая строка ===
    if (findElement(55)) grid[6][1] = { type: "element", data: findElement(55)! }; // Cs
    if (findElement(56)) grid[6][2] = { type: "element", data: findElement(56)! }; // Ba
    if (findElement(57)) grid[6][3] = { type: "element", data: findElement(57)! }; // La
    for (let an = 72, col = 4; an <= 80; an++, col++) {
      const el = findElement(an);
      if (el && col <= 12) grid[6][col] = { type: "element", data: el };
    }
    for (let an = 81, col = 13; an <= 86; an++, col++) {
      const el = findElement(an);
      if (el && col <= 18) grid[6][col] = { type: "element", data: el };
    }

    // === Седьмая строка (главное здесь) ===
    // Fr (87), Ra (88), Ac (89), Rf (104) — Cn (112)
    if (findElement(87)) grid[7][1] = { type: "element", data: findElement(87)! }; // Fr
    if (findElement(88)) grid[7][2] = { type: "element", data: findElement(88)! }; // Ra
    if (findElement(89)) grid[7][3] = { type: "element", data: findElement(89)! }; // Ac

    // 4-12 столбец — Rf(104)-Cn(112)
    for (let an = 104, col = 4; an <= 112; an++, col++) {
      const el = findElement(an);
      if (el && col <= 12) grid[7][col] = { type: "element", data: el };
    }
    // 13-16 столбец — Nh(113)-Lv(116)
    for (let an = 113, col = 13; an <= 116; an++, col++) {
      const el = findElement(an);
      if (el && col <= 16) grid[7][col] = { type: "element", data: el };
    }
    // --- ДОБАВЛЯЕМ ПРАВИЛЬНЫЕ ПОЗИЦИИ Ts (117) и Og (118) ---
    // Ts (117): группа 17 (столбец 17)
    const ts117 = findElement(117);
    if (ts117) grid[7][17] = { type: "element", data: ts117 };
    // Og (118): группа 18 (столбец 18)
    const og118 = findElement(118);
    if (og118) grid[7][18] = { type: "element", data: og118 };

    return grid;
  };

  const grid = createGrid();

  return (
    <div className="w-full">
      <div
        className="periodic-table grid gap-1"
        style={{
          gridTemplateColumns: "40px repeat(18, 76px)",
          gridTemplateRows: "35px repeat(7, 76px)",
          justifyContent: "center",
          margin: "0 auto",
          padding: "20px",
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

TableGrid.displayName = "TableGrid";
export default TableGrid;
