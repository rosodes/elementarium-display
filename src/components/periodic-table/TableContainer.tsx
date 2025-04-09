
import React, { useEffect, useRef } from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import GroupNumbers from './GroupNumbers';
import { useLanguage } from '../../context/LanguageContext';
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
  const tableRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  
  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && selectedElement) {
      // This will be handled by parent
    }
  };

  // Add smooth animation when table is first rendered
  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.classList.add('fade-in-animation');
    }
  }, []);

  return (
    <div 
      className="periodic-table-wrapper relative overflow-hidden w-full pl-2"
      role="grid"
      onKeyDown={handleKeyDown}
      ref={tableRef}
      aria-label={t.elementDetails.elementTable}
    >
      <div className="periodic-table mx-auto">
        <GroupNumbers />
        {renderPeriod1(onElementClick)}
        {renderPeriod2(onElementClick)}
        {renderPeriod3(onElementClick)}
        {renderPeriod4(onElementClick)}
        {renderPeriod5(onElementClick)}
        {renderPeriod6(onElementClick)}
        {renderPeriod7(onElementClick)}
      </div>
      
      <div className="lanthanide-actinide-section mt-6 ml-2">
        <div className="f-block-container flex flex-col gap-0">
          {/* Removed elements 57 and 89 from the lanthanides and actinides rows */}
          {renderLanthanides(onElementClick, true)} {/* Pass true to skip element 57 */}
          {renderActinides(onElementClick, true)} {/* Pass true to skip element 89 */}
        </div>
      </div>
    </div>
  );
};

export default TableContainer;
