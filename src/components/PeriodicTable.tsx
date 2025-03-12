
import { useState } from 'react';
import { Element as ElementType } from '../data/elementTypes';
import ElementDetails from './ElementDetails';
import Legend from './periodic-table/Legend';
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
} from './periodic-table/tableHelpers';
import { useLanguage } from '../context/LanguageContext';

const PeriodicTable = () => {
  const [selectedElement, setSelectedElement] = useState<ElementType | null>(null);
  const { t } = useLanguage();
  
  const handleElementClick = (element: ElementType) => {
    setSelectedElement(element);
  };
  
  const closeDetails = () => {
    setSelectedElement(null);
  };
  
  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && selectedElement) {
      closeDetails();
    }
  };
  
  return (
    <div 
      className="periodic-table-container py-4"
      onKeyDown={handleKeyDown}
      role="region"
      aria-label={t.title}
    >
      <Legend />
      
      <div 
        className="periodic-table flex flex-col gap-1 w-full max-w-[1400px] mx-auto"
        role="grid"
      >
        {renderPeriod1(handleElementClick)}
        {renderPeriod2(handleElementClick)}
        {renderPeriod3(handleElementClick)}
        {renderPeriod4(handleElementClick)}
        {renderPeriod5(handleElementClick)}
        {renderPeriod6(handleElementClick)}
        {renderPeriod7(handleElementClick)}
        
        <div className="my-4" aria-hidden="true"></div>
        
        {renderLanthanides(handleElementClick)}
        {renderActinides(handleElementClick)}
      </div>
      
      {selectedElement && (
        <ElementDetails element={selectedElement} onClose={closeDetails} />
      )}
    </div>
  );
};

export default PeriodicTable;
