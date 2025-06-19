
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';

interface BioTabProps {
  element: Element;
}

const BioTab: React.FC<BioTabProps> = ({ element }) => {
  const { t } = useValidatedTranslation('BioTab');

  return (
    <div className="bio-tab space-y-6">
      {/* Биологическая роль */}
      {element.biological?.role && (
        <div className="biological-role-section">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.biologicalRole', 'Biological Role')}
          </h3>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
            <p className="text-green-800 dark:text-green-200">
              {element.biological.role}
            </p>
          </div>
        </div>
      )}

      {/* Важность для организма */}
      {element.biological?.essentiality && (
        <div className="essentiality-section">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.essentiality', 'Biological Importance')}
          </h3>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
            <p className="text-blue-800 dark:text-blue-200">
              {element.biological.essentiality}
            </p>
          </div>
        </div>
      )}

      {/* Токсичность */}
      {element.biological?.toxicity && (
        <div className="toxicity-section">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.toxicity', 'Toxicity')}
          </h3>
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-red-600 dark:text-red-400 text-lg">⚠️</span>
              <p className="text-red-800 dark:text-red-200">
                {element.biological.toxicity}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Метаболизм */}
      {element.biological?.metabolism && (
        <div className="metabolism-section">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.metabolism', 'Metabolism')}
          </h3>
          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 p-4 rounded-lg">
            <p className="text-purple-800 dark:text-purple-200">
              {element.biological.metabolism}
            </p>
          </div>
        </div>
      )}

      {/* Содержание в организме человека */}
      {element.abundance?.human && (
        <div className="human-body-content">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.humanBodyContent', 'Content in Human Body')}
          </h3>
          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-orange-600 dark:text-orange-400 font-medium">
                {t('details.averageContent', 'Average Content')}:
              </span>
              <span className="text-2xl font-bold text-orange-800 dark:text-orange-200">
                {element.abundance.human}%
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Радиоактивные элементы */}
      {element.radioactive && (
        <div className="radioactive-biological bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-600 dark:text-red-400 text-xl">☢️</span>
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">
              {t('details.radiationWarning', 'Radiation Hazard')}
            </h3>
          </div>
          <p className="text-red-700 dark:text-red-300 mb-3">
            {t('details.radioactiveBiological', 'This radioactive element poses significant biological risks due to ionizing radiation.')}
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="text-red-700 dark:text-red-300">
                {t('details.cellularDamage', 'Can cause cellular damage and DNA mutations')}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="text-red-700 dark:text-red-300">
                {t('details.cancerRisk', 'Increased cancer risk with exposure')}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="text-red-700 dark:text-red-300">
                {t('details.acuteRadiation', 'Can cause acute radiation syndrome in high doses')}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Для элементов без биологических данных */}
      {!element.biological && !element.radioactive && !element.abundance?.human && (
        <div className="no-biological-data bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
          <p className="text-gray-600 dark:text-gray-400">
            {t('details.noBiologicalData', 'No specific biological role or toxicity data available for this element.')}
          </p>
        </div>
      )}
    </div>
  );
};

export default BioTab;
