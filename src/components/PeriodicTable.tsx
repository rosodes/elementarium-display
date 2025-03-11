
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

const PeriodicTable = () => {
  const [selectedElement, setSelectedElement] = useState<ElementType | null>(null);
  
  const handleElementClick = (element: ElementType) => {
    setSelectedElement(element);
  };
  
  const closeDetails = () => {
    setSelectedElement(null);
  };
  
  // Render the complete periodic table
  const renderPeriodicTable = () => {
    return [
      renderPeriod1(handleElementClick),
      renderPeriod2(handleElementClick),
      renderPeriod3(handleElementClick),
      renderPeriod4(handleElementClick),
      renderPeriod5(handleElementClick),
      renderPeriod6(handleElementClick),
      renderPeriod7(handleElementClick),
      renderLanthanides(handleElementClick),
      renderActinides(handleElementClick)
    ];
  };
  
  return (
    <div className="periodic-table-container">
      <Legend />
      
      <div className="periodic-table">
        {renderPeriodicTable()}
      </div>
      
      {selectedElement && (
        <ElementDetails element={selectedElement} onClose={closeDetails} />
      )}
    </div>
  );
};

export default PeriodicTable;
