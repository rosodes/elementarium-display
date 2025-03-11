
import { useState } from 'react';
import { elements, getElement } from '../data/elements';
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
    const rows = [];
    
    // Period 1
    let row = [];
    const hydrogen = getElement(1);
    if (hydrogen) row.push(<Element key="1" element={hydrogen} onClick={handleElementClick} />);
    
    for (let i = 0; i < 16; i++) {
      row.push(createEmptyCell(`empty-1-${i}`));
    }
    
    const helium = getElement(2);
    if (helium) row.push(<Element key="2" element={helium} onClick={handleElementClick} />);
    
    rows.push(<div key="period-1" className="period-row">{row}</div>);
    
    // Period 2
    row = [];
    const lithium = getElement(3);
    const beryllium = getElement(4);
    
    if (lithium) row.push(<Element key="3" element={lithium} onClick={handleElementClick} />);
    if (beryllium) row.push(<Element key="4" element={beryllium} onClick={handleElementClick} />);
    
    for (let i = 0; i < 10; i++) {
      row.push(createEmptyCell(`empty-2-${i}`));
    }
    
    for (let i = 5; i <= 10; i++) {
      const element = getElement(i);
      if (element) row.push(<Element key={i.toString()} element={element} onClick={handleElementClick} />);
    }
    
    rows.push(<div key="period-2" className="period-row">{row}</div>);
    
    // Period 3
    row = [];
    const sodium = getElement(11);
    const magnesium = getElement(12);
    
    if (sodium) row.push(<Element key="11" element={sodium} onClick={handleElementClick} />);
    if (magnesium) row.push(<Element key="12" element={magnesium} onClick={handleElementClick} />);
    
    for (let i = 0; i < 10; i++) {
      row.push(createEmptyCell(`empty-3-${i}`));
    }
    
    for (let i = 13; i <= 18; i++) {
      const element = getElement(i);
      if (element) row.push(<Element key={i.toString()} element={element} onClick={handleElementClick} />);
    }
    
    rows.push(<div key="period-3" className="period-row">{row}</div>);
    
    // Period 4
    row = [];
    for (let i = 19; i <= 36; i++) {
      const element = getElement(i);
      if (element) row.push(<Element key={i.toString()} element={element} onClick={handleElementClick} />);
    }
    rows.push(<div key="period-4" className="period-row">{row}</div>);
    
    // Period 5
    row = [];
    for (let i = 37; i <= 54; i++) {
      const element = getElement(i);
      if (element) row.push(<Element key={i.toString()} element={element} onClick={handleElementClick} />);
    }
    rows.push(<div key="period-5" className="period-row">{row}</div>);
    
    // Period 6
    row = [];
    const cesium = getElement(55);
    const barium = getElement(56);
    const lanthanum = getElement(57);
    
    if (cesium) row.push(<Element key="55" element={cesium} onClick={handleElementClick} />);
    if (barium) row.push(<Element key="56" element={barium} onClick={handleElementClick} />);
    if (lanthanum) row.push(<Element key="57" element={lanthanum} onClick={handleElementClick} />);
    
    // Placeholder for lanthanides
    row.push(
      <div key="lanthanide-placeholder" className="element-card bg-lanthanide flex items-center justify-center">
        <span className="text-xs font-bold">57-71</span>
      </div>
    );
    
    for (let i = 72; i <= 86; i++) {
      const element = getElement(i);
      if (element) row.push(<Element key={i.toString()} element={element} onClick={handleElementClick} />);
    }
    rows.push(<div key="period-6" className="period-row">{row}</div>);
    
    // Period 7
    row = [];
    const francium = getElement(87);
    const radium = getElement(88);
    const actinium = getElement(89);
    
    if (francium) row.push(<Element key="87" element={francium} onClick={handleElementClick} />);
    if (radium) row.push(<Element key="88" element={radium} onClick={handleElementClick} />);
    if (actinium) row.push(<Element key="89" element={actinium} onClick={handleElementClick} />);
    
    // Placeholder for actinides
    row.push(
      <div key="actinide-placeholder" className="element-card bg-actinide flex items-center justify-center">
        <span className="text-xs font-bold">89-103</span>
      </div>
    );
    
    for (let i = 104; i <= 118; i++) {
      const element = getElement(i);
      if (element) {
        row.push(<Element key={i.toString()} element={element} onClick={handleElementClick} />);
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
      const element = getElement(i);
      if (element) row.push(<Element key={i.toString()} element={element} onClick={handleElementClick} />);
    }
    rows.push(<div key="lanthanides" className="period-row mt-4">{row}</div>);
    
    // Actinides (Period 7, elements 89-103)
    row = [];
    row.push(createEmptyCell("empty-ac-1"));
    row.push(createEmptyCell("empty-ac-2"));
    row.push(createEmptyCell("empty-ac-3"));
    
    for (let i = 89; i <= 103; i++) {
      const element = getElement(i);
      if (element) row.push(<Element key={i.toString()} element={element} onClick={handleElementClick} />);
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
