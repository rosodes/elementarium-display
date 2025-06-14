
import React, { memo } from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import { renderLanthanides, renderActinides } from './fBlockRows';

interface FBlockSectionProps {
  onElementClick: (element: ElementType) => void;
}

const FBlockSection = memo(({ onElementClick }: FBlockSectionProps) => {
  return (
    <div className="lanthanide-actinide-section">
      <div className="f-block-container">
        {renderLanthanides(onElementClick, false)}
        {renderActinides(onElementClick, false)}
      </div>
    </div>
  );
});

FBlockSection.displayName = 'FBlockSection';

export default FBlockSection;
