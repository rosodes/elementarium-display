
import React, { memo } from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import TableAutoGrid from './TableAutoGrid';

// Старый TableGrid теперь просто делегирует отображение автоматической сетке
interface TableGridProps {
  onElementClick: (element: ElementType) => void;
}

const TableGrid = memo(({ onElementClick }: TableGridProps) => {
  // Теперь рендерим через автоматическую сетку
  return <TableAutoGrid onElementClick={onElementClick} />;
});

TableGrid.displayName = "TableGrid";
export default TableGrid;
