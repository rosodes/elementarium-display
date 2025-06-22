import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';

interface HistoryTabProps {
  element: Element;
}

const HistoryTab: React.FC<HistoryTabProps> = ({ element }) => {
  const { t } = useValidatedTranslation('HistoryTab');

  // Проверяем есть ли детальные исторические данные
  const hasDetailedHistory = element.history && (
    element.history.discovery ||
    element.history.discoverer ||
    element.history.etymology ||
    (element.history.timeline && element.history.timeline.length > 0)
  );

  return (
    <div className="history-tab space-y-8">
      {hasDetailedHistory ? (
        <>
          {/* Открытие элемента */}
          {element.history?.discovery && (
            <div className="discovery-section">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-blue-200 dark:border-blue-700 pb-3">
                {t('details.discovery', 'Открытие элемента')}
              </h3>
              <div className="discovery-info bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🔬</span>
                  <div>
                    <p className="text-blue-800 dark:text-blue-200 font-medium text-lg leading-relaxed">
                      {element.history.discovery}
                    </p>
                    {element.discover && (
                      <div className="mt-4 bg-blue-100 dark:bg-blue-800/20 p-3 rounded-lg">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">📅</span>
                          <span className="font-semibold text-blue-800 dark:text-blue-200">
                            {t('details.yearOfDiscovery', 'Год открытия')}: {element.discover}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Первооткрыватели */}
          {element.history?.discoverer && (
            <div className="discoverer-section">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-green-200 dark:border-green-700 pb-3">
                {t('details.discoverers', 'Первооткрыватели')}
              </h3>
              <div className="discoverer-info bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">👨‍🔬</span>
                  <p className="text-green-800 dark:text-green-200 font-medium text-lg leading-relaxed">
                    {element.history.discoverer}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Этимология названия */}
          {element.history?.etymology && (
            <div className="etymology-section">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-purple-200 dark:border-purple-700 pb-3">
                {t('details.etymology', 'Этимология названия')}
              </h3>
              <div className="etymology-info bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📚</span>
                  <p className="text-purple-800 dark:text-purple-200 font-medium text-lg leading-relaxed">
                    {element.history.etymology}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Временная шкала */}
          {element.history?.timeline && element.history.timeline.length > 0 && (
            <div className="timeline-section">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-orange-200 dark:border-orange-700 pb-3">
                {t('details.historicalTimeline', 'Историческая хронология')}
              </h3>
              <div className="timeline-container">
                {element.history.timeline.map((event, index) => (
                  <div key={index} className="timeline-item mb-6 last:mb-0">
                    <div className="flex items-start gap-6">
                      <div className="timeline-marker flex-shrink-0">
                        <div className="bg-orange-500 w-4 h-4 rounded-full"></div>
                        <div className="w-0.5 h-16 bg-orange-200 dark:bg-orange-700 mx-auto mt-2 last:hidden"></div>
                      </div>
                      <div className="timeline-content bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800 shadow-sm flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">📅</span>
                          <h4 className="font-bold text-orange-800 dark:text-orange-200 text-lg">
                            {event.year}
                          </h4>
                        </div>
                        <p className="text-orange-700 dark:text-orange-300 leading-relaxed">
                          {event.event}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        /* Общая историческая информация для элементов без детальных данных */
        <div className="general-history-info">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            История элемента {element.name}
          </h3>
          
          <div className="space-y-6">
            {/* Базовая информация об открытии */}
            {element.discover && (
              <div className="basic-discovery bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4 text-lg flex items-center">
                  <span className="text-2xl mr-3">🔍</span>
                  {t('details.discoveryYear', 'Год открытия')}
                </h4>
                <div className="text-center bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-4xl font-bold text-blue-800 dark:text-blue-200">
                    {element.discover}
                  </div>
                </div>
              </div>
            )}

            {/* Историческая классификация по периодам */}
            {element.discover && (
              <div className="historical-period">
                {parseInt(element.discover) < 1700 && (
                  <div className="ancient-period bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                    <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-3">🏺</span>
                      {t('details.ancientElement', 'Элемент древности')}
                    </h4>
                    <p className="text-amber-700 dark:text-amber-300 leading-relaxed">
                      {t('details.ancientElementDescription', 'Этот элемент был известен с древних времен, хотя его научное понимание пришло значительно позже. Древние цивилизации использовали его в различных формах.')}
                    </p>
                  </div>
                )}

                {parseInt(element.discover) >= 1700 && parseInt(element.discover) < 1850 && (
                  <div className="classical-period bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                    <h4 className="font-bold text-green-800 dark:text-green-200 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-3">⚗️</span>
                      {t('details.classicalChemistry', 'Эпоха классической химии')}
                    </h4>
                    <p className="text-green-700 dark:text-green-300 leading-relaxed">
                      {t('details.classicalChemistryDescription', 'Элемент был открыт в период становления современной химии, когда ученые начали систематически изучать и классифицировать химические элементы.')}
                    </p>
                  </div>
                )}

                {parseInt(element.discover) >= 1850 && parseInt(element.discover) < 1940 && (
                  <div className="modern-period bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-3">🔬</span>
                      {t('details.modernChemistry', 'Эпоха современной химии')}
                    </h4>
                    <p className="text-purple-700 dark:text-purple-300 leading-relaxed">
                      {t('details.modernChemistryDescription', 'Открытие произошло в период развития периодической системы Менделеева и понимания атомной структуры вещества.')}
                    </p>
                  </div>
                )}

                {parseInt(element.discover) >= 1940 && (
                  <div className="nuclear-period bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                    <h4 className="font-bold text-red-800 dark:text-red-200 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-3">⚛️</span>
                      {t('details.nuclearAge', 'Ядерная эра')}
                    </h4>
                    <p className="text-red-700 dark:text-red-300 leading-relaxed">
                      {t('details.nuclearAgeDescription', 'Элемент был синтезирован в ядерную эру с использованием ускорителей частиц и ядерных реакторов. Это достижение современной ядерной физики.')}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Для синтетических элементов */}
            {element.radioactive && parseInt(element.atomic) >= 93 && (
              <div className="synthetic-history bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 text-lg flex items-center">
                  <span className="text-2xl mr-3">🧪</span>
                  {t('details.syntheticElement', 'Синтетический элемент')}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {t('details.syntheticElementHistory', 'Этот элемент не существует в природе и был создан искусственно в лабораторных условиях. Его синтез стал возможен благодаря развитию ядерной физики и технологий ускорения частиц.')}
                </p>
                
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {t('details.synthesisMethod', 'Метод синтеза')}:
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {t('details.particleAccelerator', 'Бомбардировка тяжелых ядер ускоренными частицами в специализированных лабораториях')}
                  </p>
                </div>
              </div>
            )}

            {/* Научное значение */}
            <div className="scientific-importance bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800">
              <h4 className="font-bold text-cyan-800 dark:text-cyan-200 mb-4 text-lg flex items-center">
                <span className="text-2xl mr-3">🎓</span>
                {t('details.scientificImportance', 'Научное значение')}
              </h4>
              <p className="text-cyan-700 dark:text-cyan-300 leading-relaxed">
                {t('details.elementScientificValue', 'Открытие каждого элемента расширяет наше понимание природы материи и способствует развитию химии, физики и других наук. Каждый элемент имеет уникальные свойства и потенциальные применения.')}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryTab;
