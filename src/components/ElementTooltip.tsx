
import React from 'react';
import { Element as ElementType } from '../data/elementTypes';
import { useValidatedTranslation } from '../hooks/useValidatedTranslation';
import EnhancedTooltip from './ui/tooltip-enhanced';
import type { ElementSymbolKey } from '../i18n/types/languageTypes';

interface ElementTooltipProps {
  element: ElementType;
  children: React.ReactNode;
}

const ElementTooltip = ({ element, children }: ElementTooltipProps) => {
  const { t, rawT } = useValidatedTranslation('ElementTooltip');

  // Get translated element name
  const getElementName = (): string => {
    const elementKey = element.symbol.toLowerCase() as ElementSymbolKey;
    return rawT.ui?.elements?.[elementKey] || element.name || element.symbol;
  };

  // Format atomic weight for display
  const formatWeight = (weight: string): string => {
    const num = parseFloat(weight);
    return !isNaN(num) ? num.toFixed(3) : weight;
  };

  // Get category display name
  const getCategoryName = (): string => {
    if (!element.series) return '';
    const seriesMap: Record<string, string> = {
      'Alkali': t('categories.alkali', 'Щелочные металлы'),
      'Alkaline': t('categories.alkaline', 'Щелочноземельные металлы'),
      'Transition': t('categories.transition', 'Переходные металлы'),
      'Post-transition': t('categories.postTransition', 'Постпереходные металлы'),
      'Metalloid': t('categories.metalloid', 'Металлоиды'),
      'Nonmetal': t('categories.nonmetal', 'Неметаллы'),
      'Noble': t('categories.noble', 'Благородные газы'),
      'Lanthanide': t('categories.lanthanide', 'Лантаноиды'),
      'Actinide': t('categories.actinide', 'Актиноиды')
    };
    return seriesMap[element.series] || element.series;
  };

  // Check if element is radioactive
  const isRadioactive = (): boolean => {
    const radioactiveElements = new Set([
      43, 61, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 
      101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118
    ]);
    return radioactiveElements.has(Number(element.atomic));
  };

  // Жёстко задаём сторону и запрещаем авто-флип тултипа
  const atomicNumber = Number(element.atomic);
  const isFBlock = atomicNumber >= 90 && atomicNumber <= 103;
  const tooltipSide: 'top' | 'bottom' = isFBlock ? 'bottom' : 'top';
  const avoidCollisions = false; // категорически запрещаем flip Radix'у

  // Debug
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(`[TOOLTIP FIX] Element ${element.symbol} (${element.atomic}): side=${tooltipSide}, avoidCollisions=${avoidCollisions}`);
  }

  const tooltipContent = (
    <div className="space-y-2 min-w-0 w-full">
      {/* Element header */}
      <div className="border-b border-gray-200 dark:border-gray-600 pb-2">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-base">{getElementName()}</h4>
          {isRadioactive() && (
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" 
                 title={t('ui.radioactive', 'Radioactive element')} />
          )}
        </div>
        <div className="text-sm opacity-80">
          {element.symbol} • {t('elementDetails.atomicNumber', 'Atomic Number')}: {element.atomic}
        </div>
      </div>

      {/* Key properties */}
      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <span className="opacity-80">{t('elementDetails.atomicWeight', 'Atomic Weight')}:</span>
          <span className="font-medium">{formatWeight(element.weight)}</span>
        </div>

        <div className="flex justify-between">
          <span className="opacity-80">{t('elementDetails.series', 'Category')}:</span>
          <span className="font-medium text-xs">{getCategoryName()}</span>
        </div>

        {element.electronstring && (
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
            <span className="opacity-80">{t('elementDetails.electronConfig', 'Electron Configuration')}:</span>
            <span
              className="font-mono text-xs sm:text-sm break-words whitespace-normal text-right sm:text-left w-full sm:w-auto"
              style={{ wordBreak: 'break-word' }}
            >
              {element.electronstring}
            </span>
          </div>
        )}

        {element.melt && (
          <div className="flex justify-between">
            <span className="opacity-80">{t('elementDetails.meltingPoint', 'Melting Point')}:</span>
            <span className="font-medium">{element.melt}°C</span>
          </div>
        )}

        {element.boil && (
          <div className="flex justify-between">
            <span className="opacity-80">{t('elementDetails.boilingPoint', 'Boiling Point')}:</span>
            <span className="font-medium">{element.boil}°C</span>
          </div>
        )}

        {element.discover && (
          <div className="flex justify-between">
            <span className="opacity-80">{t('elementDetails.discovered', 'Discovered')}:</span>
            <span className="font-medium">{element.discover}</span>
          </div>
        )}
      </div>

      {/* Quick tip */}
      <div className="text-xs opacity-60 pt-1 border-t border-gray-200 dark:border-gray-600">
        {t('elementDetails.showMoreInfo', 'Click for detailed information')}
      </div>
    </div>
  );

  return (
    <EnhancedTooltip
      content={tooltipContent}
      side={tooltipSide}
      delay={200}
      portalled={true}
      avoidCollisions={avoidCollisions}
    >
      {children}
    </EnhancedTooltip>
  );
};

export default ElementTooltip;
