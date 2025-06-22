import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';

interface CompoundsTabProps {
  element: Element;
}

const CompoundsTab: React.FC<CompoundsTabProps> = ({ element }) => {
  const { t } = useValidatedTranslation('CompoundsTab');

  // Проверяем есть ли данные о соединениях
  const hasCompoundData = element.compounds && (
    (element.compounds.common && element.compounds.common.length > 0) ||
    (element.compounds.notable && element.compounds.notable.length > 0) ||
    (element.compounds.industrial && element.compounds.industrial.length > 0)
  );

  return (
    <div className="compounds-tab space-y-8">
      {hasCompoundData ? (
        <>
          {/* Обычные соединения */}
          {element.compounds?.common && element.compounds.common.length > 0 && (
            <div className="common-compounds-section">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-blue-200 dark:border-blue-700 pb-3">
                {t('details.commonCompounds', 'Обычные соединения')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {element.compounds.common.map((compound, index) => (
                  <div key={index} className="compound-item bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <div className="text-center">
                      <code className="text-blue-800 dark:text-blue-200 font-mono font-bold text-xl block mb-2">
                        {compound.split(' ')[0]}
                      </code>
                      {compound.includes('(') && (
                        <div className="text-blue-600 dark:text-blue-400 text-sm">
                          {compound.split('(')[1]?.replace(')', '')}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Промышленные соединения */}
          {element.compounds?.industrial && element.compounds.industrial.length > 0 && (
            <div className="industrial-compounds-section">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-green-200 dark:border-green-700 pb-3">
                {t('details.industrialCompounds', 'Промышленные соединения')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {element.compounds.industrial.map((compound, index) => (
                  <div key={index} className="compound-item bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <div className="text-center">
                      <code className="text-green-800 dark:text-green-200 font-mono font-bold text-xl block mb-2">
                        {compound.split(' ')[0]}
                      </code>
                      {compound.includes('(') && (
                        <div className="text-green-600 dark:text-green-400 text-sm">
                          {compound.split('(')[1]?.replace(')', '')}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Значимые соединения */}
          {element.compounds?.notable && element.compounds.notable.length > 0 && (
            <div className="notable-compounds-section">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-purple-200 dark:border-purple-700 pb-3">
                {t('details.notableCompounds', 'Значимые соединения')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {element.compounds.notable.map((compound, index) => (
                  <div key={index} className="compound-item bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <div className="text-center">
                      <code className="text-purple-800 dark:text-purple-200 font-mono font-bold text-xl block mb-2">
                        {compound.split(' ')[0]}
                      </code>
                      {compound.includes('(') && (
                        <div className="text-purple-600 dark:text-purple-400 text-sm">
                          {compound.split('(')[1]?.replace(')', '')}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Химические свойства соединений */}
          <div className="chemical-behavior">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-orange-200 dark:border-orange-700 pb-3">
              {t('details.chemicalBehavior', 'Химическое поведение')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {element.oxidation && (
                <div className="chemical-property bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                  <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-4 text-lg flex items-center">
                    <span className="text-2xl mr-3">⚡</span>
                    {t('details.oxidationStates', 'Степени окисления')}
                  </h4>
                  <div className="text-3xl font-mono text-orange-800 dark:text-orange-200 text-center">
                    {element.oxidation}
                  </div>
                </div>
              )}
              
              {element.electroneg && (
                <div className="chemical-property bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800">
                  <h4 className="font-bold text-cyan-800 dark:text-cyan-200 mb-4 text-lg flex items-center">
                    <span className="text-2xl mr-3">🔋</span>
                    {t('details.electronegativity', 'Электроотрицательность')}
                  </h4>
                  <div className="text-3xl font-mono text-cyan-800 dark:text-cyan-200 text-center">
                    {element.electroneg}
                  </div>
                  <div className="text-sm text-cyan-600 dark:text-cyan-400 text-center mt-2">
                    по шкале Полинга
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        /* Общая информация для элементов без детальных данных о соединениях */
        <div className="general-compounds-info">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            Соединения элемента {element.name}
          </h3>
          
          <div className="space-y-6">
            {/* Для синтетических элементов */}
            {element.radioactive && parseInt(element.atomic) >= 104 && (
              <div className="synthetic-compounds bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-xl">
                <h4 className="font-bold text-red-800 dark:text-red-200 mb-4 text-lg flex items-center">
                  <span className="text-2xl mr-3">☢️</span>
                  {t('details.limitedChemistry', 'Ограниченная химия')}
                </h4>
                <p className="text-red-700 dark:text-red-300 leading-relaxed">
                  {t('details.syntheticElementChemistry', 'Из-за крайне короткого периода полураспада и ограниченного производства этого элемента, очень мало химических соединений было синтезировано или изучено.')}
                </p>
              </div>
            )}

            {/* Основные типы соединений по группам */}
            {element.group === 1 && !element.radioactive && (
              <div className="alkali-compounds bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                <h4 className="font-bold text-red-800 dark:text-red-200 mb-4 text-lg flex items-center">
                  <span className="text-2xl mr-3">🧂</span>
                  Соединения щелочного металла
                </h4>
                <ul className="space-y-2 text-red-700 dark:text-red-300">
                  <li>• Оксиды (M₂O) - сильные основания</li>
                  <li>• Гидроксиды (MOH) - едкие щелочи</li>
                  <li>• Соли галогенов (MX) - ионные соединения</li>
                  <li>• Карбонаты (M₂CO₃) - растворимы в воде</li>
                </ul>
              </div>
            )}

            {element.group === 2 && !element.radioactive && (
              <div className="alkaline-earth-compounds bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-4 text-lg flex items-center">
                  <span className="text-2xl mr-3">🪨</span>
                  Соединения щелочноземельного металла
                </h4>
                <ul className="space-y-2 text-orange-700 dark:text-orange-300">
                  <li>• Оксиды (MO) - основные оксиды</li>
                  <li>• Гидроксиды (M(OH)₂) - менее растворимые основания</li>
                  <li>• Карбонаты (MCO₃) - малорастворимы</li>
                  <li>• Сульфаты (MSO₄) - различная растворимость</li>
                </ul>
              </div>
            )}

            {element.series === 'Transition' && (
              <div className="transition-compounds bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 text-lg flex items-center">
                  <span className="text-2xl mr-3">🎨</span>
                  Соединения переходного металла
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Окрашенные соли и комплексы</li>
                  <li>• Соединения с переменными степенями окисления</li>
                  <li>• Координационные соединения</li>
                  <li>• Каталитически активные комплексы</li>
                </ul>
              </div>
            )}

            {element.series === 'Noble' && (
              <div className="noble-gas-compounds bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4 text-lg flex items-center">
                  <span className="text-2xl mr-3">💎</span>
                  Соединения благородного газа
                </h4>
                <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                  Благородные газы химически инертны и образуют очень мало соединений. 
                  Известны некоторые соединения с фтором и кислородом для более тяжелых благородных газов.
                </p>
              </div>
            )}

            {!element.radioactive && element.series !== 'Noble' && element.group !== 1 && element.group !== 2 && element.series !== 'Transition' && (
              <div className="general-compound-info bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 text-lg flex items-center">
                  <span className="text-2xl mr-3">🧪</span>
                  Общая информация о соединениях
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Элемент {element.name} образует различные химические соединения в зависимости от своих степеней окисления 
                  {element.oxidation && ` (${element.oxidation})`} и химических свойств. 
                  Детальная информация о конкретных соединениях будет добавлена в будущем.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompoundsTab;
