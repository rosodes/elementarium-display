
import { useState } from 'react';
import { elements, ElementsArray, Element as ElementType, categories, getCategoryColor, getSeriesColor } from '../data/elements';
import Element from './Element';
import ElementDetails from './ElementDetails';

const PeriodicTable = () => {
  const [selectedElement, setSelectedElement] = useState<ElementType | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [highlightedSeries, setHighlightedSeries] = useState<string | null>(null);

  const handleElementClick = (element: ElementType) => {
    setSelectedElement(element);
    setIsDetailsOpen(true);
  };

  const closeDetails = () => {
    setIsDetailsOpen(false);
  };

  const handleSeriesClick = (series: string) => {
    setHighlightedSeries(highlightedSeries === series ? null : series);
  };

  // Determine position in grid based on group and period
  const getGridPosition = (element: ElementType) => {
    if (!element || !element.atomic) return { gridColumn: 1, gridRow: 1 };
    
    const atomicNumber = parseInt(element.atomic);
    
    // Handle lanthanides and actinides
    if (element.series === "Lanthanide") {
      return { gridColumn: (atomicNumber - 56) + 3, gridRow: 9 };
    }
    if (element.series === "Actinide") {
      return { gridColumn: (atomicNumber - 88) + 3, gridRow: 10 };
    }
    
    // For main table elements, use the provided group and period if available
    if (element.group && element.period) {
      return { gridColumn: element.group, gridRow: element.period };
    }
    
    // Fallback logic for positioning elements without explicit group/period
    const atomicNum = parseInt(element.atomic);
    if (atomicNum <= 2) {
      return { gridColumn: atomicNum === 1 ? 1 : 18, gridRow: 1 };
    } else if (atomicNum <= 10) {
      return { gridColumn: atomicNum === 2 ? 18 : atomicNum, gridRow: 2 };
    }
    
    return { gridColumn: 1, gridRow: 1 }; // Default fallback
  };

  // Filter out the first empty array element
  const filteredElements = elements.filter((element, index) => index > 0 && element && element.atomic) as ElementType[];

  return (
    <div className="container mx-auto px-4 pt-4 pb-16 overflow-x-auto">
      <div className="periodic-table-container min-w-[1200px]">
        <div className="periodic-table bg-gray-50 p-4 rounded-lg shadow-md">
          {/* Row numbers */}
          <div className="row-labels">
            {[1, 2, 3, 4, 5, 6, 7].map(num => (
              <div key={`row-${num}`} className="row-label text-sm text-gray-500 font-medium" style={{ gridRow: num, gridColumn: 0 }}>
                {num}
              </div>
            ))}
            <div className="row-label text-sm text-gray-500 font-medium" style={{ gridRow: 9, gridColumn: 0 }}>
              La
            </div>
            <div className="row-label text-sm text-gray-500 font-medium" style={{ gridRow: 10, gridColumn: 0 }}>
              Ac
            </div>
          </div>
          
          {/* Column numbers */}
          <div className="column-labels">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(num => (
              <div key={`col-${num}`} className="column-label text-sm text-gray-500 font-medium" style={{ gridColumn: num, gridRow: 0 }}>
                {num}
              </div>
            ))}
          </div>
          
          {filteredElements.map((element) => {
            if (!element || !element.atomic) return null;
            const { gridColumn, gridRow } = getGridPosition(element);
            
            const isHighlighted = highlightedSeries === element.series;
            const highlightClass = isHighlighted ? 'ring-4 ring-blue-500 scale-105 z-10' : '';
            
            return (
              <div 
                key={element.atomic}
                className={`element-wrapper ${highlightClass} transition-all duration-300`}
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
          <div className="lanthanide-block" style={{ gridColumn: '3 / span 10', gridRow: 6 }}>
            <div className="text-sm text-center text-indigo-600 font-medium p-1 bg-indigo-100 rounded border border-indigo-200">Lanthanides (57-71)</div>
          </div>
          <div className="actinide-block" style={{ gridColumn: '3 / span 10', gridRow: 7 }}>
            <div className="text-sm text-center text-purple-600 font-medium p-1 bg-purple-100 rounded border border-purple-200">Actinides (89-103)</div>
          </div>
        </div>
        
        {/* Element legend */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center animate-fade-in">
          {Object.entries(categories).map(([key, value]) => (
            <div 
              key={key} 
              className="flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
              onClick={() => handleSeriesClick(key)}
            >
              <div className={`w-4 h-4 rounded ${getCategoryColor(key)}`}></div>
              <span className="text-sm">{value}</span>
            </div>
          ))}
        </div>
        
        {/* Periodic table info */}
        <div className="mt-6 text-center text-gray-600 text-sm max-w-2xl mx-auto">
          <p>Click on any element to view detailed information. Click on a category in the legend to highlight elements of that type.</p>
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
