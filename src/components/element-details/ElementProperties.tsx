
import React from 'react';
import { Element } from '../../data/elementTypes';
import { useLanguage } from '../../context/LanguageContext';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '../ui/tooltip';

const PropertyWithTooltip = ({ label, value, tooltip }: { label: string, value: string, tooltip: string }) => {
  return (
    <>
      <div className="font-medium flex items-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="cursor-help border-b border-dotted border-gray-400">{label}:</span>
            </TooltipTrigger>
            <TooltipContent className="text-xs p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 shadow-md z-50">
              {tooltip}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div>{value}</div>
    </>
  );
};

const ElementProperties = ({ element }: { element: Element }) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-md p-4 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-base sm:text-lg font-bold mb-2">{t.elementDetails.properties}</h3>
      <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs sm:text-sm">
        {element.electroneg && (
          <PropertyWithTooltip
            label={t.elementDetails.electronegativity}
            value={element.electroneg}
            tooltip="Measure of an atom's ability to attract electrons in a chemical bond"
          />
        )}
        
        {element.valence && (
          <PropertyWithTooltip
            label={t.elementDetails.valence}
            value={element.valence}
            tooltip="Number of electrons in the outermost shell"
          />
        )}
        
        {element.oxidation && (
          <PropertyWithTooltip
            label={t.elementDetails.oxidationStates}
            value={element.oxidation}
            tooltip="The charge an atom can have due to loss or gain of electrons"
          />
        )}
        
        {element.isotopes && (
          <PropertyWithTooltip
            label={t.elementDetails.isotopes}
            value={element.isotopes.toString()}
            tooltip="Variants of the element with different numbers of neutrons"
          />
        )}
      </div>
    </div>
  );
};

export default ElementProperties;
