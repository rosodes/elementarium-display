
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
      return { gridColumn: (element.number - 56), gridRow: 9 };
    }
    if (element.category === 'actinide') {
      return { gridColumn: (element.number - 88), gridRow: 10 };
    }
    
    // For main table elements
    return { gridColumn: element.group, gridRow: element.period };
  };

  return (
    <div className="container mx-auto px-4 pt-8 pb-16">
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
        
        {/* Placeholders for lanthanides and actinides */}
        <div className="lanthanide-block bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-600 animate-fade-in">
          Lanthanides (57-71)
        </div>
        <div className="actinide-block bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-600 animate-fade-in">
          Actinides (89-103)
        </div>
      </div>
      
      {/* Element legend */}
      <div className="mt-12 flex flex-wrap gap-4 justify-center animate-slide-up">
        {Object.entries(categories).map(([key, value]) => (
          <div key={key} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded ${`bg-${key}`}`}></div>
            <span className="text-sm">{value}</span>
          </div>
        ))}
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
