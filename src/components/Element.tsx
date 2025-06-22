import React, { memo } from 'react';
import { Element as ElementType } from '../data/elementTypes';
import { getCategoryColor } from '../data/elementCategories';
import { useValidatedTranslation } from '../hooks/useValidatedTranslation';

interface ElementProps {
  element: ElementType;
  onClick: () => void;
  isSelected?: boolean;
  isHighlighted?: boolean;
  tabIndex?: number;
}

const Element = memo(({ 
  element, 
  onClick, 
  isSelected = false, 
  isHighlighted = true,
  tabIndex = 0 
}: ElementProps) => {
  const { t } = useValidatedTranslation('Element');

  // Определение цвета категории
  let categoryColor;
  if (element.category) {
    categoryColor = getCategoryColor(element.category);
  } else {
    // Fallback на unknown если нет category
    categoryColor = getCategoryColor('unknown');
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  const getElementClasses = () => {
    const baseClasses = "element-card w-full h-full border-2 rounded-lg p-2 cursor-pointer transition-all duration-300 focus:ring-4 focus:ring-blue-500 focus:outline-none";
    
    if (isSelected) {
      return `${baseClasses} ring-4 ring-blue-500 scale-110 shadow-xl`;
    }
    
    if (!isHighlighted) {
      return `${baseClasses} opacity-30 grayscale`;
    }
    
    return `${baseClasses} hover:scale-105 hover:shadow-lg`;
  };

  return (
    <div
      className={getElementClasses()}
      style={{
        backgroundColor: categoryColor.bg,
        borderColor: categoryColor.border || categoryColor.bg,
        color: categoryColor.text
      }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={isHighlighted ? tabIndex : -1}
      role="button"
      aria-label={`${element.name}, ${t('atomicNumber')} ${element.atomic}, ${t('symbol')} ${element.symbol}`}
      aria-pressed={isSelected}
    >
      <div className="flex flex-col h-full justify-between text-center">
        {/* Атомный номер */}
        <div className="text-xs font-bold self-start">
          {element.atomic}
        </div>
        
        {/* Символ элемента */}
        <div className="text-2xl font-black flex-1 flex items-center justify-center">
          {element.symbol}
        </div>
        
        {/* Название элемента */}
        <div className="text-xs font-semibold truncate" title={element.name}>
          {element.name}
        </div>
        
        {/* Атомная масса */}
        <div className="text-xs font-medium">
          {parseFloat(element.weight).toFixed(1)}
        </div>
        
        {/* Индикатор радиоактивности */}
        {element.radioactive && (
          <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        )}
      </div>
    </div>
  );
});

Element.displayName = 'Element';

export default Element;
