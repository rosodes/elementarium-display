
import React from 'react';
import { Element } from '../../data/elementTypes';
import ElementBasicInfo from './sections/ElementBasicInfo';
import ElementPhysicalProperties from './sections/ElementPhysicalProperties';
import ElementElectronicStructure from './sections/ElementElectronicStructure';
import ElementIsotopes from './sections/ElementIsotopes';
import ElementSectionFactory from './sections/ElementSectionFactory';

interface ElementDetailsContentProps {
  element: Element;
}

const ElementDetailsContent: React.FC<ElementDetailsContentProps> = ({ element }) => {
  return (
    <div className="element-details-content">
      <div className="element-details-grid">
        <div className="element-details__main">
          <ElementBasicInfo element={element} />
          <ElementPhysicalProperties element={element} />
          <ElementElectronicStructure element={element} />
        </div>
        
        <div className="element-details__sidebar">
          <ElementIsotopes element={element} />
          <ElementSectionFactory element={element} />
        </div>
      </div>
    </div>
  );
};

export default ElementDetailsContent;
