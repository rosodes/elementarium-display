import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Activity, Zap, Target, Settings, Play, Pause, RotateCcw } from 'lucide-react';

interface QuantumState {
  n: number;
  l: number;
  m: number;
  name: string;
  energy: number; // эВ
  description: string;
  color: string;
}

const HydrogenQuantumVisualization: React.FC = () => {
  const [selectedState, setSelectedState] = useState<QuantumState>({
    n: 1, l: 0, m: 0, name: '1s', energy: -13.6, 
    description: 'Основное состояние', color: '#22c55e'
  });
  
  const [isAnimating, setIsAnimating] = useState(true);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [viewMode, setViewMode] = useState<'orbital' | 'energy' | 'spectrum'>('orbital');

  const quantumStates: QuantumState[] = [
    { n: 1, l: 0, m: 0, name: '1s', energy: -13.6, description: 'Основное состояние', color: '#22c55e' },
    { n: 2, l: 0, m: 0, name: '2s', energy: -3.4, description: 'Первое возбужденное s-состояние', color: '#3b82f6' },
    { n: 2, l: 1, m: -1, name: '2p₋₁', energy: -3.4, description: 'p-орбиталь, m=-1', color: '#8b5cf6' },
    { n: 2, l: 1, m: 0, name: '2p₀', energy: -3.4, description: 'p-орбиталь, m=0', color: '#8b5cf6' },
    { n: 2, l: 1, m: 1, name: '2p₊₁', energy: -3.4, description: 'p-орбиталь, m=+1', color: '#8b5cf6' },
    { n: 3, l: 0, m: 0, name: '3s', energy: -1.51, description: 'Второе возбужденное s-состояние', color: '#f59e0b' },
    { n: 3, l: 1, m: 0, name: '3p', energy: -1.51, description: '3p-орбиталь', color: '#ef4444' },
    { n: 3, l: 2, m: 0, name: '3d', energy: -1.51, description: '3d-орбиталь', color: '#06b6d4' }
  ];

  const spectralSeries = [
    { name: 'Лайман', nLower: 1, transitions: [2, 3, 4, 5], region: 'УФ', color: '#8b5cf6' },
    { name: 'Бальмер', nLower: 2, transitions: [3, 4, 5, 6], region: 'Видимый', color: '#ef4444' },
    { name: 'Пашен', nLower: 3, transitions: [4, 5, 6, 7], region: 'ИК', color: '#f59e0b' }
  ];

  // Генерация точек для орбитали (упрощенная модель)
  const generateOrbitalPoints = (state: QuantumState) => {
    const points = [];
    const numPoints = 200;
    
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * 2 * Math.PI;
      const r = state.n * 20; // Радиус пропорционален n
      
      // Учитываем квантовые числа для формы орбитали
      let x, y;
      if (state.l === 0) { // s-орбиталь
        x = r * Math.cos(angle) * (1 + 0.3 * Math.sin(angle * 3));
        y = r * Math.sin(angle) * (1 + 0.3 * Math.cos(angle * 3));
      } else if (state.l === 1) { // p-орбиталь
        const lobe = Math.abs(Math.cos(angle));
        x = r * Math.cos(angle) * lobe;
        y = r * Math.sin(angle) * lobe;
      } else { // d-орбиталь (упрощенно)
        x = r * Math.cos(angle) * Math.cos(2 * angle);
        y = r * Math.sin(angle) * Math.cos(2 * angle);
      }
      
      points.push({ x, y, opacity: Math.abs(Math.sin(angle * 2)) });
    }
    
    return points;
  };

  const renderOrbitalView = () => {
    const points = generateOrbitalPoints(selectedState);
    
    return (
      <div className="relative w-full h-80 bg-black rounded-lg overflow-hidden">
        <svg width="100%" height="100%" viewBox="-150 -150 300 300">
          {/* Ядро */}
          <circle cx="0" cy="0" r="3" fill="#ff6b6b" opacity="0.8">
            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x="8" y="5" fill="white" fontSize="12">H⁺</text>
          
          {/* Орбиталь */}
          {points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="1.5"
              fill={selectedState.color}
              opacity={point.opacity * 0.7}
            >
              {isAnimating && (
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 0 0;360 0 0"
                  dur={`${2 / animationSpeed}s`}
                  repeatCount="indefinite"
                />
              )}
            </circle>
          ))}
          
          {/* Квантовые числа */}
          <text x="-140" y="-130" fill="white" fontSize="14" fontWeight="bold">
            n = {selectedState.n}, l = {selectedState.l}, m = {selectedState.m}
          </text>
          <text x="-140" y="-110" fill="white" fontSize="12">
            {selectedState.name} орбиталь
          </text>
        </svg>
      </div>
    );
  };

  const renderEnergyView = () => {
    return (
      <div className="w-full h-80 bg-gradient-to-b from-gray-900 to-black rounded-lg p-4 relative">
        <div className="relative h-full">
          {/* Энергетические уровни */}
          {quantumStates.slice(0, 6).map((state, index) => {
            const yPos = 240 - ((-state.energy + 15) * 15); // Нормализация позиции
            return (
              <div key={state.name}>
                <div
                  className={`absolute w-full h-1 cursor-pointer transition-all ${
                    selectedState.name === state.name ? 'bg-yellow-400' : 'bg-gray-400'
                  }`}
                  style={{ top: `${yPos}px` }}
                  onClick={() => setSelectedState(state)}
                />
                <div
                  className="absolute text-white text-xs"
                  style={{ top: `${yPos - 15}px`, left: '10px' }}
                >
                  {state.name}: {state.energy.toFixed(1)} эВ
                </div>
                {selectedState.name === state.name && (
                  <div
                    className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-bounce"
                    style={{ top: `${yPos - 4}px`, right: '10px' }}
                  />
                )}
              </div>
            );
          })}
          
          {/* Ось энергии */}
          <div className="absolute left-2 top-4 text-white text-xs">
            <div>E = 0 (ионизация)</div>
          </div>
          <div className="absolute left-2 bottom-4 text-white text-xs">
            <div>E = -13.6 эВ (основное состояние)</div>
          </div>
        </div>
      </div>
    );
  };

  const renderSpectrumView = () => {
    return (
      <div className="w-full h-80 bg-gradient-to-r from-purple-900 via-blue-900 to-red-900 rounded-lg p-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          {/* Спектральные линии */}
          {spectralSeries.map((series, seriesIndex) =>
            series.transitions.map((nUpper, lineIndex) => {
              const wavelength = 656.3 * (1/series.nLower**2 - 1/nUpper**2)**(-1); // Приближенная формула
              const xPos = (wavelength - 300) / 400 * 100; // Нормализация к процентам
              
              return (
                <div
                  key={`${seriesIndex}-${lineIndex}`}
                  className="absolute w-0.5 h-full opacity-80"
                  style={{
                    left: `${Math.max(0, Math.min(100, xPos))}%`,
                    backgroundColor: series.color,
                    filter: 'blur(0.5px)'
                  }}
                >
                  {isAnimating && (
                    <div className="absolute -top-2 -left-8 w-16 h-1 bg-white opacity-50 animate-pulse" />
                  )}
                </div>
              );
            })
          )}
        </div>
        
        {/* Информация о сериях */}
        <div className="absolute top-4 left-4 space-y-2">
          {spectralSeries.map((series) => (
            <div key={series.name} className="flex items-center gap-2 text-white text-sm">
              <div
                className="w-3 h-3 rounded"
                style={{ backgroundColor: series.color }}
              />
              <span>{series.name} ({series.region})</span>
            </div>
          ))}
        </div>
        
        {/* Шкала длин волн */}
        <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
          <div className="flex justify-between">
            <span>300 нм (УФ)</span>
            <span>500 нм</span>
            <span>700 нм (ИК)</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className="my-6 border border-gray-200 dark:border-gray-700 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6">
        <CardTitle className="text-xl font-bold text-purple-900 dark:text-purple-100 flex items-center gap-3">
          <Activity className="text-purple-600 dark:text-purple-400" size={24} />
          Квантовая визуализация атома водорода
        </CardTitle>
        
        {/* Переключатели режимов */}
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { id: 'orbital', title: 'Орбитали', icon: <Target size={16} /> },
            { id: 'energy', title: 'Энергии', icon: <Zap size={16} /> },
            { id: 'spectrum', title: 'Спектр', icon: <Activity size={16} /> }
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setViewMode(mode.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                viewMode === mode.id
                  ? 'bg-purple-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 border border-purple-200 dark:border-purple-800'
              }`}
            >
              {mode.icon}
              {mode.title}
            </button>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Основная визуализация */}
          <div className="lg:col-span-2">
            {viewMode === 'orbital' && renderOrbitalView()}
            {viewMode === 'energy' && renderEnergyView()}
            {viewMode === 'spectrum' && renderSpectrumView()}
          </div>
          
          {/* Панель управления */}
          <div className="space-y-4">
            {/* Выбор квантового состояния */}
            {viewMode === 'orbital' && (
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Квантовые состояния
                </h4>
                <div className="space-y-2">
                  {quantumStates.slice(0, 8).map((state) => (
                    <button
                      key={state.name}
                      onClick={() => setSelectedState(state)}
                      className={`w-full text-left p-2 rounded text-sm transition-all ${
                        selectedState.name === state.name
                          ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      <div className="font-medium">{state.name}</div>
                      <div className="text-xs opacity-70">{state.description}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Управление анимацией */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
                Управление
              </h4>
              <div className="space-y-3">
                <button
                  onClick={() => setIsAnimating(!isAnimating)}
                  className="flex items-center gap-2 w-full justify-center px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  {isAnimating ? <Pause size={16} /> : <Play size={16} />}
                  {isAnimating ? 'Пауза' : 'Воспроизведение'}
                </button>
                
                <div>
                  <label className="block text-sm text-blue-700 dark:text-blue-300 mb-1">
                    Скорость анимации
                  </label>
                  <input
                    type="range"
                    min="0.1"
                    max="3"
                    step="0.1"
                    value={animationSpeed}
                    onChange={(e) => setAnimationSpeed(parseFloat(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-xs text-blue-600 dark:text-blue-400">
                    {animationSpeed.toFixed(1)}x
                  </div>
                </div>
              </div>
            </div>
            
            {/* Информация о текущем состоянии */}
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">
                Текущее состояние
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-green-600 dark:text-green-400">Орбиталь:</span>
                  <span className="font-mono text-green-800 dark:text-green-200">
                    {selectedState.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-600 dark:text-green-400">Энергия:</span>
                  <span className="font-mono text-green-800 dark:text-green-200">
                    {selectedState.energy.toFixed(2)} эВ
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-600 dark:text-green-400">n:</span>
                  <span className="font-mono text-green-800 dark:text-green-200">
                    {selectedState.n}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-600 dark:text-green-400">l:</span>
                  <span className="font-mono text-green-800 dark:text-green-200">
                    {selectedState.l}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-600 dark:text-green-400">m:</span>
                  <span className="font-mono text-green-800 dark:text-green-200">
                    {selectedState.m}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Квантовые факты */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
                💡 Квантовые факты
              </h4>
              <ul className="text-xs text-yellow-700 dark:text-yellow-300 space-y-1">
                <li>• n - главное квантовое число (энергия)</li>
                <li>• l - орбитальное к.ч. (форма орбитали)</li>
                <li>• m - магнитное к.ч. (ориентация)</li>
                <li>• Уравнение Шрёдингера точно решается для H</li>
                <li>• Спектр водорода подтвердил квантовую теорию</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HydrogenQuantumVisualization; 