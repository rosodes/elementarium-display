
import { useState } from 'react';
import { Element as ElementType, getCategoryColor, getSeriesColor } from '../data/elements';

interface ElementProps {
  element: ElementType;
  onClick: (element: ElementType) => void;
}

const Element = ({ element, onClick }: ElementProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  // Используем либо категорию, либо серию для определения цвета
  const categoryColor = element.category 
    ? getCategoryColor(element.category) 
    : getSeriesColor(element.series);
  
  return (
    <div 
      className={`element-card ${categoryColor} transition-all duration-300 ease-out 
                 hover:shadow-lg hover:scale-105 cursor-pointer
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
        <div className="text-xs truncate max-w-full font-medium">{element.name}</div>
        <div className="text-xs opacity-70 mt-1">{element.weight}</div>
      </div>
    </div>
  );
};

export default Element;
