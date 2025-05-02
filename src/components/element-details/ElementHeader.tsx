
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
  isFullPage?: boolean; // Prop to adjust styles for full page
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
  
  // Use semantic heading level based on context
  const HeadingTag = isFullPage ? 'h1' : 'h2' as keyof JSX.IntrinsicElements;
  
  return (
    <header 
      className={`${isFullPage ? 'bg-gradient-to-r from-opacity-20 to-opacity-10' : 'bg-gradient-to-r from-white/20 to-white/5'} relative p-3 sm:p-5 flex justify-between items-center`}
      style={{ 
        backgroundColor: categoryColor.split(' ')[0],
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}
      itemScope={isFullPage}
      itemType={isFullPage ? "http://schema.org/ChemicalElement" : undefined}
    >
      {/* Element number badge */}
      <div className="absolute top-3 left-3 bg-white/30 rounded-full px-2 py-0.5 text-xs font-bold">
        <meta itemProp="atomicNumber" content={element.atomic.toString()} />
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
          <div className="text-4xl sm:text-6xl font-bold tracking-tight" itemProp="alternateName">{element.symbol}</div>
          <HeadingTag className="text-xl sm:text-3xl font-bold mt-1" itemProp="name">{element.name}</HeadingTag>
          <p className="text-xs sm:text-sm opacity-80 mt-1">
            {t.elementDetails.atomicNumber}: {element.atomic} • {t.elementDetails.atomicWeight}: <span itemProp="atomicWeight">{element.weight}</span>
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
    </header>
  );
};

export default ElementHeader;
