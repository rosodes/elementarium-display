
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useTranslation } from '../../../hooks/useTranslation';

interface ElementPhysicalPropertiesProps {
  element: Element;
}

const ElementPhysicalProperties: React.FC<ElementPhysicalPropertiesProps> = ({ element }) => {
  const { t } = useTranslation();

  const formatTemperature = (temp: string | undefined) => {
    if (!temp) return 'N/A';
    return `${temp} K`;
  };

  const formatRadius = (radius: string | undefined) => {
    if (!radius) return 'N/A';
    return `${radius} pm`;
  };

  return (
    <div className="element-physical-properties">
      <h4 className="section-title">{t('details.properties', 'Properties')}</h4>
      
      <div className="properties-grid">
        {element.melt && (
          <div className="property-item">
            <span className="property-label">{t('details.meltingPoint', 'Melting Point')}</span>
            <span className="property-value">{formatTemperature(element.melt)}</span>
          </div>
        )}
        
        {element.boil && (
          <div className="property-item">
            <span className="property-label">{t('details.boilingPoint', 'Boiling Point')}</span>
            <span className="property-value">{formatTemperature(element.boil)}</span>
          </div>
        )}
        
        {element.density?.stp && (
          <div className="property-item">
            <span className="property-label">{t('details.density', 'Density')}</span>
            <span className="property-value">{element.density.stp} g/cm³</span>
          </div>
        )}
        
        {element.electroneg && (
          <div className="property-item">
            <span className="property-label">{t('details.electronegativity', 'Electronegativity')}</span>
            <span className="property-value">{element.electroneg}</span>
          </div>
        )}
        
        {element.radius.calculated && (
          <div className="property-item">
            <span className="property-label">{t('details.atomicRadius', 'Atomic Radius')}</span>
            <span className="property-value">{formatRadius(element.radius.calculated)}</span>
          </div>
        )}
        
        {element.radius.covalent && (
          <div className="property-item">
            <span className="property-label">Covalent Radius</span>
            <span className="property-value">{formatRadius(element.radius.covalent)}</span>
          </div>
        )}
        
        {element.conductivity?.thermal && (
          <div className="property-item">
            <span className="property-label">Thermal Conductivity</span>
            <span className="property-value">{element.conductivity.thermal} W/m·K</span>
          </div>
        )}
        
        {element.oxidation && (
          <div className="property-item">
            <span className="property-label">{t('details.oxidationStates', 'Oxidation States')}</span>
            <span className="property-value">{element.oxidation}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ElementPhysicalProperties;
