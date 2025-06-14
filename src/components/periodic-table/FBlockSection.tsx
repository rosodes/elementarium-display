
import React, { memo } from 'react';
import Element from '../Element';
import { Element as ElementType } from '../../data/elementTypes';
import { useLanguage } from '../../context/LanguageContext';
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
  const { t } = useLanguage();
  
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
    
    return actinideElements;
  };
  
  return (
    <div className="f-block-section">
      {/* Section title */}
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          {t.elementDetails?.fBlockElements || "Лантаноиды и Актиноиды"}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {t.elementDetails?.fBlockDescription || "Внутренние переходные элементы"}
        </p>
      </div>
      
      {/* F-block table */}
      <div className="f-block-table">
        {/* Lanthanides row */}
        <div className="f-block-row">
          <div className="f-block-label">6*</div>
          <div className="f-block-elements">
            {renderLanthanides()}
          </div>
        </div>
        
        {/* Actinides row */}
        <div className="f-block-row">
          <div className="f-block-label">7*</div>
          <div className="f-block-elements">
            {renderActinides()}
          </div>
        </div>
      </div>
      
      {/* Visual indicators */}
      <div className="flex justify-center mt-2 space-x-6 text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-1 bg-blue-400 rounded"></div>
          <span>Лантаноиды (La-Lu)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-1 bg-purple-400 rounded"></div>
          <span>Актиноиды (Ac-Lr)</span>
        </div>
      </div>
    </div>
  );
});

FBlockSection.displayName = 'FBlockSection';

export default FBlockSection;
