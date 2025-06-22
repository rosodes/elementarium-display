import React, { memo } from 'react';
import { categoryColors, CategoryColor } from '../../data/elementCategories';
import { useValidatedTranslation } from '../../hooks/useValidatedTranslation';
import { Card } from '../ui/card';

interface LegendItemProps {
  category: string;
  color: CategoryColor;
  label: string;
  description: string;
  count: number;
  elementCountLabels: { one: string; few: string; many: string };
}

const LegendItem = memo(({ category, color, label, description, count, elementCountLabels }: LegendItemProps) => {
  // Функция для выбора правильной формы слова "элемент" в зависимости от числа
  const getElementCountLabel = (count: number) => {
    if (count === 1) return elementCountLabels.one;
    if (count < 5) return elementCountLabels.few;
    return elementCountLabels.many;
  };

  return (
    <Card 
      className="legend-item p-3 transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-gray-800 dark:border-gray-200"
      role="listitem"
      aria-label={`${label}: ${description}, ${count} ${getElementCountLabel(count)}`}
    >
      <div className="flex items-center gap-3">
        {/* Цветовой индикатор */}
        <div 
          className="color-indicator w-8 h-8 rounded border-2 border-gray-900 dark:border-gray-100 flex-shrink-0 shadow-md"
          style={{ 
            backgroundColor: color.bg,
            borderColor: color.border || color.bg
          }}
          aria-hidden="true"
        />
        
        {/* Информация о категории */}
        <div className="legend-info flex-1">
          <div className="legend-label text-sm font-black text-gray-900 dark:text-gray-100 mb-1">
            {label}
          </div>
          <div className="legend-description text-xs font-medium text-gray-700 dark:text-gray-300 leading-tight">
            {description}
          </div>
          <div className="legend-count text-xs font-bold text-gray-600 dark:text-gray-400 mt-1">
            {count} {getElementCountLabel(count)}
          </div>
        </div>
      </div>
    </Card>
  );
});

LegendItem.displayName = 'LegendItem';

const TableLegend = memo(() => {
  const { t } = useValidatedTranslation('legend');

  // Определяем категории элементов и их количество с переводами
  const legendCategories = [
    {
      category: 'hydrogen',
      label: t('categories.hydrogen.label'),
      description: t('categories.hydrogen.description'),
      count: 1
    },
    {
      category: 'alkali metal',
      label: t('categories.alkaliMetal.label'),
      description: t('categories.alkaliMetal.description'),
      count: 6
    },
    {
      category: 'alkaline earth metal',
      label: t('categories.alkalineEarthMetal.label'),
      description: t('categories.alkalineEarthMetal.description'),
      count: 6
    },
    {
      category: 'transition metal',
      label: t('categories.transitionMetal.label'),
      description: t('categories.transitionMetal.description'),
      count: 38
    },
    {
      category: 'post-transition metal',
      label: t('categories.postTransitionMetal.label'),
      description: t('categories.postTransitionMetal.description'),
      count: 7
    },
    {
      category: 'metalloid',
      label: t('categories.metalloid.label'),
      description: t('categories.metalloid.description'),
      count: 6
    },
    {
      category: 'nonmetal',
      label: t('categories.nonmetal.label'),
      description: t('categories.nonmetal.description'),
      count: 6
    },
    {
      category: 'halogen',
      label: t('categories.halogen.label'),
      description: t('categories.halogen.description'),
      count: 5
    },
    {
      category: 'noble gas',
      label: t('categories.nobleGas.label'),
      description: t('categories.nobleGas.description'),
      count: 7
    },
    {
      category: 'lanthanide',
      label: t('categories.lanthanide.label'),
      description: t('categories.lanthanide.description'),
      count: 14
    },
    {
      category: 'actinide',
      label: t('categories.actinide.label'),
      description: t('categories.actinide.description'),
      count: 14
    },
    {
      category: 'unknown',
      label: t('categories.unknown.label'),
      description: t('categories.unknown.description'),
      count: 8
    }
  ];

  return (
    <div 
      className="table-legend bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border-2 border-gray-800 dark:border-gray-200"
      role="region"
      aria-labelledby="legend-title"
    >
      {/* Заголовок легенды */}
      <div className="legend-header mb-6 text-center">
        <h2 
          id="legend-title"
          className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-2"
          role="heading"
          aria-level={2}
        >
          {t('title')}
        </h2>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {t('description')}
        </p>
      </div>

      {/* Сетка элементов легенды */}
      <div 
        className="legend-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        role="list"
        aria-label="Список категорий элементов периодической таблицы"
      >
        {legendCategories.map(({ category, label, description, count }) => {
          const color = categoryColors[category];
          if (!color) return null;

          return (
            <LegendItem
              key={category}
              category={category}
              color={color}
              label={label}
              description={description}
              count={count}
              elementCountLabels={t('elementCount')}
            />
          );
        })}
      </div>

      {/* Дополнительная информация */}
      <div className="legend-footer mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border-2 border-gray-700 dark:border-gray-300">
        <div className="text-center">
          <h3 className="text-lg font-black text-gray-900 dark:text-gray-100 mb-2">
            {t('additionalInfo.title')}
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white animate-pulse" aria-hidden="true" />
              <span>{t('additionalInfo.radioactive')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-600 rounded border-2 border-gray-900 dark:border-gray-100" aria-hidden="true" />
              <span>{t('additionalInfo.lanthanides')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-600 rounded border-2 border-gray-900 dark:border-gray-100" aria-hidden="true" />
              <span>{t('additionalInfo.actinides')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Информация о доступности */}
      <div className="accessibility-info mt-4 text-center">
        <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
          {t('accessibility')}
        </p>
      </div>
    </div>
  );
});

TableLegend.displayName = 'TableLegend';

export default TableLegend;
