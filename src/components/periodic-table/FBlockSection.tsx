
import React, { memo } from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import { elements } from '../../data/elements';
import Element from '../Element';

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
    row.push(
      element ? (
        <Element
          key={`fblock-${i}`}
          element={element}
          onClick={() => onElementClick(element)}
          className="element-card w-[76px] h-[76px] min-w-[76px] min-h-[76px] max-w-[76px] max-h-[76px] flex-none"
          style={{ width: 76, height: 76, minWidth: 76, minHeight: 76, maxWidth: 76, maxHeight: 76 }}
        />
      ) : (
        <div
          key={`fblock-empty-${i}`}
          className="element-card w-[76px] h-[76px] min-w-[76px] min-h-[76px] max-w-[76px] max-h-[76px] flex-none bg-transparent"
          tabIndex={-1}
          aria-hidden="true"
          style={{ width: 76, height: 76, minWidth: 76, minHeight: 76, maxWidth: 76, maxHeight: 76 }}
        />
      )
    );
  }
  // Ensure there are 14 elements in total (shouldn't happen for correct data, but гарантируем)
  while (row.length < 14) {
    row.push(
      <div
        key={`fblock-empty-extra-${row.length}`}
        className="element-card w-[76px] h-[76px] min-w-[76px] min-h-[76px] max-w-[76px] max-h-[76px] flex-none bg-transparent"
        tabIndex={-1}
        aria-hidden="true"
        style={{ width: 76, height: 76, minWidth: 76, minHeight: 76, maxWidth: 76, maxHeight: 76 }}
      />
    );
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
      <div className="f-block-table" style={{ background: 'none', border: 'none', padding: 0 }}>
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
            className="f-block-elements-container flex flex-row gap-[4px]"
            style={{
              gap: 4,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
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
            className="f-block-elements-container flex flex-row gap-[4px]"
            style={{
              gap: 4,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
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

