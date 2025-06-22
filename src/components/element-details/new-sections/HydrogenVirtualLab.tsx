import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Flask, Zap, Thermometer, Eye, Play, Pause, RotateCcw, 
         AlertTriangle, CheckCircle, Beaker, Settings } from 'lucide-react';

interface ExperimentResult {
  success: boolean;
  message: string;
  observations: string[];
  data?: any;
}

interface Experiment {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  difficulty: 'easy' | 'medium' | 'hard';
  duration: number; // секунды
  safetyWarning: string;
}

const HydrogenVirtualLab: React.FC = () => {
  const [selectedExperiment, setSelectedExperiment] = useState<string>('electrolysis');
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<ExperimentResult | null>(null);
  
  // Параметры экспериментов
  const [electrolysisCurrent, setElectrolysisCurrent] = useState(2); // А
  const [electrolysisTime, setElectrolysisTime] = useState(300); // сек
  const [combustionRatio, setCombustionRatio] = useState(2); // H2:O2
  const [compressionPressure, setCompressionPressure] = useState(200); // атм
  const [temperature, setTemperature] = useState(25); // °C

  const experiments: Record<string, Experiment> = {
    electrolysis: {
      id: 'electrolysis',
      name: 'Электролиз воды',
      description: 'Получение водорода и кислорода разложением воды электрическим током',
      icon: <Zap className="text-blue-500" size={20} />,
      difficulty: 'easy',
      duration: 30,
      safetyWarning: 'Образующиеся газы взрывоопасны при смешивании'
    },
    combustion: {
      id: 'combustion',
      name: 'Горение водорода',
      description: 'Изучение реакции горения водорода в кислороде',
      icon: <Flask className="text-red-500" size={20} />,
      difficulty: 'medium',
      duration: 15,
      safetyWarning: 'Высокая температура и взрывоопасность'
    },
    compression: {
      id: 'compression',
      name: 'Сжатие водорода',
      description: 'Изучение поведения водородного газа под давлением',
      icon: <Settings className="text-purple-500" size={20} />,
      difficulty: 'medium',
      duration: 20,
      safetyWarning: 'Работа под высоким давлением'
    },
    spectroscopy: {
      id: 'spectroscopy',
      name: 'Спектроскопия водорода',
      description: 'Анализ эмиссионного спектра атомарного водорода',
      icon: <Eye className="text-green-500" size={20} />,
      difficulty: 'hard',
      duration: 45,
      safetyWarning: 'Используется высокое напряжение для разряда'
    }
  };

  const runExperiment = async () => {
    if (isRunning) return;
    
    setIsRunning(true);
    setProgress(0);
    setResult(null);
    
    const experiment = experiments[selectedExperiment];
    const duration = experiment.duration * 1000; // мс
    const interval = 100; // мс
    const steps = duration / interval;
    
    for (let i = 0; i <= steps; i++) {
      await new Promise(resolve => setTimeout(resolve, interval));
      setProgress((i / steps) * 100);
    }
    
    // Генерируем результат эксперимента
    const result = generateExperimentResult(selectedExperiment);
    setResult(result);
    setIsRunning(false);
  };

  const generateExperimentResult = (experimentId: string): ExperimentResult => {
    switch (experimentId) {
      case 'electrolysis':
        const h2Volume = (electrolysisCurrent * electrolysisTime * 0.116).toFixed(2); // Примерная формула
        const o2Volume = (parseFloat(h2Volume) / 2).toFixed(2);
        const efficiency = Math.min(95, 80 + Math.random() * 15);
        
        return {
          success: true,
          message: `Электролиз завершен успешно. КПД: ${efficiency.toFixed(1)}%`,
          observations: [
            `На катоде выделился водород: ${h2Volume} мл`,
            `На аноде выделился кислород: ${o2Volume} мл`,
            `Соотношение H₂:O₂ = 2:1 (теоретическое)`,
            `Пузырьки газа наблюдались на обоих электродах`,
            `pH раствора изменился из-за побочных реакций`
          ],
          data: {
            h2Volume: parseFloat(h2Volume),
            o2Volume: parseFloat(o2Volume),
            efficiency: efficiency
          }
        };
        
      case 'combustion':
        const isOptimalRatio = Math.abs(combustionRatio - 2) < 0.1;
        const combustionTemp = isOptimalRatio ? 2800 + Math.random() * 200 : 2000 + Math.random() * 500;
        
        return {
          success: true,
          message: `Горение ${isOptimalRatio ? 'полное' : 'неполное'}. T = ${combustionTemp.toFixed(0)} K`,
          observations: [
            `Пламя ${isOptimalRatio ? 'бледно-голубое, почти невидимое' : 'оранжево-желтое (недостаток O₂)'}`,
            `Единственный продукт реакции: водяной пар`,
            `Выделение энергии: ${(combustionTemp * 0.1).toFixed(0)} кДж/моль`,
            `${isOptimalRatio ? 'Соотношение H₂:O₂ = 2:1 оптимально' : 'Неоптимальное соотношение газов'}`,
            `Конденсация воды на холодных поверхностях`
          ],
          data: {
            temperature: combustionTemp,
            optimal: isOptimalRatio,
            energyReleased: combustionTemp * 0.1
          }
        };
        
      case 'compression':
        const finalVolume = (22.4 / compressionPressure).toFixed(3);
        const realityFactor = 0.95 + Math.random() * 0.1; // Отклонение от идеального газа
        
        return {
          success: true,
          message: `Сжатие завершено. V = ${finalVolume} л/моль при ${compressionPressure} атм`,
          observations: [
            `Объем уменьшился обратно пропорционально давлению`,
            `Отклонение от закона Бойля-Мариотта: ${((1-realityFactor)*100).toFixed(1)}%`,
            `При высоком давлении водород ведет себя как реальный газ`,
            `Температура слегка повысилась из-за сжатия`,
            `Плотность водорода: ${(compressionPressure * 0.090).toFixed(2)} г/л`
          ],
          data: {
            finalVolume: parseFloat(finalVolume),
            pressure: compressionPressure,
            density: compressionPressure * 0.090
          }
        };
        
      case 'spectroscopy':
        const spectralLines = [
          { wavelength: 656.3, series: 'Бальмер', transition: '3→2', color: '#ff0000' },
          { wavelength: 486.1, series: 'Бальмер', transition: '4→2', color: '#00ff00' },
          { wavelength: 434.0, series: 'Бальмер', transition: '5→2', color: '#0000ff' },
          { wavelength: 410.2, series: 'Бальмер', transition: '6→2', color: '#800080' }
        ];
        
        return {
          success: true,
          message: 'Получен характерный линейчатый спектр водорода',
          observations: [
            'Наблюдаются четкие спектральные линии серии Бальмера',
            'Красная линия Hα (656.3 нм) - самая яркая',
            'Зеленая линия Hβ (486.1 нм) - вторая по интенсивности',
            'Синяя Hγ и фиолетовая Hδ линии слабее',
            'Линии сходятся к серийному пределу (364.6 нм)'
          ],
          data: {
            spectralLines: spectralLines,
            temperature: 5000 + Math.random() * 2000
          }
        };
        
      default:
        return {
          success: false,
          message: 'Неизвестный эксперимент',
          observations: []
        };
    }
  };

  const resetExperiment = () => {
    setIsRunning(false);
    setProgress(0);
    setResult(null);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
      case 'hard': return 'text-red-600 bg-red-100 dark:bg-red-900/20';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20';
    }
  };

  const renderExperimentControls = () => {
    const experiment = experiments[selectedExperiment];
    
    switch (selectedExperiment) {
      case 'electrolysis':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Сила тока (А): {electrolysisCurrent}
              </label>
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.5"
                value={electrolysisCurrent}
                onChange={(e) => setElectrolysisCurrent(parseFloat(e.target.value))}
                className="w-full"
                disabled={isRunning}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Время (сек): {electrolysisTime}
              </label>
              <input
                type="range"
                min="60"
                max="600"
                step="30"
                value={electrolysisTime}
                onChange={(e) => setElectrolysisTime(parseInt(e.target.value))}
                className="w-full"
                disabled={isRunning}
              />
            </div>
          </div>
        );
        
      case 'combustion':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Соотношение H₂:O₂: {combustionRatio.toFixed(1)}:1
              </label>
              <input
                type="range"
                min="0.5"
                max="5"
                step="0.1"
                value={combustionRatio}
                onChange={(e) => setCombustionRatio(parseFloat(e.target.value))}
                className="w-full"
                disabled={isRunning}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Температура среды (°C): {temperature}
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={temperature}
                onChange={(e) => setTemperature(parseInt(e.target.value))}
                className="w-full"
                disabled={isRunning}
              />
            </div>
          </div>
        );
        
      case 'compression':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Давление (атм): {compressionPressure}
              </label>
              <input
                type="range"
                min="1"
                max="500"
                step="10"
                value={compressionPressure}
                onChange={(e) => setCompressionPressure(parseInt(e.target.value))}
                className="w-full"
                disabled={isRunning}
              />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Исходный объем: 22.4 л/моль (н.у.)
              <br />
              Ожидаемый объем: {(22.4 / compressionPressure).toFixed(3)} л/моль
            </div>
          </div>
        );
        
      default:
        return (
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Этот эксперимент не требует дополнительных настроек.
          </div>
        );
    }
  };

  return (
    <Card className="my-6 border border-gray-200 dark:border-gray-700 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6">
        <CardTitle className="text-xl font-bold text-green-900 dark:text-green-100 flex items-center gap-3">
          <Beaker className="text-green-600 dark:text-green-400" size={24} />
          Виртуальная лаборатория водорода
        </CardTitle>
        
        {/* Выбор эксперимента */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
          {Object.values(experiments).map((experiment) => (
            <button
              key={experiment.id}
              onClick={() => setSelectedExperiment(experiment.id)}
              disabled={isRunning}
              className={`p-3 rounded-lg text-left transition-all duration-200 border ${
                selectedExperiment === experiment.id
                  ? 'bg-green-500 text-white border-green-600 shadow-md'
                  : 'bg-white dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900/30 border-green-200 dark:border-green-800'
              } ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div className="flex items-center gap-2 mb-2">
                {experiment.icon}
                <span className="font-medium text-sm">{experiment.name}</span>
              </div>
              <div className="text-xs opacity-75 mb-2">
                {experiment.description}
              </div>
              <div className={`text-xs px-2 py-1 rounded-full inline-block ${getDifficultyColor(experiment.difficulty)}`}>
                {experiment.difficulty === 'easy' ? 'Легкий' : 
                 experiment.difficulty === 'medium' ? 'Средний' : 'Сложный'}
              </div>
            </button>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Панель управления */}
          <div className="space-y-6">
            {/* Безопасность */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <div className="flex items-start gap-2 mb-2">
                <AlertTriangle className="text-yellow-600 dark:text-yellow-400 mt-1" size={16} />
                <span className="font-semibold text-yellow-800 dark:text-yellow-200 text-sm">
                  Меры безопасности
                </span>
              </div>
              <p className="text-xs text-yellow-700 dark:text-yellow-300">
                {experiments[selectedExperiment].safetyWarning}
              </p>
            </div>
            
            {/* Настройки эксперимента */}
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Параметры эксперимента
              </h4>
              {renderExperimentControls()}
            </div>
            
            {/* Управление */}
            <div className="flex flex-col gap-2">
              <button
                onClick={runExperiment}
                disabled={isRunning}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isRunning ? <Pause size={18} /> : <Play size={18} />}
                {isRunning ? 'Выполняется...' : 'Запустить эксперимент'}
              </button>
              
              <button
                onClick={resetExperiment}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <RotateCcw size={16} />
                Сбросить
              </button>
            </div>
          </div>
          
          {/* Визуализация и результаты */}
          <div className="lg:col-span-2 space-y-6">
            {/* Прогресс-бар */}
            {isRunning && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                    Выполнение эксперимента...
                  </span>
                  <span className="text-sm text-blue-600 dark:text-blue-400">
                    {progress.toFixed(0)}%
                  </span>
                </div>
                <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}
            
            {/* Результаты */}
            {result && (
              <div className={`p-4 rounded-lg border ${
                result.success 
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                  : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
              }`}>
                <div className="flex items-start gap-2 mb-3">
                  {result.success ? (
                    <CheckCircle className="text-green-600 dark:text-green-400 mt-1" size={18} />
                  ) : (
                    <AlertTriangle className="text-red-600 dark:text-red-400 mt-1" size={18} />
                  )}
                  <div>
                    <h4 className={`font-semibold ${
                      result.success 
                        ? 'text-green-800 dark:text-green-200' 
                        : 'text-red-800 dark:text-red-200'
                    }`}>
                      Результат эксперимента
                    </h4>
                    <p className={`text-sm ${
                      result.success 
                        ? 'text-green-700 dark:text-green-300' 
                        : 'text-red-700 dark:text-red-300'
                    }`}>
                      {result.message}
                    </p>
                  </div>
                </div>
                
                {/* Наблюдения */}
                <div className="mt-4">
                  <h5 className={`font-medium text-sm mb-2 ${
                    result.success 
                      ? 'text-green-800 dark:text-green-200' 
                      : 'text-red-800 dark:text-red-200'
                  }`}>
                    Наблюдения:
                  </h5>
                  <ul className="space-y-1">
                    {result.observations.map((observation, index) => (
                      <li key={index} className={`text-xs ${
                        result.success 
                          ? 'text-green-700 dark:text-green-300' 
                          : 'text-red-700 dark:text-red-300'
                      }`}>
                        {observation}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Данные эксперимента */}
                {result.data && (
                  <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded border">
                    <h5 className="font-medium text-sm text-gray-800 dark:text-gray-200 mb-2">
                      Экспериментальные данные:
                    </h5>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {Object.entries(result.data).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">{key}:</span>
                          <span className="font-mono text-gray-800 dark:text-gray-200">
                            {typeof value === 'number' ? value.toFixed(2) : String(value)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Теоретическая информация */}
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">
                📚 Теоретические основы
              </h4>
              <div className="text-sm text-purple-700 dark:text-purple-300 space-y-2">
                {selectedExperiment === 'electrolysis' && (
                  <>
                    <p>• <strong>Реакция:</strong> 2H₂O → 2H₂ + O₂</p>
                    <p>• <strong>Закон Фарадея:</strong> количество выделившегося газа пропорционально заряду</p>
                    <p>• <strong>Теоретический выход:</strong> 11.2 мл H₂/А·мин при н.у.</p>
                  </>
                )}
                {selectedExperiment === 'combustion' && (
                  <>
                    <p>• <strong>Реакция:</strong> 2H₂ + O₂ → 2H₂O</p>
                    <p>• <strong>Энтальпия:</strong> ΔH = -286 кДж/моль</p>
                    <p>• <strong>Температура пламени:</strong> до 3000 K в чистом кислороде</p>
                  </>
                )}
                {selectedExperiment === 'compression' && (
                  <>
                    <p>• <strong>Закон Бойля-Мариотта:</strong> PV = const при T = const</p>
                    <p>• <strong>Сжимаемость:</strong> водород хорошо сжимается</p>
                    <p>• <strong>Реальные газы:</strong> отклонения от идеального поведения при высоком P</p>
                  </>
                )}
                {selectedExperiment === 'spectroscopy' && (
                  <>
                    <p>• <strong>Формула Ридберга:</strong> 1/λ = R(1/n₁² - 1/n₂²)</p>
                    <p>• <strong>Серия Бальмера:</strong> переходы на уровень n=2</p>
                    <p>• <strong>Квантовая механика:</strong> дискретные энергетические уровни</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HydrogenVirtualLab; 