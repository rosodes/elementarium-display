
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useTranslation } from '../../../hooks/useTranslation';

interface ElementElectronicStructureProps {
  element: Element;
}

const ElementElectronicStructure: React.FC<ElementElectronicStructureProps> = ({ element }) => {
  const { t } = useTranslation();

  const formatElectronConfiguration = (config: string) => {
    return config.replace(/(\d+)/g, '<sup>$1</sup>');
  };

  return (
    <div className="element-electronic-structure">
      <h4 className="section-title">Electronic Structure</h4>
      
      <div className="electronic-properties">
        <div className="property-item property-item--full">
          <span className="property-label">{t('details.electronConfiguration')}</span>
          <span 
            className="property-value electron-config"
            dangerouslySetInnerHTML={{ 
              __html: formatElectronConfiguration(element.electronstring) 
            }} 
          />
        </div>
        
        <div className="property-item property-item--full">
          <span className="property-label">Expanded Configuration</span>
          <span 
            className="property-value electron-config"
            dangerouslySetInnerHTML={{ 
              __html: formatElectronConfiguration(element.expandedconfig) 
            }} 
          />
        </div>
        
        <div className="property-item">
          <span className="property-label">Electrons per Shell</span>
          <span className="property-value">{element.electrons.join(', ')}</span>
        </div>
        
        <div className="property-item">
          <span className="property-label">Valence</span>
          <span className="property-value">{element.valence}</span>
        </div>
        
        {element.quantum && (
          <>
            <div className="property-item">
              <span className="property-label">Quantum Numbers</span>
              <span className="property-value">
                n={element.quantum.n}, l={element.quantum.l}, m={element.quantum.m}
              </span>
            </div>
          </>
        )}
        
        {element.ionize && Object.keys(element.ionize).length > 0 && (
          <div className="ionization-energies">
            <h5>Ionization Energies (eV)</h5>
            <div className="ionization-grid">
              {Object.entries(element.ionize).slice(0, 6).map(([level, energy]) => (
                <div key={level} className="ionization-item">
                  <span>{level}st:</span>
                  <span>{energy}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ElementElectronicStructure;
