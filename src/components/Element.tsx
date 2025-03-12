
import { useState } from 'react';
import { Element as ElementType, getCategoryColor, getSeriesColor } from '../data/elements';
import { useLanguage } from '../context/LanguageContext';

interface ElementProps {
  element: ElementType;
  onClick: (element: ElementType) => void;
}

const Element = ({ element, onClick }: ElementProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const { language } = useLanguage();
  
  // Use either category or series for determining color based on electron block
  const getBlockColor = () => {
    if (!element.expandedconfig) return '';
    
    // Determine block (s, p, d, f) based on electron configuration
    if (element.expandedconfig.includes('s')) return 'bg-s-block';
    if (element.expandedconfig.includes('p')) return 'bg-p-block';
    if (element.expandedconfig.includes('d')) return 'bg-d-block';
    if (element.expandedconfig.includes('f')) return 'bg-f-block';
    
    return getCategoryColor(element.category || element.series);
  };
  
  // Calculate if element is radioactive
  const isRadioactive = () => {
    const radioactiveElements = [43, 61, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118];
    return radioactiveElements.includes(Number(element.atomic));
  };
  
  // Handle text sizing for long element names
  const getNameFontSize = () => {
    if (!element.name) return 'text-xs';
    if (element.name.length > 15) return 'text-[6px]';
    if (element.name.length > 12) return 'text-[7px]';
    if (element.name.length > 10) return 'text-[8px]';
    if (element.name.length > 8) return 'text-[10px]';
    return 'text-xs';
  };
  
  return (
    <div 
      className={`element-card w-[70px] h-[70px] ${getBlockColor()} transition-all duration-300 ease-out 
                 hover:shadow-lg hover:scale-105 cursor-pointer flex-shrink-0 relative
                 dark:shadow-black/30 flex flex-col justify-between p-1.5
                 ${isHovering ? 'z-10 shadow-xl' : ''}`}
      onClick={() => onClick(element)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      aria-label={`Element ${element.name}, atomic number ${element.atomic}`}
    >
      <div className="flex justify-between items-start w-full">
        <div className="text-xs opacity-70">{element.atomic}</div>
        <div className="text-xs opacity-70">
          {element.oxidation?.split(',')[0]?.replace('c', '') || ''}
        </div>
      </div>
      
      <div className="text-center flex-grow flex flex-col justify-center">
        <div className="text-2xl font-bold">{element.symbol}</div>
        <div className={`${getNameFontSize()} truncate px-1 max-w-full font-medium leading-tight`}>
          {element.name}
        </div>
      </div>
      
      <div className="flex justify-between items-end w-full">
        <div className="text-[10px] opacity-70">{element.weight}</div>
        {isRadioactive() && (
          <div className="w-2 h-2 rounded-full bg-red-500 mb-0.5 mr-0.5" 
               title="Radioactive" aria-label="Radioactive element"></div>
        )}
      </div>
    </div>
  );
};

export default Element;
