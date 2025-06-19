
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';
import { getCategoryColor, getSeriesColor } from '../../../data/elementCategories';

interface OverviewTabProps {
  element: Element;
}

const OverviewTab: React.FC<OverviewTabProps> = ({ element }) => {
  const { t } = useValidatedTranslation('OverviewTab');
  
  const getElementColors = () => {
    if (element.category) {
      return getCategoryColor(element.category);
    }
    return getSeriesColor(element.series);
  };

  const colors = getElementColors();

  return (
    <div className="overview-tab space-y-6">
      {/* Основная информация об элементе */}
      <div className="element-header flex items-center gap-4 p-4 rounded-lg" style={{ backgroundColor: `${colors.bg}20` }}>
        <div 
          className="element-symbol-large text-4xl font-bold text-white p-4 rounded-lg shadow-lg"
          style={{ backgroundColor: colors.bg }}
        >
          {element.symbol}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {element.name}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('details.atomicNumber', 'Atomic Number')}: {element.atomic}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {element.series} • {t('details.group', 'Group')} {element.group} • {t('details.period', 'Period')} {element.period}
          </p>
        </div>
      </div>

      {/* Краткое описание */}
      {element.description && (
        <div className="description-section">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            {t('details.description', 'Description')}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {element.description}
          </p>
        </div>
      )}

      {/* Основные свойства */}
      <div className="properties-grid grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="property-card bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
            {t('details.basicProperties', 'Basic Properties')}
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">{t('details.atomicWeight', 'Atomic Weight')}:</span>
              <span className="font-medium text-gray-900 dark:text-white">{element.weight}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">{t('details.category', 'Category')}:</span>
              <span className="font-medium text-gray-900 dark:text-white">{element.series}</span>
            </div>
            {element.discover && (
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">{t('details.yearDiscovered', 'Year Discovered')}:</span>
                <span className="font-medium text-gray-900 dark:text-white">{element.discover}</span>
              </div>
            )}
          </div>
        </div>

        <div className="physical-properties-card bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
            {t('details.physicalProperties', 'Physical Properties')}
          </h4>
          <div className="space-y-2 text-sm">
            {element.melt && (
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">{t('details.meltingPoint', 'Melting Point')}:</span>
                <span className="font-medium text-gray-900 dark:text-white">{element.melt}°C</span>
              </div>
            )}
            {element.boil && (
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">{t('details.boilingPoint', 'Boiling Point')}:</span>
                <span className="font-medium text-gray-900 dark:text-white">{element.boil}°C</span>
              </div>
            )}
            {element.density?.stp && (
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">{t('details.density', 'Density')}:</span>
                <span className="font-medium text-gray-900 dark:text-white">{element.density.stp} g/cm³</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Радиоактивность */}
      {element.radioactive && (
        <div className="radioactive-warning bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <span className="text-red-600 dark:text-red-400 text-lg">☢️</span>
            <h4 className="font-semibold text-red-800 dark:text-red-300">
              {t('details.radioactive', 'Radioactive Element')}
            </h4>
          </div>
          <p className="text-red-700 dark:text-red-300 text-sm mt-1">
            {t('details.radioactiveWarning', 'This element is radioactive and potentially dangerous.')}
          </p>
        </div>
      )}

      {/* Электронная конфигурация */}
      <div className="electron-config bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
          {t('details.electronConfiguration', 'Electron Configuration')}
        </h4>
        <code className="text-sm font-mono bg-white dark:bg-gray-800 px-2 py-1 rounded border text-blue-900 dark:text-blue-100">
          {element.electronstring}
        </code>
      </div>
    </div>
  );
};

export default OverviewTab;
