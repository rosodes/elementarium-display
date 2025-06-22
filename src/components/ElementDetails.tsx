import React, { memo, useCallback } from 'react';
import { Element as ElementType } from '../data/elementTypes';
import { getCategoryColor } from '../data/elementCategories';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useValidatedTranslation } from '../hooks/useValidatedTranslation';
import { Button } from './ui/button';
import ElementDetailsContent from './element-details/ElementDetailsContent';

interface ElementDetailsProps {
  element: ElementType;
  onClose: () => void;
  onNavigate?: (element: ElementType) => void;
  isFullPage?: boolean;
}

const ElementDetails = memo(({ element, onClose, onNavigate, isFullPage = false }: ElementDetailsProps) => {
  const { t } = useValidatedTranslation('ElementDetails');
  
  // Функция для получения цвета элемента
  const getElementColors = useCallback(() => {
    if (element.category) {
      return getCategoryColor(element.category);
    }
    // Fallback на unknown если нет category
    return getCategoryColor('unknown');
  }, [element.category]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && !isFullPage) {
      onClose();
    }
  }, [onClose, isFullPage]);

  const handleNavigatePrevious = useCallback(() => {
    const currentAtomic = parseInt(element.atomic);
    if (currentAtomic > 1 && onNavigate) {
      const prevElement = { ...element, atomic: (currentAtomic - 1).toString() };
      onNavigate(prevElement);
    }
  }, [element, onNavigate]);

  const handleNavigateNext = useCallback(() => {
    const currentAtomic = parseInt(element.atomic);
    if (currentAtomic < 118 && onNavigate) {
      const nextElement = { ...element, atomic: (currentAtomic + 1).toString() };
      onNavigate(nextElement);
    }
  }, [element, onNavigate]);

  const colors = getElementColors();

  // Если это полная страница, возвращаем содержимое без модального окна
  if (isFullPage) {
    return (
      <div className="element-page-container">
        {/* Header для полной страницы */}
        <div 
          className="element-page-header bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 shadow-lg"
          style={{ borderLeft: `6px solid ${colors.bg}` }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div 
                className="w-20 h-20 flex items-center justify-center rounded-xl text-white font-black text-3xl shadow-lg"
                style={{ backgroundColor: colors.bg, color: colors.text }}
              >
                {element.symbol}
              </div>
              <div>
                <h1 className="text-4xl font-black text-gray-900 dark:text-gray-100 mb-2">
                  {element.name}
                </h1>
                <div className="flex items-center gap-4 text-lg">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    {t('atomicNumber')}: {element.atomic}
                  </span>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Атомная масса: {element.weight}
                  </span>
                  {element.category && (
                    <span 
                      className="px-3 py-1 rounded-full text-sm font-bold"
                      style={{ 
                        backgroundColor: colors.bg, 
                        color: colors.text 
                      }}
                    >
                      {element.category}
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            {/* Навигационные кнопки для полной страницы */}
            {onNavigate && (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={handleNavigatePrevious}
                  disabled={parseInt(element.atomic) <= 1}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Предыдущий
                </Button>
                <Button
                  variant="outline"
                  onClick={handleNavigateNext}
                  disabled={parseInt(element.atomic) >= 118}
                  className="flex items-center gap-2"
                >
                  Следующий
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Основной контент для полной страницы */}
        <div className="element-page-content">
          <ElementDetailsContent element={element} />
        </div>
      </div>
    );
  }

  // Модальное окно для таблицы Менделеева
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header для модального окна */}
        <div 
          className="flex items-center justify-between p-4 border-b"
          style={{ borderColor: colors.bg }}
        >
          <div className="flex items-center gap-4">
            <div 
              className="w-12 h-12 flex items-center justify-center rounded-lg text-white font-bold text-xl"
              style={{ backgroundColor: colors.bg }}
            >
              {element.symbol}
            </div>
            <div>
              <h2 className="text-xl font-bold">{element.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('atomicNumber')}: {element.atomic}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {onNavigate && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleNavigatePrevious}
                  disabled={parseInt(element.atomic) <= 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleNavigateNext}
                  disabled={parseInt(element.atomic) >= 118}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </>
            )}
            <Button variant="outline" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content для модального окна */}
        <div className="p-4">
          <ElementDetailsContent element={element} />
        </div>
      </div>
    </div>
  );
});

ElementDetails.displayName = 'ElementDetails';

export default ElementDetails;
