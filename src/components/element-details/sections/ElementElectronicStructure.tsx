
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';

interface ElementElectronicStructureProps {
  element: Element;
}

const ElementElectronicStructure: React.FC<ElementElectronicStructureProps> = ({ element }) => {
  const { t } = useValidatedTranslation('ElementElectronicStructure');

  return (
    <div className="element-electronic-structure">
      <h4 className="section-title">{t('details.electronicStructure', 'Electronic Structure')}</h4>
      
      <div className="properties-grid">
        {element.electronstring && (
          <div className="property-item">
            <span className="property-label">{t('details.electronConfiguration', 'Electron Configuration')}</span>
            <span className="property-value">{element.electronstring}</span>
          </div>
        )}
        
        {element.expandedconfig && (
          <div className="property-item">
            <span className="property-label">Expanded Configuration</span>
            <span className="property-value">{element.expandedconfig}</span>
          </div>
        )}
        
        {element.electrons && element.electrons.length > 0 && (
          <div className="property-item">
            <span className="property-label">Electrons per Shell</span>
            <span className="property-value">[{element.electrons.join(', ')}]</span>
          </div>
        )}
        
        {element.quantum && (
          <div className="property-item">
            <span className="property-label">Quantum Numbers</span>
            <span className="property-value">
              n={element.quantum.n}, l={element.quantum.l}, m={element.quantum.m}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ElementElectronicStructure;
