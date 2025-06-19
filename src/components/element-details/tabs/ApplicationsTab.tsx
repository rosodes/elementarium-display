
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';

interface ApplicationsTabProps {
  element: Element;
  categoryColor: string;
}

const ApplicationsTab: React.FC<ApplicationsTabProps> = ({ element, categoryColor }) => {
  const { t } = useValidatedTranslation('ApplicationsTab');

  return (
    <div className="applications-tab space-y-6">
      {/* Основные применения */}
      {element.applications?.primary && element.applications.primary.length > 0 && (
        <div className="primary-applications-section">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.primaryApplications', 'Primary Applications')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {element.applications.primary.map((application, index) => (
              <div key={index} className="application-item bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-blue-800 dark:text-blue-200 font-medium">{application}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Вторичные применения */}
      {element.applications?.secondary && element.applications.secondary.length > 0 && (
        <div className="secondary-applications-section">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.secondaryApplications', 'Secondary Applications')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {element.applications.secondary.map((application, index) => (
              <div key={index} className="application-item bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-green-500 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-green-800 dark:text-green-200 font-medium">{application}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Перспективные применения */}
      {element.applications?.emerging && element.applications.emerging.length > 0 && (
        <div className="emerging-applications-section">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.emergingApplications', 'Emerging Applications')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {element.applications.emerging.map((application, index) => (
              <div key={index} className="application-item bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-500 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-purple-800 dark:text-purple-200 font-medium">{application}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Общая информация о применении */}
      {!element.applications && (
        <div className="no-applications bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
          <p className="text-gray-600 dark:text-gray-400">
            {t('details.noApplicationsAvailable', 'No specific applications data available for this element.')}
          </p>
          {element.radioactive && (
            <p className="text-red-600 dark:text-red-400 mt-2 text-sm">
              {t('details.radioactiveElementNote', 'This radioactive element is primarily used for scientific research.')}
            </p>
          )}
        </div>
      )}

      {/* Промышленное значение */}
      {element.production?.annualProduction && (
        <div className="industrial-significance">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.industrialSignificance', 'Industrial Significance')}
          </h3>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">{t('details.annualProduction', 'Annual Production')}:</span>
              <span className="font-semibold text-gray-900 dark:text-white">{element.production.annualProduction}</span>
            </div>
            {element.production.cost && (
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-600 dark:text-gray-400">{t('details.approximateCost', 'Approximate Cost')}:</span>
                <span className="font-semibold text-gray-900 dark:text-white">{element.production.cost}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationsTab;
