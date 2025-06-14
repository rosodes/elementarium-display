
import React, { memo } from 'react';
import Element from '../Element';
import { Element as ElementType } from '../../data/elementTypes';
import { elements } from '../../data/elements';

interface FBlockSectionProps {
  onElementClick: (element: ElementType) => void;
}

// Helper function to safely find element
const findElement = (atomicNumber: number | string): ElementType | null => {
  const element = elements.find(e => e && e.atomic === atomicNumber.toString());
  if (!element || typeof element !== 'object') return null;
  if (!('atomic' in element)) return null;
  return element as ElementType;
};

const FBlockSection = memo(({ onElementClick }: FBlockSectionProps) => {
  console.log('FBlockSection rendering...');
  
  // Generate lanthanides (elements 57-71)
  const renderLanthanides = () => {
    const lanthanideElements = [];
    
    // Add elements 57-71
    for (let i = 57; i <= 71; i++) {
      const element = findElement(i);
      if (element) {
        lanthanideElements.push(
          <Element 
            key={`lanthanide-${i}`}
            element={element}
            onClick={() => onElementClick(element)}
          />
        );
      }
    }
    
    console.log('Lanthanides count:', lanthanideElements.length);
    return lanthanideElements;
  };
  
  // Generate actinides (elements 89-103)
  const renderActinides = () => {
    const actinideElements = [];
    
    // Add elements 89-103
    for (let i = 89; i <= 103; i++) {
      const element = findElement(i);
      if (element) {
        actinideElements.push(
          <Element 
            key={`actinide-${i}`}
            element={element}
            onClick={() => onElementClick(element)}
          />
        );
      }
    }
    
    console.log('Actinides count:', actinideElements.length);
    return actinideElements;
  };
  
  const lanthanides = renderLanthanides();
  const actinides = renderActinides();
  
  return (
    <div className="f-block-section">
      {/* F-block table - без заголовков */}
      <div className="f-block-table">
        {/* Lanthanides row */}
        <div className="f-block-row" style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="f-block-label">6*</div>
          <div 
            className="f-block-elements-container" 
            style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              flexWrap: 'wrap',
              gap: '4px',
              flex: 1
            }}
          >
            {lanthanides}
          </div>
        </div>
        
        {/* Actinides row */}
        <div className="f-block-row" style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="f-block-label">7*</div>
          <div 
            className="f-block-elements-container"
            style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              flexWrap: 'wrap',
              gap: '4px',
              flex: 1
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
