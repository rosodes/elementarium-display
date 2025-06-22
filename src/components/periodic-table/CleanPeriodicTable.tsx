import React, { memo } from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import { elements } from '../../data/elements';
import { getCategoryColor } from '../../data/elementCategories';
import { useValidatedTranslation } from '../../hooks/useValidatedTranslation';
import { useTranslation } from '../../hooks/useTranslation';
import ElementTooltip from '../ElementTooltip';
import { Card } from '../ui/card';

interface CleanPeriodicTableProps {
  onElementClick: (element: ElementType) => void;
  selectedElement?: ElementType | null;
  searchQuery?: string;
}

// Правильное позиционирование элементов как в классической таблице Менделеева
const getElementPosition = (atomicNumber: number): { row: number; col: number } => {
  // Период 1: H, He
  if (atomicNumber === 1) return { row: 1, col: 1 };  // H
  if (atomicNumber === 2) return { row: 1, col: 18 }; // He
  
  // Период 2: Li-Ne
  if (atomicNumber === 3) return { row: 2, col: 1 };  // Li
  if (atomicNumber === 4) return { row: 2, col: 2 };  // Be
  if (atomicNumber >= 5 && atomicNumber <= 10) {
    return { row: 2, col: atomicNumber + 8 }; // B(5)->13, C(6)->14, N(7)->15, O(8)->16, F(9)->17, Ne(10)->18
  }
  
  // Период 3: Na-Ar
  if (atomicNumber === 11) return { row: 3, col: 1 };  // Na
  if (atomicNumber === 12) return { row: 3, col: 2 };  // Mg
  if (atomicNumber >= 13 && atomicNumber <= 18) {
    return { row: 3, col: atomicNumber }; // Al(13)->13, Si(14)->14, P(15)->15, S(16)->16, Cl(17)->17, Ar(18)->18
  }
  
  // Период 4: K-Kr (19-36)
  if (atomicNumber >= 19 && atomicNumber <= 36) {
    return { row: 4, col: atomicNumber - 18 };
  }
  
  // Период 5: Rb-Xe (37-54)
  if (atomicNumber >= 37 && atomicNumber <= 54) {
    return { row: 5, col: atomicNumber - 36 };
  }
  
  // Период 6: Cs-Rn (55-86, пропускаем лантаноиды 58-71)
  if (atomicNumber === 55) return { row: 6, col: 1 };  // Cs
  if (atomicNumber === 56) return { row: 6, col: 2 };  // Ba
  if (atomicNumber === 57) return { row: 6, col: 3 };  // La - показываем как переход к лантаноидам
  if (atomicNumber >= 72 && atomicNumber <= 86) {
    return { row: 6, col: atomicNumber - 68 }; // Hf(72)->4, Ta(73)->5, W(74)->6, ... Rn(86)->18
  }
  
  // Период 7: Fr-Og (87-118, пропускаем актиноиды 90-103)
  if (atomicNumber === 87) return { row: 7, col: 1 };  // Fr
  if (atomicNumber === 88) return { row: 7, col: 2 };  // Ra
  if (atomicNumber === 89) return { row: 7, col: 3 };  // Ac - показываем как переход к актиноидам
  if (atomicNumber >= 104 && atomicNumber <= 118) {
    return { row: 7, col: atomicNumber - 100 }; // Rf(104)->4, Db(105)->5, ... Og(118)->18
  }
  
  return { row: 1, col: 1 };
};

interface ElementCardProps {
  element: ElementType;
  isSelected: boolean;
  isHighlighted: boolean;
  onClick: () => void;
  tabIndex?: number;
}

const ElementCard = memo(({ element, isSelected, isHighlighted, onClick, tabIndex = 0 }: ElementCardProps) => {
  const { t } = useValidatedTranslation('common');
  const { getElementName } = useTranslation();
  
  // Получаем цвет элемента по его категории
  const categoryColor = getCategoryColor(element.category || 'unknown');
  
  // Получаем переведенное название элемента
  const translatedName = getElementName(element.symbol, element.name);
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };
  
  // Формируем aria-label для элемента
  const getElementAriaLabel = () => {
    const category = element.category || t('CleanPeriodicTable.ariaLabels.unknown');
    return `${translatedName}, ${t('CleanPeriodicTable.ariaLabels.atomicNumber')} ${element.atomic}, ${t('CleanPeriodicTable.ariaLabels.symbol')} ${element.symbol}, ${t('CleanPeriodicTable.ariaLabels.name')} ${category}, ${t('CleanPeriodicTable.ariaLabels.atomicMass')} ${element.weight}`;
  };
  
  // WCAG AAA совместимые стили для элементов
  const getAccessibleStyles = () => {
    const baseStyles = "transition-all duration-300 transform hover:scale-105 hover:shadow-xl";
    const borderStyles = "border-4 border-gray-900 dark:border-gray-100";
    const focusStyles = "focus:ring-4 focus:ring-blue-600 focus:ring-offset-2 focus:outline-none";
    
    if (isSelected) {
      return `${baseStyles} ${borderStyles} ${focusStyles} bg-blue-100 dark:bg-blue-900 ring-4 ring-blue-600 ring-offset-2 scale-110 shadow-2xl`;
    }
    
    if (!isHighlighted) {
      return `${baseStyles} ${borderStyles} ${focusStyles} opacity-30 grayscale hover:opacity-60 hover:grayscale-0`;
    }
    
    return `${baseStyles} ${borderStyles} ${focusStyles} hover:border-gray-700 dark:hover:border-gray-300`;
  };
  
  return (
    <ElementTooltip element={element}>
      <Card
        className={getAccessibleStyles()}
        style={{ 
          backgroundColor: categoryColor.bg,
          borderColor: categoryColor.border || categoryColor.bg,
          width: '80px',   // ФИКСИРОВАННАЯ ШИРИНА
          height: '80px',  // ФИКСИРОВАННАЯ ВЫСОТА
          minWidth: '80px',
          minHeight: '80px',
          maxWidth: '80px',
          maxHeight: '80px'
        }}
        onClick={onClick}
        role="button"
        tabIndex={isHighlighted ? tabIndex : -1}
        aria-label={getElementAriaLabel()}
        aria-pressed={isSelected}
        aria-describedby={`element-${element.atomic}-details`}
        onKeyDown={handleKeyDown}
      >
        <div 
          className="element-content relative w-full h-full p-1 flex flex-col justify-center items-center"
          id={`element-${element.atomic}-details`}
          aria-hidden="true"
        >
          {/* Атомный номер - маленький текст, левый верхний угол */}
          <div 
            className="absolute top-0.5 left-0.5 text-xs font-black leading-none"
            style={{ color: categoryColor.text, fontSize: '9px' }}
            aria-label={`${t('CleanPeriodicTable.ariaLabels.atomicNumber')} ${element.atomic}`}
          >
            {element.atomic}
          </div>
          
          {/* Символ элемента - крупный текст, центр, жирный шрифт */}
          <div 
            className="text-xl font-black leading-none mb-1 text-center"
            style={{ color: categoryColor.text }}
            aria-label={`${t('CleanPeriodicTable.ariaLabels.symbol')} ${element.symbol}`}
          >
            {element.symbol}
          </div>
          
          {/* Название элемента - средний текст, под символом - ИСПОЛЬЗУЕМ ПЕРЕВЕДЕННОЕ НАЗВАНИЕ */}
          <div 
            className="text-xs font-bold leading-tight text-center px-1 mb-1"
            style={{ 
              color: categoryColor.text,
              fontSize: '8px',
              lineHeight: '1.0',
              maxWidth: '100%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
            aria-label={`${t('CleanPeriodicTable.ariaLabels.name')} ${translatedName}`}
            title={translatedName}
          >
            {translatedName}
          </div>
          
          {/* Атомная масса - маленький текст, внизу */}
          <div 
            className="absolute bottom-0.5 right-0.5 text-xs font-bold leading-none"
            style={{ 
              color: categoryColor.text,
              fontSize: '8px'
            }}
            aria-label={`${t('CleanPeriodicTable.ariaLabels.atomicMass')} ${parseFloat(element.weight).toFixed(1)}`}
          >
            {parseFloat(element.weight).toFixed(1)}
          </div>
          
          {/* Индикатор радиоактивности */}
          {element.radioactive && (
            <div 
              className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-red-600 border border-white animate-pulse" 
              aria-label={t('CleanPeriodicTable.ariaLabels.radioactiveElement')}
              title={t('CleanPeriodicTable.ariaLabels.radioactiveElement')}
            />
          )}
        </div>
      </Card>
    </ElementTooltip>
  );
});

ElementCard.displayName = 'ElementCard';

// Компонент номеров групп с улучшенной контрастностью
const GroupNumbers = memo(() => {
  const { t } = useValidatedTranslation('common');
  
  return (
    <div className="group-numbers grid gap-2 mb-2" style={{ gridTemplateColumns: 'repeat(18, 80px)' }} role="row" aria-label={t('CleanPeriodicTable.ariaLabels.groupNumbers')}>
      {Array.from({ length: 18 }, (_, i) => (
        <div 
          key={i + 1} 
          className="h-8 flex items-center justify-center text-lg font-black text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 border-2 border-gray-800 dark:border-gray-200 rounded"
          style={{ width: '80px' }}
          role="columnheader"
          aria-label={`${t('CleanPeriodicTable.ariaLabels.group')} ${i + 1}`}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
});

GroupNumbers.displayName = 'GroupNumbers';

// Компонент номеров периодов с улучшенной контрастностью
const PeriodNumbers = memo(() => {
  const { t } = useValidatedTranslation('common');
  
  return (
    <div className="period-numbers flex flex-col gap-2 mr-2" role="column" aria-label={t('CleanPeriodicTable.ariaLabels.periodNumbers')}>
      {Array.from({ length: 7 }, (_, i) => (
        <div 
          key={i + 1} 
          className="w-8 flex items-center justify-center text-lg font-black text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 border-2 border-gray-800 dark:border-gray-200 rounded"
          style={{ height: '80px' }}
          role="rowheader"
          aria-label={`${t('CleanPeriodicTable.ariaLabels.period')} ${i + 1}`}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
});

PeriodNumbers.displayName = 'PeriodNumbers';

const CleanPeriodicTable = memo(({ onElementClick, selectedElement, searchQuery }: CleanPeriodicTableProps) => {
  const { t } = useValidatedTranslation('common');
  const { getElementName } = useTranslation();
  
  // Вспомогательная функция для форматирования строк с параметрами
  const formatString = (template: string, params: Record<string, string | number>) => {
    return template.replace(/\{(\w+)\}/g, (match, key) => {
      return params[key]?.toString() || match;
    });
  };
  
  const isElementHighlighted = (element: ElementType) => {
    if (!searchQuery?.trim()) return true;
    const query = searchQuery.toLowerCase();
    
    // Получаем переведенное название для поиска
    const translatedName = getElementName(element.symbol, element.name);
    
    return (
      element.name.toLowerCase().includes(query) ||
      translatedName.toLowerCase().includes(query) ||
      element.symbol.toLowerCase().includes(query) ||
      element.atomic.toString().includes(query) ||
      (element.category && element.category.toLowerCase().includes(query))
    );
  };

  // Основная таблица (исключаем лантаноиды 58-71 и актиноиды 90-103)
  const mainTableElements = elements.filter((element): element is ElementType => {
    if (!element) return false;
    const atomicNumber = parseInt(element.atomic);
    return !((atomicNumber >= 58 && atomicNumber <= 71) || (atomicNumber >= 90 && atomicNumber <= 103));
  });

  // Лантаноиды (58-71) - ПРОВЕРИМ ВСЕ 14 ЭЛЕМЕНТОВ
  const lanthanides = elements.filter((element): element is ElementType => {
    if (!element) return false;
    const atomicNumber = parseInt(element.atomic);
    return atomicNumber >= 58 && atomicNumber <= 71;
  }).sort((a, b) => parseInt(a.atomic) - parseInt(b.atomic));

  // Актиноиды (90-103) - ПРОВЕРИМ ВСЕ 14 ЭЛЕМЕНТОВ  
  const actinides = elements.filter((element): element is ElementType => {
    if (!element) return false;
    const atomicNumber = parseInt(element.atomic);
    return atomicNumber >= 90 && atomicNumber <= 103;
  }).sort((a, b) => parseInt(a.atomic) - parseInt(b.atomic));

  // Создаем массив всех позиций основной таблицы
  const mainTablePositions = Array.from({ length: 7 * 18 }, (_, index) => {
    const row = Math.floor(index / 18) + 1;
    const col = (index % 18) + 1;
    
    // Находим элемент для этой позиции
    const element = mainTableElements.find(el => {
      const pos = getElementPosition(parseInt(el.atomic));
      return pos.row === row && pos.col === col;
    });
    
    return { row, col, element };
  });

  return (
    <div 
      className="periodic-table-container max-w-fit mx-auto"
      role="application"
      aria-label={t('CleanPeriodicTable.ariaLabels.periodicTable')}
    >
      <div className="table-wrapper" style={{ width: 'fit-content' }}>
        {/* Номера групп */}
        <div className="pl-10">
          <GroupNumbers />
        </div>

        {/* Основная таблица */}
        <div 
          className="main-periodic-table flex"
          role="grid"
          aria-label={t('CleanPeriodicTable.ariaLabels.mainTable')}
          aria-rowcount={7}
          aria-colcount={18}
        >
          {/* Номера периодов */}
          <PeriodNumbers />
          
          {/* Сетка элементов - ИСПРАВЛЕННАЯ С ПРАВИЛЬНЫМИ ОТСТУПАМИ */}
          <div className="elements-grid grid gap-2" style={{ gridTemplateColumns: 'repeat(18, 80px)', gridTemplateRows: 'repeat(7, 80px)' }} role="presentation">
            {mainTablePositions.map(({ row, col, element }, index) => (
              <div 
                key={`${row}-${col}`} 
                className="grid-position flex items-center justify-center" 
                style={{ width: '80px', height: '80px' }}
                data-row={row} 
                data-col={col}
                role="gridcell"
                aria-rowindex={row}
                aria-colindex={col}
              >
                {element ? (
                  <ElementCard
                    element={element}
                    isSelected={selectedElement?.atomic === element.atomic}
                    isHighlighted={isElementHighlighted(element)}
                    onClick={() => onElementClick(element)}
                    tabIndex={isElementHighlighted(element) ? 0 : -1}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* F-блок: Лантаноиды и актиноиды */}
        <div 
          className="f-block-section mt-8 pl-10"
          role="region"
          aria-label={t('CleanPeriodicTable.ariaLabels.fBlock')}
        >
          {/* Лантаноиды */}
          <div 
            className="f-block-group mb-6"
            role="group"
            aria-labelledby="lanthanides-label"
          >
            <div className="f-block-header flex items-center mb-3">
              <div className="f-block-info flex items-center space-x-4">
                <span className="period-indicator w-8 h-8 flex items-center justify-center bg-blue-600 text-white font-black text-lg rounded border-2 border-gray-900 dark:border-gray-100" aria-label={t('CleanPeriodicTable.labels.period6')}>6*</span>
                <span 
                  id="lanthanides-label" 
                  className="block-name text-xl font-black text-gray-900 dark:text-gray-100"
                  role="heading"
                  aria-level={3}
                >
                  {t('CleanPeriodicTable.labels.lanthanidesCount')} - {lanthanides.length} {t('CleanPeriodicTable.labels.elements')}
                </span>
              </div>
            </div>
            <div 
              className="f-block-grid grid gap-2"
              style={{ gridTemplateColumns: 'repeat(14, 80px)', gridTemplateRows: '80px' }}
              role="grid"
              aria-label={t('CleanPeriodicTable.ariaLabels.lanthanides')}
              aria-rowcount={1}
              aria-colcount={14}
            >
              {lanthanides.map((element, index) => (
                <div
                  key={element.atomic}
                  className="f-block-cell flex items-center justify-center"
                  style={{ width: '80px', height: '80px' }}
                  role="gridcell"
                  aria-rowindex={1}
                  aria-colindex={index + 1}
                >
                  <ElementCard
                    element={element}
                    isSelected={selectedElement?.atomic === element.atomic}
                    isHighlighted={isElementHighlighted(element)}
                    onClick={() => onElementClick(element)}
                    tabIndex={isElementHighlighted(element) ? 0 : -1}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Актиноиды */}
          <div 
            className="f-block-group"
            role="group"
            aria-labelledby="actinides-label"
          >
            <div className="f-block-header flex items-center mb-3">
              <div className="f-block-info flex items-center space-x-4">
                <span className="period-indicator w-8 h-8 flex items-center justify-center bg-red-600 text-white font-black text-lg rounded border-2 border-gray-900 dark:border-gray-100" aria-label={t('CleanPeriodicTable.labels.period7')}>7*</span>
                <span 
                  id="actinides-label" 
                  className="block-name text-xl font-black text-gray-900 dark:text-gray-100"
                  role="heading"
                  aria-level={3}
                >
                  {t('CleanPeriodicTable.labels.actinidesCount')} - {actinides.length} {t('CleanPeriodicTable.labels.elements')}
                </span>
              </div>
            </div>
            <div 
              className="f-block-grid grid gap-2"
              style={{ gridTemplateColumns: 'repeat(14, 80px)', gridTemplateRows: '80px' }}
              role="grid"
              aria-label={t('CleanPeriodicTable.ariaLabels.actinides')}
              aria-rowcount={1}
              aria-colcount={14}
            >
              {actinides.map((element, index) => (
                <div
                  key={element.atomic}
                  className="f-block-cell flex items-center justify-center"
                  style={{ width: '80px', height: '80px' }}
                  role="gridcell"
                  aria-rowindex={1}
                  aria-colindex={index + 1}
                >
                  <ElementCard
                    element={element}
                    isSelected={selectedElement?.atomic === element.atomic}
                    isHighlighted={isElementHighlighted(element)}
                    onClick={() => onElementClick(element)}
                    tabIndex={isElementHighlighted(element) ? 0 : -1}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

CleanPeriodicTable.displayName = 'CleanPeriodicTable';

export default CleanPeriodicTable; 