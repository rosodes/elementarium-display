import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';

interface PropertiesTabProps {
  element: Element;
}

const PropertiesTab: React.FC<PropertiesTabProps> = ({ element }) => {
  const { t } = useValidatedTranslation('PropertiesTab');

  return (
    <div className="properties-tab space-y-8">
      {/* Физические свойства */}
      <div className="physical-properties-section">
        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-3">
          {t('details.physicalProperties', 'Физические свойства')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Температурные характеристики */}
          <div className="property-group bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border border-red-200 dark:border-red-800">
            <h4 className="font-bold text-red-800 dark:text-red-200 mb-4 text-lg">Температурные свойства</h4>
            <div className="space-y-3">
              {element.melt && (
                <div className="property-item">
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 dark:text-red-400 font-medium">Температура плавления:</span>
                    <span className="font-bold text-red-800 dark:text-red-200 text-lg">{element.melt}°C</span>
                  </div>
                  <div className="text-xs text-red-500 dark:text-red-400 mt-1">
                    {parseFloat(element.melt) + 273.15} K
                  </div>
                </div>
              )}
              
              {element.boil && (
                <div className="property-item">
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 dark:text-red-400 font-medium">Температура кипения:</span>
                    <span className="font-bold text-red-800 dark:text-red-200 text-lg">{element.boil}°C</span>
                  </div>
                  <div className="text-xs text-red-500 dark:text-red-400 mt-1">
                    {parseFloat(element.boil) + 273.15} K
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Плотность */}
          <div className="property-group bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4 text-lg">Плотность</h4>
            <div className="space-y-3">
              {element.density?.stp && (
                <div className="property-item">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 dark:text-blue-400 font-medium">При STP:</span>
                    <span className="font-bold text-blue-800 dark:text-blue-200 text-lg">{element.density.stp} г/см³</span>
                  </div>
                  <div className="text-xs text-blue-500 dark:text-blue-400 mt-1">
                    При 20°C и 1 атм
                  </div>
                </div>
              )}
              
              {element.density?.liquid && (
                <div className="property-item">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 dark:text-blue-400 font-medium">Жидкая фаза:</span>
                    <span className="font-bold text-blue-800 dark:text-blue-200 text-lg">{element.density.liquid} г/см³</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Проводимость */}
          {element.conductivity && (
            <div className="property-group bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border border-green-200 dark:border-green-800">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-4 text-lg">Проводимость</h4>
              <div className="space-y-3">
                {element.conductivity.thermal && (
                  <div className="property-item">
                    <div className="flex justify-between items-center">
                      <span className="text-green-600 dark:text-green-400 font-medium">Теплопроводность:</span>
                      <span className="font-bold text-green-800 dark:text-green-200 text-lg">{element.conductivity.thermal}</span>
                    </div>
                    <div className="text-xs text-green-500 dark:text-green-400 mt-1">
                      Вт/(м·К)
                    </div>
                  </div>
                )}
                
                {element.conductivity.electrical && (
                  <div className="property-item">
                    <div className="flex justify-between items-center">
                      <span className="text-green-600 dark:text-green-400 font-medium">Электропроводность:</span>
                      <span className="font-bold text-green-800 dark:text-green-200 text-lg">{element.conductivity.electrical}</span>
                    </div>
                    <div className="text-xs text-green-500 dark:text-green-400 mt-1">
                      См/м
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Химические свойства */}
      <div className="chemical-properties-section">
        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-3">
          {t('details.chemicalProperties', 'Химические свойства')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {element.electroneg && (
            <div className="property-group bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border border-purple-200 dark:border-purple-800">
              <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-4 text-lg">Электроотрицательность</h4>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-800 dark:text-purple-200 mb-2">
                  {element.electroneg}
                </div>
                <div className="text-sm text-purple-600 dark:text-purple-400">
                  По шкале Полинга
                </div>
              </div>
            </div>
          )}
          
          {element.oxidation && (
            <div className="property-group bg-orange-50 dark:bg-orange-900/20 p-5 rounded-xl border border-orange-200 dark:border-orange-800">
              <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-4 text-lg">Степени окисления</h4>
              <div className="text-center">
                <div className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-2 font-mono">
                  {element.oxidation}
                </div>
                <div className="text-sm text-orange-600 dark:text-orange-400">
                  Наиболее распространенные
                </div>
              </div>
            </div>
          )}
          
          {element.valence && (
            <div className="property-group bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-xl border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-4 text-lg">Валентность</h4>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-800 dark:text-indigo-200 mb-2">
                  {element.valence}
                </div>
                <div className="text-sm text-indigo-600 dark:text-indigo-400">
                  Основная валентность
                </div>
              </div>
            </div>
          )}
          
          {element.affinity && (
            <div className="property-group bg-teal-50 dark:bg-teal-900/20 p-5 rounded-xl border border-teal-200 dark:border-teal-800">
              <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-4 text-lg">Сродство к электрону</h4>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-800 dark:text-teal-200 mb-2">
                  {element.affinity}
                </div>
                <div className="text-sm text-teal-600 dark:text-teal-400">
                  кДж/моль
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Энергии ионизации */}
      {element.ionize && Object.keys(element.ionize).length > 0 && (
        <div className="ionization-section">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-3">
            {t('details.ionizationEnergies', 'Энергии ионизации')}
          </h3>
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Object.entries(element.ionize).slice(0, 10).map(([level, energy]) => (
                <div key={level} className="ionization-item bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border">
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-800 dark:text-yellow-200">
                      {energy}
                    </div>
                    <div className="text-sm text-yellow-600 dark:text-yellow-400 mt-1">
                      кДж/моль
                    </div>
                    <div className="text-xs text-yellow-500 dark:text-yellow-400 mt-1">
                      {level}-я ионизация
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {Object.keys(element.ionize).length > 10 && (
              <div className="text-center mt-4">
                <span className="text-sm text-yellow-600 dark:text-yellow-400">
                  ... и еще {Object.keys(element.ionize).length - 10} энергий ионизации
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Термодинамические свойства */}
      {element.heat && (
        <div className="thermodynamic-section">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-3">
            {t('details.thermodynamicProperties', 'Термодинамические свойства')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {element.heat.specific && (
              <div className="property-group bg-cyan-50 dark:bg-cyan-900/20 p-5 rounded-xl border border-cyan-200 dark:border-cyan-800">
                <h4 className="font-bold text-cyan-800 dark:text-cyan-200 mb-4 text-lg">Удельная теплоёмкость</h4>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-800 dark:text-cyan-200 mb-2">
                    {element.heat.specific}
                  </div>
                  <div className="text-sm text-cyan-600 dark:text-cyan-400">
                    Дж/(г·К)
                  </div>
                </div>
              </div>
            )}
            
            {element.heat.fusion && (
              <div className="property-group bg-pink-50 dark:bg-pink-900/20 p-5 rounded-xl border border-pink-200 dark:border-pink-800">
                <h4 className="font-bold text-pink-800 dark:text-pink-200 mb-4 text-lg">Теплота плавления</h4>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-800 dark:text-pink-200 mb-2">
                    {element.heat.fusion}
                  </div>
                  <div className="text-sm text-pink-600 dark:text-pink-400">
                    кДж/моль
                  </div>
                </div>
              </div>
            )}
            
            {element.heat.vaporization && (
              <div className="property-group bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <h4 className="font-bold text-emerald-800 dark:text-emerald-200 mb-4 text-lg">Теплота испарения</h4>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-800 dark:text-emerald-200 mb-2">
                    {element.heat.vaporization}
                  </div>
                  <div className="text-sm text-emerald-600 dark:text-emerald-400">
                    кДж/моль
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Дополнительная информация */}
      <div className="additional-info">
        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-3">
          Дополнительная информация
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Изотопы */}
          {element.isotopes && (
            <div className="info-card bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3 text-lg">Изотопы</h4>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {element.isotopes}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Известных изотопов
                </div>
              </div>
            </div>
          )}
          
          {/* Квантовые числа */}
          {element.quantum && (
            <div className="info-card bg-violet-50 dark:bg-violet-900/20 p-5 rounded-xl border border-violet-200 dark:border-violet-800">
              <h4 className="font-bold text-violet-800 dark:text-violet-200 mb-3 text-lg">Квантовые числа</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-violet-600 dark:text-violet-400">n (главное):</span>
                  <span className="font-bold text-violet-800 dark:text-violet-200">{element.quantum.n}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-violet-600 dark:text-violet-400">l (орбитальное):</span>
                  <span className="font-bold text-violet-800 dark:text-violet-200">{element.quantum.l}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-violet-600 dark:text-violet-400">m (магнитное):</span>
                  <span className="font-bold text-violet-800 dark:text-violet-200">{element.quantum.m}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertiesTab;
