import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Clock, BookOpen, Award, Lightbulb, Rocket, Atom, Zap } from 'lucide-react';

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  scientist: string;
  significance: string;
  category: 'discovery' | 'theory' | 'application' | 'technology';
  icon: React.ReactNode;
}

const HydrogenEducationalTimeline: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const timelineEvents: TimelineEvent[] = [
    {
      year: 1766,
      title: 'Открытие "горючего воздуха"',
      description: 'Генри Кавендиш впервые выделил водород как отдельное вещество, изучая реакции кислот с металлами.',
      scientist: 'Генри Кавендиш',
      significance: 'Первое научное описание водорода как отдельного химического элемента',
      category: 'discovery',
      icon: <BookOpen className="text-blue-500" size={16} />
    },
    {
      year: 1783,
      title: 'Название "водород"',
      description: 'Антуан Лавуазье доказал, что вода - соединение водорода и кислорода, ввел название "hydrogène" (рождающий воду).',
      scientist: 'Антуан Лавуазье',
      significance: 'Установление химической природы воды и систематизация химической номенклатуры',
      category: 'discovery',
      icon: <Atom className="text-green-500" size={16} />
    },
    {
      year: 1800,
      title: 'Первый электролиз',
      description: 'Уильям Николсон и Энтони Карлайл разложили воду электрическим током, получив водород и кислород.',
      scientist: 'Николсон и Карлайл',
      significance: 'Открытие способа получения чистого водорода, основа современной водородной энергетики',
      category: 'technology',
      icon: <Zap className="text-yellow-500" size={16} />
    },
    {
      year: 1838,
      title: 'Топливный элемент',
      description: 'Кристиан Шёнбайн изобрел первый водородно-кислородный топливный элемент.',
      scientist: 'Кристиан Шёнбайн',
      significance: 'Принцип преобразования химической энергии в электрическую без горения',
      category: 'technology',
      icon: <Lightbulb className="text-purple-500" size={16} />
    },
    {
      year: 1885,
      title: 'Серия Бальмера',
      description: 'Иоганн Бальмер открыл математическую формулу для спектральных линий водорода в видимой области.',
      scientist: 'Иоганн Бальмер',
      significance: 'Первое количественное описание атомных спектров, предвестник квантовой механики',
      category: 'theory',
      icon: <Award className="text-indigo-500" size={16} />
    },
    {
      year: 1908,
      title: 'Процесс Габера-Боша',
      description: 'Фриц Габер разработал процесс синтеза аммиака из водорода и азота под давлением.',
      scientist: 'Фриц Габер',
      significance: 'Промышленное производство удобрений, революция в сельском хозяйстве',
      category: 'application',
      icon: <Rocket className="text-orange-500" size={16} />
    },
    {
      year: 1913,
      title: 'Модель атома Бора',
      description: 'Нильс Бор создал квантовую модель атома водорода, объяснив его спектральные линии.',
      scientist: 'Нильс Бор',
      significance: 'Рождение квантовой механики, понимание структуры атома',
      category: 'theory',
      icon: <Atom className="text-cyan-500" size={16} />
    },
    {
      year: 1931,
      title: 'Открытие дейтерия',
      description: 'Гарольд Юри открыл тяжелый водород (дейтерий) методом фракционной перегонки.',
      scientist: 'Гарольд Юри',
      significance: 'Открытие изотопов, основа для ядерных исследований и термоядерного синтеза',
      category: 'discovery',
      icon: <BookOpen className="text-red-500" size={16} />
    },
    {
      year: 1952,
      title: 'Первая водородная бомба',
      description: 'США испытали первую термоядерную бомбу, использующую реакцию синтеза дейтерия и трития.',
      scientist: 'Эдвард Теллер',
      significance: 'Демонстрация огромной энергии термоядерного синтеза, начало атомной эры',
      category: 'technology',
      icon: <Zap className="text-red-600" size={16} />
    },
    {
      year: 1970,
      title: 'Водородная экономика',
      description: 'Джон Бокрис ввел термин "водородная экономика", предложив водород как универсальный энергоноситель.',
      scientist: 'Джон Бокрис',
      significance: 'Концепция экологически чистой энергетики на основе водорода',
      category: 'theory',
      icon: <Lightbulb className="text-green-600" size={16} />
    },
    {
      year: 1997,
      title: 'Toyota Prius (гибрид)',
      description: 'Начало массового производства гибридных автомобилей, предшественников водородных машин.',
      scientist: 'Инженеры Toyota',
      significance: 'Переход к экологически чистому транспорту',
      category: 'application',
      icon: <Rocket className="text-blue-600" size={16} />
    },
    {
      year: 2020,
      title: 'Зеленый водород',
      description: 'Массовые инвестиции в производство "зеленого" водорода из возобновляемых источников энергии.',
      scientist: 'Мировое сообщество',
      significance: 'Переход к углеродно-нейтральной экономике',
      category: 'application',
      icon: <Atom className="text-green-400" size={16} />
    }
  ];

  const categories = [
    { id: 'all', name: 'Все события', color: 'text-gray-600' },
    { id: 'discovery', name: 'Открытия', color: 'text-blue-600' },
    { id: 'theory', name: 'Теории', color: 'text-purple-600' },
    { id: 'technology', name: 'Технологии', color: 'text-yellow-600' },
    { id: 'application', name: 'Применения', color: 'text-green-600' }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(event => event.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'discovery': return 'border-blue-300 bg-blue-50 dark:bg-blue-900/20';
      case 'theory': return 'border-purple-300 bg-purple-50 dark:bg-purple-900/20';
      case 'technology': return 'border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20';
      case 'application': return 'border-green-300 bg-green-50 dark:bg-green-900/20';
      default: return 'border-gray-300 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  return (
    <Card className="my-6 border border-gray-200 dark:border-gray-700 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6">
        <CardTitle className="text-xl font-bold text-indigo-900 dark:text-indigo-100 flex items-center gap-3">
          <Clock className="text-indigo-600 dark:text-indigo-400" size={24} />
          История открытий водорода
        </CardTitle>
        
        {/* Фильтры по категориям */}
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-indigo-500 text-white shadow-md'
                  : `bg-white dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 ${category.color}`
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Временная шкала */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Вертикальная линия */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-800"></div>
              
              {/* События */}
              <div className="space-y-6">
                {filteredEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${getCategoryColor(event.category)} ${
                      selectedEvent?.year === event.year ? 'ring-2 ring-indigo-400' : ''
                    }`}
                    onClick={() => setSelectedEvent(event)}
                  >
                    {/* Точка на линии времени */}
                    <div className="absolute left-6 w-4 h-4 bg-indigo-500 rounded-full border-2 border-white dark:border-gray-800 shadow-md">
                      <div className="absolute inset-1 bg-white dark:bg-gray-800 rounded-full"></div>
                    </div>
                    
                    {/* Иконка */}
                    <div className="ml-8 flex-shrink-0 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                      {event.icon}
                    </div>
                    
                    {/* Контент */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                          {event.title}
                        </h3>
                        <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                          {event.year}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        {event.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          👨‍🔬 {event.scientist}
                        </div>
                        <div className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(event.category)} border`}>
                          {event.category === 'discovery' ? 'Открытие' :
                           event.category === 'theory' ? 'Теория' :
                           event.category === 'technology' ? 'Технология' : 'Применение'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Детальная информация */}
          <div className="space-y-6">
            {selectedEvent ? (
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  {selectedEvent.icon}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {selectedEvent.year}
                  </h3>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  {selectedEvent.title}
                </h4>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {selectedEvent.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Ученый:</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{selectedEvent.scientist}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Значение:</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{selectedEvent.significance}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
                <Clock className="mx-auto text-gray-400 mb-3" size={32} />
                <p className="text-gray-500 dark:text-gray-400">
                  Нажмите на событие в временной шкале, чтобы узнать подробности
                </p>
              </div>
            )}
            
            {/* Статистика */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
                📊 Статистика открытий
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-600 dark:text-blue-400">Всего событий:</span>
                  <span className="font-semibold text-blue-800 dark:text-blue-200">{timelineEvents.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-600 dark:text-blue-400">Временной период:</span>
                  <span className="font-semibold text-blue-800 dark:text-blue-200">
                    {Math.min(...timelineEvents.map(e => e.year))} - {Math.max(...timelineEvents.map(e => e.year))}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-600 dark:text-blue-400">Открытий:</span>
                  <span className="font-semibold text-blue-800 dark:text-blue-200">
                    {timelineEvents.filter(e => e.category === 'discovery').length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-600 dark:text-blue-400">Теорий:</span>
                  <span className="font-semibold text-blue-800 dark:text-blue-200">
                    {timelineEvents.filter(e => e.category === 'theory').length}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Интересные факты */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border border-yellow-200 dark:border-yellow-800">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
                💡 Знаете ли вы?
              </h4>
              <ul className="text-xs text-yellow-700 dark:text-yellow-300 space-y-2">
                <li>• Водород был первым элементом, образовавшимся во Вселенной</li>
                <li>• Название "водород" буквально означает "рождающий воду"</li>
                <li>• Первые воздушные шары наполняли водородом, а не гелием</li>
                <li>• Солнце каждую секунду превращает 600 млн тонн водорода в гелий</li>
                <li>• Водород может быть металлом при очень высоком давлении</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HydrogenEducationalTimeline; 