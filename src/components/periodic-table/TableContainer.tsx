
import React, { useEffect, useRef, memo } from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import { useLanguage } from '../../context/LanguageContext';
import TableGrid from './TableGrid';
import FBlockSection from './FBlockSection';

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

  return (
    <div 
      className="periodic-table-wrapper relative overflow-hidden w-full pl-2"
      role="grid"
      onKeyDown={handleKeyDown}
      ref={tableRef}
      aria-label={t.elementDetails.elementTable}
    >
      <TableGrid onElementClick={onElementClick} />
      <FBlockSection onElementClick={onElementClick} />
    </div>
  );
});

TableContainer.displayName = 'TableContainer';

export default TableContainer;
