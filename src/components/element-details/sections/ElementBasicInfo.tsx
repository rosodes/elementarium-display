
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';
import { getCategoryColor, getSeriesColor } from '../../../data/elementCategories';

interface ElementBasicInfoProps {
  element: Element;
}

const ElementBasicInfo: React.FC<ElementBasicInfoProps> = ({ element }) => {
  const { t } = useValidatedTranslation('ElementBasicInfo');
  const categoryColor = element.category 
    ? getCategoryColor(element.category) 
    : getSeriesColor(element.series);

  return (
    <div className="element-basic-info">
      <div className="element-basic-info__header">
        <div 
          className="element-basic-info__symbol"
          style={{ backgroundColor: categoryColor.bg, color: categoryColor.text }}
        >
          {element.symbol}
          <span className="element-basic-info__atomic">
            {element.atomic}
          </span>
        </div>
        
        <div className="element-basic-info__name-group">
          <h3 className="element-basic-info__name">
            {t(`ui.elements.${element.symbol.toLowerCase()}`, element.name)}
          </h3>
          <p className="element-basic-info__category">
            {t(`categories.${element.series.toLowerCase()}`, element.series)}
          </p>
        </div>
      </div>

      <div className="element-basic-info__properties">
        <div className="property-item">
          <span className="property-label">{t('details.atomicNumber', 'Atomic Number')}</span>
          <span className="property-value">{element.atomic}</span>
        </div>
        
        <div className="property-item">
          <span className="property-label">{t('details.atomicWeight', 'Atomic Weight')}</span>
          <span className="property-value">{element.weight}</span>
        </div>
        
        <div className="property-item">
          <span className="property-label">{t('details.group', 'Group')}</span>
          <span className="property-value">{element.group}</span>
        </div>
        
        <div className="property-item">
          <span className="property-label">{t('details.period', 'Period')}</span>
          <span className="property-value">{element.period}</span>
        </div>
        
        {element.block && (
          <div className="property-item">
            <span className="property-label">{t('details.block', 'Block')}</span>
            <span className="property-value">{element.block}-block</span>
          </div>
        )}
        
        {element.discover && (
          <div className="property-item">
            <span className="property-label">{t('details.yearDiscovered', 'Year Discovered')}</span>
            <span className="property-value">{element.discover}</span>
          </div>
        )}
      </div>

      {element.description && (
        <div className="element-basic-info__description">
          <h4>{t('details.description', 'Description')}</h4>
          <p>{element.description}</p>
        </div>
      )}
    </div>
  );
};

export default ElementBasicInfo;
