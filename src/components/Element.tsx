
import { useState } from 'react';
import { Element as ElementType, getCategoryColor, getSeriesColor } from '../data/elements';

interface ElementProps {
  element: ElementType;
  onClick: (element: ElementType) => void;
}

const Element = ({ element, onClick }: ElementProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  // Use either category or series for determining color
  const categoryColor = element.category 
    ? getCategoryColor(element.category) 
    : getSeriesColor(element.series);
  
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
      className={`element-card w-[70px] h-[70px] ${categoryColor} transition-all duration-300 ease-out 
                 hover:shadow-lg hover:scale-105 cursor-pointer flex-shrink-0
                 ${isHovering ? 'z-10 shadow-xl' : ''}`}
      onClick={() => onClick(element)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute top-1 left-1 text-xs opacity-70">{element.atomic}</div>
      <div className="absolute top-1 right-1 text-xs opacity-70">
        {element.electronstring ? element.electronstring.slice(-2) : ''}
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold mt-4 mb-1">{element.symbol}</div>
        <div className={`${getNameFontSize()} truncate px-1 max-w-full font-medium leading-tight`}>
          {element.name}
        </div>
        <div className="text-xs opacity-70 mt-1">{element.weight}</div>
      </div>
    </div>
  );
};

export default Element;
