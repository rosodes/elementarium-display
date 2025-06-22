import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';

interface BioTabProps {
  element: Element;
}

const BioTab: React.FC<BioTabProps> = ({ element }) => {
  const { t } = useValidatedTranslation('BioTab');

  // Проверяем есть ли данные о биологической роли
  const hasBiologicalData = element.biological && (
    element.biological.role ||
    element.biological.essentiality ||
    element.biological.metabolism ||
    element.biological.toxicity
  );

  return (
    <div className="bio-tab space-y-8">
      {hasBiologicalData ? (
        <>
          {/* Биологическая роль */}
          {element.biological?.role && (
            <div className="biological-role-section">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-green-200 dark:border-green-700 pb-3">
                {t('details.biologicalRole', 'Биологическая роль')}
              </h3>
              <div className="bio-role bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🧬</span>
                  <p className="text-green-800 dark:text-green-200 font-medium text-lg leading-relaxed">
                    {element.biological.role}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Необходимость для жизни */}
          {element.biological?.essentiality && (
            <div className="essentiality-section">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-blue-200 dark:border-blue-700 pb-3">
                {t('details.essentiality', 'Необходимость для жизни')}
              </h3>
              <div className="essentiality-info bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">⚡</span>
                  <p className="text-blue-800 dark:text-blue-200 font-medium text-lg leading-relaxed">
                    {element.biological.essentiality}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Метаболические процессы */}
          {element.biological?.metabolism && (
            <div className="metabolism-section">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-purple-200 dark:border-purple-700 pb-3">
                {t('details.metabolism', 'Метаболические процессы')}
              </h3>
              <div className="metabolism-info bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🔄</span>
                  <p className="text-purple-800 dark:text-purple-200 font-medium text-lg leading-relaxed">
                    {element.biological.metabolism}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Токсичность */}
          {element.biological?.toxicity && (
            <div className="toxicity-section">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-orange-200 dark:border-orange-700 pb-3">
                {t('details.biologicalToxicity', 'Биологическая токсичность')}
              </h3>
              <div className="toxicity-info bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">⚠️</span>
                  <p className="text-orange-800 dark:text-orange-200 font-medium text-lg leading-relaxed">
                    {element.biological.toxicity}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Содержание в организме человека */}
          {element.abundance?.human && (
            <div className="human-abundance-section">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-red-200 dark:border-red-700 pb-3">
                {t('details.humanAbundance', 'Содержание в организме человека')}
              </h3>
              <div className="abundance-display bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800 shadow-sm">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-800 dark:text-red-200 mb-2">
                    {element.abundance.human}%
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-2xl">👤</span>
                    <p className="text-red-600 dark:text-red-400 font-medium">
                      {t('details.byMassInHumanBody', 'по массе в организме человека')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        /* Общая биологическая информация для элементов без детальных данных */
        <div className="general-biological-info">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            Биологическая роль {element.name}
          </h3>
          
          <div className="space-y-6">
            {/* Для радиоактивных элементов */}
            {element.radioactive && (
              <div className="radioactive-biological bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-red-600 dark:text-red-400 text-2xl">☢️</span>
                  <h4 className="font-bold text-red-800 dark:text-red-300 text-lg">
                    {t('details.radioactiveBiologicalImpact', 'Воздействие радиоактивного элемента')}
                  </h4>
                </div>
                <p className="text-red-700 dark:text-red-300 leading-relaxed mb-4">
                  {t('details.radioactiveElementsBio', 'Радиоактивные элементы представляют опасность для живых организмов из-за ионизирующего излучения, которое может повреждать ДНК и другие биологические молекулы.')}
                </p>
                
                <div className="bg-red-100 dark:bg-red-800/20 p-4 rounded-lg">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                    {t('details.biologicalEffects', 'Биологические эффекты')}:
                  </h5>
                  <ul className="text-red-700 dark:text-red-300 text-sm space-y-1">
                    <li>• {t('details.dnaDamage', 'Повреждение ДНК и генетических структур')}</li>
                    <li>• {t('details.cellularDamage', 'Нарушение клеточных функций')}</li>
                    <li>• {t('details.cancerRisk', 'Повышенный риск развития рака')}</li>
                    <li>• {t('details.radiationSickness', 'Острая лучевая болезнь при высоких дозах')}</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Для эссенциальных элементов */}
            {(element.group === 1 || element.group === 2) && !element.radioactive && (
              <div className="essential-element bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                <h4 className="font-bold text-green-800 dark:text-green-200 mb-4 text-lg flex items-center">
                  <span className="text-2xl mr-3">✨</span>
                  {t('details.essentialElement', 'Эссенциальный элемент')}
                </h4>
                <p className="text-green-700 dark:text-green-300 leading-relaxed">
                  {element.group === 1 
                    ? t('details.alkaliMetalBio', 'Щелочные металлы играют важную роль в поддержании электролитного баланса, нервной проводимости и мышечных сокращений.')
                    : t('details.alkalineEarthMetalBio', 'Щелочноземельные металлы необходимы для костной ткани, мышечных сокращений и многих ферментативных процессов.')
                  }
                </p>
              </div>
            )}

            {/* Для переходных металлов */}
            {element.series === 'Transition' && !element.radioactive && (
              <div className="transition-metal-bio bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4 text-lg flex items-center">
                  <span className="text-2xl mr-3">🔗</span>
                  {t('details.transitionMetalBio', 'Роль переходного металла')}
                </h4>
                <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                  {t('details.transitionMetalBioDescription', 'Многие переходные металлы являются кофакторами ферментов, участвуют в транспорте кислорода, электронном транспорте и каталитических процессах в живых организмах.')}
                </p>
              </div>
            )}

            {/* Для благородных газов */}
            {element.series === 'Noble' && (
              <div className="noble-gas-bio bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 text-lg flex items-center">
                  <span className="text-2xl mr-3">💎</span>
                  {t('details.nobleGasBio', 'Биологическая инертность')}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('details.nobleGasBioDescription', 'Благородные газы химически инертны и обычно не участвуют в биологических процессах. Некоторые используются в медицине как инертная среда или анестетики.')}
                </p>
              </div>
            )}

            {/* Для неметаллов */}
            {element.series === 'Nonmetal' && !element.radioactive && element.atomic !== '1' && (
              <div className="nonmetal-bio bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800">
                <h4 className="font-bold text-cyan-800 dark:text-cyan-200 mb-4 text-lg flex items-center">
                  <span className="text-2xl mr-3">🌿</span>
                  {t('details.nonmetalBio', 'Роль неметалла в биологии')}
                </h4>
                <p className="text-cyan-700 dark:text-cyan-300 leading-relaxed">
                  {t('details.nonmetalBioDescription', 'Неметаллы часто являются основными строительными блоками биологических молекул, входят в состав белков, нуклеиновых кислот и других важных соединений.')}
                </p>
              </div>
            )}

            {/* Общее содержание в организме */}
            {element.abundance?.human && (
              <div className="general-abundance bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 text-lg flex items-center">
                  <span className="text-2xl mr-3">📊</span>
                  {t('details.abundanceInHumans', 'Содержание в организме')}
                </h4>
                <div className="text-center bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                    {element.abundance.human}%
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {t('details.byMassInBody', 'по массе тела')}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BioTab;
