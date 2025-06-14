
import React from 'react';
import TableGridCell from './TableGridCell';
import { elements } from '../../data/elements';
import { Element as ElementType } from '../../data/elementTypes';

interface TableAutoGridProps {
  onElementClick: (element: ElementType) => void;
}

/**
 * Автоматически строим сетку периодов и групп:
 * - 7 периодов (строки) и 18 групп (столбцы)
 * - заголовки групп и периоды рендерим в отдельной первой строке/первом столбце
 * - элементы определяем исходя из element.period и element.group
 */
const TableAutoGrid: React.FC<TableAutoGridProps> = ({ onElementClick }) => {
  // Сконструируем пустую сетку 8x19 (7 period + header, 18 group + header)
  // grid[row][col], где 0-я строка — группы, 0-й столбец — периоды

  type GridCell =
    | { type: 'empty' }
    | { type: 'period', number: number }
    | { type: 'group', number: number }
    | { type: 'element', data: ElementType };

  const ROWS = 8; // 0 — группы, 1–7 — периоды
  const COLS = 19; // 0 — периоды, 1–18 — группы

  // Собираем сетку
  const grid: GridCell[][] = Array.from({ length: ROWS }, (_, rowIdx) =>
    Array.from({ length: COLS }, (_, colIdx) => ({ type: 'empty' } as GridCell))
  );

  // 1. Заголовки колонок (группы)
  for (let group = 1; group <= 18; group++) {
    grid[0][group] = { type: 'group', number: group };
  }
  // 2. Первый столбец — номера периодов
  for (let period = 1; period <= 7; period++) {
    grid[period][0] = { type: 'period', number: period };
  }

  // 3. Расставляем элементы по данным
  elements.forEach((el) => {
    if (!el || typeof el !== 'object' || !('period' in el) || !('group' in el)) return;
    const { period, group } = el;
    if (
      typeof period === 'number' &&
      typeof group === 'number' &&
      period >= 1 && period <= 7 && group >= 1 && group <= 18
    ) {
      // Элементы идут с первой строки после заголовка (т.е. row=period, col=group)
      grid[period][group] = { type: 'element', data: el };
    }
  });

  // 4. Рендерим сетку: всего 8x19 ячеек
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
              cell={cell.type === 'empty' ? null : cell}
              onElementClick={onElementClick}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TableAutoGrid;

