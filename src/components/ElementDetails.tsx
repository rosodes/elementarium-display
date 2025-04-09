
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
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './ui/tooltip';
import { getElement } from '../data/elements';
import ElectronShellVisualization from './element-details/ElectronShellVisualization';
import ElementProperties from './element-details/ElementProperties';

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
          
          {/* Close button - moved to the top right corner away from the navigation arrow */}
          <button 
            onClick={onClose}
            className="absolute right-3 top-3 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-1.5 sm:p-2 text-gray-800 dark:text-white transition-colors"
            aria-label={t.ui?.close}
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          
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

export default ElementDetails;
