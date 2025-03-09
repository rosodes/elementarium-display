
import { useState } from 'react';
import { elements, Element as ElementType, categories, getCategoryColor, getSeriesColor } from '../data/elements';
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
    // Skip the first empty array element
    if (!element || !element.atomic) return { gridColumn: 1, gridRow: 1 };
    
    const atomicNumber = parseInt(element.atomic);
    
    // Handle lanthanides and actinides
    if (element.series === "Lanthanide") {
      return { gridColumn: (atomicNumber - 56) + 2, gridRow: 9 };
    }
    if (element.series === "Actinide") {
      return { gridColumn: (atomicNumber - 88) + 2, gridRow: 10 };
    }
    
    // For main table elements, use the provided group and period if available
    // or calculate an approximation
    if (element.group && element.period) {
      return { gridColumn: element.group, gridRow: element.period };
    }
    
    // Fallback logic for positioning elements without explicit group/period
    // This is a simplified estimation and may need refinement
    const atomicNum = parseInt(element.atomic);
    if (atomicNum <= 2) {
      return { gridColumn: atomicNum === 1 ? 1 : 18, gridRow: 1 };
    } else if (atomicNum <= 10) {
      return { gridColumn: atomicNum === 2 ? 18 : atomicNum, gridRow: 2 };
    }
    // More positioning logic would be needed for a complete table
    
    return { gridColumn: 1, gridRow: 1 }; // Default fallback
  };

  // Filter out the first empty array element
  const filteredElements = elements.filter(element => element && element.atomic);

  return (
    <div className="container mx-auto px-4 pt-4 pb-16 overflow-x-auto">
      <div className="periodic-table-container min-w-[1200px]">
        <div className="periodic-table">
          {filteredElements.map((element) => {
            if (!element || !element.atomic) return null;
            const { gridColumn, gridRow } = getGridPosition(element);
            return (
              <div 
                key={element.atomic}
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
