
import { useState } from 'react';
import { elements } from '../data/elements';
import Element from './Element';
import ElementDetails from './ElementDetails';
import { Element as ElementType } from '../data/elementTypes';

const PeriodicTable = () => {
  const [selectedElement, setSelectedElement] = useState<ElementType | null>(null);
  
  const handleElementClick = (element: ElementType) => {
    setSelectedElement(element);
  };
  
  const closeDetails = () => {
    setSelectedElement(null);
  };
  
  // We need to create empty cells to position elements correctly
  const createEmptyCell = (key: string) => (
    <div key={key} className="element-placeholder"></div>
  );
  
  // Create a grid with empty cells and actual elements
  const renderPeriodicTable = () => {
    // Skip the first null element
    const elementArray = elements.slice(1);
    const rows = [];
    
    // Period 1
    let row = [];
    row.push(<Element key="1" element={elementArray[0]} onClick={handleElementClick} />);
    for (let i = 0; i < 16; i++) {
      row.push(createEmptyCell(`empty-1-${i}`));
    }
    row.push(<Element key="2" element={elementArray[1]} onClick={handleElementClick} />);
    rows.push(<div key="period-1" className="period-row">{row}</div>);
    
    // Period 2
    row = [];
    row.push(<Element key="3" element={elementArray[2]} onClick={handleElementClick} />);
    row.push(<Element key="4" element={elementArray[3]} onClick={handleElementClick} />);
    for (let i = 0; i < 10; i++) {
      row.push(createEmptyCell(`empty-2-${i}`));
    }
    for (let i = 5; i <= 10; i++) {
      row.push(<Element key={i.toString()} element={elementArray[i-1]} onClick={handleElementClick} />);
    }
    rows.push(<div key="period-2" className="period-row">{row}</div>);
    
    // Period 3
    row = [];
    row.push(<Element key="11" element={elementArray[10]} onClick={handleElementClick} />);
    row.push(<Element key="12" element={elementArray[11]} onClick={handleElementClick} />);
    for (let i = 0; i < 10; i++) {
      row.push(createEmptyCell(`empty-3-${i}`));
    }
    for (let i = 13; i <= 18; i++) {
      row.push(<Element key={i.toString()} element={elementArray[i-1]} onClick={handleElementClick} />);
    }
    rows.push(<div key="period-3" className="period-row">{row}</div>);
    
    // Period 4
    row = [];
    for (let i = 19; i <= 36; i++) {
      row.push(<Element key={i.toString()} element={elementArray[i-1]} onClick={handleElementClick} />);
    }
    rows.push(<div key="period-4" className="period-row">{row}</div>);
    
    // Period 5
    row = [];
    for (let i = 37; i <= 54; i++) {
      row.push(<Element key={i.toString()} element={elementArray[i-1]} onClick={handleElementClick} />);
    }
    rows.push(<div key="period-5" className="period-row">{row}</div>);
    
    // Period 6
    row = [];
    row.push(<Element key="55" element={elementArray[54]} onClick={handleElementClick} />);
    row.push(<Element key="56" element={elementArray[55]} onClick={handleElementClick} />);
    row.push(<Element key="57" element={elementArray[56]} onClick={handleElementClick} />);
    
    // Placeholder for lanthanides
    row.push(
      <div key="lanthanide-placeholder" className="element-card bg-lanthanide flex items-center justify-center">
        <span className="text-xs font-bold">57-71</span>
      </div>
    );
    
    for (let i = 72; i <= 86; i++) {
      const index = i - 1;
      if (index < elementArray.length) {
        row.push(<Element key={i.toString()} element={elementArray[index]} onClick={handleElementClick} />);
      }
    }
    rows.push(<div key="period-6" className="period-row">{row}</div>);
    
    // Period 7
    row = [];
    row.push(<Element key="87" element={elementArray[86]} onClick={handleElementClick} />);
    row.push(<Element key="88" element={elementArray[87]} onClick={handleElementClick} />);
    row.push(<Element key="89" element={elementArray[88]} onClick={handleElementClick} />);
    
    // Placeholder for actinides
    row.push(
      <div key="actinide-placeholder" className="element-card bg-actinide flex items-center justify-center">
        <span className="text-xs font-bold">89-103</span>
      </div>
    );
    
    for (let i = 104; i <= 118; i++) {
      const index = i - 1;
      if (index < elementArray.length) {
        row.push(<Element key={i.toString()} element={elementArray[index]} onClick={handleElementClick} />);
      } else {
        row.push(createEmptyCell(`empty-7-${i}`));
      }
    }
    rows.push(<div key="period-7" className="period-row">{row}</div>);
    
    // Lanthanides (Period 6, elements 57-71)
    row = [];
    row.push(createEmptyCell("empty-la-1"));
    row.push(createEmptyCell("empty-la-2"));
    row.push(createEmptyCell("empty-la-3"));
    for (let i = 57; i <= 71; i++) {
      const index = i - 1;
      if (index < elementArray.length) {
        row.push(<Element key={i.toString()} element={elementArray[index]} onClick={handleElementClick} />);
      }
    }
    rows.push(<div key="lanthanides" className="period-row mt-4">{row}</div>);
    
    // Actinides (Period 7, elements 89-103)
    row = [];
    row.push(createEmptyCell("empty-ac-1"));
    row.push(createEmptyCell("empty-ac-2"));
    row.push(createEmptyCell("empty-ac-3"));
    for (let i = 89; i <= 103; i++) {
      const index = i - 1;
      if (index < elementArray.length) {
        row.push(<Element key={i.toString()} element={elementArray[index]} onClick={handleElementClick} />);
      }
    }
    rows.push(<div key="actinides" className="period-row">{row}</div>);
    
    return rows;
  };
  
  return (
    <div className="periodic-table-container">
      <div className="legend flex flex-wrap justify-center gap-4 mb-4 p-2">
        <div className="legend-item flex items-center">
          <div className="w-4 h-4 bg-alkali mr-2"></div>
          <span className="text-sm">Alkali Metals</span>
        </div>
        <div className="legend-item flex items-center">
          <div className="w-4 h-4 bg-alkaline mr-2"></div>
          <span className="text-sm">Alkaline Earth Metals</span>
        </div>
        <div className="legend-item flex items-center">
          <div className="w-4 h-4 bg-transition mr-2"></div>
          <span className="text-sm">Transition Metals</span>
        </div>
        <div className="legend-item flex items-center">
          <div className="w-4 h-4 bg-post_transition mr-2"></div>
          <span className="text-sm">Post-Transition Metals</span>
        </div>
        <div className="legend-item flex items-center">
          <div className="w-4 h-4 bg-metalloid mr-2"></div>
          <span className="text-sm">Metalloids</span>
        </div>
        <div className="legend-item flex items-center">
          <div className="w-4 h-4 bg-nonmetal mr-2"></div>
          <span className="text-sm">Nonmetals</span>
        </div>
        <div className="legend-item flex items-center">
          <div className="w-4 h-4 bg-noble mr-2"></div>
          <span className="text-sm">Noble Gases</span>
        </div>
        <div className="legend-item flex items-center">
          <div className="w-4 h-4 bg-lanthanide mr-2"></div>
          <span className="text-sm">Lanthanides</span>
        </div>
        <div className="legend-item flex items-center">
          <div className="w-4 h-4 bg-actinide mr-2"></div>
          <span className="text-sm">Actinides</span>
        </div>
      </div>
      
      <div className="periodic-table">
        {renderPeriodicTable()}
      </div>
      
      {selectedElement && (
        <ElementDetails element={selectedElement} onClose={closeDetails} />
      )}
    </div>
  );
};

export default PeriodicTable;
