import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';

// Импорт готовых компонентов для водорода
import HydrogenCommercialUsesSection from '../new-sections/HydrogenCommercialUsesSection';
import HydrogenApplicationsVisualBlock from '../new-sections/HydrogenApplicationsVisualBlock';
import HydrogenReactionSimulator from '../new-sections/HydrogenReactionSimulator';

// Иконки
import { Rocket, Car, Factory, Zap, Wrench, Lightbulb, Cpu, FlaskConical, 
         TrendingUp, Shield, Beaker, Target } from 'lucide-react';

interface ApplicationsTabProps {
  element: Element;
}

const ApplicationsTab: React.FC<ApplicationsTabProps> = ({ element }) => {
  const { t } = useValidatedTranslation('ApplicationsTab');

  // Проверяем есть ли данные о применении
  const hasApplicationData = element.applications && (
    (element.applications.primary && element.applications.primary.length > 0) ||
    (element.applications.secondary && element.applications.secondary.length > 0) ||
    (element.applications.emerging && element.applications.emerging.length > 0)
  );

  // Специальная обработка для водорода с визуальными компонентами
  if (element.atomic === '1') {
    return (
      <div className="applications-tab space-y-8">
        {/* Заголовок для водорода */}
        <div className="hero-section bg-gradient-to-r from-blue-50 via-green-50 to-cyan-50 dark:from-blue-900/20 dark:via-green-900/20 dark:to-cyan-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
          <div className="text-center mb-6">
            <div className="flex justify-center items-center gap-4 mb-4">
              <Rocket className="text-blue-600 dark:text-blue-400" size={32} />
              <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-100">
                Применения водорода
              </h1>
              <Factory className="text-green-600 dark:text-green-400" size={32} />
            </div>
            <p className="text-xl text-blue-700 dark:text-blue-300 font-medium">
              🚀 Ракетное топливо • 🏭 Промышленные процессы • ⚡ Чистая энергия • 🧪 Химический синтез
            </p>
          </div>

          {/* Быстрая статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center">
              <Factory className="mx-auto text-blue-500 mb-2" size={24} />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">70+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">млн тонн/год</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center">
              <Car className="mx-auto text-green-500 mb-2" size={24} />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">85%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">для NH₃</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center">
              <Rocket className="mx-auto text-purple-500 mb-2" size={24} />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">452</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">удельный импульс</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center">
              <Zap className="mx-auto text-yellow-500 mb-2" size={24} />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">142</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">МДж/кг</div>
            </div>
          </div>
        </div>

        {/* Визуальный блок применений */}
        <div className="visual-applications">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Target className="text-blue-600 dark:text-blue-400" size={28} />
            Визуальный обзор применений
          </h2>
          <HydrogenApplicationsVisualBlock />
        </div>

        {/* Симулятор реакций и калькулятор */}
        <HydrogenReactionSimulator />

        {/* Коммерческие применения */}
        <div className="commercial-uses">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Factory className="text-green-600 dark:text-green-400" size={28} />
            Коммерческие применения
          </h2>
          <HydrogenCommercialUsesSection />
        </div>

        {/* Основные применения с расширенной детализацией */}
        {element.applications?.primary && element.applications.primary.length > 0 && (
          <div className="primary-applications-section">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Beaker className="text-blue-600 dark:text-blue-400" size={28} />
              Основные промышленные применения
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {element.applications.primary.map((application, index) => {
                let iconComponent = <FlaskConical className="text-blue-500" size={32} />;
                let bgColor = 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20';
                let borderColor = 'border-blue-200 dark:border-blue-800';
                
                // Назначаем иконки на основе содержания
                if (application.includes('аммиак') || application.includes('Габера-Боша')) {
                  iconComponent = <Factory className="text-green-500" size={32} />;
                  bgColor = 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20';
                  borderColor = 'border-green-200 dark:border-green-800';
                } else if (application.includes('ракет')) {
                  iconComponent = <Rocket className="text-purple-500" size={32} />;
                  bgColor = 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20';
                  borderColor = 'border-purple-200 dark:border-purple-800';
                } else if (application.includes('сварка')) {
                  iconComponent = <Wrench className="text-orange-500" size={32} />;
                  bgColor = 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20';
                  borderColor = 'border-orange-200 dark:border-orange-800';
                } else if (application.includes('гидрирование')) {
                  iconComponent = <Cpu className="text-cyan-500" size={32} />;
                  bgColor = 'from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20';
                  borderColor = 'border-cyan-200 dark:border-cyan-800';
                }

                return (
                  <div key={index} className={`application-card bg-gradient-to-br ${bgColor} border ${borderColor} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                    <div className="flex items-start gap-4">
                      {iconComponent}
                      <div className="flex-1">
                        <p className="text-gray-800 dark:text-gray-200 font-semibold text-lg leading-relaxed mb-3">
                          {application}
                        </p>
                        {/* Дополнительная информация */}
                        {application.includes('аммиак') && (
                          <div className="additional-info text-sm text-green-700 dark:text-green-300 bg-white dark:bg-gray-800 p-3 rounded-lg mt-3">
                            <div className="font-medium mb-1">💡 Ключевые факты:</div>
                            <ul className="space-y-1 text-xs">
                              <li>• 85% всего водорода используется для производства NH₃</li>
                              <li>• Процесс: N₂ + 3H₂ → 2NH₃ при 450°C и 200 атм</li>
                              <li>• Основа для удобрений, питающих 50% населения планеты</li>
                            </ul>
                          </div>
                        )}
                        {application.includes('ракет') && (
                          <div className="additional-info text-sm text-purple-700 dark:text-purple-300 bg-white dark:bg-gray-800 p-3 rounded-lg mt-3">
                            <div className="font-medium mb-1">🚀 Преимущества:</div>
                            <ul className="space-y-1 text-xs">
                              <li>• Высший удельный импульс среди химических топлив</li>
                              <li>• Экологически чистое сгорание (продукт - вода)</li>
                              <li>• Используется в Space Shuttle, Delta IV, Ariane 5</li>
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

        {/* Перспективные применения */}
        {element.applications?.emerging && element.applications.emerging.length > 0 && (
          <div className="emerging-applications-section">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <TrendingUp className="text-purple-600 dark:text-purple-400" size={28} />
              Перспективные и будущие применения
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {element.applications.emerging.map((application, index) => (
                <div key={index} className="emerging-card bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-200 dark:border-purple-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-500 rounded-full">
                      {application.includes('топливн') ? 
                        <Car className="text-white" size={20} /> :
                        application.includes('энерг') ?
                        <Zap className="text-white" size={20} /> :
                        <Lightbulb className="text-white" size={20} />
                      }
                    </div>
                    <div>
                      <p className="text-purple-800 dark:text-purple-200 font-medium text-lg leading-relaxed mb-2">
                        {application}
                      </p>
                      {/* Прогнозы развития */}
                      {application.includes('топливн') && (
                        <div className="forecast text-sm text-purple-600 dark:text-purple-400 bg-white dark:bg-gray-800 p-3 rounded-lg">
                          <div className="font-medium mb-1">📈 Прогноз развития:</div>
                          <ul className="space-y-1 text-xs">
                            <li>• К 2030: 10+ млн автомобилей на водороде</li>
                            <li>• Снижение стоимости до $3-4/кг к 2030</li>
                            <li>• Развитие инфраструктуры заправочных станций</li>
                          </ul>
                        </div>
                      )}
                      {application.includes('энерг') && (
                        <div className="forecast text-sm text-purple-600 dark:text-purple-400 bg-white dark:bg-gray-800 p-3 rounded-lg">
                          <div className="font-medium mb-1">⚡ Потенциал:</div>
                          <ul className="space-y-1 text-xs">
                            <li>• Хранение возобновляемой энергии на месяцы</li>
                            <li>• Сезонное выравнивание энергосистемы</li>
                            <li>• Декарбонизация тяжелой промышленности</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Научные ссылки */}
        <div className="scientific-references bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
            <Shield className="text-blue-600 dark:text-blue-400" size={24} />
            Научные источники по применению водорода
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">🏭 Промышленность:</h4>
              <ul className="space-y-1">
                <li>
                  <a href="https://www.iea.org/reports/the-future-of-hydrogen"
                     target="_blank"
                     rel="noindex nofollow"
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    IEA: The Future of Hydrogen Report
                  </a>
                </li>
                <li>
                  <a href="https://www.energy.gov/eere/fuelcells/hydrogen-production"
                     target="_blank"
                     rel="noindex nofollow"
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    US DOE: Hydrogen Production and Applications
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">🚀 Космические технологии:</h4>
              <ul className="space-y-1">
                <li>
                  <a href="https://www.nasa.gov/exploration/systems/sls/fs/hydrogen.html"
                     target="_blank"
                     rel="noindex nofollow"
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    NASA: Hydrogen as Rocket Fuel
                  </a>
                </li>
                <li>
                  <a href="https://www.esa.int/Science_Exploration/Space_Science/Propulsion"
                     target="_blank"
                     rel="noindex nofollow"
                     className="text-blue-600 dark:text-blue-400 hover:underline">
                    ESA: Hydrogen Propulsion Systems
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
    <div className="applications-tab space-y-8">
      {hasApplicationData ? (
        <>
          {/* Основные применения */}
          {element.applications?.primary && element.applications.primary.length > 0 && (
            <div className="primary-applications-section">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-blue-200 dark:border-blue-700 pb-3">
                {t('details.primaryApplications', 'Основные применения')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {element.applications.primary.map((application, index) => (
                  <div key={index} className="application-item bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-500 w-4 h-4 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-blue-800 dark:text-blue-200 font-medium text-lg leading-relaxed">{application}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Вторичные применения */}
          {element.applications?.secondary && element.applications.secondary.length > 0 && (
            <div className="secondary-applications-section">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-green-200 dark:border-green-700 pb-3">
                {t('details.secondaryApplications', 'Дополнительные применения')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {element.applications.secondary.map((application, index) => (
                  <div key={index} className="application-item bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-500 w-4 h-4 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-green-800 dark:text-green-200 font-medium text-lg leading-relaxed">{application}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Перспективные применения */}
          {element.applications?.emerging && element.applications.emerging.length > 0 && (
            <div className="emerging-applications-section">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-purple-200 dark:border-purple-700 pb-3">
                {t('details.emergingApplications', 'Перспективные применения')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {element.applications.emerging.map((application, index) => (
                  <div key={index} className="application-item bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-500 w-4 h-4 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-purple-800 dark:text-purple-200 font-medium text-lg leading-relaxed">{application}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Промышленное значение */}
          {element.production?.annualProduction && (
            <div className="industrial-significance">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white border-b-2 border-orange-200 dark:border-orange-700 pb-3">
                {t('details.industrialSignificance', 'Промышленное значение')}
              </h3>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="metric-item">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">📊</span>
                      <span className="text-orange-600 dark:text-orange-400 font-semibold text-lg">{t('details.annualProduction', 'Годовое производство')}:</span>
                    </div>
                    <span className="font-bold text-orange-800 dark:text-orange-200 text-xl">{element.production.annualProduction}</span>
                  </div>
                  {element.production.cost && (
                    <div className="metric-item">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">💰</span>
                        <span className="text-orange-600 dark:text-orange-400 font-semibold text-lg">{t('details.approximateCost', 'Примерная стоимость')}:</span>
                      </div>
                      <span className="font-bold text-orange-800 dark:text-orange-200 text-xl">{element.production.cost}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        /* Общая информация о применении для элементов без детальных данных */
        <div className="general-applications">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            Применение элемента {element.name}
          </h3>
          
          <div className="space-y-6">
            {/* Общие применения на основе категории элемента */}
            {element.series === 'Noble' && (
              <div className="noble-gas-applications bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-4 text-lg flex items-center">
                  <span className="text-2xl mr-3">⚪</span>
                  Применения благородного газа
                </h4>
                <ul className="space-y-3 text-blue-700 dark:text-blue-300">
                  <li>• Инертная атмосфера для сварочных процессов</li>
                  <li>• Заполнение электрических ламп и разрядных трубок</li>
                  <li>• Криогенные применения при низких температурах</li>
                  <li>• Защитная атмосфера в производстве металлов</li>
                </ul>
              </div>
            )}

            {element.series === 'Transition' && (
              <div className="transition-metal-applications bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 text-lg flex items-center">
                  <span className="text-2xl mr-3">🔧</span>
                  Применения переходного металла
                </h4>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li>• Производство сплавов и легированных сталей</li>
                  <li>• Катализаторы в химической промышленности</li>
                  <li>• Конструкционные материалы</li>
                  <li>• Электронная и электротехническая промышленность</li>
                </ul>
              </div>
            )}

            {element.radioactive && (
              <div className="radioactive-warning bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-red-600 dark:text-red-400 text-2xl">☢️</span>
                  <h4 className="font-bold text-red-800 dark:text-red-300 text-lg">
                    Применения радиоактивного элемента
                  </h4>
                </div>
                <ul className="space-y-3 text-red-700 dark:text-red-300">
                  <li>• Научные исследования ядерной физики</li>
                  <li>• Медицинская диагностика и терапия</li>
                  <li>• Ядерная энергетика</li>
                  <li>• Радиоизотопные источники энергии</li>
                </ul>
              </div>
            )}

            {!element.radioactive && element.series !== 'Noble' && element.series !== 'Transition' && (
              <div className="general-info bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4 text-lg flex items-center">
                  <span className="text-2xl mr-3">🔬</span>
                  Общие области применения
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Элемент {element.name} находит применение в различных областях химии, материаловедения и технологий. 
                  Конкретные применения зависят от его уникальных физических и химических свойств.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationsTab;
