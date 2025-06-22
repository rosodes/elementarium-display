import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';

// Импорт визуальных компонентов для водорода
import HydrogenIsotopesSection from '../new-sections/HydrogenIsotopesSection';
import HydrogenSpectralSeriesSection from '../new-sections/HydrogenSpectralSeriesSection';
import HydrogenAtomicStructureVisualBlock from '../new-sections/HydrogenAtomicStructureVisualBlock';
import HydrogenCrystalStructureSection from '../new-sections/HydrogenCrystalStructureSection';
import HydrogenEnergySection from '../new-sections/HydrogenEnergySection';
import SpectralAndIsotopeFacts from '../new-sections/HydrogenSpectralAndIsotopeSection';
import HydrogenMoleculeVisualization from '../new-sections/HydrogenMoleculeVisualization';
import HydrogenQuantumVisualization from '../new-sections/HydrogenQuantumVisualization';

// Иконки
import { Atom, Zap, Target, Activity, Orbit, Cpu, Layers, BarChart3 } from 'lucide-react';

interface StructureTabProps {
  element: Element;
}

const StructureTab: React.FC<StructureTabProps> = ({ element }) => {
  const { t } = useValidatedTranslation('StructureTab');

  // Специальная обработка для водорода
  if (element.atomic === '1') {
    return (
      <div className="structure-tab space-y-8">
        {/* Заголовок */}
        <div className="header-section bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 dark:from-purple-900/20 dark:via-indigo-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-4 mb-4">
            <Atom className="text-purple-600 dark:text-purple-400" size={32} />
            <h1 className="text-3xl font-bold text-purple-900 dark:text-purple-100">
              Атомная структура водорода
            </h1>
            <Orbit className="text-blue-600 dark:text-blue-400" size={32} />
          </div>
          <p className="text-purple-700 dark:text-purple-300 text-lg">
            🔬 Простейший атом во Вселенной • ⚛️ Модельная система квантовой механики • 🌟 Спектральные серии
          </p>
        </div>

        {/* Атомная структура - визуальный блок */}
        <div className="atomic-structure-visual">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Target className="text-red-600 dark:text-red-400" size={28} />
            Атомная структура и электронная конфигурация
          </h2>
          <HydrogenAtomicStructureVisualBlock />
          
          {/* Дополнительная информация о структуре */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="structure-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-red-500" size={24} />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Ядро</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Протоны:</span>
                  <span className="font-bold text-red-600 dark:text-red-400">1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Нейтроны:</span>
                  <span className="font-bold text-red-600 dark:text-red-400">0 (протий)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Заряд ядра:</span>
                  <span className="font-bold text-red-600 dark:text-red-400">+1</span>
                </div>
              </div>
            </div>

            <div className="structure-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="text-blue-500" size={24} />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Электронная оболочка</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Электроны:</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Конфигурация:</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400 font-mono">1s¹</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Валентные:</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
              </div>
            </div>

            <div className="structure-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-green-500" size={24} />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Квантовые числа</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">n (главное):</span>
                  <span className="font-bold text-green-600 dark:text-green-400">1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">l (орбитальное):</span>
                  <span className="font-bold text-green-600 dark:text-green-400">0 (s)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">m (магнитное):</span>
                  <span className="font-bold text-green-600 dark:text-green-400">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Спектральные серии */}
        <div className="spectral-section">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <BarChart3 className="text-indigo-600 dark:text-indigo-400" size={28} />
            Спектральные серии
          </h2>
          <HydrogenSpectralSeriesSection />
          <div className="mt-6">
            <SpectralAndIsotopeFacts />
          </div>
        </div>

        {/* Изотопы */}
        <div className="isotopes-section">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Cpu className="text-cyan-600 dark:text-cyan-400" size={28} />
            Изотопы водорода
          </h2>
          <HydrogenIsotopesSection />
          
          {/* Детальное сравнение изотопов */}
          <div className="isotopes-comparison bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800 mt-6">
            <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-100 mb-4">
              Сравнение изотопов водорода
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-cyan-200 dark:border-cyan-700">
                    <th className="text-left py-3 px-4 font-bold text-cyan-800 dark:text-cyan-200">Свойство</th>
                    <th className="text-center py-3 px-4 font-bold text-cyan-800 dark:text-cyan-200">Протий (¹H)</th>
                    <th className="text-center py-3 px-4 font-bold text-cyan-800 dark:text-cyan-200">Дейтерий (²H)</th>
                    <th className="text-center py-3 px-4 font-bold text-cyan-800 dark:text-cyan-200">Тритий (³H)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-cyan-100 dark:border-cyan-800">
                    <td className="py-3 px-4 font-medium text-cyan-700 dark:text-cyan-300">Массовое число</td>
                    <td className="text-center py-3 px-4 text-cyan-800 dark:text-cyan-200">1</td>
                    <td className="text-center py-3 px-4 text-cyan-800 dark:text-cyan-200">2</td>
                    <td className="text-center py-3 px-4 text-cyan-800 dark:text-cyan-200">3</td>
                  </tr>
                  <tr className="border-b border-cyan-100 dark:border-cyan-800">
                    <td className="py-3 px-4 font-medium text-cyan-700 dark:text-cyan-300">Нейтроны</td>
                    <td className="text-center py-3 px-4 text-cyan-800 dark:text-cyan-200">0</td>
                    <td className="text-center py-3 px-4 text-cyan-800 dark:text-cyan-200">1</td>
                    <td className="text-center py-3 px-4 text-cyan-800 dark:text-cyan-200">2</td>
                  </tr>
                  <tr className="border-b border-cyan-100 dark:border-cyan-800">
                    <td className="py-3 px-4 font-medium text-cyan-700 dark:text-cyan-300">Распространенность</td>
                    <td className="text-center py-3 px-4 text-cyan-800 dark:text-cyan-200">99.985%</td>
                    <td className="text-center py-3 px-4 text-cyan-800 dark:text-cyan-200">0.015%</td>
                    <td className="text-center py-3 px-4 text-cyan-800 dark:text-cyan-200">~0%</td>
                  </tr>
                  <tr className="border-b border-cyan-100 dark:border-cyan-800">
                    <td className="py-3 px-4 font-medium text-cyan-700 dark:text-cyan-300">Стабильность</td>
                    <td className="text-center py-3 px-4 text-green-600 dark:text-green-400 font-bold">Стабильный</td>
                    <td className="text-center py-3 px-4 text-green-600 dark:text-green-400 font-bold">Стабильный</td>
                    <td className="text-center py-3 px-4 text-red-600 dark:text-red-400 font-bold">t½ = 12.32 года</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-cyan-700 dark:text-cyan-300">Применение</td>
                    <td className="text-center py-3 px-4 text-cyan-800 dark:text-cyan-200">Обычный H₂</td>
                    <td className="text-center py-3 px-4 text-cyan-800 dark:text-cyan-200">Тяжелая вода D₂O</td>
                    <td className="text-center py-3 px-4 text-cyan-800 dark:text-cyan-200">Ядерный синтез</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Энергетические уровни */}
        <div className="energy-levels-section">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Layers className="text-purple-600 dark:text-purple-400" size={28} />
            Энергетические уровни
          </h2>
          <HydrogenEnergySection />
        </div>

        {/* Квантовая визуализация */}
        <HydrogenQuantumVisualization />

        {/* 3D Молекулярная визуализация */}
        <HydrogenMoleculeVisualization />

        {/* Кристаллическая структура */}
        <div className="crystal-structure-section">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Cpu className="text-orange-600 dark:text-orange-400" size={28} />
            Структура в твердом состоянии
          </h2>
          <HydrogenCrystalStructureSection />
        </div>

        {/* Научные ссылки */}
        <div className="scientific-references bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
            <Activity className="text-blue-600 dark:text-blue-400" size={24} />
            Научные источники по структуре водорода
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">🔬 Квантовая механика:</h4>
              <ul className="space-y-1">
                <li>
                  <a href="https://physics.nist.gov/PhysRefData/ASD/Html/verhist.shtml"
                     target="_blank"
                     rel="noindex nofollow"
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    NIST: Atomic Structure and Electron Configuration
                  </a>
                </li>
                <li>
                  <a href="https://www.nobelprize.org/prizes/physics/1922/bohr/lecture/"
                     target="_blank"
                     rel="noindex nofollow"
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    Nobel Lecture: Bohr Model of Hydrogen
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">📊 Спектроскопия:</h4>
              <ul className="space-y-1">
                <li>
                  <a href="https://physics.nist.gov/PhysRefData/Handbook/Tables/hydrogentable1.htm"
                     target="_blank"
                     rel="noindex nofollow"
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    NIST: Hydrogen Spectral Lines
                  </a>
                </li>
                <li>
                  <a href="https://www.rsc.org/periodic-table/element/1/hydrogen"
                     target="_blank"
                     rel="noindex nofollow"
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    RSC: Hydrogen Spectroscopy Data
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Для других элементов - базовая структурная информация
  return (
    <div className="structure-tab space-y-6">
      <div className="structure-header bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-4 mb-4">
          <Atom className="text-purple-600 dark:text-purple-400" size={32} />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Структура {element.name}
          </h1>
        </div>
      </div>

      {/* Электронная конфигурация */}
      <div className="electron-configuration">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Activity className="text-blue-600 dark:text-blue-400" size={24} />
          Электронная конфигурация
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
          <div className="text-center">
            <code className="text-2xl font-mono font-bold text-blue-900 dark:text-blue-100 bg-white dark:bg-gray-800 px-6 py-3 rounded-lg border">
              {element.electronstring}
            </code>
          </div>
          {element.electrons && (
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {element.electrons.map((count, index) => (
                <div key={index} className="electron-shell bg-white dark:bg-gray-800 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-700">
                  <span className="text-sm text-blue-600 dark:text-blue-400">Оболочка {index + 1}:</span>
                  <span className="font-bold text-blue-800 dark:text-blue-200 ml-1">{count}e⁻</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Атомные радиусы */}
      {element.radius && (
        <div className="atomic-radii">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="text-green-600 dark:text-green-400" size={24} />
            Атомные радиусы
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {element.radius.calculated && (
              <div className="radius-card bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center border border-blue-200 dark:border-blue-800">
                <div className="text-2xl font-bold text-blue-800 dark:text-blue-200">{element.radius.calculated}</div>
                <div className="text-sm text-blue-600 dark:text-blue-400 mt-1">пм</div>
                <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">Расчетный</div>
              </div>
            )}
            {element.radius.covalent && (
              <div className="radius-card bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center border border-green-200 dark:border-green-800">
                <div className="text-2xl font-bold text-green-800 dark:text-green-200">{element.radius.covalent}</div>
                <div className="text-sm text-green-600 dark:text-green-400 mt-1">пм</div>
                <div className="text-xs text-green-600 dark:text-green-400 mt-1">Ковалентный</div>
              </div>
            )}
            {element.radius.empirical && (
              <div className="radius-card bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center border border-purple-200 dark:border-purple-800">
                <div className="text-2xl font-bold text-purple-800 dark:text-purple-200">{element.radius.empirical}</div>
                <div className="text-sm text-purple-600 dark:text-purple-400 mt-1">пм</div>
                <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">Эмпирический</div>
              </div>
            )}
            {element.radius.vanderwaals && (
              <div className="radius-card bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center border border-orange-200 dark:border-orange-800">
                <div className="text-2xl font-bold text-orange-800 dark:text-orange-200">{element.radius.vanderwaals}</div>
                <div className="text-sm text-orange-600 dark:text-orange-400 mt-1">пм</div>
                <div className="text-xs text-orange-600 dark:text-orange-400 mt-1">Ван-дер-Ваальса</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Изотопы для других элементов */}
      {element.isotopes && (
        <div className="isotopes-basic">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Cpu className="text-purple-600 dark:text-purple-400" size={24} />
            Изотопы
          </h2>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-2">
                {element.isotopes}
              </div>
              <div className="text-purple-600 dark:text-purple-400">
                известных изотопов
              </div>
            </div>
            {element.radioactive && (
              <div className="mt-4 bg-red-100 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <div className="flex items-center gap-2 justify-center">
                  <span className="text-red-600 dark:text-red-400 text-xl">☢️</span>
                  <span className="text-red-800 dark:text-red-300 font-semibold">Радиоактивный элемент</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StructureTab;
