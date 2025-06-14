
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
      
      {/* F-block grid container - separate table */}
      <div className="f-block-container">
        {renderLanthanides(onElementClick, false)}
        {renderActinides(onElementClick, false)}
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
