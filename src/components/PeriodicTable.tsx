import React, { useState } from 'react';
import { Element } from '../data/elementTypes';
import { elements } from '../data/elements';
import CleanPeriodicTable from './periodic-table/CleanPeriodicTable';
import ElementDetailsModal from './element-details/ElementDetailsModal';

interface PeriodicTableProps {
  searchQuery?: string;
  onElementClick?: (element: Element) => void;
}

const PeriodicTable: React.FC<PeriodicTableProps> = ({ 
  searchQuery = '', 
  onElementClick 
}) => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  const handleElementClick = (element: Element) => {
    if (onElementClick) {
      onElementClick(element);
    } else {
      setSelectedElement(element);
    }
  };

  const handleCloseModal = () => {
    setSelectedElement(null);
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (!selectedElement) return;
    
    const currentIndex = elements.findIndex(el => el?.atomic === selectedElement.atomic);
    if (currentIndex === -1) return;
    
    let nextIndex: number;
    if (direction === 'next') {
      nextIndex = currentIndex + 1;
      if (nextIndex >= elements.length) nextIndex = 0;
    } else {
      nextIndex = currentIndex - 1;
      if (nextIndex < 0) nextIndex = elements.length - 1;
    }
    
    const nextElement = elements[nextIndex];
    if (nextElement) {
      setSelectedElement(nextElement);
    }
  };

  return (
    <>
      {/* Чистая таблица Менделеева на белом фоне */}
      <div style={{ backgroundColor: 'white', padding: '20px 0' }}>
        <CleanPeriodicTable
          onElementClick={handleElementClick}
          selectedElement={selectedElement}
          searchQuery={searchQuery}
        />
      </div>

      {/* Модальное окно с деталями элемента */}
      {selectedElement && !onElementClick && (
        <ElementDetailsModal
          element={selectedElement}
          isOpen={!!selectedElement}
          onClose={handleCloseModal}
          onNavigate={handleNavigate}
        />
      )}
    </>
  );
};

export default PeriodicTable;
