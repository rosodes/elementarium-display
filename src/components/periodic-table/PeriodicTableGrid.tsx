
import React from 'react';
import { Element } from '../../data/elementTypes';

interface GridCell {
  element?: Element;
  isEmpty?: boolean;
  isLanthanide?: boolean;
  isActinide?: boolean;
}

interface PeriodicTableGridProps {
  elements: (Element | null)[];
  onElementClick: (element: Element) => void;
  highlightedElements?: string[];
}

const PeriodicTableGrid: React.FC<PeriodicTableGridProps> = ({
  elements,
  onElementClick,
  highlightedElements = []
}) => {
  // Create grid structure
  const createGrid = (): GridCell[][] => {
    const grid: GridCell[][] = Array(10).fill(null).map(() => Array(18).fill(null).map(() => ({ isEmpty: true })));
    
    elements.forEach((element, index) => {
      if (!element) return;
      
      const period = element.period - 1;
      const group = element.group - 1;
      
      if (period >= 0 && period < 10 && group >= 0 && group < 18) {
        grid[period][group] = { element };
      }
    });
    
    return grid;
  };

  const grid = createGrid();

  return (
    <div className="periodic-table-grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, colIndex) => {
            if (cell.isEmpty) {
              return <div key={colIndex} className="empty-cell" />;
            }
            
            if (cell.element) {
              const isHighlighted = highlightedElements.includes(cell.element.symbol);
              return (
                <div
                  key={colIndex}
                  className={`element-cell ${isHighlighted ? 'highlighted' : ''}`}
                  onClick={() => onElementClick(cell.element!)}
                >
                  <div className="atomic-number">{cell.element.atomic}</div>
                  <div className="symbol">{cell.element.symbol}</div>
                  <div className="name">{cell.element.name}</div>
                  <div className="weight">{cell.element.weight}</div>
                </div>
              );
            }
            
            return <div key={colIndex} className="empty-cell" />;
          })}
        </div>
      ))}
    </div>
  );
};

export default PeriodicTableGrid;
