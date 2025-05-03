
import React, { useEffect, useRef, memo } from 'react';
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
} from './tableHelpers';
import { renderLanthanides, renderActinides } from './fBlockRows';

interface TableContainerProps {
  onElementClick: (element: ElementType) => void;
  selectedElement: ElementType | null;
}

const TableContainer = memo(({ onElementClick, selectedElement }: TableContainerProps) => {
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
    
    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe elements that should be lazy-loaded
    const elements = tableRef.current?.querySelectorAll('.element-card') || [];
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  // Memoize rendering functions for better performance
  const memoizedPeriod1 = React.useMemo(() => renderPeriod1(onElementClick), [onElementClick]);
  const memoizedPeriod2 = React.useMemo(() => renderPeriod2(onElementClick), [onElementClick]);
  const memoizedPeriod3 = React.useMemo(() => renderPeriod3(onElementClick), [onElementClick]);
  const memoizedPeriod4 = React.useMemo(() => renderPeriod4(onElementClick), [onElementClick]);
  const memoizedPeriod5 = React.useMemo(() => renderPeriod5(onElementClick), [onElementClick]);
  const memoizedPeriod6 = React.useMemo(() => renderPeriod6(onElementClick), [onElementClick]);
  const memoizedPeriod7 = React.useMemo(() => renderPeriod7(onElementClick), [onElementClick]);
  const memoizedLanthanides = React.useMemo(() => renderLanthanides(onElementClick, true), [onElementClick]);
  const memoizedActinides = React.useMemo(() => renderActinides(onElementClick, true), [onElementClick]);

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
        {memoizedPeriod1}
        {memoizedPeriod2}
        {memoizedPeriod3}
        {memoizedPeriod4}
        {memoizedPeriod5}
        {memoizedPeriod6}
        {memoizedPeriod7}
      </div>
      
      <div className="lanthanide-actinide-section mt-6">
        <div className="f-block-container flex flex-col gap-0">
          {memoizedLanthanides}
          {memoizedActinides}
        </div>
      </div>
    </div>
  );
});

// Add display name for better debugging
TableContainer.displayName = 'TableContainer';

export default TableContainer;
