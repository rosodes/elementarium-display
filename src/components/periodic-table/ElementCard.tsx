
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
  
  // Check if element is radioactive
  const isRadioactive = (): boolean => {
    const radioactiveElements = new Set([
      43, 61, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 
      101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118
    ]);
    return radioactiveElements.has(Number(element.atomic));
  };
  
  return (
    <div
      className={`element-card relative overflow-hidden cursor-pointer transition-all duration-300 ease-out
                 hover:scale-105 hover:shadow-lg hover:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500
                 border-2 border-white/30 dark:border-white/20 rounded-xl bg-white dark:bg-gray-800
                 ${className}`}
      style={{ backgroundColor: categoryColor }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Element ${element.name} (${element.symbol}), atomic number ${element.atomic}, atomic weight ${element.weight}`}
    >
      {/* Atomic number */}
      <div className="element-atomic absolute top-1.5 left-1.5 text-xs font-bold opacity-85">
        {element.atomic}
      </div>
      
      {/* Oxidation state (if available) */}
      {element.oxidation && (
        <div className="absolute top-1.5 right-1.5 text-xs font-semibold opacity-75">
          {element.oxidation.split(',')[0]?.replace('c', '') || ''}
        </div>
      )}
      
      {/* Element symbol and name - centered */}
      <div className="flex flex-col items-center justify-center h-full pt-2 pb-2">
        <div className="element-symbol text-xl font-bold mb-0.5 leading-none">
          {element.symbol}
        </div>
        
        <div className="element-name text-xs font-medium px-1 leading-tight text-center max-w-full">
          {element.name}
        </div>
      </div>
      
      {/* Atomic weight and radioactive indicator */}
      <div className="absolute bottom-1.5 left-1.5 right-1.5 flex justify-between items-end">
        <div className="element-mass text-xs opacity-75 font-medium">
          {parseFloat(element.weight).toFixed(1)}
        </div>
        
        {isRadioactive() && (
          <div 
            className="radioactive-indicator w-2 h-2 rounded-full bg-red-500 shadow-sm" 
            title="Radioactive element"
            aria-label="Radioactive element"
          />
        )}
      </div>
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/5 pointer-events-none rounded-xl" />
      
      {/* Hidden detailed information for screen readers */}
      <span className="sr-only">
        Element {element.name}, symbol {element.symbol}, atomic number {element.atomic}, 
        atomic weight {element.weight}, series {element.series}.
        {element.discover ? ` Discovered: ${element.discover}.` : ''} 
        {element.electronstring ? ` Electron configuration: ${element.electronstring}.` : ''}
        {isRadioactive() ? ' This is a radioactive element.' : ''}
      </span>
    </div>
  );
};

export default ElementCard;
