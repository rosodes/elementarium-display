
import React, { memo } from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import { elements } from '../../data/elements';
import Element from '../Element';
import GroupLabel from './GroupLabel';
import PeriodLabel from './PeriodLabel';

interface PeriodicTableGridProps {
  onElementClick: (element: ElementType) => void;
  selectedElement?: ElementType | null;
  searchQuery?: string;
}

const PeriodicTableGrid = memo(({ onElementClick, selectedElement, searchQuery }: PeriodicTableGridProps) => {
  // Создаем сетку с правильным позиционированием элементов
  const createTableGrid = () => {
    const grid = Array(8).fill(null).map(() => Array(19).fill(null));
    
    // Добавляем заголовки групп
    for (let group = 1; group <= 18; group++) {
      grid[0][group] = { type: 'group', number: group };
    }
    
    // Добавляем номера периодов
    for (let period = 1; period <= 7; period++) {
      grid[period][0] = { type: 'period', number: period };
    }
    
    // Размещаем элементы по их позициям
    elements.forEach(element => {
      if (element && element.period && element.group) {
        const row = element.period;
        const col = element.group;
        
        // Специальная обработка для лантаноидов и актиноидов
        if (element.period === 6 && parseInt(element.atomic) >= 57 && parseInt(element.atomic) <= 71) {
          // Лантаноиды - отображаем в отдельной строке внизу
          return;
        }
        if (element.period === 7 && parseInt(element.atomic) >= 89 && parseInt(element.atomic) <= 103) {
          // Актиноиды - отображаем в отдельной строке внизу
          return;
        }
        
        if (row >= 1 && row <= 7 && col >= 1 && col <= 18) {
          grid[row][col] = element;
        }
      }
    });
    
    return grid;
  };
  
  // Получение лантаноидов и актиноидов для отдельного отображения
  const getLanthanoids = () => {
    return elements.filter(el => 
      el && parseInt(el.atomic) >= 57 && parseInt(el.atomic) <= 71
    ).sort((a, b) => parseInt(a.atomic) - parseInt(b.atomic));
  };
  
  const getActinoids = () => {
    return elements.filter(el => 
      el && parseInt(el.atomic) >= 89 && parseInt(el.atomic) <= 103
    ).sort((a, b) => parseInt(a.atomic) - parseInt(b.atomic));
  };
  
  const tableGrid = createTableGrid();
  const lanthanoids = getLanthanoids();
  const actinoids = getActinoids();
  
  // Проверка, должен ли элемент быть выделен при поиске
  const isHighlighted = (element: ElementType) => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    return (
      element.name.toLowerCase().includes(query) ||
      element.symbol.toLowerCase().includes(query) ||
      element.atomic.includes(query)
    );
  };
  
  const renderGridCell = (cell: any, rowIndex: number, colIndex: number) => {
    const key = `${rowIndex}-${colIndex}`;
    
    if (!cell) {
      return <div key={key} className="periodic-table-cell empty" />;
    }
    
    if (cell.type === 'group') {
      return <GroupLabel key={key} number={cell.number} />;
    }
    
    if (cell.type === 'period') {
      return <PeriodLabel key={key} number={cell.number} />;
    }
    
    // Обычный элемент
    return (
      <Element
        key={key}
        element={cell}
        onClick={onElementClick}
        className={`periodic-table-element ${
          selectedElement?.atomic === cell.atomic ? 'selected' : ''
        } ${!isHighlighted(cell) ? 'dimmed' : ''}`}
      />
    );
  };
  
  return (
    <div className="periodic-table-container">
      {/* Основная таблица */}
      <div className="periodic-table-main">
        {tableGrid.map((row, rowIndex) =>
          row.map((cell, colIndex) => renderGridCell(cell, rowIndex, colIndex))
        )}
      </div>
      
      {/* Лантаноиды и актиноиды */}
      <div className="periodic-table-f-block">
        <div className="f-block-row lanthanoids">
          <div className="f-block-label">Lanthanoids:</div>
          {lanthanoids.map(element => (
            <Element
              key={element.atomic}
              element={element}
              onClick={onElementClick}
              className={`f-block-element ${
                selectedElement?.atomic === element.atomic ? 'selected' : ''
              } ${!isHighlighted(element) ? 'dimmed' : ''}`}
            />
          ))}
        </div>
        
        <div className="f-block-row actinoids">
          <div className="f-block-label">Actinoids:</div>
          {actinoids.map(element => (
            <Element
              key={element.atomic}
              element={element}
              onClick={onElementClick}
              className={`f-block-element ${
                selectedElement?.atomic === element.atomic ? 'selected' : ''
              } ${!isHighlighted(element) ? 'dimmed' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

PeriodicTableGrid.displayName = 'PeriodicTableGrid';

export default PeriodicTableGrid;
