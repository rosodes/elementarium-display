
import { useState } from 'react';
import { Element as ElementType, getCategoryColor, getSeriesColor } from '../data/elements';
import { useLanguage } from '../context/LanguageContext';

interface ElementProps {
  element: ElementType;
  onClick: (element: ElementType) => void;
}

const Element = ({ element, onClick }: ElementProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const { language, t } = useLanguage();
  
  // Determine the element color based on electron block or category
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
  
  // Check if element is radioactive
  const isRadioactive = () => {
    const radioactiveElements = [43, 61, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118];
    return radioactiveElements.includes(Number(element.atomic));
  };
  
  // Adjust font size for long element names
  const getNameFontSize = () => {
    if (!element.name) return 'text-xs';
    if (element.name.length > 18) return 'text-[5px]';
    if (element.name.length > 15) return 'text-[6px]';
    if (element.name.length > 12) return 'text-[7px]';
    if (element.name.length > 9) return 'text-[8px]';
    if (element.name.length > 7) return 'text-[9px]';
    return 'text-[10px]';
  };
  
  // Get translated element name if available
  const getElementName = () => {
    const elementKey = element.symbol.toLowerCase();
    return t.ui?.elements?.[elementKey] || element.name;
  };
  
  return (
    <div 
      className={`element-card w-[70px] h-[70px] ${getElementColor()} transition-all duration-300 ease-out 
                 hover:shadow-lg hover:scale-105 cursor-pointer flex-shrink-0 relative
                 dark:shadow-black/30 flex flex-col justify-between p-1.5
                 ${isHovering ? 'z-10 shadow-xl' : ''}`}
      onClick={() => onClick(element)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      aria-label={`Element ${element.name}, atomic number ${element.atomic}`}
    >
      <div className="flex justify-between items-start w-full">
        <div className="text-[9px] opacity-70">{element.atomic}</div>
        <div className="text-[9px] opacity-70">
          {element.oxidation?.split(',')[0]?.replace('c', '') || ''}
        </div>
      </div>
      
      <div className="text-center flex-grow flex flex-col justify-center items-center">
        <div className="text-lg md:text-xl font-bold">{element.symbol}</div>
        <div className={`${getNameFontSize()} truncate max-w-full font-medium leading-tight`}>
          {getElementName()}
        </div>
      </div>
      
      <div className="flex justify-between items-end w-full">
        <div className="text-[8px] opacity-70">{element.weight}</div>
        {isRadioactive() && (
          <div className="w-2 h-2 rounded-full bg-red-500 mb-0.5 mr-0.5" 
               title={t.ui?.radioactive || "Radioactive"} aria-label={t.ui?.radioactive || "Radioactive element"}></div>
        )}
      </div>
    </div>
  );
};

export default Element;
