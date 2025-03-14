
import React from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import GroupNumbers from './GroupNumbers';
import {
  renderPeriod1,
  renderPeriod2,
  renderPeriod3,
  renderPeriod4,
  renderPeriod5,
  renderPeriod6,
  renderPeriod7,
  renderLanthanides,
  renderActinides
} from './tableHelpers';

interface TableContainerProps {
  onElementClick: (element: ElementType) => void;
  selectedElement: ElementType | null;
}

const TableContainer = ({ onElementClick, selectedElement }: TableContainerProps) => {
  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && selectedElement) {
      // This will be handled by parent
    }
  };

  return (
    <div 
      className="periodic-table-container"
      role="region"
      aria-label="Periodic Table of Elements"
    >
      <div 
        className="periodic-table"
        role="grid"
        onKeyDown={handleKeyDown}
      >
        <GroupNumbers />
        {renderPeriod1(onElementClick)}
        {renderPeriod2(onElementClick)}
        {renderPeriod3(onElementClick)}
        {renderPeriod4(onElementClick)}
        {renderPeriod5(onElementClick)}
        {renderPeriod6(onElementClick)}
        {renderPeriod7(onElementClick)}
        
        <div className="my-4" aria-hidden="true"></div>
        
        <div className="ml-20">
          {renderLanthanides(onElementClick)}
          {renderActinides(onElementClick)}
        </div>
      </div>
    </div>
  );
};

export default TableContainer;
