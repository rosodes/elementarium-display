
import { useState } from 'react';
import { Element as ElementType } from '../data/elementTypes';
import ElementDetails from './ElementDetails';
import Legend from './periodic-table/Legend';
import TableContainer from './periodic-table/TableContainer';
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
  
  return (
    <div 
      className="periodic-table-container w-full max-w-full overflow-auto py-4"
      role="region"
      aria-label={t.title}
    >
      <Legend />
      
      <TableContainer 
        onElementClick={handleElementClick} 
        selectedElement={selectedElement}
      />
      
      {selectedElement && (
        <ElementDetails element={selectedElement} onClose={closeDetails} />
      )}
    </div>
  );
};

export default PeriodicTable;
