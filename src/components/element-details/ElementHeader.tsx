
import React from 'react';
import { X } from 'lucide-react';
import { Element } from '../../data/elementTypes';
import ElementImage from './ElementImage';
import { useLanguage } from '../../context/LanguageContext';

interface ElementHeaderProps {
  element: Element;
  categoryColor: string;
  prevElement: Element | null; // Оставляем в props для совместимости, но не используем
  nextElement: Element | null; // Оставляем в props для совместимости, но не используем
  onClose: () => void;
  onNavigate: (element: Element) => void;
  isFullPage?: boolean; // Prop to adjust styles for full page
}

const ElementHeader = ({ 
  element, 
  categoryColor, 
  // prevElement, // больше не используем
  // nextElement, // больше не используем
  onClose, 
  // onNavigate, // больше не используем
  isFullPage = false
}: ElementHeaderProps) => {
  const { t } = useLanguage();
  
  // Use semantic heading level based on context
  const HeadingTag = isFullPage ? 'h1' : 'h2' as keyof JSX.IntrinsicElements;
  
  // Расширенные микроданные для SEO
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ChemicalElement',
    'name': element.name,
    'alternateName': element.symbol,
    'atomicNumber': element.atomic,
    'atomicWeight': element.weight,
    'description': `${element.name} (${element.symbol}), ${t.elementDetails.atomicNumber}: ${element.atomic}`,
    'image': `${window.location.origin}/element-images/${element.symbol.toLowerCase()}.svg`,
    'sameAs': [
      `https://en.wikipedia.org/wiki/${element.name}`,
      `https://www.britannica.com/science/${element.name.toLowerCase()}`
    ]
  };
  
  return (
    <header 
      className={`${isFullPage ? 'bg-gradient-to-r from-opacity-20 to-opacity-10' : 'bg-gradient-to-r from-white/20 to-white/5'} relative p-3 sm:p-5 flex justify-between items-center`}
      style={{ 
        backgroundColor: categoryColor.split(' ')[0],
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}
      itemScope={isFullPage}
      itemType={isFullPage ? "http://schema.org/ChemicalElement" : undefined}
      aria-labelledby={`element-${element.atomic}-name`}
      aria-describedby={isFullPage ? `element-${element.atomic}-description` : undefined}
    >
      {/* Структурированные данные для поисковых систем */}
      {isFullPage && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      )}

      {/* Element number badge */}
      <div className="absolute top-3 left-3 bg-white/30 rounded-full px-2 py-0.5 text-xs font-bold">
        <meta itemProp="atomicNumber" content={element.atomic.toString()} />
        {element.atomic}
      </div>

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
          <HeadingTag 
            id={`element-${element.atomic}-name`} 
            className="text-xl sm:text-3xl font-bold mt-1" 
            itemProp="name"
          >
            {element.name}
          </HeadingTag>
          <p className="text-xs sm:text-sm opacity-80 mt-1">
            {t.elementDetails.atomicNumber}: <span itemProp="atomicNumber">{element.atomic}</span> • 
            {t.elementDetails.atomicWeight}: <span itemProp="atomicWeight">{element.weight}</span>
          </p>
          
          {/* Дополнительная семантическая информация для поисковых систем */}
          {isFullPage && (
            <>
              <meta itemProp="description" content={`${element.name} (${element.symbol}), ${t.elementDetails.atomicNumber}: ${element.atomic}, ${t.elementDetails.atomicWeight}: ${element.weight}`} />
              <link itemProp="image" href={`/element-images/${element.symbol.toLowerCase()}.svg`} />
            </>
          )}
        </div>
      </div>
      
      {/* Дополнительный семантический блок для доступности и SEO */}
      {isFullPage && (
        <div id={`element-${element.atomic}-description`} className="sr-only">
          {element.name} ({element.symbol}), {t.elementDetails.atomicNumber}: {element.atomic}, {t.elementDetails.atomicWeight}: {element.weight}. 
          {element.category && `${t.categories[element.category.toLowerCase() as keyof typeof t.categories]}.`}
        </div>
      )}
    </header>
  );
};

export default ElementHeader;
