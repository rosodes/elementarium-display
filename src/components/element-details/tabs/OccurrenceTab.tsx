
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';

interface OccurrenceTabProps {
  element: Element;
}

const OccurrenceTab: React.FC<OccurrenceTabProps> = ({ element }) => {
  const { t } = useValidatedTranslation('OccurrenceTab');

  return (
    <div className="occurrence-tab space-y-6">
      {/* Распространенность во Вселенной */}
      {element.abundance && (
        <div className="abundance-section">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.abundance', 'Abundance')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {element.abundance.universe && (
              <div className="abundance-item bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 p-4 rounded-lg">
                <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-1">
                  {t('details.universe', 'Universe')}
                </div>
                <div className="text-2xl font-bold text-purple-800 dark:text-purple-200">
                  {element.abundance.universe}%
                </div>
              </div>
            )}
            
            {element.abundance.solar && (
              <div className="abundance-item bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
                <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium mb-1">
                  {t('details.solar', 'Solar System')}
                </div>
                <div className="text-2xl font-bold text-yellow-800 dark:text-yellow-200">
                  {element.abundance.solar}%
                </div>
              </div>
            )}
            
            {element.abundance.crust && (
              <div className="abundance-item bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                <div className="text-sm text-green-600 dark:text-green-400 font-medium mb-1">
                  {t('details.earthCrust', 'Earth\'s Crust')}
                </div>
                <div className="text-2xl font-bold text-green-800 dark:text-green-200">
                  {element.abundance.crust}%
                </div>
              </div>
            )}
            
            {element.abundance.ocean && (
              <div className="abundance-item bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
                  {t('details.oceans', 'Oceans')}
                </div>
                <div className="text-2xl font-bold text-blue-800 dark:text-blue-200">
                  {element.abundance.ocean}%
                </div>
              </div>
            )}
            
            {element.abundance.human && (
              <div className="abundance-item bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                <div className="text-sm text-red-600 dark:text-red-400 font-medium mb-1">
                  {t('details.humanBody', 'Human Body')}
                </div>
                <div className="text-2xl font-bold text-red-800 dark:text-red-200">
                  {element.abundance.human}%
                </div>
              </div>
            )}
            
            {element.abundance.meteor && (
              <div className="abundance-item bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 p-4 rounded-lg">
                <div className="text-sm text-orange-600 dark:text-orange-400 font-medium mb-1">
                  {t('details.meteorites', 'Meteorites')}
                </div>
                <div className="text-2xl font-bold text-orange-800 dark:text-orange-200">
                  {element.abundance.meteor}%
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Источники получения */}
      {element.production?.sources && element.production.sources.length > 0 && (
        <div className="sources-section">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.sources', 'Sources')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {element.production.sources.map((source, index) => (
              <div key={index} className="source-item bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 p-4 rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="bg-indigo-500 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-800 dark:text-gray-200 font-medium">{source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Для синтетических элементов */}
      {element.radioactive && parseInt(element.atomic) >= 93 && (
        <div className="synthetic-element bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-orange-800 dark:text-orange-200">
            {t('details.syntheticElement', 'Synthetic Element')}
          </h3>
          <p className="text-orange-700 dark:text-orange-300 mb-3">
            {t('details.syntheticDescription', 'This element does not occur naturally on Earth and must be artificially created in laboratories or particle accelerators.')}
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-orange-600 dark:text-orange-400">{t('details.firstSynthesis', 'First Synthesis')}:</span>
              <span className="font-medium text-orange-800 dark:text-orange-200">{element.discover}</span>
            </div>
            {element.production?.methods && element.production.methods.length > 0 && (
              <div className="mt-3">
                <div className="text-orange-600 dark:text-orange-400 font-medium mb-2">
                  {t('details.synthesisMethod', 'Synthesis Method')}:
                </div>
                <div className="text-orange-700 dark:text-orange-300">
                  {element.production.methods[0]}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Если нет данных о распространенности */}
      {!element.abundance && !element.production?.sources && (
        <div className="no-occurrence bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
          <p className="text-gray-600 dark:text-gray-400">
            {t('details.noOccurrenceData', 'No detailed occurrence data available for this element.')}
          </p>
        </div>
      )}
    </div>
  );
};

export default OccurrenceTab;
