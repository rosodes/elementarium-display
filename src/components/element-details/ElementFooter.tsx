
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Element } from '../../data/elementTypes';
import { useLanguage } from '../../context/LanguageContext';

interface ElementFooterProps {
  element: Element;
  prevElement: Element | null;
  nextElement: Element | null;
  onNavigate: (element: Element) => void;
}

const ElementFooter = ({ element, prevElement, nextElement, onNavigate }: ElementFooterProps) => {
  const { t } = useLanguage();
  
  return (
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
  );
};

export default ElementFooter;
