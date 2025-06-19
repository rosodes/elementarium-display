
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';

interface ProductionTabProps {
  element: Element;
}

const ProductionTab: React.FC<ProductionTabProps> = ({ element }) => {
  const { t } = useValidatedTranslation('ProductionTab');

  return (
    <div className="production-tab space-y-6">
      {/* Методы получения */}
      {element.production?.methods && element.production.methods.length > 0 && (
        <div className="production-methods-section">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.productionMethods', 'Production Methods')}
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {element.production.methods.map((method, index) => (
              <div key={index} className="method-item bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-blue-800 dark:text-blue-200 font-medium">{method}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Источники сырья */}
      {element.production?.sources && element.production.sources.length > 0 && (
        <div className="raw-materials-section">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.rawMaterials', 'Raw Materials & Sources')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {element.production.sources.map((source, index) => (
              <div key={index} className="source-item bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-green-500 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-green-800 dark:text-green-200 font-medium">{source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Объемы производства и стоимость */}
      <div className="production-economics">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          {t('details.productionEconomics', 'Production Economics')}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {element.production?.annualProduction && (
            <div className="economic-metric bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {t('details.annualProduction', 'Annual Production')}
              </h4>
              <div className="text-lg font-mono text-purple-600 dark:text-purple-400">
                {element.production.annualProduction}
              </div>
            </div>
          )}
          
          {element.production?.cost && (
            <div className="economic-metric bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {t('details.approximateCost', 'Approximate Cost')}
              </h4>
              <div className="text-lg font-mono text-orange-600 dark:text-orange-400">
                {element.production.cost}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Для синтетических элементов */}
      {element.radioactive && parseInt(element.atomic) >= 93 && (
        <div className="synthetic-production bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-purple-800 dark:text-purple-200">
            {t('details.artificialSynthesis', 'Artificial Synthesis')}
          </h3>
          <p className="text-purple-700 dark:text-purple-300 mb-4">
            {t('details.syntheticElementProduction', 'This element is produced artificially in specialized facilities using particle accelerators or nuclear reactors.')}
          </p>
          
          <div className="space-y-3">
            <div className="production-detail">
              <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-1">
                {t('details.productionFacilities', 'Production Facilities')}:
              </h4>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                {t('details.specializedLabs', 'Specialized nuclear physics laboratories and research facilities')}
              </p>
            </div>
            
            <div className="production-detail">
              <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-1">
                {t('details.productionScale', 'Production Scale')}:
              </h4>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                {t('details.atomicQuantities', 'Produced in atomic quantities - typically only a few atoms at a time')}
              </p>
            </div>
            
            {element.discover && (
              <div className="production-detail">
                <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-1">
                  {t('details.firstProduction', 'First Production')}:
                </h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  {element.discover}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Промышленные процессы для обычных элементов */}
      {!element.radioactive && element.production && (
        <div className="industrial-processes">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.industrialProcesses', 'Industrial Processes')}
          </h3>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 p-4 rounded-lg">
            <p className="text-indigo-800 dark:text-indigo-200">
              {t('details.commercialProduction', 'This element is produced commercially through various industrial processes, including mining, refining, and chemical processing.')}
            </p>
          </div>
        </div>
      )}

      {/* Если нет данных о производстве */}
      {!element.production && (
        <div className="no-production-data bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
          <p className="text-gray-600 dark:text-gray-400">
            {t('details.noProductionData', 'No specific production data available for this element.')}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductionTab;
