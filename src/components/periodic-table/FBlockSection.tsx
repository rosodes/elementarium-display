
import React, { memo } from 'react';
import Element from '../Element';
import { Element as ElementType } from '../../data/elementTypes';
import { elements } from '../../data/elements';

interface FBlockSectionProps {
  onElementClick: (element: ElementType) => void;
}

const findElement = (atomicNumber: number | string): ElementType | null => {
  const element = elements.find(e => e && e.atomic === atomicNumber.toString());
  if (!element || typeof element !== 'object') return null;
  if (!('atomic' in element)) return null;
  return element as ElementType;
};

const FBlockSection = memo(({ onElementClick }: FBlockSectionProps) => {
  // Generate lanthanides (57-71)
  const lanthanides = [];
  for (let i = 57; i <= 71; i++) {
    const element = findElement(i);
    if (element) {
      lanthanides.push(
        <Element 
          key={`lanthanide-${i}`}
          element={element}
          onClick={() => onElementClick(element)}
        />
      );
    }
  }

  // Generate actinides (89-103)
  const actinides = [];
  for (let i = 89; i <= 103; i++) {
    const element = findElement(i);
    if (element) {
      actinides.push(
        <Element 
          key={`actinide-${i}`}
          element={element}
          onClick={() => onElementClick(element)}
        />
      );
    }
  }

  return (
    <div className="f-block-section">
      <div className="f-block-table">
        {/* Lanthanides row */}
        <div className="f-block-row">
          <div className="f-block-label">6*</div>
          <div className="f-block-elements-container">
            {lanthanides}
          </div>
        </div>
        {/* Actinides row */}
        <div className="f-block-row">
          <div className="f-block-label">7*</div>
          <div className="f-block-elements-container">
            {actinides}
          </div>
        </div>
      </div>
    </div>
  );
});

FBlockSection.displayName = 'FBlockSection';

export default FBlockSection;
