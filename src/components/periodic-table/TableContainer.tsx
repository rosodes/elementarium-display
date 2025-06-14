
import React, { memo } from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import TableGrid from './TableGrid';
import FBlockSection from './FBlockSection';
import '../../styles/periodicTable.css';

interface TableContainerProps {
  onElementClick: (element: ElementType) => void;
  selectedElement?: ElementType | null;
}

const TableContainer = memo(({ onElementClick }: TableContainerProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto overflow-x-auto">
      {/* Main periodic table grid */}
      <TableGrid onElementClick={onElementClick} />
      
      {/* F-block elements (lanthanides and actinides) */}
      <FBlockSection onElementClick={onElementClick} />
    </div>
  );
});

TableContainer.displayName = 'TableContainer';

export default TableContainer;
