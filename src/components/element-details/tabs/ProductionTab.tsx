import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';

// Импорт визуальных компонентов для водорода
import HydrogenProductionSection from '../new-sections/HydrogenProductionSection';
import HydrogenProductionVisualBlock from '../new-sections/HydrogenProductionVisualBlock';

// Иконки
import { Factory, Zap, Beaker, FlaskConical, Settings, TrendingUp, 
         Database, DollarSign, Globe, Shield } from 'lucide-react';

interface ProductionTabProps {
  element: Element;
}

const ProductionTab: React.FC<ProductionTabProps> = ({ element }) => {
  const { t } = useValidatedTranslation('ProductionTab');

  // Специальная обработка для водорода
  if (element.atomic === '1') {
    return (
      <div className="production-tab space-y-8">
        {/* Заголовок для водорода */}
        <div className="hero-section bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 dark:from-green-900/20 dark:via-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl border border-green-200 dark:border-green-800">
          <div className="text-center mb-6">
            <div className="flex justify-center items-center gap-4 mb-4">
              <Factory className="text-green-600 dark:text-green-400" size={32} />
              <h1 className="text-4xl font-bold text-green-900 dark:text-green-100">
                Производство водорода
              </h1>
              <Zap className="text-blue-600 dark:text-blue-400" size={32} />
            </div>
            <p className="text-xl text-green-700 dark:text-green-300 font-medium">
              🏭 70+ млн тонн/год • ⚡ Электролиз • 🔥 Паровая конверсия • 🧪 Биопроизводство
            </p>
          </div>

          {/* Ключевые метрики производства */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center">
              <Globe className="mx-auto text-green-500 mb-2" size={24} />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">70+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">млн тонн/год</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center">
              <Factory className="mx-auto text-blue-500 mb-2" size={24} />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">95%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">из газа</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center">
              <Zap className="mx-auto text-purple-500 mb-2" size={24} />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">4%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">электролиз</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center">
              <DollarSign className="mx-auto text-orange-500 mb-2" size={24} />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">$1-8</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">за кг</div>
            </div>
          </div>
        </div>

        {/* Визуальный блок производства */}
        <div className="visual-production">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Beaker className="text-blue-600 dark:text-blue-400" size={28} />
            Визуальный обзор производства
          </h2>
          <HydrogenProductionVisualBlock />
        </div>

        {/* Детальная информация о производстве */}
        <div className="detailed-production">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Factory className="text-green-600 dark:text-green-400" size={28} />
            Методы и технологии
          </h2>
          <HydrogenProductionSection />
        </div>

        {/* Методы производства с расширенной информацией */}
        {element.production?.methods && element.production.methods.length > 0 && (
          <div className="production-methods-section">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Settings className="text-purple-600 dark:text-purple-400" size={28} />
              Основные методы производства
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {element.production.methods.map((method, index) => {
                let iconComponent = <FlaskConical className="text-blue-500" size={32} />;
                let bgColor = 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20';
                let borderColor = 'border-blue-200 dark:border-blue-800';
                
                if (method.includes('паровая') || method.includes('метан')) {
                  iconComponent = <Factory className="text-green-500" size={32} />;
                  bgColor = 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20';
                  borderColor = 'border-green-200 dark:border-green-800';
                } else if (method.includes('электролиз')) {
                  iconComponent = <Zap className="text-purple-500" size={32} />;
                  bgColor = 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20';
                  borderColor = 'border-purple-200 dark:border-purple-800';
                } else if (method.includes('био')) {
                  iconComponent = <Beaker className="text-orange-500" size={32} />;
                  bgColor = 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20';
                  borderColor = 'border-orange-200 dark:border-orange-800';
                }

                return (
                  <div key={index} className={`method-card bg-gradient-to-br ${bgColor} border ${borderColor} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}>
                    <div className="flex items-start gap-4">
                      {iconComponent}
                      <div className="flex-1">
                        <p className="text-gray-800 dark:text-gray-200 font-semibold text-lg leading-relaxed mb-3">
                          {method}
                        </p>
                        
                        {/* Дополнительная техническая информация */}
                        {method.includes('паровая') && (
                          <div className="technical-info text-sm text-green-700 dark:text-green-300 bg-white dark:bg-gray-800 p-3 rounded-lg mt-3">
                            <div className="font-medium mb-1">⚙️ Технические параметры:</div>
                            <ul className="space-y-1 text-xs">
                              <li>• Температура: 700-1100°C</li>
                              <li>• Давление: 3-25 атм</li>
                              <li>• Катализатор: Ni/Al₂O₃</li>
                              <li>• Выход: ~95% мирового производства</li>
                            </ul>
                          </div>
                        )}
                        
                        {method.includes('электролиз') && (
                          <div className="technical-info text-sm text-purple-700 dark:text-purple-300 bg-white dark:bg-gray-800 p-3 rounded-lg mt-3">
                            <div className="font-medium mb-1">⚡ Электролиз воды:</div>
                            <ul className="space-y-1 text-xs">
                              <li>• Реакция: 2H₂O → 2H₂ + O₂</li>
                              <li>• Энергопотребление: 50-80 кВт·ч/кг H₂</li>
                              <li>• Чистота: &gt;99.9%</li>
                              <li>• Перспективы: зеленый водород</li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Экономика производства */}
        <div className="production-economics bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-8 rounded-2xl border border-orange-200 dark:border-orange-800">
          <h2 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-6 flex items-center gap-3">
            <DollarSign className="text-orange-600 dark:text-orange-400" size={28} />
            Экономика производства
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {element.production?.annualProduction && (
              <div className="economic-metric bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="text-orange-500" size={24} />
                  <h3 className="text-lg font-bold text-orange-800 dark:text-orange-200">Мировое производство</h3>
                </div>
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  {element.production.annualProduction}
                </div>
                <div className="text-sm text-orange-600 dark:text-orange-400">
                  и растет на 5-7% в год
                </div>
              </div>
            )}
            
            {element.production?.cost && (
              <div className="economic-metric bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="text-orange-500" size={24} />
                  <h3 className="text-lg font-bold text-orange-800 dark:text-orange-200">Стоимость производства</h3>
                </div>
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  {element.production.cost}
                </div>
                <div className="text-sm text-orange-600 dark:text-orange-400">
                  зависит от метода и масштаба
                </div>
              </div>
            )}
            
            <div className="economic-metric bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-orange-500" size={24} />
                <h3 className="text-lg font-bold text-orange-800 dark:text-orange-200">Прогноз роста</h3>
              </div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                500+
              </div>
              <div className="text-sm text-orange-600 dark:text-orange-400">
                млн тонн к 2050 году
              </div>
            </div>
          </div>
        </div>

        {/* Научные ссылки */}
        <div className="scientific-references bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
            <Database className="text-blue-600 dark:text-blue-400" size={24} />
            Научные источники по производству водорода
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">🏭 Промышленные технологии:</h4>
              <ul className="space-y-1">
                <li>
                  <a href="https://www.iea.org/reports/hydrogen-patents-for-a-clean-energy-future"
                     target="_blank"
                     rel="noindex nofollow"
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    IEA: Hydrogen Production Technologies
                  </a>
                </li>
                <li>
                  <a href="https://www.energy.gov/eere/fuelcells/hydrogen-production-natural-gas-reforming"
                     target="_blank"
                     rel="noindex nofollow"
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    DOE: Steam Methane Reforming
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">⚡ Электролиз и чистый водород:</h4>
              <ul className="space-y-1">
                <li>
                  <a href="https://www.irena.org/publications/2020/Jun/Green-Hydrogen-Cost-Reduction"
                     target="_blank"
                     rel="noindex nofollow"
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    IRENA: Green Hydrogen Cost Reduction
                  </a>
                </li>
                <li>
                  <a href="https://www.nature.com/articles/s41560-020-0558-0"
                     target="_blank"
                     rel="noindex nofollow"
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    Nature: Electrolyzer Technologies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Для других элементов - стандартная структура
  return (
    <div className="production-tab space-y-8">
      <div className="production-header bg-gradient-to-r from-gray-50 to-green-50 dark:from-gray-800 dark:to-green-900/20 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-4 mb-4">
          <Factory className="text-green-600 dark:text-green-400" size={32} />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Производство {element.name}
          </h1>
        </div>
      </div>

      {/* Основная информация о производстве */}
      {element.production ? (
        <div className="production-info-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Методы производства */}
          {element.production.methods && element.production.methods.length > 0 && (
            <div className="production-methods bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-4 flex items-center gap-2">
                <Settings className="text-blue-600 dark:text-blue-400" size={24} />
                Методы производства
              </h3>
              <div className="space-y-3">
                {element.production.methods.map((method, index) => (
                  <div key={index} className="method-item bg-white dark:bg-gray-800 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                    <p className="text-blue-700 dark:text-blue-300 font-medium">{method}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Источники и экономика */}
          <div className="sources-economics space-y-6">
            {element.production.sources && element.production.sources.length > 0 && (
              <div className="production-sources bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
                  <Globe className="text-green-600 dark:text-green-400" size={24} />
                  Источники сырья
                </h3>
                <div className="space-y-3">
                  {element.production.sources.map((source, index) => (
                    <div key={index} className="source-item bg-white dark:bg-gray-800 p-4 rounded-lg border border-green-100 dark:border-green-800">
                      <p className="text-green-700 dark:text-green-300 font-medium">{source}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Экономические показатели */}
            <div className="economic-metrics bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
              <h3 className="text-xl font-semibold text-orange-800 dark:text-orange-200 mb-4 flex items-center gap-2">
                <DollarSign className="text-orange-600 dark:text-orange-400" size={24} />
                Экономические показатели
              </h3>
              <div className="space-y-4">
                {element.production.annualProduction && (
                  <div className="metric-item bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-orange-600 dark:text-orange-400 font-medium">Годовое производство:</span>
                      <span className="font-bold text-orange-800 dark:text-orange-200">{element.production.annualProduction}</span>
                    </div>
                  </div>
                )}
                {element.production.cost && (
                  <div className="metric-item bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-orange-600 dark:text-orange-400 font-medium">Стоимость:</span>
                      <span className="font-bold text-orange-800 dark:text-orange-200">{element.production.cost}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Общая информация для элементов без данных о производстве */
        <div className="general-production-info">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
              <FlaskConical className="text-gray-600 dark:text-gray-400" size={24} />
              Общая информация о производстве
            </h3>
            
            {element.discover && (
              <div className="discovery-info mb-6">
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Открытие и выделение</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Элемент {element.name} был открыт в {element.discover} году. 
                  Методы получения зависят от распространенности элемента в природе и его химических свойств.
                </p>
              </div>
            )}

            {element.abundance && (
              <div className="abundance-production-relation">
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-4">Распространенность и производство</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {element.abundance.crust && (
                    <div className="abundance-item bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-800 dark:text-gray-200">{element.abundance.crust}%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">В земной коре</div>
                      </div>
                    </div>
                  )}
                  {element.abundance.ocean && (
                    <div className="abundance-item bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-800 dark:text-gray-200">{element.abundance.ocean}%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">В океанах</div>
                      </div>
                    </div>
                  )}
                  {element.abundance.meteor && (
                    <div className="abundance-item bg-white dark:bg-gray-700 p-4 rounded-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-800 dark:text-gray-200">{element.abundance.meteor}%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">В метеоритах</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {element.radioactive && (
              <div className="radioactive-production-note bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mt-6">
                <div className="flex items-center gap-3">
                  <Shield className="text-red-600 dark:text-red-400" size={20} />
                  <span className="text-red-800 dark:text-red-300 font-medium">
                    Производство радиоактивного элемента требует специальных мер безопасности
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductionTab;
