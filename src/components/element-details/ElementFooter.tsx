
import React from 'react';
import { ArrowLeft, ArrowRight, Info } from 'lucide-react';
import { Element } from '../../data/elementTypes';
import { useLanguage } from '../../context/LanguageContext';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

interface ElementFooterProps {
  element: Element;
  prevElement: Element | null;
  nextElement: Element | null;
  onNavigate: (element: Element) => void;
}

const ElementFooter = ({ element, prevElement, nextElement, onNavigate }: ElementFooterProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="border-t border-gray-200 dark:border-gray-700 p-3 flex justify-between items-center bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-750">
      <div className="flex items-center space-x-2">
        {prevElement && (
          <button
            onClick={() => onNavigate(prevElement)}
            className="flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm transition-colors select-text"
            aria-label={`${t.elementDetails.previousElement}: ${prevElement.name}`}
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline mr-1">{prevElement.name}</span>
            <span>{prevElement.symbol}</span>
          </button>
        )}
      </div>
      
      <div className="flex items-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm select-text">
                <Info className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-500 dark:text-gray-400">{element.atomic} / 118</span>
              </div>
            </TooltipTrigger>
            <TooltipContent className="p-2 max-w-xs">
              <p className="text-xs">
                {element.name} ({element.symbol}) is element #{element.atomic} of 118 known elements in the periodic table.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <div className="flex items-center space-x-2">
        {nextElement && (
          <button
            onClick={() => onNavigate(nextElement)}
            className="flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm transition-colors select-text"
            aria-label={`${t.elementDetails.nextElement}: ${nextElement.name}`}
          >
            <span className="hidden sm:inline mr-1">{nextElement.name}</span>
            <span>{nextElement.symbol}</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ElementFooter;

