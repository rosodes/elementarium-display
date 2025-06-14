
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
      className={`element-card group relative overflow-hidden cursor-pointer transition-all duration-500 ease-out
                 hover:scale-105 hover:shadow-2xl hover:z-20 focus:outline-none focus:ring-3 focus:ring-blue-400/60
                 border border-white/40 dark:border-white/20 rounded-2xl backdrop-blur-sm
                 transform-gpu will-change-transform
                 ${className}`}
      style={{ backgroundColor: categoryColor }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Element ${element.name} (${element.symbol}), atomic number ${element.atomic}, atomic weight ${element.weight}`}
    >
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/10 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      {/* Subtle shimmer effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                      -translate-x-full group-hover:translate-x-full transition-transform duration-700 
                      ease-in-out rounded-2xl" />
      
      {/* Atomic number */}
      <div className="element-atomic absolute top-2 left-2 text-xs font-bold opacity-85 
                      transition-all duration-300 group-hover:scale-105 group-hover:opacity-100">
        {element.atomic}
      </div>
      
      {/* Oxidation state */}
      {element.oxidation && (
        <div className="absolute top-2 right-2 text-xs font-semibold opacity-75
                        transition-all duration-300 group-hover:opacity-100">
          {element.oxidation.split(',')[0]?.replace('c', '') || ''}
        </div>
      )}
      
      {/* Element symbol and name - centered with enhanced typography */}
      <div className="flex flex-col items-center justify-center h-full pt-2 pb-2 z-10 relative">
        <div className="element-symbol text-2xl font-extrabold mb-1 leading-none 
                        transition-all duration-300 group-hover:scale-105 group-hover:text-shadow-lg
                        tracking-tighter">
          {element.symbol}
        </div>
        
        <div className="element-name text-xs font-semibold px-1 leading-tight text-center max-w-full
                        transition-all duration-300 group-hover:scale-105 opacity-90 group-hover:opacity-100">
          {element.name}
        </div>
      </div>
      
      {/* Atomic weight and radioactive indicator */}
      <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end z-10">
        <div className="element-mass text-xs opacity-75 font-medium
                        transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
          {parseFloat(element.weight).toFixed(1)}
        </div>
        
        {isRadioactive() && (
          <div 
            className="radioactive-indicator w-2.5 h-2.5 rounded-full bg-red-500 shadow-lg 
                       animate-pulse-subtle transition-all duration-300 group-hover:scale-125" 
            title="Radioactive element"
            aria-label="Radioactive element"
          />
        )}
      </div>
      
      {/* Interactive glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 pointer-events-none
                      shadow-inner shadow-white/20" />
      
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
