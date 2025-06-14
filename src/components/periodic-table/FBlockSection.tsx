
import React, { memo } from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import { renderLanthanides, renderActinides } from './fBlockRows';

interface FBlockSectionProps {
  onElementClick: (element: ElementType) => void;
}

const FBlockSection = memo(({ onElementClick }: FBlockSectionProps) => {
  return (
    <div className="lanthanide-actinide-section mt-6">
      <div className="f-block-container flex flex-col gap-0">
        {renderLanthanides(onElementClick, true)}
        {renderActinides(onElementClick, true)}
      </div>
    </div>
  );
});

FBlockSection.displayName = 'FBlockSection';

export default FBlockSection;
