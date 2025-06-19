
import React, { memo } from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import { elements } from '../../data/elements';
import Element from '../Element';

interface PeriodicTableGridProps {
  onElementClick: (element: ElementType) => void;
  selectedElement?: ElementType | null;
  searchQuery?: string;
}

const PeriodicTableGrid = memo(({ onElementClick, selectedElement, searchQuery }: PeriodicTableGridProps) => {
  // Check if element should be highlighted during search
  const isHighlighted = (element: ElementType) => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    return (
      element.name.toLowerCase().includes(query) ||
      element.symbol.toLowerCase().includes(query) ||
      element.atomic.includes(query)
    );
  };

  // Get element by atomic number
  const getElement = (atomicNumber: number): ElementType | null => {
    return elements.find(el => el && parseInt(el.atomic) === atomicNumber) || null;
  };

  // Render element with proper positioning
  const renderElement = (atomicNumber: number, gridRow: number, gridCol: number) => {
    const element = getElement(atomicNumber);
    if (!element) return <div key={`empty-${gridRow}-${gridCol}`} className="empty-cell" />;
    
    return (
      <div
        key={element.atomic}
        style={{
          gridRow: gridRow,
          gridColumn: gridCol
        }}
        className="element-position"
      >
        <Element
          element={element}
          onClick={onElementClick}
          className={`element-card ${
            selectedElement?.atomic === element.atomic ? 'selected' : ''
          } ${!isHighlighted(element) ? 'dimmed' : ''}`}
          data-atomic={element.atomic}
        />
      </div>
    );
  };

  // Render empty cell
  const renderEmpty = (row: number, col: number) => (
    <div
      key={`empty-${row}-${col}`}
      style={{
        gridRow: row,
        gridColumn: col
      }}
      className="empty-cell"
    />
  );

  // Render group header
  const renderGroupHeader = (group: number) => (
    <div
      key={`group-${group}`}
      style={{
        gridRow: 1,
        gridColumn: group + 1
      }}
      className="group-header"
    >
      {group}
    </div>
  );

  // Render period number
  const renderPeriodNumber = (period: number) => (
    <div
      key={`period-${period}`}
      style={{
        gridRow: period + 1,
        gridColumn: 1
      }}
      className="period-number"
    >
      {period}
    </div>
  );

  // Get lanthanoids and actinoids for separate display
  const lanthanoids = elements.filter(el => 
    el && parseInt(el.atomic) >= 58 && parseInt(el.atomic) <= 71
  ).sort((a, b) => parseInt(a.atomic) - parseInt(b.atomic));
  
  const actinoids = elements.filter(el => 
    el && parseInt(el.atomic) >= 90 && parseInt(el.atomic) <= 103
  ).sort((a, b) => parseInt(a.atomic) - parseInt(b.atomic));

  return (
    <div className="periodic-table-container">
      {/* Main periodic table grid */}
      <div className="periodic-table">
        {/* Group headers */}
        {Array.from({length: 18}, (_, i) => renderGroupHeader(i + 1))}
        
        {/* Period numbers */}
        {Array.from({length: 7}, (_, i) => renderPeriodNumber(i + 1))}
        
        {/* Period 1: H and He */}
        {renderElement(1, 2, 2)}  {/* H at row 2, col 2 */}
        {renderElement(2, 2, 19)} {/* He at row 2, col 19 */}
        
        {/* Period 2: Li to Ne */}
        {renderElement(3, 3, 2)}   {/* Li */}
        {renderElement(4, 3, 3)}   {/* Be */}
        {renderElement(5, 3, 14)}  {/* B */}
        {renderElement(6, 3, 15)}  {/* C */}
        {renderElement(7, 3, 16)}  {/* N */}
        {renderElement(8, 3, 17)}  {/* O */}
        {renderElement(9, 3, 18)}  {/* F */}
        {renderElement(10, 3, 19)} {/* Ne */}
        
        {/* Period 3: Na to Ar */}
        {renderElement(11, 4, 2)}  {/* Na */}
        {renderElement(12, 4, 3)}  {/* Mg */}
        {renderElement(13, 4, 14)} {/* Al */}
        {renderElement(14, 4, 15)} {/* Si */}
        {renderElement(15, 4, 16)} {/* P */}
        {renderElement(16, 4, 17)} {/* S */}
        {renderElement(17, 4, 18)} {/* Cl */}
        {renderElement(18, 4, 19)} {/* Ar */}
        
        {/* Period 4: K to Kr */}
        {Array.from({length: 18}, (_, i) => renderElement(19 + i, 5, 2 + i))}
        
        {/* Period 5: Rb to Xe */}
        {Array.from({length: 18}, (_, i) => renderElement(37 + i, 6, 2 + i))}
        
        {/* Period 6: Cs to Rn (with lanthanoid gap) */}
        {renderElement(55, 7, 2)}  {/* Cs */}
        {renderElement(56, 7, 3)}  {/* Ba */}
        {renderElement(57, 7, 4)}  {/* La */}
        {Array.from({length: 15}, (_, i) => renderElement(72 + i, 7, 5 + i))} {/* Hf to Rn */}
        
        {/* Period 7: Fr to Og (with actinoid gap) */}
        {renderElement(87, 8, 2)}  {/* Fr */}
        {renderElement(88, 8, 3)}  {/* Ra */}
        {renderElement(89, 8, 4)}  {/* Ac */}
        {Array.from({length: 15}, (_, i) => renderElement(104 + i, 8, 5 + i))} {/* Rf to Og */}
      </div>
      
      {/* F-block section */}
      <div className="f-block-section">
        <div className="f-block-row">
          <div className="f-block-label">Лантаноиды:</div>
          <div className="f-block-elements">
            {lanthanoids.map(element => (
              <Element
                key={element.atomic}
                element={element}
                onClick={onElementClick}
                className={`element-card ${
                  selectedElement?.atomic === element.atomic ? 'selected' : ''
                } ${!isHighlighted(element) ? 'dimmed' : ''}`}
                data-atomic={element.atomic}
              />
            ))}
          </div>
        </div>
        
        <div className="f-block-row">
          <div className="f-block-label">Актиноиды:</div>
          <div className="f-block-elements">
            {actinoids.map(element => (
              <Element
                key={element.atomic}
                element={element}
                onClick={onElementClick}
                className={`element-card ${
                  selectedElement?.atomic === element.atomic ? 'selected' : ''
                } ${!isHighlighted(element) ? 'dimmed' : ''}`}
                data-atomic={element.atomic}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

PeriodicTableGrid.displayName = 'PeriodicTableGrid';

export default PeriodicTableGrid;
