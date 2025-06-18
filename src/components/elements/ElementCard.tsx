
import React from 'react';
import { Element } from '../../data/elementTypes';
import { getCategoryColor, getSeriesColor } from '../../data/elementCategories';
import { useValidatedTranslation } from '../../hooks/useValidatedTranslation';

interface ElementCardProps {
  element: Element;
  onClick: () => void;
  highlighted?: boolean;
  compact?: boolean;
  showDetails?: boolean;
}

const ElementCard: React.FC<ElementCardProps> = ({
  element,
  onClick,
  highlighted = true,
  compact = false,
  showDetails = false
}) => {
  const { t } = useValidatedTranslation('ElementCard');
  const categoryColor = element.category 
    ? getCategoryColor(element.category) 
    : getSeriesColor(element.series);
  
  return (
    <div
      className={`
        element-card cursor-pointer transition-all duration-200
        ${compact ? 'element-card--compact' : ''}
        ${highlighted ? 'element-card--highlighted' : 'element-card--dimmed'}
        ${element.radioactive ? 'element-card--radioactive' : ''}
        hover:scale-105 hover:shadow-lg
      `}
      style={{
        backgroundColor: categoryColor.bg,
        borderColor: categoryColor.border,
        color: categoryColor.text
      }}
      onClick={onClick}
      data-element={element.symbol}
      data-atomic={element.atomic}
    >
      <div className="element-card__header">
        <span className="element-card__atomic-number">
          {element.atomic}
        </span>
        {element.radioactive && (
          <span className="element-card__radioactive-indicator">
            ☢
          </span>
        )}
      </div>
      
      <div className="element-card__symbol">
        {element.symbol}
      </div>
      
      <div className="element-card__name">
        {t(`ui.elements.${element.symbol.toLowerCase()}`, element.name) || element.name}
      </div>
      
      {showDetails && (
        <div className="element-card__details">
          <div className="element-card__weight">
            {element.weight}
          </div>
          <div className="element-card__category">
            {t(`categories.${element.series.toLowerCase()}`, element.series)}
          </div>
        </div>
      )}
      
      {!compact && (
        <div className="element-card__properties">
          <div className="element-card__weight">
            {element.weight}
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(ElementCard);
