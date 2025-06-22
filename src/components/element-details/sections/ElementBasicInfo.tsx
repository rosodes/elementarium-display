import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';
import { getCategoryColor } from '../../../data/elementCategories';
import { Card, CardContent } from '../../ui/card';

interface ElementBasicInfoProps {
  element: Element;
}

const ElementBasicInfo: React.FC<ElementBasicInfoProps> = ({ element }) => {
  const { t } = useValidatedTranslation('ElementBasicInfo');
  
  // Get the correct color object
  const getElementColors = () => {
    if (element.category) {
      return getCategoryColor(element.category);
    }
    // Fallback на unknown если нет category
    return getCategoryColor('unknown');
  };

  const colors = getElementColors();

  return (
    <Card className="element-basic-info" style={{ borderLeft: `6px solid ${colors.bg}` }}>
      <CardContent className="p-6">
        <div className="flex items-center gap-6 mb-6">
          <div 
            className="element-symbol w-24 h-24 flex items-center justify-center text-5xl font-black text-white rounded-xl shadow-lg"
            style={{ backgroundColor: colors.bg, color: colors.text }}
          >
            {element.symbol}
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-2">
              {element.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="info-item">
                <div className="text-gray-600 dark:text-gray-400 font-bold">Атомный номер</div>
                <div className="text-xl font-black text-gray-900 dark:text-gray-100">{element.atomic}</div>
              </div>
              <div className="info-item">
                <div className="text-gray-600 dark:text-gray-400 font-bold">Атомная масса</div>
                <div className="text-xl font-black text-gray-900 dark:text-gray-100">{element.weight}</div>
              </div>
              <div className="info-item">
                <div className="text-gray-600 dark:text-gray-400 font-bold">Группа</div>
                <div className="text-xl font-black text-gray-900 dark:text-gray-100">{element.group || 'N/A'}</div>
              </div>
              <div className="info-item">
                <div className="text-gray-600 dark:text-gray-400 font-bold">Период</div>
                <div className="text-xl font-black text-gray-900 dark:text-gray-100">{element.period || 'N/A'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {element.series && (
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <div className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-1">Серия</div>
              <div className="text-lg font-bold text-gray-900 dark:text-gray-100">{element.series}</div>
            </div>
          )}
          
          {element.category && (
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <div className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-1">Категория</div>
              <div className="text-lg font-bold" style={{ color: colors.bg }}>{element.category}</div>
            </div>
          )}
          
          {element.block && (
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <div className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-1">Блок</div>
              <div className="text-lg font-bold text-gray-900 dark:text-gray-100">{element.block}-блок</div>
            </div>
          )}
        </div>

        {/* Электронная конфигурация */}
        {element.electronstring && (
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <div className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">
              Электронная конфигурация
            </div>
            <div className="font-mono text-sm text-gray-900 dark:text-gray-100 break-all">
              {element.electronstring}
            </div>
          </div>
        )}

        {/* Индикатор радиоактивности */}
        {element.radioactive && (
          <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-red-700 dark:text-red-400">
                ⚠️ Радиоактивный элемент
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ElementBasicInfo;
