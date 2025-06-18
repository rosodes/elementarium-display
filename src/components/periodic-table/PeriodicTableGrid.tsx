
import React, { useMemo } from 'react';
import { Element } from '../../data/elementTypes';
import ElementCard from '../elements/ElementCard';
import PeriodLabel from './PeriodLabel';
import GroupLabel from './GroupLabel';

interface PeriodicTableGridProps {
  elements: (Element | null)[];
  onElementClick: (element: Element) => void;
  searchTerm?: string;
  selectedCategory?: string;
}

interface GridCell {
  type: 'element' | 'period' | 'group' | 'empty';
  data?: Element;
  number?: number;
  row: number;
  col: number;
}

const PeriodicTableGrid: React.FC<PeriodicTableGridProps> = ({
  elements,
  onElementClick,
  searchTerm = '',
  selectedCategory
}) => {
  const gridCells = useMemo(() => {
    const cells: GridCell[] = [];
    
    // Create grid structure (19 columns x 8 rows)
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 19; col++) {
        if (row === 0 && col === 0) {
          // Top-left corner - empty
          cells.push({ type: 'empty', row, col });
        } else if (row === 0) {
          // Group headers
          cells.push({ type: 'group', number: col, row, col });
        } else if (col === 0) {
          // Period labels
          cells.push({ type: 'period', number: row, row, col });
        } else {
          // Element positions
          const element = getElementByPosition(row, col, elements);
          if (element) {
            cells.push({ type: 'element', data: element, row, col });
          } else {
            cells.push({ type: 'empty', row, col });
          }
        }
      }
    }
    
    return cells;
  }, [elements]);

  const filteredCells = useMemo(() => {
    return gridCells.map(cell => {
      if (cell.type !== 'element' || !cell.data) return cell;
      
      const element = cell.data;
      const matchesSearch = !searchTerm || 
        element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        element.symbol.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = !selectedCategory || 
        element.series === selectedCategory ||
        element.category === selectedCategory;
      
      return {
        ...cell,
        visible: matchesSearch && matchesCategory
      };
    });
  }, [gridCells, searchTerm, selectedCategory]);

  return (
    <div className="periodic-table-grid">
      {filteredCells.map((cell, index) => (
        <div
          key={`${cell.row}-${cell.col}`}
          className={`grid-cell ${cell.type}`}
          style={{
            gridRow: cell.row + 1,
            gridColumn: cell.col + 1
          }}
        >
          {renderGridCell(cell, onElementClick)}
        </div>
      ))}
    </div>
  );
};

const getElementByPosition = (row: number, col: number, elements: (Element | null)[]): Element | null => {
  // Standard periodic table positioning logic
  const positionMap: Record<string, number> = {
    // Period 1
    '1-1': 1, '1-18': 2,
    // Period 2
    '2-1': 3, '2-2': 4, '2-13': 5, '2-14': 6, '2-15': 7, '2-16': 8, '2-17': 9, '2-18': 10,
    // Period 3
    '3-1': 11, '3-2': 12, '3-13': 13, '3-14': 14, '3-15': 15, '3-16': 16, '3-17': 17, '3-18': 18,
    // Period 4
    '4-1': 19, '4-2': 20, '4-3': 21, '4-4': 22, '4-5': 23, '4-6': 24, '4-7': 25, '4-8': 26,
    '4-9': 27, '4-10': 28, '4-11': 29, '4-12': 30, '4-13': 31, '4-14': 32, '4-15': 33, '4-16': 34, '4-17': 35, '4-18': 36,
    // Continue for all periods...
  };
  
  const key = `${row}-${col}`;
  const atomicNumber = positionMap[key];
  
  return atomicNumber && elements[atomicNumber] ? elements[atomicNumber] : null;
};

const renderGridCell = (cell: GridCell, onElementClick: (element: Element) => void) => {
  switch (cell.type) {
    case 'element':
      return cell.data ? (
        <ElementCard
          element={cell.data}
          onClick={() => onElementClick(cell.data!)}
          highlighted={cell.visible !== false}
        />
      ) : null;
    
    case 'group':
      return <GroupLabel number={cell.number!} />;
    
    case 'period':
      return <PeriodLabel number={cell.number!} />;
    
    default:
      return null;
  }
};

export default React.memo(PeriodicTableGrid);
