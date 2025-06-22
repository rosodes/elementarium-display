import React, { useState, useEffect, useMemo, memo } from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import { elements } from '../../data/elements';
import { getCategoryColor } from '../../data/elementCategories';
import { useValidatedTranslation } from '../../hooks/useValidatedTranslation';
import ElementTooltip from '../ElementTooltip';

interface ResponsiveTableGridProps {
  onElementClick: (element: ElementType) => void;
  selectedElement?: ElementType | null;
  searchQuery?: string;
  viewMode?: 'table' | 'cards' | 'compact';
}

interface ElementCellProps {
  element: ElementType;
  isSelected: boolean;
  isHighlighted: boolean;
  onClick: () => void;
  viewMode: 'table' | 'cards' | 'compact';
  hasSearchQuery: boolean;
}

// Mapping for element positions in the periodic table
const getElementPosition = (element: ElementType): { row: number; col: number } => {
  const atomicNumber = parseInt(element.atomic);
  
  // Hydrogen
  if (atomicNumber === 1) return { row: 1, col: 1 };
  // Helium  
  if (atomicNumber === 2) return { row: 1, col: 18 };
  
  // Period 2 (Li-Ne)
  if (atomicNumber >= 3 && atomicNumber <= 10) {
    const positions = [1, 2, 13, 14, 15, 16, 17, 18];
    return { row: 2, col: positions[atomicNumber - 3] };
  }
  
  // Period 3 (Na-Ar)
  if (atomicNumber >= 11 && atomicNumber <= 18) {
    const positions = [1, 2, 13, 14, 15, 16, 17, 18];
    return { row: 3, col: positions[atomicNumber - 11] };
  }
  
  // Period 4 (K-Kr)
  if (atomicNumber >= 19 && atomicNumber <= 36) {
    return { row: 4, col: atomicNumber - 18 };
  }
  
  // Period 5 (Rb-Xe)
  if (atomicNumber >= 37 && atomicNumber <= 54) {
    return { row: 5, col: atomicNumber - 36 };
  }
  
  // Period 6 (Cs-Rn, excluding lanthanides)
  if (atomicNumber === 55) return { row: 6, col: 1 }; // Cs
  if (atomicNumber === 56) return { row: 6, col: 2 }; // Ba
  if (atomicNumber === 57) return { row: 6, col: 3 }; // La
  if (atomicNumber >= 72 && atomicNumber <= 86) {
    return { row: 6, col: atomicNumber - 68 }; // Hf-Rn
  }
  
  // Period 7 (Fr-Og, excluding actinides)
  if (atomicNumber === 87) return { row: 7, col: 1 }; // Fr
  if (atomicNumber === 88) return { row: 7, col: 2 }; // Ra  
  if (atomicNumber === 89) return { row: 7, col: 3 }; // Ac
  if (atomicNumber >= 104 && atomicNumber <= 118) {
    return { row: 7, col: atomicNumber - 100 }; // Rf-Og
  }
  
  // Lanthanides (Ce-Lu) - will be displayed separately
  if (atomicNumber >= 58 && atomicNumber <= 71) {
    return { row: 8, col: atomicNumber - 54 }; // Special row for lanthanides
  }
  
  // Actinides (Th-Lr) - will be displayed separately  
  if (atomicNumber >= 90 && atomicNumber <= 103) {
    return { row: 9, col: atomicNumber - 86 }; // Special row for actinides
  }
  
  // Default fallback
  return { row: 1, col: 1 };
};

const ElementCell = memo(({ element, isSelected, isHighlighted, onClick, viewMode, hasSearchQuery }: ElementCellProps) => {
  const { t } = useValidatedTranslation('ElementCell');
  const categoryColor = getCategoryColor(element.category || 'nonmetal');
  
  const baseClasses = `
    transition-all duration-200 ease-out cursor-pointer relative
    border-2 border-transparent hover:border-blue-400 dark:hover:border-blue-300
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
    hover:shadow-lg hover:scale-105 active:scale-95
    ${isSelected ? 'ring-2 ring-blue-500 ring-opacity-70' : ''}
    ${!isHighlighted && hasSearchQuery ? 'opacity-30' : ''}
  `;

  if (viewMode === 'cards') {
    return (
      <ElementTooltip element={element}>
        <div
          className={`${baseClasses} rounded-lg p-4 min-h-[120px] flex flex-col justify-between shadow-md`}
          style={{ backgroundColor: categoryColor.bg }}
          onClick={onClick}
          role="button"
          tabIndex={0}
          aria-label={t('elementButton', `${element.name}, атомный номер ${element.atomic}`)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onClick();
            }
          }}
        >
          <div className="flex justify-between items-start">
            <span className="text-xs font-medium opacity-90">{element.atomic}</span>
            {element.radioactive && (
              <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            )}
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-white">{element.symbol}</div>
            <div className="text-xs text-white opacity-90 mt-1 line-clamp-2">
              {element.name}
            </div>
          </div>
          <div className="text-xs text-white opacity-75 text-center">
            {element.weight}
          </div>
        </div>
      </ElementTooltip>
    );
  }

  if (viewMode === 'compact') {
    return (
      <ElementTooltip element={element}>
        <div
          className={`${baseClasses} rounded-md p-2 min-h-[60px] flex items-center justify-center`}
          style={{ backgroundColor: categoryColor.bg }}
          onClick={onClick}
          role="button"
          tabIndex={0}
          aria-label={t('elementButton', `${element.name}, атомный номер ${element.atomic}`)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onClick();
            }
          }}
        >
          <div className="text-center">
            <div className="text-sm font-bold text-white">{element.symbol}</div>
            <div className="text-xs text-white opacity-75">{element.atomic}</div>
          </div>
        </div>
      </ElementTooltip>
    );
  }

  // Default table mode
  return (
    <ElementTooltip element={element}>
      <div
        className={`${baseClasses} rounded p-3 min-h-[80px] flex flex-col justify-between element-card`}
        style={{ backgroundColor: categoryColor.bg }}
        onClick={onClick}
        role="button"
        tabIndex={0}
        aria-label={t('elementButton', `${element.name}, атомный номер ${element.atomic}`)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        }}
      >
        <div className="flex justify-between items-start">
          <span className="text-xs font-medium text-white opacity-90">{element.atomic}</span>
          {element.radioactive && (
            <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          )}
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-white">{element.symbol}</div>
          <div className="text-xs text-white opacity-75 mt-1 truncate">
            {element.name}
          </div>
        </div>
        <div className="text-xs text-white opacity-60 text-center">
          {element.weight}
        </div>
      </div>
    </ElementTooltip>
  );
});

ElementCell.displayName = 'ElementCell';

const ResponsiveTableGrid = memo(({ 
  onElementClick, 
  selectedElement, 
  searchQuery = '', 
  viewMode = 'table' 
}: ResponsiveTableGridProps) => {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const { t } = useValidatedTranslation('ResponsiveTableGrid');

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const filteredElements = useMemo(() => {
    return elements.filter((element): element is ElementType => {
      if (!element) return false;
      
      if (!searchQuery.trim()) return true;
      
      const query = searchQuery.toLowerCase();
      return (
        element.name.toLowerCase().includes(query) ||
        element.symbol.toLowerCase().includes(query) ||
        element.atomic.toString().includes(query)
      );
    });
  }, [searchQuery]);

  const isElementHighlighted = (element: ElementType) => {
    if (!searchQuery.trim()) return true;
    return filteredElements.includes(element);
  };

  // Get lanthanides and actinides for separate display
  const lanthanides = elements.filter(el => 
    el && parseInt(el.atomic) >= 58 && parseInt(el.atomic) <= 71
  ).sort((a, b) => parseInt(a!.atomic) - parseInt(b!.atomic)) as ElementType[];
  
  const actinides = elements.filter(el => 
    el && parseInt(el.atomic) >= 90 && parseInt(el.atomic) <= 103
  ).sort((a, b) => parseInt(a!.atomic) - parseInt(b!.atomic)) as ElementType[];

  if (screenSize === 'mobile' || screenSize === 'tablet') {
    // Mobile/tablet version - simple grid
    const getGridColumns = () => {
      if (screenSize === 'mobile') {
        return viewMode === 'compact' ? 'grid-cols-6' : 'grid-cols-3';
      } else {
        return viewMode === 'compact' ? 'grid-cols-12' : 'grid-cols-6';
      }
    };

    return (
      <div className="w-full px-2">
        <div className={`grid ${getGridColumns()} gap-2 auto-rows-max`}>
          {filteredElements.map((element) => (
            <ElementCell
              key={element.atomic}
              element={element}
              isSelected={selectedElement?.atomic === element.atomic}
              isHighlighted={isElementHighlighted(element)}
              onClick={() => onElementClick(element)}
              viewMode={viewMode}
              hasSearchQuery={!!searchQuery.trim()}
            />
          ))}
        </div>
      </div>
    );
  }

  // Desktop version - classical periodic table layout
  return (
    <div className={`w-full overflow-x-auto view-mode-${viewMode}`}>
      <div className="min-w-[1200px] p-4">
        <div 
          className="periodic-table"
          role="grid"
          aria-label={t('periodicTableGrid', 'Периодическая таблица элементов')}
        >
          {elements.map((element) => {
            if (!element) return null;
            
            const atomicNumber = parseInt(element.atomic);
            
            // Skip lanthanides and actinides in main table
            if ((atomicNumber >= 58 && atomicNumber <= 71) || 
                (atomicNumber >= 90 && atomicNumber <= 103)) {
              return null;
            }
            
            const position = getElementPosition(element);
            const isHighlighted = isElementHighlighted(element);

            return (
              <div
                key={element.atomic}
                style={{
                  gridRow: position.row,
                  gridColumn: position.col
                }}
                className="element-position"
              >
                                 <ElementCell
                   element={element}
                   isSelected={selectedElement?.atomic === element.atomic}
                   isHighlighted={isHighlighted}
                   onClick={() => onElementClick(element)}
                   viewMode={viewMode}
                   hasSearchQuery={!!searchQuery.trim()}
                 />
              </div>
            );
          })}
        </div>
        
        {/* F-block section for lanthanides and actinides */}
        <div className="f-block-section mt-8">
          {/* Lanthanides */}
          <div className="f-block-row">
            <div className="f-block-label">
              {t('lanthanides', 'Лантаноиды')}:
            </div>
            <div className="f-block-elements">
                             {lanthanides.map((element) => (
                 <ElementCell
                   key={element.atomic}
                   element={element}
                   isSelected={selectedElement?.atomic === element.atomic}
                   isHighlighted={isElementHighlighted(element)}
                   onClick={() => onElementClick(element)}
                   viewMode={viewMode}
                   hasSearchQuery={!!searchQuery.trim()}
                 />
               ))}
             </div>
           </div>
           
           {/* Actinides */}
           <div className="f-block-row">
             <div className="f-block-label">
               {t('actinides', 'Актиноиды')}:
             </div>
             <div className="f-block-elements">
               {actinides.map((element) => (
                 <ElementCell
                   key={element.atomic}
                   element={element}
                   isSelected={selectedElement?.atomic === element.atomic}
                   isHighlighted={isElementHighlighted(element)}
                   onClick={() => onElementClick(element)}
                   viewMode={viewMode}
                   hasSearchQuery={!!searchQuery.trim()}
                 />
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ResponsiveTableGrid.displayName = 'ResponsiveTableGrid';

export default ResponsiveTableGrid; 