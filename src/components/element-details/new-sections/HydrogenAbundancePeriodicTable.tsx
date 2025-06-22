import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Globe, Database, Info } from 'lucide-react';

interface AbundanceData {
  element: string;
  symbol: string;
  universe: number;
  crust: number;
  ocean: number;
  human: number;
  color: string;
}

const abundanceData: AbundanceData[] = [
  { element: 'Водород', symbol: 'H', universe: 75, crust: 0.15, ocean: 11, human: 10, color: '#22c55e' },
  { element: 'Гелий', symbol: 'He', universe: 23, crust: 0, ocean: 0, human: 0, color: '#3b82f6' },
  { element: 'Кислород', symbol: 'O', universe: 1, crust: 46.6, ocean: 86, human: 65, color: '#ef4444' },
  { element: 'Углерод', symbol: 'C', universe: 0.5, crust: 0.02, ocean: 0.002, human: 18.5, color: '#8b5cf6' },
  { element: 'Азот', symbol: 'N', universe: 0.1, crust: 0.002, ocean: 0.0001, human: 3.2, color: '#06b6d4' },
  { element: 'Кремний', symbol: 'Si', universe: 0.07, crust: 27.7, ocean: 0.0001, human: 0.02, color: '#f59e0b' }
];

const HydrogenAbundancePeriodicTable: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'universe' | 'crust' | 'ocean' | 'human'>('universe');
  const [hoveredElement, setHoveredElement] = useState<AbundanceData | null>(null);

  const getViewTitle = () => {
    switch (selectedView) {
      case 'universe': return 'Распространенность во Вселенной';
      case 'crust': return 'Распространенность в земной коре';
      case 'ocean': return 'Распространенность в океане';
      case 'human': return 'Содержание в организме человека';
      default: return '';
    }
  };

  const getViewIcon = () => {
    switch (selectedView) {
      case 'universe': return '🌌';
      case 'crust': return '🌍';
      case 'ocean': return '🌊';
      case 'human': return '👤';
      default: return '';
    }
  };

  const getElementSize = (element: AbundanceData) => {
    const value = element[selectedView];
    // Логарифмическая шкала для более наглядного отображения
    return Math.max(40, Math.min(100, 40 + Math.log10(value + 1) * 20));
  };

  const formatPercentage = (value: number) => {
    if (value < 0.001) return '< 0.001%';
    if (value < 0.01) return value.toFixed(3) + '%';
    if (value < 0.1) return value.toFixed(2) + '%';
    if (value < 1) return value.toFixed(1) + '%';
    return value.toFixed(1) + '%';
  };

  return (
    <Card className="my-6 border border-gray-200 dark:border-gray-700 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6">
        <CardTitle className="text-xl font-bold text-green-900 dark:text-green-100 flex items-center gap-3">
          <Globe className="text-green-600 dark:text-green-400" size={24} />
          Распространенность водорода в природе
        </CardTitle>

        {/* Переключатели видов */}
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { id: 'universe', title: 'Вселенная', icon: '🌌' },
            { id: 'crust', title: 'Земная кора', icon: '🌍' },
            { id: 'ocean', title: 'Океан', icon: '🌊' },
            { id: 'human', title: 'Человек', icon: '👤' }
          ].map((view) => (
            <button
              key={view.id}
              onClick={() => setSelectedView(view.id as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                selectedView === view.id
                  ? 'bg-green-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 border border-green-200 dark:border-green-800'
              }`}
            >
              <span>{view.icon}</span>
              {view.title}
            </button>
          ))}
        </div>
      </CardHeader>

      <CardContent className="p-6">
        {/* Заголовок текущего вида */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-3">
            <span>{getViewIcon()}</span>
            {getViewTitle()}
          </h3>
        </div>

        {/* Визуализация */}
        <div className="relative">
          {/* Сетка */}
          <div className="absolute inset-0 grid grid-cols-6 gap-4 opacity-10">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="border border-gray-300 dark:border-gray-600"></div>
            ))}
          </div>

          {/* Элементы */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 relative">
            {abundanceData.map((element) => {
              const size = getElementSize(element);
              return (
                <div
                  key={element.symbol}
                  className="flex items-center justify-center"
                  onMouseEnter={() => setHoveredElement(element)}
                  onMouseLeave={() => setHoveredElement(null)}
                >
                  <div
                    className="relative rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer hover:shadow-lg"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      backgroundColor: element.color + '33', // Добавляем прозрачность
                      border: `2px solid ${element.color}`,
                      transform: hoveredElement?.symbol === element.symbol ? 'scale(1.1)' : 'scale(1)'
                    }}
                  >
                    <div className="text-center">
                      <div className="font-bold text-lg" style={{ color: element.color }}>
                        {element.symbol}
                      </div>
                      <div className="text-xs font-medium text-gray-600 dark:text-gray-400">
                        {formatPercentage(element[selectedView])}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Информационная панель */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Детали выбранного вида */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
              <Info size={16} />
              Особенности распространения
            </h4>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              {selectedView === 'universe' && (
                <>
                  <p>• Водород - самый распространенный элемент во Вселенной (75%)</p>
                  <p>• Основной компонент звезд и межзвездного газа</p>
                  <p>• Образовался в первые минуты после Большого взрыва</p>
                </>
              )}
              {selectedView === 'crust' && (
                <>
                  <p>• В земной коре водород в основном связан в H₂O</p>
                  <p>• Содержание в минералах и горных породах</p>
                  <p>• Участвует в геохимических процессах</p>
                </>
              )}
              {selectedView === 'ocean' && (
                <>
                  <p>• Основной компонент воды (H₂O)</p>
                  <p>• Участвует в биогеохимическом цикле</p>
                  <p>• Важен для морской биосферы</p>
                </>
              )}
              {selectedView === 'human' && (
                <>
                  <p>• Входит в состав воды и органических соединений</p>
                  <p>• Участвует во всех биохимических процессах</p>
                  <p>• Необходим для жизнедеятельности клеток</p>
                </>
              )}
            </div>
          </div>

          {/* Научные источники */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
              <Database size={16} />
              Источники данных
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href="https://www.nist.gov/pml/atomic-weights-and-isotopic-compositions-relative-atomic-masses"
                target="_blank"
                rel="noindex nofollow"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                NIST: Atomic Weights and Isotopic Compositions
              </a>
              <a
                href="https://www.usgs.gov/centers/nmic/commodity-statistics-and-information"
                target="_blank"
                rel="noindex nofollow"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                USGS: Mineral Commodity Summaries
              </a>
              <a
                href="https://www.ncbi.nlm.nih.gov/books/NBK218495/"
                target="_blank"
                rel="noindex nofollow"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                NCBI: Biochemical Composition of the Human Body
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HydrogenAbundancePeriodicTable; 