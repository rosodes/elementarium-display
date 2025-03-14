
import { useState, useMemo } from 'react';
import { Element as ElementType } from '../data/elements';
import { useLanguage } from '../context/LanguageContext';
import { getCategoryColor } from '../data/elementCategories';

interface ElementProps {
  element: ElementType;
  onClick: (element: ElementType) => void;
}

// List of known radioactive elements by atomic number
const radioactiveElementNumbers = [
  43, 61, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 
  100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 
  114, 115, 116, 117, 118
];

const Element = ({ element, onClick }: ElementProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const { t } = useLanguage();
  
  // Determine the electron block type (s, p, d, f) from configuration
  const electronBlockType = useMemo(() => {
    if (!element.expandedconfig) return '';
    
    if (element.expandedconfig.includes(' s')) return 's';
    if (element.expandedconfig.includes(' p')) return 'p';
    if (element.expandedconfig.includes(' d')) return 'd';
    if (element.expandedconfig.includes(' f')) return 'f';
    
    return '';
  }, [element.expandedconfig]);
  
  // Get element color class based on electron block
  const elementColorClass = useMemo(() => {
    if (electronBlockType) {
      return `bg-${electronBlockType}-block`;
    }
    
    // Fallback to category or series if electronic configuration isn't defined
    return getCategoryColor(element.category || element.series);
  }, [electronBlockType, element.category, element.series]);
  
  // Get text color class for accessibility contrast
  const textColorClass = useMemo(() => {
    // High contrast text colors for all block types
    return 'text-gray-900 dark:text-white';
  }, []);
  
  // Check if element is radioactive
  const isRadioactive = useMemo(() => {
    return radioactiveElementNumbers.includes(Number(element.atomic));
  }, [element.atomic]);
  
  // Get font size for element name based on name length
  const nameFontSizeClass = useMemo(() => {
    if (!element.name) return 'text-[8px]';
    
    const nameLength = element.name.length;
    if (nameLength > 18) return 'text-[5px] sm:text-[6px]';
    if (nameLength > 15) return 'text-[6px] sm:text-[7px]';
    if (nameLength > 12) return 'text-[7px] sm:text-[8px]';
    if (nameLength > 9) return 'text-[8px] sm:text-[9px]';
    if (nameLength > 7) return 'text-[9px] sm:text-[10px]';
    
    return 'text-[10px] sm:text-[11px]';
  }, [element.name]);
  
  // Get translated element name if available
  const elementName = useMemo(() => {
    const elementKey = element.symbol.toLowerCase();
    return t.ui?.elements?.[elementKey] || element.name;
  }, [element.symbol, t.ui?.elements, element.name]);
  
  // Prepare screen reader text
  const screenReaderText = useMemo(() => {
    const parts = [
      `${t.elementDetails.series}: ${element.series}`
    ];
    
    if (element.discover) {
      parts.push(`${t.elementDetails.discovered}: ${element.discover}`);
    }
    
    if (element.electronstring) {
      parts.push(`${t.elementDetails.electronConfig}: ${element.electronstring}`);
    }
    
    return parts.join('. ') + '.';
  }, [element, t.elementDetails]);
  
  // Accessibility label for the element
  const ariaLabel = useMemo(() => {
    return `${elementName} (${element.symbol}), ${t.elementDetails.atomicNumber} ${element.atomic}`;
  }, [elementName, element.symbol, element.atomic, t.elementDetails.atomicNumber]);
  
  return (
    <button 
      className={`element-card ${elementColorClass} ${textColorClass} 
                transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-primary
                hover:shadow-lg hover:scale-105 flex-shrink-0 relative
                dark:shadow-black/30 flex flex-col justify-between p-1 sm:p-1.5
                ${isHovering ? 'z-10 shadow-xl' : ''}`}
      onClick={() => onClick(element)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsHovering(true)}
      onBlur={() => setIsHovering(false)}
      aria-label={ariaLabel}
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
        <div className={`${nameFontSizeClass} truncate max-w-full font-medium leading-tight`}>
          {elementName}
        </div>
      </div>
      
      <div className="flex justify-between items-end w-full">
        <div className="text-[6px] sm:text-[8px] opacity-70">{element.weight}</div>
        {isRadioactive && (
          <div 
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 mb-0.5 mr-0.5" 
            title={t.ui?.radioactive || "Radioactive"} 
            aria-label={t.ui?.radioactive || "Radioactive element"}
          ></div>
        )}
      </div>
      
      {/* Hidden detailed information for screen readers */}
      <span className="sr-only">{screenReaderText}</span>
    </button>
  );
};

export default Element;
