
import React from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { Element } from '../../data/elementTypes';
import ElementImage from './ElementImage';
import { useLanguage } from '../../context/LanguageContext';

interface ElementHeaderProps {
  element: Element;
  categoryColor: string;
  prevElement: Element | null;
  nextElement: Element | null;
  onClose: () => void;
  onNavigate: (element: Element) => void;
  isFullPage?: boolean; // New prop to adjust styles for full page
}

const ElementHeader = ({ 
  element, 
  categoryColor, 
  prevElement, 
  nextElement, 
  onClose, 
  onNavigate,
  isFullPage = false
}: ElementHeaderProps) => {
  const { t } = useLanguage();
  
  return (
    <div 
      className={`bg-gradient-to-r from-white/20 to-white/5 relative p-3 sm:p-5 flex justify-between items-center`}
      style={{ 
        backgroundColor: categoryColor.split(' ')[0],
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}
    >
      {/* Element number badge */}
      <div className="absolute top-3 left-3 bg-white/30 rounded-full px-2 py-0.5 text-xs font-bold">
        {element.atomic}
      </div>

      {/* Previous element button */}
      {prevElement && (
        <button
          onClick={() => onNavigate(prevElement)}
          className="absolute left-12 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-1.5 sm:p-2 text-gray-800 dark:text-white transition-colors"
          aria-label={`${t.elementDetails.previousElement}: ${prevElement.name}`}
        >
          <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      )}
      
      {/* Close button - only show in popup mode */}
      {!isFullPage && (
        <button 
          onClick={onClose}
          className="absolute right-3 top-3 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-1.5 sm:p-2 text-gray-800 dark:text-white transition-colors z-10"
          aria-label={t.ui?.close}
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      )}
      
      <div className="flex items-center mx-auto">
        <ElementImage element={element} categoryColor={categoryColor} />
        <div className="text-center">
          <div className="text-4xl sm:text-6xl font-bold tracking-tight">{element.symbol}</div>
          <h2 className="text-xl sm:text-3xl font-bold mt-1">{element.name}</h2>
          <p className="text-xs sm:text-sm opacity-80 mt-1">
            {t.elementDetails.atomicNumber}: {element.atomic} • {t.elementDetails.atomicWeight}: {element.weight}
          </p>
        </div>
      </div>
      
      {/* Next element button */}
      {nextElement && (
        <button
          onClick={() => onNavigate(nextElement)}
          className="absolute right-12 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-1.5 sm:p-2 text-gray-800 dark:text-white transition-colors"
          aria-label={`${t.elementDetails.nextElement}: ${nextElement.name}`}
        >
          <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      )}
    </div>
  );
};

export default ElementHeader;
