import React, { useState, useRef, useEffect } from 'react';
import { Element as ElementType } from '../data/elementTypes';
import { useValidatedTranslation } from '../hooks/useValidatedTranslation';
import { getCategoryColor } from '../data/elementCategories';

interface ElementTooltipProps {
  element: ElementType;
  children: React.ReactNode;
  showOnHover?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  delay?: number;
}

const ElementTooltip: React.FC<ElementTooltipProps> = ({
  element,
  children,
  showOnHover = true,
  position = 'auto',
  delay = 300
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [actualPosition, setActualPosition] = useState<'top' | 'bottom' | 'left' | 'right'>(position === 'auto' ? 'top' : position);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const { t } = useValidatedTranslation('ElementTooltip');

  const showTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible && position === 'auto' && tooltipRef.current && triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const viewport = {
        width: window.innerWidth,
        height: window.innerHeight
      };

      let newPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
      
      // Определяем оптимальную позицию
      if (triggerRect.top > tooltipRect.height + 10) {
        newPosition = 'top';
      } else if (viewport.height - triggerRect.bottom > tooltipRect.height + 10) {
        newPosition = 'bottom';
      } else if (triggerRect.left > tooltipRect.width + 10) {
        newPosition = 'left';
      } else if (viewport.width - triggerRect.right > tooltipRect.width + 10) {
        newPosition = 'right';
      }

      setActualPosition(newPosition);
    }
  }, [isVisible, position]);

  const getPositionClasses = () => {
    const base = 'absolute z-50 transition-all duration-200 ease-out';
    switch (actualPosition) {
      case 'top':
        return `${base} bottom-full left-1/2 transform -translate-x-1/2 mb-2`;
      case 'bottom':
        return `${base} top-full left-1/2 transform -translate-x-1/2 mt-2`;
      case 'left':
        return `${base} right-full top-1/2 transform -translate-y-1/2 mr-2`;
      case 'right':
        return `${base} left-full top-1/2 transform -translate-y-1/2 ml-2`;
      default:
        return `${base} bottom-full left-1/2 transform -translate-x-1/2 mb-2`;
    }
  };

  const getArrowClasses = () => {
    const arrowBase = 'absolute w-0 h-0 border-solid';
    switch (actualPosition) {
      case 'top':
        return `${arrowBase} top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-gray-800 border-l-4 border-r-4 border-t-4 dark:border-t-gray-200`;
      case 'bottom':
        return `${arrowBase} bottom-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-gray-800 border-l-4 border-r-4 border-b-4 dark:border-b-gray-200`;
      case 'left':
        return `${arrowBase} left-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-gray-800 border-t-4 border-b-4 border-l-4 dark:border-l-gray-200`;
      case 'right':
        return `${arrowBase} right-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-r-gray-800 border-t-4 border-b-4 border-r-4 dark:border-r-gray-200`;
      default:
        return `${arrowBase} top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-gray-800 border-l-4 border-r-4 border-t-4 dark:border-t-gray-200`;
    }
  };

  return (
    <div 
      className="relative inline-block"
      ref={triggerRef}
      onMouseEnter={showOnHover ? showTooltip : undefined}
      onMouseLeave={showOnHover ? hideTooltip : undefined}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`${getPositionClasses()} ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          role="tooltip"
          aria-label={t('elementTooltip', `Краткая информация о ${element.name}`)}
        >
          <div className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-4 py-3 rounded-lg shadow-lg max-w-xs w-max border border-gray-700 dark:border-gray-300">
                         <div className="flex items-center gap-3 mb-2">
               <div 
                 className="w-8 h-8 rounded flex items-center justify-center text-sm font-bold text-white shadow-sm"
                 style={{ backgroundColor: getCategoryColor(element.category || 'nonmetal').bg }}
               >
                 {element.symbol}
               </div>
               <div>
                 <div className="font-semibold text-sm">{element.name}</div>
                 <div className="text-xs opacity-75">{t('atomicNumber', 'Атомный номер')}: {element.atomic}</div>
               </div>
             </div>
             
             <div className="space-y-1 text-xs">
               <div className="flex justify-between">
                 <span className="opacity-75">{t('mass', 'Масса')}:</span>
                 <span>{element.weight}</span>
               </div>
              <div className="flex justify-between">
                <span className="opacity-75">{t('category', 'Категория')}:</span>
                <span className="capitalize">{t(`categories.${element.category}`, element.category)}</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-75">{t('period', 'Период')}:</span>
                <span>{element.period}</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-75">{t('group', 'Группа')}:</span>
                <span>{element.group || '-'}</span>
              </div>
            </div>
          </div>
          <div className={getArrowClasses()} />
        </div>
      )}
    </div>
  );
};

export default ElementTooltip;
