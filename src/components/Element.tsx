
import { useState } from 'react';
import { Element as ElementType } from '../data/elements';
import { useLanguage } from '../context/LanguageContext';

interface ElementProps {
  element: ElementType;
  onClick: (element: ElementType) => void;
}

const Element = ({ element, onClick }: ElementProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const { t } = useLanguage();
  
  // Determine the element color based on electron block with better contrast
  const getElementColor = () => {
    // Determine block (s, p, d, f) based on electronic configuration
    if (element.expandedconfig) {
      if (element.expandedconfig.includes(' s')) return 'bg-s-block';
      if (element.expandedconfig.includes(' p')) return 'bg-p-block';
      if (element.expandedconfig.includes(' d')) return 'bg-d-block';
      if (element.expandedconfig.includes(' f')) return 'bg-f-block';
    }
    
    // If electronic configuration isn't defined, use category or series
    return getCategoryColor(element.category || element.series);
  };

  // Get the right contrast text color for accessibility
  const getTextColorClass = () => {
    const blockType = element.expandedconfig ? 
      (element.expandedconfig.includes(' s') ? 's' : 
       element.expandedconfig.includes(' p') ? 'p' : 
       element.expandedconfig.includes(' d') ? 'd' : 
       element.expandedconfig.includes(' f') ? 'f' : '') : '';
    
    // Higher contrast text colors based on block type
    switch (blockType) {
      case 's': return 'text-gray-900 dark:text-white';
      case 'p': return 'text-gray-900 dark:text-white';
      case 'd': return 'text-gray-900 dark:text-white';
      case 'f': return 'text-gray-900 dark:text-white';
      default: return 'text-gray-900 dark:text-white';
    }
  };
  
  // Check if element is radioactive
  const isRadioactive = () => {
    const radioactiveElements = [43, 61, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118];
    return radioactiveElements.includes(Number(element.atomic));
  };
  
  // Adjust font size for long element names
  const getNameFontSize = () => {
    if (!element.name) return 'text-[8px]';
    if (element.name.length > 18) return 'text-[5px] sm:text-[6px]';
    if (element.name.length > 15) return 'text-[6px] sm:text-[7px]';
    if (element.name.length > 12) return 'text-[7px] sm:text-[8px]';
    if (element.name.length > 9) return 'text-[8px] sm:text-[9px]';
    if (element.name.length > 7) return 'text-[9px] sm:text-[10px]';
    return 'text-[10px] sm:text-[11px]';
  };
  
  // Get translated element name if available
  const getElementName = () => {
    const elementKey = element.symbol.toLowerCase();
    return t.ui?.elements?.[elementKey] || element.name;
  };
  
  return (
    <button 
      className={`element-card w-[54px] h-[54px] sm:w-[70px] sm:h-[70px] ${getElementColor()} ${getTextColorClass()} 
                transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-primary
                hover:shadow-lg hover:scale-105 flex-shrink-0 relative
                dark:shadow-black/30 flex flex-col justify-between p-1 sm:p-1.5
                ${isHovering ? 'z-10 shadow-xl' : ''}`}
      onClick={() => onClick(element)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsHovering(true)}
      onBlur={() => setIsHovering(false)}
      aria-label={`${t.ui?.elements?.[element.symbol.toLowerCase()] || element.name} (${element.symbol}), ${t.elementDetails.atomicNumber} ${element.atomic}`}
      tabIndex={0}
    >
      <div className="flex justify-between items-start w-full">
        <div className="text-[7px] sm:text-[9px] opacity-70">{element.atomic}</div>
        <div className="text-[7px] sm:text-[9px] opacity-70">
          {element.oxidation?.split(',')[0]?.replace('c', '') || ''}
        </div>
      </div>
      
      <div className="text-center flex-grow flex flex-col justify-center items-center">
        <div className="text-sm sm:text-lg md:text-xl font-bold">{element.symbol}</div>
        <div className={`${getNameFontSize()} truncate max-w-full font-medium leading-tight`}>
          {getElementName()}
        </div>
      </div>
      
      <div className="flex justify-between items-end w-full">
        <div className="text-[6px] sm:text-[8px] opacity-70">{element.weight}</div>
        {isRadioactive() && (
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 mb-0.5 mr-0.5" 
               title={t.ui?.radioactive || "Radioactive"} 
               aria-label={t.ui?.radioactive || "Radioactive element"}></div>
        )}
      </div>
      
      {/* Hidden detailed information for screen readers */}
      <span className="sr-only">
        {t.elementDetails.category}: {element.category}. 
        {element.discoveryYear ? `${t.elementDetails.discoveryYear}: ${element.discoveryYear}.` : ''} 
        {element.electron ? `${t.elementDetails.electronConfig}: ${element.electron}.` : ''}
      </span>
    </button>
  );
};

export default Element;
