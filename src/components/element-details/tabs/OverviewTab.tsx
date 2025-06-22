import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';
import { getCategoryColor } from '../../../data/elementCategories';

// Импортируем готовые визуальные блоки для водорода
import HydrogenOverviewSection from '../new-sections/HydrogenOverviewSection';
import HydrogenPhysicalConstantsSection from '../new-sections/HydrogenPhysicalConstantsSection';
import HydrogenPropertiesVisualBlock from '../new-sections/HydrogenPropertiesVisualBlock';
import HydrogenAtomicStructureVisualBlock from '../new-sections/HydrogenAtomicStructureVisualBlock';
import HydrogenDistributionPieChart from '../new-sections/HydrogenDistributionPieChart';
import HydrogenUniverseBarChart from '../new-sections/HydrogenUniverseBarChart';
import HydrogenVisualSection from '../new-sections/HydrogenVisualSection';
import SpectralAndIsotopeFacts from '../new-sections/HydrogenSpectralAndIsotopeSection';
import HydrogenInteractiveCharts from '../new-sections/HydrogenInteractiveCharts';
import HydrogenAbundancePeriodicTable from '../new-sections/HydrogenAbundancePeriodicTable';
import HydrogenEducationalTimeline from '../new-sections/HydrogenEducationalTimeline';
import HydrogenComparison from '../new-sections/HydrogenComparison';

// Иконки для интерактивности
import { Atom, Zap, Globe, Star, FlaskConical, Activity, Database, 
         BarChart3, PieChart, TrendingUp, Sparkles, Target, Beaker } from 'lucide-react';

interface OverviewTabProps {
  element: Element;
}

const OverviewTab: React.FC<OverviewTabProps> = ({ element }) => {
  const { t } = useValidatedTranslation('OverviewTab');
  
  const getElementColors = () => {
    return getCategoryColor(element.category || 'unknown');
  };

  const colors = getElementColors();

  // Специальный обработчик для водорода
  if (element.atomic === '1') {
    return (
      <div className="overview-tab space-y-8">
        {/* Заголовок с иконками */}
        <div className="hero-section bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-blue-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
          <div className="text-center mb-6">
            <div className="flex justify-center items-center gap-4 mb-4">
              <Atom className="text-blue-600 dark:text-blue-400" size={32} />
              <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-100">
                Водород (H)
              </h1>
              <Star className="text-yellow-500" size={32} />
            </div>
            <p className="text-xl text-blue-700 dark:text-blue-300 font-medium">
              🌌 Самый распространенный элемент во Вселенной • ⚡ Основа всей материи • 💧 Компонент воды
            </p>
          </div>

          {/* Быстрые факты с иконками */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center">
              <Target className="mx-auto text-red-500 mb-2" size={24} />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">1</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Атомный номер</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center">
              <Activity className="mx-auto text-green-500 mb-2" size={24} />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">1.008</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Атомная масса</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center">
              <Globe className="mx-auto text-blue-500 mb-2" size={24} />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">75%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Во Вселенной</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center">
              <Beaker className="mx-auto text-purple-500 mb-2" size={24} />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">1766</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Год открытия</div>
            </div>
          </div>
        </div>

        {/* Интерактивные графики */}
        <div className="charts-section">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <BarChart3 className="text-blue-600 dark:text-blue-400" size={28} />
            Распространенность водорода
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <HydrogenUniverseBarChart />
            <HydrogenDistributionPieChart />
          </div>
        </div>

        {/* Дополнительные интерактивные диаграммы */}
        <HydrogenInteractiveCharts />

        {/* Существующие визуальные блоки */}
        <div className="visual-blocks-section">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Sparkles className="text-purple-600 dark:text-purple-400" size={28} />
            Детальный обзор
          </h2>
          <HydrogenOverviewSection />
        </div>

        {/* Физические константы */}
        <div className="constants-section">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Database className="text-green-600 dark:text-green-400" size={28} />
            Физические константы
          </h2>
          <HydrogenPhysicalConstantsSection />
        </div>

        {/* Визуальные блоки свойств */}
        <div className="properties-visual">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <FlaskConical className="text-orange-600 dark:text-orange-400" size={28} />
            Свойства и структура
          </h2>
          <HydrogenPropertiesVisualBlock />
          <HydrogenAtomicStructureVisualBlock />
        </div>

        {/* Спектральная информация */}
        <div className="spectral-section">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <TrendingUp className="text-cyan-600 dark:text-cyan-400" size={28} />
            Спектры и изотопы
          </h2>
          <SpectralAndIsotopeFacts />
        </div>

        {/* Дополнительные визуализации */}
        <div className="additional-visual">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Atom className="text-indigo-600 dark:text-indigo-400" size={28} />
            Дополнительные визуализации
          </h2>
          <HydrogenVisualSection />
        </div>

        {/* Образовательная временная шкала */}
        <HydrogenEducationalTimeline />

        {/* Интерактивная периодическая таблица распространенности */}
        <HydrogenAbundancePeriodicTable />

        {/* Сравнение с другими элементами */}
        <HydrogenComparison />

        {/* Научные ссылки */}
        <div className="scientific-references bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
            <Database className="text-blue-600 dark:text-blue-400" size={24} />
            Научные источники и исследования
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">🔬 Фундаментальные исследования:</h4>
              <ul className="space-y-1">
                <li>
                  <a href="https://physics.nist.gov/cgi-bin/ASD/energy1.pl?de=on&spectrum=H&submit=Retrieve+Data&units=1&format=0&output=0&page_size=15&multiplet_ordered=on&conf_out=on&term_out=on&level_out=on&unc_out=1&j_out=on&lande_out=on&perc_out=on&biblio=on&temp=" 
                     target="_blank" 
                     rel="noindex nofollow" 
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    NIST Atomic Spectra Database - Hydrogen
                  </a>
                </li>
                <li>
                  <a href="https://www.iupac.org/fileadmin/user_upload/news/IUPAC_Periodic_Table-01Dec18.pdf"
                     target="_blank"
                     rel="noindex nofollow"
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    IUPAC Periodic Table of Elements
                  </a>
                </li>
                <li>
                  <a href="https://webelements.com/hydrogen/"
                     target="_blank"
                     rel="noindex nofollow"
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    WebElements - Comprehensive Hydrogen Data
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">📊 Современные исследования:</h4>
              <ul className="space-y-1">
                <li>
                  <a href="https://www.nature.com/articles/s41586-020-2909-6"
                     target="_blank"
                     rel="noindex nofollow"
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    Nature: Metallic hydrogen at extreme pressures
                  </a>
                </li>
                <li>
                  <a href="https://science.sciencemag.org/content/355/6326/715"
                     target="_blank"
                     rel="noindex nofollow"
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    Science: Observation of the Wigner-Huntington transition
                  </a>
                </li>
                <li>
                  <a href="https://www.energy.gov/eere/fuelcells/hydrogen-production"
                     target="_blank"
                     rel="noindex nofollow"
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    US DOE: Hydrogen Production Technologies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-xs text-blue-700 dark:text-blue-300">
              <strong>Примечание:</strong> Все ссылки ведут на проверенные научные источники и открываются в новых вкладках. 
              Данные соответствуют последним рекомендациям IUPAC и NIST.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Для остальных элементов - базовый обзор
  return (
    <div className="overview-tab space-y-6">
      <div className="element-summary bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-4 mb-4">
          <Atom className="text-blue-600 dark:text-blue-400" size={32} />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {element.name} ({element.symbol})
          </h1>
        </div>
        
        {element.description && (
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            {element.description}
          </p>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
            <Target className="mx-auto text-red-500 mb-2" size={20} />
            <div className="text-xl font-bold text-gray-900 dark:text-white">{element.atomic}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Атомный номер</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
            <Activity className="mx-auto text-green-500 mb-2" size={20} />
            <div className="text-xl font-bold text-gray-900 dark:text-white">{element.weight}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Атомная масса</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
            <Zap className="mx-auto text-blue-500 mb-2" size={20} />
            <div className="text-xl font-bold text-gray-900 dark:text-white">{element.group || '—'}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Группа</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
            <FlaskConical className="mx-auto text-purple-500 mb-2" size={20} />
            <div className="text-xl font-bold text-gray-900 dark:text-white">{element.period || '—'}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Период</div>
          </div>
        </div>
      </div>

      {/* Базовые свойства для других элементов */}
      <div className="basic-properties">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Database className="text-blue-600 dark:text-blue-400" size={24} />
          Основные свойства
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {element.melt && (
            <div className="property-card bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">🧊</span>
                <span className="font-medium text-gray-900 dark:text-white">Температура плавления</span>
              </div>
              <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{element.melt}°C</div>
            </div>
          )}
          {element.boil && (
            <div className="property-card bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">💨</span>
                <span className="font-medium text-gray-900 dark:text-white">Температура кипения</span>
              </div>
              <div className="text-lg font-bold text-red-600 dark:text-red-400">{element.boil}°C</div>
            </div>
          )}
          {element.density?.stp && (
            <div className="property-card bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">⚖️</span>
                <span className="font-medium text-gray-900 dark:text-white">Плотность</span>
              </div>
              <div className="text-lg font-bold text-green-600 dark:text-green-400">{element.density.stp} г/см³</div>
            </div>
          )}
        </div>
      </div>

      {/* Научные ссылки для всех элементов */}
      <div className="scientific-references bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Database className="text-blue-600 dark:text-blue-400" size={20} />
          Научные источники
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <ul className="space-y-1">
              <li>
                <a href={`https://pubchem.ncbi.nlm.nih.gov/element/${element.symbol}`}
                   target="_blank"
                   rel="noindex nofollow"
                   className="text-blue-600 dark:text-blue-400 hover:underline">
                  PubChem - {element.name} Data
                </a>
              </li>
              <li>
                <a href={`https://webelements.com/${element.name.toLowerCase()}/`}
                   target="_blank"
                   rel="noindex nofollow"
                   className="text-blue-600 dark:text-blue-400 hover:underline">
                  WebElements - {element.name}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1">
              <li>
                <a href="https://www.rsc.org/periodic-table"
                   target="_blank"
                   rel="noindex nofollow"
                   className="text-blue-600 dark:text-blue-400 hover:underline">
                  Royal Society of Chemistry
                </a>
              </li>
              <li>
                <a href="https://www.iupac.org/what-we-do/periodic-table-of-elements/"
                   target="_blank"
                   rel="noindex nofollow"
                   className="text-blue-600 dark:text-blue-400 hover:underline">
                  IUPAC Periodic Table
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
