
import React, { useEffect } from 'react';
import { Element } from '../data/elementTypes';
import { getCategoryColor, getSeriesColor } from '../data/elements';
import { useLanguage } from '../context/LanguageContext';
import { X, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import ElementImage from './element-details/ElementImage';
import BasicInfo from './element-details/BasicInfo';
import PhysicalProperties from './element-details/PhysicalProperties';
import AtomicStructure from './element-details/AtomicStructure';
import AdditionalInfo from './element-details/AdditionalInfo';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './ui/hover-card';
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover';
import { getElement } from '../data/elements';

interface ElementDetailsProps {
  element: Element;
  onClose: () => void;
  onNavigate: (element: Element) => void;
}

const ElementDetails = ({ element, onClose, onNavigate }: ElementDetailsProps) => {
  const { t } = useLanguage();
  const categoryColor = element.category 
    ? getCategoryColor(element.category) 
    : getSeriesColor(element.series);

  // Get previous and next elements
  const prevElement = getElement(parseInt(element.atomic) - 1);
  const nextElement = getElement(parseInt(element.atomic) + 1);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && prevElement) {
        onNavigate(prevElement);
      } else if (e.key === 'ArrowRight' && nextElement) {
        onNavigate(nextElement);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [element.atomic, onClose, onNavigate, prevElement, nextElement]);
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center z-50 p-2 sm:p-4 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full mx-auto overflow-hidden animate-fade-in">
        {/* Header section with navigation */}
        <div className={`${categoryColor} p-3 sm:p-5 flex justify-between items-center relative`}>
          {/* Previous element button */}
          {prevElement && (
            <button
              onClick={() => onNavigate(prevElement)}
              className="absolute left-3 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-1.5 sm:p-2 text-gray-800 dark:text-white transition-colors"
              aria-label={`${t.elementDetails.previousElement}: ${prevElement.name}`}
            >
              <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          )}
          
          <div className="flex items-center mx-auto">
            <ElementImage element={element} categoryColor={categoryColor} />
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold">{element.symbol}</div>
              <h2 className="text-xl sm:text-2xl font-bold">{element.name}</h2>
              <p className="text-xs sm:text-sm opacity-80">{t.elementDetails.atomicNumber}: {element.atomic}</p>
            </div>
          </div>
          
          {/* Next element button */}
          {nextElement && (
            <button
              onClick={() => onNavigate(nextElement)}
              className="absolute right-10 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-1.5 sm:p-2 text-gray-800 dark:text-white transition-colors"
              aria-label={`${t.elementDetails.nextElement}: ${nextElement.name}`}
            >
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          )}
          
          <button 
            onClick={onClose}
            className="absolute right-3 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-1.5 sm:p-2 text-gray-800 dark:text-white transition-colors"
            aria-label={t.ui?.close}
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
        
        <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto dark:text-gray-200 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-850">
          {/* Main content with enhanced layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4">
              <BasicInfo element={element} />
              <ElementProperties element={element} />
            </div>
            
            <div className="space-y-4">
              <PhysicalProperties element={element} />
              <AtomicStructure element={element} categoryColor={categoryColor} />
            </div>
          </div>
          
          {/* Additional infographics and data */}
          <div className="mt-6">
            <ElectronShellVisualization element={element} categoryColor={categoryColor} />
            <AdditionalInfo element={element} />
            
            <div className="mt-4 flex justify-center">
              <a 
                href={`https://en.wikipedia.org/wiki/${element.name}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                {t.elementDetails.viewOnWikipedia} <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer navigation */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {prevElement && (
              <button
                onClick={() => onNavigate(prevElement)}
                className="flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                {prevElement.symbol}
              </button>
            )}
          </div>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {element.atomic} / 118
          </div>
          
          <div className="flex items-center space-x-2">
            {nextElement && (
              <button
                onClick={() => onNavigate(nextElement)}
                className="flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm transition-colors"
              >
                {nextElement.symbol}
                <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// New component for Element Properties with hover card for definitions
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

// Reusable component for properties with tooltip explanations
const PropertyWithTooltip = ({ label, value, tooltip }: { label: string, value: string, tooltip: string }) => {
  return (
    <>
      <div className="font-medium flex items-center">
        <HoverCard>
          <HoverCardTrigger asChild>
            <span className="cursor-help border-b border-dotted border-gray-400">{label}:</span>
          </HoverCardTrigger>
          <HoverCardContent className="text-xs p-2">
            {tooltip}
          </HoverCardContent>
        </HoverCard>
      </div>
      <div>{value}</div>
    </>
  );
};

// New component for electron shell visualization
const ElectronShellVisualization = ({ element, categoryColor }: { element: Element, categoryColor: string }) => {
  const { t } = useLanguage();
  
  if (!element.electrons || element.electrons.length === 0) return null;
  
  return (
    <div className="mt-6 bg-white dark:bg-gray-800 rounded-md p-4 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-base sm:text-lg font-bold mb-3">{t.elementDetails.electronShellVisualization}</h3>
      <div className="flex justify-center py-4">
        <div className="relative">
          {/* Electron shells visualization */}
          {element.electrons.map((count, index) => {
            const diameter = (index + 1) * 40;
            return (
              <div 
                key={index}
                className="rounded-full absolute border border-gray-300 dark:border-gray-600"
                style={{
                  width: `${diameter}px`,
                  height: `${diameter}px`,
                  left: `calc(50% - ${diameter / 2}px)`,
                  top: `calc(50% - ${diameter / 2}px)`,
                }}
              >
                {/* Electrons in the shell */}
                {Array.from({ length: Math.min(count, 8) }).map((_, i) => {
                  const angle = (i / Math.min(count, 8)) * Math.PI * 2;
                  const x = Math.cos(angle) * (diameter / 2);
                  const y = Math.sin(angle) * (diameter / 2);
                  return (
                    <div
                      key={i}
                      className={`absolute w-3 h-3 rounded-full ${categoryColor}`}
                      style={{
                        left: `calc(50% + ${x}px - 6px)`,
                        top: `calc(50% + ${y}px - 6px)`,
                      }}
                    />
                  );
                })}
              </div>
            );
          })}
          {/* Nucleus */}
          <div className={`${categoryColor} w-8 h-8 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-xs font-bold`}>
            {element.symbol}
          </div>
        </div>
      </div>
      <div className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">
        {t.elementDetails.electronConfiguration}: {element.electronstring}
      </div>
    </div>
  );
};

export default ElementDetails;
