
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
      {/* Premium gradient overlay with enhanced depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-black/20 
                      opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
      
      {/* Enhanced shimmer effect with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                      -translate-x-full group-hover:translate-x-full transition-transform duration-1000 
                      ease-in-out rounded-2xl" />
      
      {/* Subtle inner glow effect */}
      <div className="absolute inset-0.5 bg-gradient-to-br from-white/20 to-transparent rounded-xl
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Atomic number with enhanced styling */}
      <div className="element-atomic absolute top-2 left-2 text-xs font-bold opacity-85 
                      transition-all duration-300 group-hover:scale-110 group-hover:opacity-100
                      drop-shadow-sm group-hover:drop-shadow-md">
        {element.atomic}
      </div>
      
      {/* Oxidation state with improved visibility */}
      {element.oxidation && (
        <div className="absolute top-2 right-2 text-xs font-semibold opacity-75
                        transition-all duration-300 group-hover:opacity-100 group-hover:scale-105
                        drop-shadow-sm">
          {element.oxidation.split(',')[0]?.replace('c', '') || ''}
        </div>
      )}
      
      {/* Element symbol and name with enhanced typography */}
      <div className="flex flex-col items-center justify-center h-full pt-2 pb-2 z-10 relative">
        <div className="element-symbol text-2xl font-extrabold mb-1 leading-none 
                        transition-all duration-300 group-hover:scale-110 
                        tracking-tighter drop-shadow-md group-hover:drop-shadow-lg
                        text-shadow-lg">
          {element.symbol}
        </div>
        
        <div className="element-name text-xs font-semibold px-1 leading-tight text-center max-w-full
                        transition-all duration-300 group-hover:scale-105 opacity-90 group-hover:opacity-100
                        drop-shadow-sm">
          {element.name}
        </div>
      </div>
      
      {/* Enhanced atomic weight and radioactive indicator */}
      <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end z-10">
        <div className="element-mass text-xs opacity-75 font-medium
                        transition-all duration-300 group-hover:opacity-100 group-hover:scale-105
                        drop-shadow-sm">
          {parseFloat(element.weight).toFixed(1)}
        </div>
        
        {isRadioactive() && (
          <div 
            className="radioactive-indicator w-2.5 h-2.5 rounded-full bg-gradient-to-br from-red-400 to-red-600 
                       shadow-lg shadow-red-500/30 animate-pulse-subtle transition-all duration-300 group-hover:scale-125
                       ring-2 ring-red-500/30 group-hover:ring-red-500/50" 
            title="Radioactive element"
            aria-label="Radioactive element"
          />
        )}
      </div>
      
      {/* Interactive border glow with pulsing effect */}
      <div className="absolute inset-0 rounded-2xl border border-white/30 opacity-0 
                      group-hover:opacity-100 transition-all duration-500 pointer-events-none
                      group-hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.3)]" />
      
      {/* Subtle corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/40 rounded-tl-2xl
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/40 rounded-br-2xl
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
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
