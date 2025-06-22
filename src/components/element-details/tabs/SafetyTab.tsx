import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';

interface SafetyTabProps {
  element: Element;
}

const SafetyTab: React.FC<SafetyTabProps> = ({ element }) => {
  const { t } = useValidatedTranslation('SafetyTab');

  // Проверяем есть ли детальные данные о безопасности
  const hasDetailedSafety = element.safety && (
    (element.safety.hazards && element.safety.hazards.length > 0) ||
    (element.safety.precautions && element.safety.precautions.length > 0) ||
    element.safety.toxicity ||
    element.safety.handling
  );

  return (
    <div className="safety-tab space-y-8">
      {hasDetailedSafety ? (
        <>
          {/* Опасности */}
          {element.safety?.hazards && element.safety.hazards.length > 0 && (
            <div className="hazards-section">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-red-200 dark:border-red-700 pb-3">
                {t('details.hazards', 'Опасности и риски')}
              </h3>
              <div className="hazards-grid grid grid-cols-1 gap-4">
                {element.safety.hazards.map((hazard, index) => (
                  <div key={index} className="hazard-item bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-xl shadow-sm">
                    <div className="flex items-start gap-4">
                      <span className="text-red-600 dark:text-red-400 text-2xl">⚠️</span>
                      <p className="text-red-800 dark:text-red-200 font-medium text-lg leading-relaxed">
                        {hazard}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Меры предосторожности */}
          {element.safety?.precautions && element.safety.precautions.length > 0 && (
            <div className="precautions-section">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-green-200 dark:border-green-700 pb-3">
                {t('details.precautions', 'Меры предосторожности')}
              </h3>
              <div className="precautions-grid grid grid-cols-1 gap-4">
                {element.safety.precautions.map((precaution, index) => (
                  <div key={index} className="precaution-item bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-xl shadow-sm">
                    <div className="flex items-start gap-4">
                      <span className="text-green-600 dark:text-green-400 text-2xl">✅</span>
                      <p className="text-green-800 dark:text-green-200 font-medium text-lg leading-relaxed">
                        {precaution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Токсичность */}
          {element.safety?.toxicity && (
            <div className="toxicity-section">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-orange-200 dark:border-orange-700 pb-3">
                {t('details.toxicity', 'Токсичность')}
              </h3>
              <div className="toxicity-info bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="text-orange-600 dark:text-orange-400 text-3xl">🧬</span>
                  <p className="text-orange-800 dark:text-orange-200 font-medium text-lg leading-relaxed">
                    {element.safety.toxicity}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Обращение и хранение */}
          {element.safety?.handling && (
            <div className="handling-section">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-blue-200 dark:border-blue-700 pb-3">
                {t('details.handling', 'Обращение и хранение')}
              </h3>
              <div className="handling-info bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="text-blue-600 dark:text-blue-400 text-3xl">🛡️</span>
                  <p className="text-blue-800 dark:text-blue-200 font-medium text-lg leading-relaxed">
                    {element.safety.handling}
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        /* Общая информация о безопасности для элементов без детальных данных */
        <div className="general-safety-info">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            Безопасность при работе с {element.name}
          </h3>
          
          <div className="space-y-6">
            {/* Для радиоактивных элементов */}
            {element.radioactive && (
              <div className="radioactive-safety bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-red-600 dark:text-red-400 text-2xl">☢️</span>
                  <h4 className="font-bold text-red-800 dark:text-red-300 text-lg">
                    {t('details.radioactiveSafety', 'Радиационная безопасность')}
                  </h4>
                </div>
                
                <div className="space-y-4">
                  <div className="danger-warning bg-red-100 dark:bg-red-800/20 border border-red-300 dark:border-red-700 p-4 rounded-lg">
                    <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center">
                      <span className="text-lg mr-2">⚠️</span>
                      {t('details.radiationHazards', 'Радиационные опасности')}:
                    </h5>
                    <ul className="text-red-700 dark:text-red-300 text-sm space-y-1">
                      <li>• {t('details.ionizingRadiation', 'Ионизирующее излучение')}</li>
                      <li>• {t('details.internalContamination', 'Внутреннее загрязнение при вдыхании или проглатывании')}</li>
                      <li>• {t('details.externalExposure', 'Внешнее облучение')}</li>
                      <li>• {t('details.contaminationRisk', 'Радиоактивное заражение поверхностей')}</li>
                    </ul>
                  </div>
                  
                  <div className="safety-measures bg-green-100 dark:bg-green-800/20 border border-green-300 dark:border-green-700 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center">
                      <span className="text-lg mr-2">🛡️</span>
                      {t('details.protectiveMeasures', 'Меры защиты')}:
                    </h5>
                    <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                      <li>• {t('details.timeDistanceShielding', 'Принципы времени, расстояния и экранирования')}</li>
                      <li>• {t('details.protectiveEquipment', 'Средства индивидуальной защиты')}</li>
                      <li>• {t('details.radiationMonitoring', 'Дозиметрический контроль')}</li>
                      <li>• {t('details.specializedFacilities', 'Работа в специализированных помещениях')}</li>
                      <li>• {t('details.nuclearLicensing', 'Лицензирование работ с радиоактивными материалами')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Для токсичных металлов */}
            {element.series === 'Transition' && !element.radioactive && (
              <div className="metal-toxicity bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
                <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-4 text-lg flex items-center">
                  <span className="text-2xl mr-3">⚗️</span>
                  {t('details.metalToxicity', 'Токсичность металлов')}
                </h4>
                <p className="text-yellow-700 dark:text-yellow-300 leading-relaxed mb-4">
                  {t('details.transitionMetalSafety', 'Многие переходные металлы могут быть токсичными при длительном воздействии. Особое внимание следует уделять пыли и парам металлов.')}
                </p>
                
                <div className="safety-recommendations bg-yellow-100 dark:bg-yellow-800/20 p-4 rounded-lg">
                  <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    {t('details.generalPrecautions', 'Общие меры предосторожности')}:
                  </h5>
                  <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
                    <li>• {t('details.ventilation', 'Обеспечить хорошую вентиляцию')}</li>
                    <li>• {t('details.personalProtection', 'Использовать средства индивидуальной защиты')}</li>
                    <li>• {t('details.avoidInhalation', 'Избегать вдыхания пыли и паров')}</li>
                    <li>• {t('details.properStorage', 'Правильное хранение и маркировка')}</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Для щелочных металлов */}
            {element.group === 1 && !element.radioactive && element.atomic !== '1' && (
              <div className="alkali-safety bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-4 text-lg flex items-center">
                  <span className="text-2xl mr-3">🔥</span>
                  {t('details.alkaliMetalSafety', 'Безопасность щелочных металлов')}
                </h4>
                <p className="text-orange-700 dark:text-orange-300 leading-relaxed mb-4">
                  {t('details.alkaliReactivity', 'Щелочные металлы чрезвычайно реактивны, особенно с водой, и могут вызвать пожары и взрывы.')}
                </p>
                
                <div className="danger-info bg-red-100 dark:bg-red-800/20 p-4 rounded-lg mb-4">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                    {t('details.immediateHazards', 'Непосредственные опасности')}:
                  </h5>
                  <ul className="text-red-700 dark:text-red-300 text-sm space-y-1">
                    <li>• {t('details.violentReactionWithWater', 'Бурная реакция с водой')}</li>
                    <li>• {t('details.fireExplosionRisk', 'Риск пожара и взрыва')}</li>
                    <li>• {t('details.corrosiveBurns', 'Коррозионные ожоги кожи и глаз')}</li>
                    <li>• {t('details.hydrogenGasGeneration', 'Выделение взрывоопасного водорода')}</li>
                  </ul>
                </div>
                
                <div className="safety-protocols bg-green-100 dark:bg-green-800/20 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                    {t('details.safetyProtocols', 'Протоколы безопасности')}:
                  </h5>
                  <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                    <li>• {t('details.inertAtmosphere', 'Хранение в инертной атмосфере')}</li>
                    <li>• {t('details.dryConditions', 'Поддержание сухих условий')}</li>
                    <li>• {t('details.fireExtinguisher', 'Специальные огнетушители (не водные)')}</li>
                    <li>• {t('details.emergencyProcedures', 'Процедуры экстренного реагирования')}</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Для галогенов */}
            {(element.symbol === 'F' || element.symbol === 'Cl' || element.symbol === 'Br' || element.symbol === 'I') && (
              <div className="halogen-safety bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4 text-lg flex items-center">
                  <span className="text-2xl mr-3">💨</span>
                  {t('details.halogenSafety', 'Безопасность галогенов')}
                </h4>
                <p className="text-purple-700 dark:text-purple-300 leading-relaxed mb-4">
                  {t('details.halogenToxicity', 'Галогены высокореактивны и токсичны, могут вызывать серьезные повреждения дыхательных путей и кожи.')}
                </p>
                
                <div className="precautions bg-purple-100 dark:bg-purple-800/20 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                    {t('details.handlingPrecautions', 'Меры предосторожности')}:
                  </h5>
                  <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1">
                    <li>• {t('details.fumeHood', 'Работа в вытяжном шкафу')}</li>
                    <li>• {t('details.respiratoryProtection', 'Защита органов дыхания')}</li>
                    <li>• {t('details.chemicalResistantGloves', 'Химически стойкие перчатки')}</li>
                    <li>• {t('details.emergencyEyewash', 'Доступ к аварийному душу и промывке глаз')}</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Для благородных газов */}
            {element.series === 'Noble' && (
              <div className="noble-gas-safety bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4 text-lg flex items-center">
                  <span className="text-2xl mr-3">😌</span>
                  {t('details.nobleGasSafety', 'Безопасность благородных газов')}
                </h4>
                <p className="text-blue-700 dark:text-blue-300 leading-relaxed mb-4">
                  {t('details.nobleGasGenerallySafe', 'Благородные газы химически инертны и относительно безопасны, но могут вызвать удушье в замкнутых пространствах.')}
                </p>
                
                <div className="safety-notes bg-blue-100 dark:bg-blue-800/20 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    {t('details.basicPrecautions', 'Основные меры предосторожности')}:
                  </h5>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                    <li>• {t('details.adequateVentilation', 'Обеспечить адекватную вентиляцию')}</li>
                    <li>• {t('details.asphyxiationRisk', 'Остерегаться риска удушья в закрытых помещениях')}</li>
                    <li>• {t('details.pressurizedStorage', 'Безопасное обращение с баллонами под давлением')}</li>
                    <li>• {t('details.cryogenicHazards', 'Осторожность при работе с криогенными жидкостями')}</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Общие рекомендации */}
            <div className="general-safety bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 text-lg flex items-center">
                <span className="text-2xl mr-3">📋</span>
                {t('details.generalSafetyGuidelines', 'Общие рекомендации по безопасности')}
              </h4>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 text-sm mt-1">✓</span>
                  <span>{t('details.readMSDS', 'Изучите паспорт безопасности (MSDS) перед работой')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 text-sm mt-1">✓</span>
                  <span>{t('details.properTraining', 'Получите соответствующую подготовку')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 text-sm mt-1">✓</span>
                  <span>{t('details.followProtocols', 'Следуйте установленным протоколам безопасности')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 text-sm mt-1">✓</span>
                  <span>{t('details.emergencyPlan', 'Знайте план действий в чрезвычайных ситуациях')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SafetyTab;
