import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
         ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, 
         PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, Target, Database, Zap, Atom } from 'lucide-react';

interface ElementComparison {
  element: string;
  symbol: string;
  atomicNumber: number;
  atomicMass: number;
  density: number; // г/см³
  meltingPoint: number; // K
  boilingPoint: number; // K
  electronegativity: number;
  ionizationEnergy: number; // кДж/моль
  atomicRadius: number; // пм
  color: string;
}

const HydrogenComparison: React.FC = () => {
  const [selectedElements, setSelectedElements] = useState<string[]>(['H', 'He', 'Li', 'C', 'N', 'O']);
  const [comparisonType, setComparisonType] = useState<'physical' | 'atomic' | 'chemical'>('physical');

  const elements: Record<string, ElementComparison> = {
    H: {
      element: 'Водород', symbol: 'H', atomicNumber: 1, atomicMass: 1.008,
      density: 0.00009, meltingPoint: 14, boilingPoint: 20, electronegativity: 2.2,
      ionizationEnergy: 1312, atomicRadius: 25, color: '#22c55e'
    },
    He: {
      element: 'Гелий', symbol: 'He', atomicNumber: 2, atomicMass: 4.003,
      density: 0.0002, meltingPoint: 0.95, boilingPoint: 4.2, electronegativity: 0,
      ionizationEnergy: 2372, atomicRadius: 31, color: '#3b82f6'
    },
    Li: {
      element: 'Литий', symbol: 'Li', atomicNumber: 3, atomicMass: 6.941,
      density: 0.534, meltingPoint: 453, boilingPoint: 1603, electronegativity: 0.98,
      ionizationEnergy: 520, atomicRadius: 167, color: '#8b5cf6'
    },
    C: {
      element: 'Углерод', symbol: 'C', atomicNumber: 6, atomicMass: 12.011,
      density: 2.267, meltingPoint: 3823, boilingPoint: 4098, electronegativity: 2.55,
      ionizationEnergy: 1086, atomicRadius: 67, color: '#ef4444'
    },
    N: {
      element: 'Азот', symbol: 'N', atomicNumber: 7, atomicMass: 14.007,
      density: 0.001, meltingPoint: 63, boilingPoint: 77, electronegativity: 3.04,
      ionizationEnergy: 1402, atomicRadius: 56, color: '#06b6d4'
    },
    O: {
      element: 'Кислород', symbol: 'O', atomicNumber: 8, atomicMass: 15.999,
      density: 0.0014, meltingPoint: 54, boilingPoint: 90, electronegativity: 3.44,
      ionizationEnergy: 1314, atomicRadius: 48, color: '#f59e0b'
    },
    F: {
      element: 'Фтор', symbol: 'F', atomicNumber: 9, atomicMass: 18.998,
      density: 0.0017, meltingPoint: 53, boilingPoint: 85, electronegativity: 3.98,
      ionizationEnergy: 1681, atomicRadius: 42, color: '#84cc16'
    },
    Ne: {
      element: 'Неон', symbol: 'Ne', atomicNumber: 10, atomicMass: 20.180,
      density: 0.0009, meltingPoint: 24, boilingPoint: 27, electronegativity: 0,
      ionizationEnergy: 2081, atomicRadius: 38, color: '#ec4899'
    }
  };

  const availableElements = Object.keys(elements);

  const getComparisonData = () => {
    const data = selectedElements.map(symbol => ({
      element: symbol,
      ...elements[symbol]
    }));

    switch (comparisonType) {
      case 'physical':
        return data.map(el => ({
          element: el.symbol,
          'Плотность': el.density * 1000, // преобразуем в мг/см³ для лучшей визуализации
          'Т. плавления': el.meltingPoint,
          'Т. кипения': el.boilingPoint,
          color: el.color
        }));
      
      case 'atomic':
        return data.map(el => ({
          element: el.symbol,
          'Ат. номер': el.atomicNumber,
          'Ат. масса': el.atomicMass,
          'Ат. радиус': el.atomicRadius,
          color: el.color
        }));
      
      case 'chemical':
        return data.map(el => ({
          element: el.symbol,
          'Электроотрицательность': el.electronegativity,
          'Энергия ионизации': el.ionizationEnergy / 100, // делим для масштаба
          color: el.color
        }));
      
      default:
        return [];
    }
  };

  const getRadarData = () => {
    const hydrogen = elements['H'];
    return selectedElements.map(symbol => {
      const el = elements[symbol];
      return {
        element: el.symbol,
        'Размер атома': el.atomicRadius,
        'Плотность': el.density * 10000, // нормализация
        'Электроотр.': el.electronegativity * 25,
        'Ионизация': el.ionizationEnergy / 50,
        'Температура': (el.boilingPoint - el.meltingPoint) / 10,
        color: el.color
      };
    });
  };

  const toggleElement = (symbol: string) => {
    if (symbol === 'H') return; // Водород всегда включен
    
    if (selectedElements.includes(symbol)) {
      setSelectedElements(prev => prev.filter(el => el !== symbol));
    } else {
      setSelectedElements(prev => [...prev, symbol]);
    }
  };

  const comparisonTypes = [
    { id: 'physical', name: 'Физические', icon: <Zap size={16} /> },
    { id: 'atomic', name: 'Атомные', icon: <Atom size={16} /> },
    { id: 'chemical', name: 'Химические', icon: <Target size={16} /> }
  ];

  return (
    <Card className="my-6 border border-gray-200 dark:border-gray-700 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 p-6">
        <CardTitle className="text-xl font-bold text-teal-900 dark:text-teal-100 flex items-center gap-3">
          <TrendingUp className="text-teal-600 dark:text-teal-400" size={24} />
          Сравнение водорода с другими элементами
        </CardTitle>
        
        {/* Выбор типа сравнения */}
        <div className="flex flex-wrap gap-2 mt-4">
          {comparisonTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setComparisonType(type.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                comparisonType === type.id
                  ? 'bg-teal-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/30 border border-teal-200 dark:border-teal-800'
              }`}
            >
              {type.icon}
              {type.name}
            </button>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Выбор элементов */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">
              Выбрать элементы для сравнения:
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {availableElements.map((symbol) => {
                const element = elements[symbol];
                const isSelected = selectedElements.includes(symbol);
                const isHydrogen = symbol === 'H';
                
                return (
                  <button
                    key={symbol}
                    onClick={() => toggleElement(symbol)}
                    disabled={isHydrogen}
                    className={`p-3 rounded-lg text-left transition-all duration-200 border-2 ${
                      isSelected
                        ? 'border-teal-400 shadow-md'
                        : 'border-gray-200 dark:border-gray-700 hover:border-teal-200'
                    } ${isHydrogen ? 'bg-teal-100 dark:bg-teal-900/30' : 'bg-white dark:bg-gray-800'}`}
                    style={{ 
                      backgroundColor: isSelected ? element.color + '20' : undefined,
                      borderColor: isSelected ? element.color : undefined
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: element.color }}
                      />
                      <div>
                        <div className="font-bold text-sm">{symbol}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {element.element}
                        </div>
                      </div>
                    </div>
                    {isHydrogen && (
                      <div className="text-xs text-teal-600 dark:text-teal-400 mt-1">
                        Базовый элемент
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            
            {/* Информация о водороде */}
            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
              <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-2">
                💡 Особености водорода
              </h4>
              <ul className="text-xs text-teal-700 dark:text-teal-300 space-y-1">
                <li>• Самый легкий элемент во Вселенной</li>
                <li>• Единственный элемент без нейтронов</li>
                <li>• Может проявлять свойства металлов и неметаллов</li>
                <li>• Основа всех других элементов через ядерный синтез</li>
              </ul>
            </div>
          </div>
          
          {/* Графики сравнения */}
          <div className="lg:col-span-3 space-y-6">
            {/* Столбчатая диаграмма */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Сравнение свойств
              </h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={getComparisonData()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="element" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value, name) => [
                      typeof value === 'number' ? value.toFixed(2) : value, 
                      name
                    ]}
                  />
                  <Legend />
                  {Object.keys(getComparisonData()[0] || {})
                    .filter(key => key !== 'element' && key !== 'color')
                    .map((key, index) => (
                      <Bar 
                        key={key}
                        dataKey={key} 
                        fill={`hsl(${index * 60}, 70%, 50%)`}
                        fillOpacity={0.8}
                      />
                    ))}
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            {/* Радарная диаграмма */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Многомерное сравнение (нормализованные значения)
              </h4>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={getRadarData()}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="element" />
                  <PolarRadiusAxis angle={30} domain={[0, 'dataMax']} />
                  {selectedElements.map((symbol, index) => (
                    <Radar
                      key={symbol}
                      name={symbol}
                      dataKey={symbol}
                      stroke={elements[symbol].color}
                      fill={elements[symbol].color}
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                  ))}
                  <Tooltip />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            {/* Таблица сравнения */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Детальная таблица сравнения
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-600">
                      <th className="text-left p-2">Элемент</th>
                      <th className="text-left p-2">Символ</th>
                      <th className="text-left p-2">Ат. номер</th>
                      <th className="text-left p-2">Ат. масса</th>
                      <th className="text-left p-2">Плотность</th>
                      <th className="text-left p-2">Т. плавления</th>
                      <th className="text-left p-2">Электроотр.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedElements.map((symbol) => {
                      const element = elements[symbol];
                      const isHydrogen = symbol === 'H';
                      
                      return (
                        <tr 
                          key={symbol} 
                          className={`border-b border-gray-100 dark:border-gray-700 ${
                            isHydrogen ? 'bg-teal-50 dark:bg-teal-900/20' : ''
                          }`}
                        >
                          <td className="p-2 flex items-center gap-2">
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: element.color }}
                            />
                            {element.element}
                            {isHydrogen && <span className="text-xs text-teal-600">⭐</span>}
                          </td>
                          <td className="p-2 font-mono">{element.symbol}</td>
                          <td className="p-2">{element.atomicNumber}</td>
                          <td className="p-2">{element.atomicMass.toFixed(3)}</td>
                          <td className="p-2">{element.density.toFixed(4)} г/см³</td>
                          <td className="p-2">{element.meltingPoint} K</td>
                          <td className="p-2">{element.electronegativity || 'н/д'}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Выводы */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
                <Database size={16} />
                Ключевые выводы о водороде
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700 dark:text-blue-300">
                <div>
                  <h5 className="font-medium mb-2">🔬 Уникальные свойства:</h5>
                  <ul className="space-y-1 text-xs">
                    <li>• Наименьшая атомная масса (1.008)</li>
                    <li>• Самая низкая плотность среди всех элементов</li>
                    <li>• Самые низкие температуры фазовых переходов</li>
                    <li>• Единственный элемент с одним протоном</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">⚛️ Сравнительные особенности:</h5>
                  <ul className="space-y-1 text-xs">
                    <li>• Размер атома больше только Li среди выбранных</li>
                    <li>• Электроотрицательность как у углерода</li>
                    <li>• Высокая энергия ионизации (больше только у He)</li>
                    <li>• Проявляет амфотерные свойства в химии</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HydrogenComparison; 