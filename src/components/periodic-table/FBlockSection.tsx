
import React, { memo } from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import { renderLanthanides, renderActinides } from './fBlockRows';
import { useLanguage } from '../../context/LanguageContext';

interface FBlockSectionProps {
  onElementClick: (element: ElementType) => void;
}

const FBlockSection = memo(({ onElementClick }: FBlockSectionProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="lanthanide-actinide-section">
      {/* Section title */}
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          {t.elementDetails?.fBlockElements || "Лантаноиды и Актиноиды"}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {t.elementDetails?.fBlockDescription || "Внутренние переходные элементы"}
        </p>
      </div>
      
      {/* F-block grid container */}
      <div className="f-block-container">
        {renderLanthanides(onElementClick, false)}
        {renderActinides(onElementClick, false)}
      </div>
      
      {/* Visual connector indicators */}
      <div className="flex justify-center mt-2 space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-0.5 bg-gray-400"></div>
          <span className="text-xs text-gray-500">La-Lu (6-й период)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-0.5 bg-gray-400"></div>
          <span className="text-xs text-gray-500">Ac-Lr (7-й период)</span>
        </div>
      </div>
    </div>
  );
});

FBlockSection.displayName = 'FBlockSection';

export default FBlockSection;
