
import { useState } from 'react';
import { Element as ElementType, getCategoryColor } from '../data/elements';

interface ElementProps {
  element: ElementType;
  onClick: (element: ElementType) => void;
}

const Element = ({ element, onClick }: ElementProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const categoryColor = getCategoryColor(element.category);
  
  return (
    <div 
      className={`element-card ${categoryColor} transition-all duration-300 ease-out 
                 hover:shadow-lg hover:scale-105 cursor-pointer
                 ${isHovering ? 'z-10 shadow-xl' : ''}`}
      onClick={() => onClick(element)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="text-xs opacity-70">{element.number}</div>
      <div className="text-xl font-medium my-1">{element.symbol}</div>
      <div className="text-xs truncate max-w-full">{element.name}</div>
      <div className="text-xs opacity-70">{element.atomicMass}</div>
    </div>
  );
};

export default Element;
