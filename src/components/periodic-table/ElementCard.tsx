
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
      className={`element-card ${className}`}
      style={{ backgroundColor: categoryColor }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Element ${element.name} (${element.symbol}), atomic number ${element.atomic}`}
    >
      <div className="element-atomic">{element.atomic}</div>
      <div className="element-symbol">{element.symbol}</div>
      <div className="element-name">{element.name}</div>
      <div className="element-mass">{element.atomic_mass}</div>
    </div>
  );
};

export default ElementCard;
