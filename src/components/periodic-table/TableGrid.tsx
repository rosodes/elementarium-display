
import React, { memo } from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import GroupNumbers from './GroupNumbers';
import TablePeriods from './TablePeriods';

interface TableGridProps {
  onElementClick: (element: ElementType) => void;
}

const TableGrid = memo(({ onElementClick }: TableGridProps) => {
  return (
    <div className="periodic-table">
      <GroupNumbers />
      <TablePeriods onElementClick={onElementClick} />
    </div>
  );
});

TableGrid.displayName = 'TableGrid';

export default TableGrid;
