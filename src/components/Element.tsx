
import { useState } from 'react';
import { Element as ElementType } from '../data/elements';
import { useValidatedTranslation } from '../hooks/useValidatedTranslation';
import { getCategoryColor } from '../data/elementCategories';
import ElementTooltip from './ElementTooltip';
import type { BaseElementProps } from '../types/componentTypes';
import type { ActionFunction, ClassName } from '../types/componentTypes';
import type { ElementSymbolKey } from '../i18n/types/languageTypes';

interface ElementProps extends BaseElementProps {
  readonly element: ElementType;
  readonly onClick: ActionFunction<ElementType>;
  readonly className?: ClassName;
  readonly style?: React.CSSProperties;
}

const Element = ({ element, onClick, className, style, ...props }: ElementProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const { t, rawT } = useValidatedTranslation('Element');
  
  // Determine the element color based on electron block with better contrast
  const getElementColor = (): ClassName => {
    // Determine block (s, p, d, f) based on electronic configuration
    if (element.expandedconfig) {
      if (element.expandedconfig.includes(' s')) return 'bg-s-block';
      if (element.expandedconfig.includes(' p')) return 'bg-p-block';
      if (element.expandedconfig.includes(' d')) return 'bg-d-block';
      if (element.expandedconfig.includes(' f')) return 'bg-f-block';
    }
    
    // If electronic configuration isn't defined, use category or series colors as CSS classes
    const categoryColor = getCategoryColor(element.category || element.series);
    return `bg-gray-100 border-gray-300`; // fallback to neutral colors
  };

  // Check if element is radioactive
  const isRadioactive = (): boolean => {
    const radioactiveElements = new Set([
      43, 61, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 
      101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118
    ]);
    return radioactiveElements.has(Number(element.atomic));
  };
  
  // Adjust font size for long element names
  const getNameFontSize = (): ClassName => {
    if (!element.name) return 'text-[8px]';
    const nameLength = element.name.length;
    
    if (nameLength > 18) return 'text-[5px] sm:text-[6px]';
    if (nameLength > 15) return 'text-[6px] sm:text-[7px]';
    if (nameLength > 12) return 'text-[7px] sm:text-[8px]';
    if (nameLength > 9) return 'text-[8px] sm:text-[9px]';
    if (nameLength > 7) return 'text-[9px] sm:text-[10px]';
    return 'text-[10px] sm:text-[11px]';
  };
  
  // Get translated element name if available
  const getElementName = (): string => {
    const elementKey = element.symbol.toLowerCase() as ElementSymbolKey;
    return rawT.ui?.elements?.[elementKey] || element.name || element.symbol;
  };
  
  // Get category color as inline styles
  const getCategoryStyles = () => {
    const categoryColor = getCategoryColor(element.category || element.series);
    return {
      backgroundColor: categoryColor.bg,
      borderColor: categoryColor.border,
      color: categoryColor.text
    };
  };
  
  const handleHoverStart = (): void => setIsHovering(true);
  const handleHoverEnd = (): void => setIsHovering(false);
  const handleClick = (): void => onClick(element);
  
  return (
    <ElementTooltip element={element}>
      <button 
        className={`element-card transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-primary
                  hover:shadow-lg hover:scale-105 flex-shrink-0 relative border-2
                  dark:shadow-black/30 flex flex-col justify-between p-1 sm:p-1.5
                  ${isHovering ? 'z-10 shadow-xl' : ''} ${className || ''}`}
        onClick={handleClick}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        onFocus={handleHoverStart}
        onBlur={handleHoverEnd}
        aria-label={`${getElementName()} (${element.symbol}), ${t('elementDetails.atomicNumber')} ${element.atomic}`}
        data-atomic={element.atomic}
        tabIndex={0}
        style={{...getCategoryStyles(), ...style}}
        {...props}
      >
        <div className="flex justify-between items-start w-full">
          <div className="text-[7px] sm:text-[9px] font-semibold">{element.atomic}</div>
          {element.oxidation && (
            <div className="text-[7px] sm:text-[9px]">
              {element.oxidation.split(',')[0]?.replace('c', '') || ''}
            </div>
          )}
        </div>
        
        <div className="text-center flex-grow flex flex-col justify-center items-center">
          <div className="text-sm sm:text-lg md:text-xl font-bold">{element.symbol}</div>
          <div className={`${getNameFontSize()} truncate max-w-full font-medium leading-tight`}>
            {getElementName()}
          </div>
        </div>
        
        <div className="flex justify-between items-end w-full">
          <div className="text-[6px] sm:text-[8px] opacity-80">{element.weight}</div>
          {isRadioactive() && (
            <div 
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 animate-pulse-subtle" 
              title={t('ui.radioactive', 'Radioactive')} 
              aria-label={t('ui.radioactive', 'Radioactive element')}
            />
          )}
        </div>
        
        {/* Hidden detailed information for screen readers */}
        <span className="sr-only">
          {t('elementDetails.series')}: {element.series}. 
          {element.discover ? `${t('elementDetails.discovered')}: ${element.discover}.` : ''} 
          {element.electronstring ? `${t('elementDetails.electronConfig')}: ${element.electronstring}.` : ''}
        </span>
      </button>
    </ElementTooltip>
  );
};

export default Element;
