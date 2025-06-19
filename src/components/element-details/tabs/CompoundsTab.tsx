
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';

interface CompoundsTabProps {
  element: Element;
}

const CompoundsTab: React.FC<CompoundsTabProps> = ({ element }) => {
  const { t } = useValidatedTranslation('CompoundsTab');

  return (
    <div className="compounds-tab space-y-6">
      {/* Обычные соединения */}
      {element.compounds?.common && element.compounds.common.length > 0 && (
        <div className="common-compounds-section">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.commonCompounds', 'Common Compounds')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {element.compounds.common.map((compound, index) => (
              <div key={index} className="compound-item bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                <code className="text-blue-800 dark:text-blue-200 font-mono font-semibold">
                  {compound}
                </code>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Промышленные соединения */}
      {element.compounds?.industrial && element.compounds.industrial.length > 0 && (
        <div className="industrial-compounds-section">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.industrialCompounds', 'Industrial Compounds')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {element.compounds.industrial.map((compound, index) => (
              <div key={index} className="compound-item bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                <code className="text-green-800 dark:text-green-200 font-mono font-semibold">
                  {compound}
                </code>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Значимые соединения */}
      {element.compounds?.notable && element.compounds.notable.length > 0 && (
        <div className="notable-compounds-section">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.notableCompounds', 'Notable Compounds')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {element.compounds.notable.map((compound, index) => (
              <div key={index} className="compound-item bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 p-4 rounded-lg">
                <code className="text-purple-800 dark:text-purple-200 font-mono font-semibold">
                  {compound}
                </code>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Химические свойства */}
      <div className="chemical-properties">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          {t('details.chemicalBehavior', 'Chemical Behavior')}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {element.oxidation && (
            <div className="chemical-property bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {t('details.oxidationStates', 'Oxidation States')}
              </h4>
              <div className="text-lg font-mono text-gray-800 dark:text-gray-200">
                {element.oxidation}
              </div>
            </div>
          )}
          
          {element.electroneg && (
            <div className="chemical-property bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {t('details.electronegativity', 'Electronegativity')}
              </h4>
              <div className="text-lg font-mono text-gray-800 dark:text-gray-200">
                {element.electroneg}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Для синтетических элементов */}
      {element.radioactive && parseInt(element.atomic) >= 104 && (
        <div className="synthetic-compounds bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-red-800 dark:text-red-200">
            {t('details.limitedChemistry', 'Limited Chemical Knowledge')}
          </h3>
          <p className="text-red-700 dark:text-red-300">
            {t('details.syntheticElementChemistry', 'Due to the extremely short half-life and limited production of this element, very few chemical compounds have been synthesized or studied.')}
          </p>
        </div>
      )}

      {/* Если нет данных о соединениях */}
      {!element.compounds && (
        <div className="no-compounds bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
          <p className="text-gray-600 dark:text-gray-400">
            {t('details.noCompoundsData', 'No specific compounds data available for this element.')}
          </p>
        </div>
      )}
    </div>
  );
};

export default CompoundsTab;
