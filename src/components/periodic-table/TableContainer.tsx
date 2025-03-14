
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
      className="periodic-table flex flex-col gap-1 mx-auto"
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
      
      <div className="lanthanide-actinide-container ml-[45px]">
        {renderLanthanides(onElementClick)}
        {renderActinides(onElementClick)}
      </div>
    </div>
  );
};

export default TableContainer;
