
import { useState } from 'react';
import { elements, Element as ElementType, categories } from '../data/elements';
import Element from './Element';
import ElementDetails from './ElementDetails';

const PeriodicTable = () => {
  const [selectedElement, setSelectedElement] = useState<ElementType | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleElementClick = (element: ElementType) => {
    setSelectedElement(element);
    setIsDetailsOpen(true);
  };

  const closeDetails = () => {
    setIsDetailsOpen(false);
  };

  // Determine position in grid based on group and period
  const getGridPosition = (element: ElementType) => {
    // Handle lanthanides and actinides
    if (element.category === 'lanthanide') {
      return { gridColumn: (element.number - 56) + 2, gridRow: 9 };
    }
    if (element.category === 'actinide') {
      return { gridColumn: (element.number - 88) + 2, gridRow: 10 };
    }
    
    // For main table elements
    return { gridColumn: element.group, gridRow: element.period };
  };

  return (
    <div className="container mx-auto px-4 pt-4 pb-16 overflow-x-auto">
      <div className="periodic-table-container min-w-[1200px]">
        <div className="periodic-table">
          {elements.map((element) => {
            const { gridColumn, gridRow } = getGridPosition(element);
            return (
              <div 
                key={element.number}
                className="element"
                style={{ 
                  gridColumn,
                  gridRow
                }}
              >
                <Element element={element} onClick={handleElementClick} />
              </div>
            );
          })}
          
          {/* Labels for groups */}
          <div className="group-label" style={{ gridColumn: 1, gridRow: 1 }}>1</div>
          <div className="group-label" style={{ gridColumn: 18, gridRow: 1 }}>18</div>
          
          {/* Placeholders for lanthanides and actinides */}
          <div className="lanthanide-block" style={{ gridColumn: '3 / span 15', gridRow: 6 }}>
            <div className="text-sm text-center text-gray-600">Lanthanides (57-71)</div>
          </div>
          <div className="actinide-block" style={{ gridColumn: '3 / span 15', gridRow: 7 }}>
            <div className="text-sm text-center text-gray-600">Actinides (89-103)</div>
          </div>
        </div>
        
        {/* Element legend */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center animate-slide-up">
          {Object.entries(categories).map(([key, value]) => (
            <div key={key} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded ${getCategoryColor(key)}`}></div>
              <span className="text-sm">{value}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Element details dialog */}
      <ElementDetails 
        element={selectedElement} 
        isOpen={isDetailsOpen}
        onClose={closeDetails}
      />
    </div>
  );
};

export default PeriodicTable;
