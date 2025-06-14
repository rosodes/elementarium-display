
import React from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import { getCategoryColor } from '../../data/elementCategories';

interface ElementCardProps {
  element: ElementType;
  onClick: (element: ElementType) => void;
  className?: string;
}

const ElementCard = ({ element, onClick, className = '' }: ElementCardProps) => {
  const categoryColor = getCategoryColor(element.category);
  
  const handleClick = () => {
    onClick(element);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(element);
    }
  };
  
  return (
    <div
      className={`element-card relative overflow-hidden cursor-pointer transition-all duration-200 ease-in-out
                 hover:scale-105 hover:shadow-lg hover:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500
                 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800
                 ${className}`}
      style={{ backgroundColor: categoryColor }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Element ${element.name} (${element.symbol}), atomic number ${element.atomic}`}
    >
      <div className="element-atomic absolute top-1 left-1 text-xs font-semibold opacity-80">
        {element.atomic}
      </div>
      
      <div className="element-symbol text-center text-lg font-bold mt-3 mb-1">
        {element.symbol}
      </div>
      
      <div className="element-name text-center text-xs font-medium px-1 leading-tight truncate">
        {element.name}
      </div>
      
      <div className="element-mass absolute bottom-1 right-1 text-xs opacity-70">
        {parseFloat(element.weight).toFixed(1)}
      </div>
    </div>
  );
};

export default ElementCard;
