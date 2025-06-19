
import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';

interface HistoryTabProps {
  element: Element;
}

const HistoryTab: React.FC<HistoryTabProps> = ({ element }) => {
  const { t } = useValidatedTranslation('HistoryTab');

  return (
    <div className="history-tab space-y-6">
      {/* Основная информация об открытии */}
      <div className="discovery-section">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          {t('details.discovery', 'Discovery')}
        </h3>
        
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm space-y-3">
          {element.discover && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                {t('details.yearDiscovered', 'Year Discovered')}:
              </span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {element.discover}
              </span>
            </div>
          )}
          
          {element.history?.discoverer && (
            <div className="flex justify-between items-start">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                {t('details.discoverer', 'Discoverer')}:
              </span>
              <span className="font-medium text-gray-900 dark:text-white text-right max-w-xs">
                {element.history.discoverer}
              </span>
            </div>
          )}
          
          {element.history?.etymology && (
            <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                {t('details.etymology', 'Etymology')}:
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {element.history.etymology}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Временная линия */}
      {element.history?.timeline && element.history.timeline.length > 0 && (
        <div className="timeline-section">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('details.timeline', 'Timeline')}
          </h3>
          
          <div className="timeline-container">
            {element.history.timeline.map((event, index) => (
              <div key={index} className="timeline-item flex gap-4 mb-4">
                <div className="timeline-marker flex-shrink-0">
                  <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                  <div className="w-0.5 bg-gray-300 dark:bg-gray-600 h-8 ml-1 -mb-2"></div>
                </div>
                <div className="timeline-content bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm flex-1">
                  <div className="font-semibold text-blue-600 dark:text-blue-400 text-sm">
                    {event.year}
                  </div>
                  <div className="text-gray-800 dark:text-gray-200 text-sm mt-1">
                    {event.event}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Историческая значимость */}
      <div className="historical-significance">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          {t('details.historicalSignificance', 'Historical Significance')}
        </h3>
        
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
          {element.atomic === "1" && (
            <p className="text-amber-800 dark:text-amber-200">
              {t('details.hydrogenSignificance', 'Hydrogen is the most abundant element in the universe and was crucial in the development of our understanding of atomic structure.')}
            </p>
          )}
          {element.radioactive && (
            <p className="text-amber-800 dark:text-amber-200">
              {t('details.radioactiveSignificance', 'This radioactive element has contributed significantly to our understanding of nuclear physics and the structure of matter.')}
            </p>
          )}
          {parseInt(element.atomic) >= 104 && (
            <p className="text-amber-800 dark:text-amber-200">
              {t('details.superheavySignificance', 'As a superheavy element, this represents the cutting edge of nuclear physics research and our quest to understand the limits of matter.')}
            </p>
          )}
        </div>
      </div>
      
      {/* Если информации нет */}
      {!element.discover && !element.history && (
        <div className="no-history bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
          <p className="text-gray-600 dark:text-gray-400">
            {t('details.noHistoryAvailable', 'No detailed historical information available for this element.')}
          </p>
        </div>
      )}
    </div>
  );
};

export default HistoryTab;
