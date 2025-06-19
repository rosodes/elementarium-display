
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

  const lanthanoids = getLanthanoids();
  const actinoids = getActinoids();

  // Рендер элемента
  const renderElement = (element: ElementType) => {
    return (
      <Element
        key={element.atomic}
        element={element}
        onClick={onElementClick}
        className={`element-card ${
          selectedElement?.atomic === element.atomic ? 'selected' : ''
        } ${!isHighlighted(element) ? 'dimmed' : ''}`}
        data-atomic={element.atomic}
      />
    );
  };

  // Рендер пустой ячейки
  const renderEmptyCell = (key: string) => {
    return <div key={key} className="empty-cell" />;
  };

  // Рендер заголовка группы
  const renderGroupHeader = (group: number) => {
    return (
      <div key={`group-${group}`} className="group-header">
        {group}
      </div>
    );
  };

  // Рендер номера периода
  const renderPeriodNumber = (period: number) => {
    return (
      <div key={`period-${period}`} className="period-number">
        {period}
      </div>
    );
  };

  return (
    <div className="periodic-table-container">
      {/* Основная таблица */}
      <div className="periodic-table">
        {/* Пустая ячейка в левом верхнем углу */}
        <div className="corner-cell"></div>
        
        {/* Заголовки групп 1-18 */}
        {Array.from({length: 18}, (_, i) => renderGroupHeader(i + 1))}
        
        {/* Период 1 */}
        {renderPeriodNumber(1)}
        {elements.find(el => el && el.atomic === '1') && renderElement(elements.find(el => el && el.atomic === '1')!)}
        {Array.from({length: 16}, (_, i) => renderEmptyCell(`p1-empty-${i}`))}
        {elements.find(el => el && el.atomic === '2') && renderElement(elements.find(el => el && el.atomic === '2')!)}
        
        {/* Период 2 */}
        {renderPeriodNumber(2)}
        {['3', '4'].map(atomic => {
          const element = elements.find(el => el && el.atomic === atomic);
          return element ? renderElement(element) : renderEmptyCell(`p2-${atomic}`);
        })}
        {Array.from({length: 10}, (_, i) => renderEmptyCell(`p2-empty-${i}`))}
        {['5', '6', '7', '8', '9', '10'].map(atomic => {
          const element = elements.find(el => el && el.atomic === atomic);
          return element ? renderElement(element) : renderEmptyCell(`p2-${atomic}`);
        })}
        
        {/* Период 3 */}
        {renderPeriodNumber(3)}
        {['11', '12'].map(atomic => {
          const element = elements.find(el => el && el.atomic === atomic);
          return element ? renderElement(element) : renderEmptyCell(`p3-${atomic}`);
        })}
        {Array.from({length: 10}, (_, i) => renderEmptyCell(`p3-empty-${i}`))}
        {['13', '14', '15', '16', '17', '18'].map(atomic => {
          const element = elements.find(el => el && el.atomic === atomic);
          return element ? renderElement(element) : renderEmptyCell(`p3-${atomic}`);
        })}
        
        {/* Период 4 */}
        {renderPeriodNumber(4)}
        {Array.from({length: 18}, (_, i) => {
          const atomic = String(19 + i);
          const element = elements.find(el => el && el.atomic === atomic);
          return element ? renderElement(element) : renderEmptyCell(`p4-${atomic}`);
        })}
        
        {/* Период 5 */}
        {renderPeriodNumber(5)}
        {Array.from({length: 18}, (_, i) => {
          const atomic = String(37 + i);
          const element = elements.find(el => el && el.atomic === atomic);
          return element ? renderElement(element) : renderEmptyCell(`p5-${atomic}`);
        })}
        
        {/* Период 6 */}
        {renderPeriodNumber(6)}
        {['55', '56', '57'].map(atomic => {
          const element = elements.find(el => el && el.atomic === atomic);
          return element ? renderElement(element) : renderEmptyCell(`p6-${atomic}`);
        })}
        {Array.from({length: 72}, (_, i) => {
          const atomic = String(72 + i);
          if (parseInt(atomic) > 86) return null;
          const element = elements.find(el => el && el.atomic === atomic);
          return element ? renderElement(element) : renderEmptyCell(`p6-${atomic}`);
        }).filter(Boolean)}
        
        {/* Период 7 */}
        {renderPeriodNumber(7)}
        {['87', '88', '89'].map(atomic => {
          const element = elements.find(el => el && el.atomic === atomic);
          return element ? renderElement(element) : renderEmptyCell(`p7-${atomic}`);
        })}
        {Array.from({length: 15}, (_, i) => {
          const atomic = String(104 + i);
          const element = elements.find(el => el && el.atomic === atomic);
          return element ? renderElement(element) : renderEmptyCell(`p7-${atomic}`);
        })}
      </div>
      
      {/* Лантаноиды и актиноиды */}
      <div className="f-block-section">
        <div className="f-block-row">
          <div className="f-block-label">Лантаноиды:</div>
          <div className="f-block-elements">
            {lanthanoids.map(element => renderElement(element))}
          </div>
        </div>
        
        <div className="f-block-row">
          <div className="f-block-label">Актиноиды:</div>
          <div className="f-block-elements">
            {actinoids.map(element => renderElement(element))}
          </div>
        </div>
      </div>
    </div>
  );
});

PeriodicTableGrid.displayName = 'PeriodicTableGrid';

export default PeriodicTableGrid;
