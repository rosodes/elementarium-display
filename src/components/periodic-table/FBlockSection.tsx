
import React, { memo } from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import { elements } from '../../data/elements';
import PeriodRow from './PeriodRow';

// Helper function to safely find element
const findElement = (atomicNumber: number | string): ElementType | null => {
  const element = elements.find(e => e && e.atomic === atomicNumber.toString());
  if (!element || typeof element !== 'object') return null;
  if (!('atomic' in element)) return null;
  return element as ElementType;
};

interface FBlockSectionProps {
  onElementClick: (element: ElementType) => void;
}

// returns correct array of Ce(58)-Lu(71), Th(90)-Lr(103) without La/Ac
const getFBlockRow = (
  start: number,
  end: number,
  keyPrefix: string,
  onElementClick: (element: ElementType) => void
) => {
  const arr = [];
  for (let i = start; i <= end; i++) {
    const element = findElement(i);
    if (element) {
      arr.push(
        <div key={`${keyPrefix}-${i}`} className="f-block-element-wrapper" style={{ width: 76, height: 76 }}>
          <div style={{ width: '100%', height: '100%' }}>
            {/* Используем одинаковый контейнер для лучшей сетки */}
            <PeriodRow
              periodLabel=""
              elements={[
                <div key={`el-${i}`} style={{ width: 76, height: 76 }}>
                  {/* Передаем onElementClick как нужно */}
                  <element.type
                    {...element}
                    element={element}
                    onClick={() => onElementClick(element)}
                  />
                </div>
              ]}
              className=""
            />
          </div>
        </div>
      );
    }
  }
  return arr;
};

const FBlockSection = memo(({ onElementClick }: FBlockSectionProps) => {
  // Лантаноиды: Ce(58) - Lu(71)
  const lanthanides = [];
  for (let i = 58; i <= 71; i++) {
    const element = findElement(i);
    if (element) {
      lanthanides.push(
        <div key={`lanthanide-${i}`} className="f-block-element-wrapper" style={{ width: 76, height: 76 }}>
          <PeriodRow
            periodLabel=""
            elements={[
              <Element
                key={`el-${i}`}
                element={element}
                onClick={() => onElementClick(element)}
                className="element-card w-[76px] h-[76px]"
              />
            ]}
            className=""
          />
        </div>
      );
    }
  }
  // Актиноиды: Th(90) - Lr(103)
  const actinides = [];
  for (let i = 90; i <= 103; i++) {
    const element = findElement(i);
    if (element) {
      actinides.push(
        <div key={`actinide-${i}`} className="f-block-element-wrapper" style={{ width: 76, height: 76 }}>
          <PeriodRow
            periodLabel=""
            elements={[
              <Element
                key={`el-${i}`}
                element={element}
                onClick={() => onElementClick(element)}
                className="element-card w-[76px] h-[76px]"
              />
            ]}
            className=""
          />
        </div>
      );
    }
  }

  // Количество должно быть ровно 14 в каждой строке:
  // lanthanides: 58-71 => 14 элементов
  // actinides: 90-103 => 14 элементов
  // Проверим их число. Если меньше — вставим пустые div
  while (lanthanides.length < 14) {
    lanthanides.push(<div key={`lanthanide-empty-${lanthanides.length}`} style={{ width: 76, height: 76 }} />);
  }
  while (actinides.length < 14) {
    actinides.push(<div key={`actinide-empty-${actinides.length}`} style={{ width: 76, height: 76 }} />);
  }

  return (
    <div className="f-block-section">
      <div className="f-block-table" style={{ padding: 0, gap: 0, background: 'none', border: 'none' }}>
        <div className="f-block-row" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 0, marginBottom: 4 }}>
          <div className="f-block-label" style={{ minWidth: 40, height: 76, marginRight: 6 }}>6*</div>
          <div className="f-block-elements-container" style={{ display: 'flex', flexDirection: 'row', gap: 0 }}>
            {lanthanides}
          </div>
        </div>
        <div className="f-block-row" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 0 }}>
          <div className="f-block-label" style={{ minWidth: 40, height: 76, marginRight: 6 }}>7*</div>
          <div className="f-block-elements-container" style={{ display: 'flex', flexDirection: 'row', gap: 0 }}>
            {actinides}
          </div>
        </div>
      </div>
    </div>
  );
});

FBlockSection.displayName = 'FBlockSection';
export default FBlockSection;
