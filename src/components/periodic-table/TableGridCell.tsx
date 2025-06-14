
import React from 'react';
import Element from '../Element';
import { Element as ElementType } from '../../data/elementTypes';

interface TableGridCellProps {
  cell: any;
  onElementClick: (element: ElementType) => void;
  keyName: string;
}

const TableGridCell = ({ cell, onElementClick, keyName }: TableGridCellProps) => {
  if (!cell) {
    // Empty cell
    return <div key={keyName} />;
  }

  if (cell.type === 'group') {
    // Group number in column header
    return (
      <div
        key={keyName}
        className="flex items-center justify-center text-xs font-semibold text-gray-600 dark:text-gray-400"
      >
        {cell.number}
      </div>
    );
  }

  if (cell.type === 'period') {
    // Period number on row label
    return (
      <div
        key={keyName}
        className="flex items-center justify-center text-sm font-semibold text-gray-600 dark:text-gray-400"
      >
        {cell.number}
      </div>
    );
  }

  if (cell.type === 'element') {
    return (
      <Element
        key={keyName}
        element={cell.data}
        onClick={() => onElementClick(cell.data)}
        data-atomic={cell.data.atomic}
        className="element-card w-[76px] h-[76px]"
      />
    );
  }

  // default/fallback
  return <div key={keyName} />;
};

export default React.memo(TableGridCell);
