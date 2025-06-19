
import React, { memo } from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import PeriodicTableGrid from './PeriodicTableGrid';

interface TableContainerProps {
  onElementClick: (element: ElementType) => void;
  selectedElement?: ElementType | null;
  searchQuery?: string;
}

const TableContainer = memo(({ onElementClick, selectedElement, searchQuery }: TableContainerProps) => {
  return (
    <div className="table-container">
      <div className="table-wrapper">
        <PeriodicTableGrid 
          onElementClick={onElementClick}
          selectedElement={selectedElement}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
});

TableContainer.displayName = 'TableContainer';

export default TableContainer;
