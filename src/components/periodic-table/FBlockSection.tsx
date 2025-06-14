
import React, { memo } from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import { elements } from '../../data/elements';
import PeriodRow from './PeriodRow';
import Element from '../Element'; // Correct import

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

// Helper to get a row of f-block elements (returns array of <Element ... />)
function getFBlockRow(
  start: number,
  end: number,
  onElementClick: (element: ElementType) => void
): React.ReactNode[] {
  const row: React.ReactNode[] = [];
  for (let i = start; i <= end; i++) {
    const element = findElement(i);
    if (element) {
      row.push(
        <Element
          key={`fblock-${i}`}
          element={element}
          onClick={() => onElementClick(element)}
          className="element-card w-[76px] h-[76px]"
        />
      );
    }
  }
  // Ensure there are 14 elements in total (shouldn't be needed, but just in case)
  while (row.length < 14) {
    row.push(<div key={`fblock-empty-${row.length}`} className="w-[76px] h-[76px]" />);
  }
  return row;
}

const FBlockSection = memo(({ onElementClick }: FBlockSectionProps) => {
  // Лантаноиды: Ce(58) - Lu(71) — 14 элементов (без La(57))
  const lanthanides = getFBlockRow(58, 71, onElementClick);
  // Актиноиды: Th(90) - Lr(103) — 14 элементов (без Ac(89))
  const actinides = getFBlockRow(90, 103, onElementClick);

  return (
    <div className="f-block-section">
      <div
        className="f-block-table"
        style={{ padding: 0, gap: 0, background: 'none', border: 'none' }}
      >
        <div
          className="f-block-row"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 0,
            marginBottom: 4,
          }}
        >
          <div className="f-block-label" style={{ minWidth: 40, height: 76, marginRight: 6 }}>
            6*
          </div>
          <div
            className="f-block-elements-container"
            style={{ display: 'flex', flexDirection: 'row', gap: 0 }}
          >
            {lanthanides}
          </div>
        </div>
        <div
          className="f-block-row"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 0,
          }}
        >
          <div className="f-block-label" style={{ minWidth: 40, height: 76, marginRight: 6 }}>
            7*
          </div>
          <div
            className="f-block-elements-container"
            style={{ display: 'flex', flexDirection: 'row', gap: 0 }}
          >
            {actinides}
          </div>
        </div>
      </div>
    </div>
  );
});

FBlockSection.displayName = 'FBlockSection';
export default FBlockSection;
