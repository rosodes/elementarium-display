
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

  // Group numbers for the header
  const renderGroupNumbers = () => {
    return (
      <div className="flex flex-row flex-nowrap items-center gap-1 mb-1" role="row" aria-label="Group numbers">
        <div className="w-6 mr-1" aria-hidden="true"></div>
        {Array.from({ length: 18 }, (_, i) => i + 1).map(num => (
          <div 
            key={`group-${num}`}
            className="w-[70px] text-center text-xs font-semibold opacity-60 flex-shrink-0"
            aria-hidden="true"
          >
            {num}
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <div 
      className="periodic-table-container py-4 px-2"
      onKeyDown={handleKeyDown}
      role="region"
      aria-label={t.title}
    >
      <Legend />
      
      <div 
        className="periodic-table flex flex-col gap-1 w-full max-w-[1400px] mx-auto overflow-x-auto"
        role="grid"
      >
        {renderGroupNumbers()}
        {renderPeriod1(handleElementClick)}
        {renderPeriod2(handleElementClick)}
        {renderPeriod3(handleElementClick)}
        {renderPeriod4(handleElementClick)}
        {renderPeriod5(handleElementClick)}
        {renderPeriod6(handleElementClick)}
        {renderPeriod7(handleElementClick)}
        
        <div className="my-4" aria-hidden="true"></div>
        
        <div className="ml-20">
          {renderLanthanides(handleElementClick)}
          {renderActinides(handleElementClick)}
        </div>
      </div>
      
      {selectedElement && (
        <ElementDetails element={selectedElement} onClose={closeDetails} />
      )}
    </div>
  );
};

export default PeriodicTable;
