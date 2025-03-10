
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
  
  return (
    <div 
      className={`element-card ${categoryColor} transition-all duration-300 ease-out 
                 hover:shadow-lg hover:scale-105 cursor-pointer rounded-md p-1
                 ${isHovering ? 'z-10 shadow-xl' : ''}`}
      onClick={() => onClick(element)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute top-1 left-1.5 text-xs opacity-70">{element.atomic}</div>
      <div className="absolute top-1 right-1.5 text-xs opacity-70">
        {element.group}
      </div>
      <div className="text-center pt-4">
        <div className="text-xl font-bold mb-0.5">{element.symbol}</div>
        <div className="text-xs truncate max-w-full font-medium px-1">{element.name}</div>
        <div className="text-xs opacity-70 mt-0.5">{element.weight}</div>
      </div>
      {element.description && (
        <div className="absolute inset-0 bg-black/80 text-white text-xs p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {element.description.slice(0, 50)}...
        </div>
      )}
    </div>
  );
};

export default Element;
