import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Calculator, Flame, Zap, Beaker, Play, Pause, 
         Info, AlertTriangle } from 'lucide-react';

interface ReactionData {
  id: string;
  name: string;
  equation: string;
  description: string;
  type: 'combustion' | 'synthesis' | 'electrolysis';
  deltaH: number; // кДж/моль
  temperature: number; // °C
  pressure: number; // атм
  catalyst?: string;
  products: string[];
}

const HydrogenReactionSimulator: React.FC = () => {
  const [selectedReaction, setSelectedReaction] = useState('combustion');
  const [isAnimating, setIsAnimating] = useState(false);
  const [calculatorValues, setCalculatorValues] = useState({
    mass: 2, // г
    volume: 22.4, // л (при н.у.)
    moles: 1
  });

  const reactions: Record<string, ReactionData> = {
    combustion: {
      id: 'combustion',
      name: 'Горение водорода',
      equation: '2H₂ + O₂ → 2H₂O',
      description: 'Экзотермическая реакция образования воды. Выделяется большое количество энергии.',
      type: 'combustion',
      deltaH: -286,
      temperature: 585,
      pressure: 1,
      products: ['Вода (H₂O)', 'Энергия']
    },
    synthesis_ammonia: {
      id: 'synthesis_ammonia',
      name: 'Синтез аммиака (Габера-Боша)',
      equation: 'N₂ + 3H₂ ⇌ 2NH₃',
      description: 'Обратимая реакция промышленного получения аммиака. Основа производства удобрений.',
      type: 'synthesis',
      deltaH: -92,
      temperature: 450,
      pressure: 200,
      catalyst: 'Fe, K₂O, Al₂O₃',
      products: ['Аммиак (NH₃)']
    },
    electrolysis: {
      id: 'electrolysis',
      name: 'Электролиз воды',
      equation: '2H₂O → 2H₂ + O₂',
      description: 'Разложение воды электрическим током. Способ получения чистого водорода.',
      type: 'electrolysis',
      deltaH: 286,
      temperature: 25,
      pressure: 1,
      products: ['Водород (H₂)', 'Кислород (O₂)']
    }
  };

  const currentReaction = reactions[selectedReaction];

  // Калькулятор молекулярной массы и объема
  const calculateValues = (changedField: string, value: number) => {
    const molarMass = 2.016; // г/моль H₂
    const molarVolume = 22.4; // л/моль при н.у.
    
    switch (changedField) {
      case 'mass':
        const molesFromMass = value / molarMass;
        setCalculatorValues({
          mass: value,
          moles: molesFromMass,
          volume: molesFromMass * molarVolume
        });
        break;
      case 'volume':
        const molesFromVolume = value / molarVolume;
        setCalculatorValues({
          volume: value,
          moles: molesFromVolume,
          mass: molesFromVolume * molarMass
        });
        break;
      case 'moles':
        setCalculatorValues({
          moles: value,
          mass: value * molarMass,
          volume: value * molarVolume
        });
        break;
    }
  };

  const getReactionColor = (type: string) => {
    switch (type) {
      case 'combustion': return 'from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-200 dark:border-red-800';
      case 'synthesis': return 'from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800';
      case 'electrolysis': return 'from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800';
      default: return 'from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border-gray-200 dark:border-gray-700';
    }
  };

  return (
    <Card className="my-6 border border-gray-200 dark:border-gray-700 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6">
        <CardTitle className="text-xl font-bold text-orange-900 dark:text-orange-100 flex items-center gap-3">
          <Beaker className="text-orange-600 dark:text-orange-400" size={24} />
          Симулятор реакций и калькулятор водорода
        </CardTitle>
        
        {/* Выбор реакции */}
        <div className="flex flex-wrap gap-2 mt-4">
          {Object.values(reactions).map((reaction) => (
            <button
              key={reaction.id}
              onClick={() => setSelectedReaction(reaction.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedReaction === reaction.id
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/30 border border-orange-200 dark:border-orange-800'
              }`}
            >
              {reaction.name}
            </button>
          ))}
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Симулятор реакций */}
          <div className="reaction-simulator">
            <div className={`bg-gradient-to-br ${getReactionColor(currentReaction.type)} border p-6 rounded-xl`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  {currentReaction.type === 'combustion' && <Flame className="text-red-500" size={20} />}
                  {currentReaction.type === 'electrolysis' && <Zap className="text-blue-500" size={20} />}
                  {currentReaction.type === 'synthesis' && <Beaker className="text-green-500" size={20} />}
                  {currentReaction.name}
                </h3>
                <button
                  onClick={() => setIsAnimating(!isAnimating)}
                  className="p-2 bg-white/70 dark:bg-gray-800/70 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all"
                >
                  {isAnimating ? <Pause size={16} /> : <Play size={16} />}
                </button>
              </div>

              {/* Уравнение реакции */}
              <div className={`text-center p-4 bg-white dark:bg-gray-800 rounded-lg mb-4 ${isAnimating ? 'animate-pulse' : ''}`}>
                <div className="text-2xl font-mono font-bold text-gray-900 dark:text-white">
                  {currentReaction.equation}
                </div>
              </div>

              {/* Условия реакции */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="condition-card bg-white dark:bg-gray-800 p-3 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Температура</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{currentReaction.temperature}°C</div>
                </div>
                <div className="condition-card bg-white dark:bg-gray-800 p-3 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Давление</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{currentReaction.pressure} атм</div>
                </div>
              </div>

              {/* Катализатор */}
              {currentReaction.catalyst && (
                <div className="catalyst-info bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg mb-4 border border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-yellow-600 dark:text-yellow-400 text-sm font-medium">Катализатор:</span>
                  </div>
                  <div className="text-yellow-800 dark:text-yellow-200 font-semibold">{currentReaction.catalyst}</div>
                </div>
              )}

              {/* Энергетический эффект */}
              <div className={`energy-effect p-3 rounded-lg mb-4 ${
                currentReaction.deltaH < 0 
                  ? 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
                  : 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
              }`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-sm font-medium ${
                    currentReaction.deltaH < 0 ? 'text-red-600 dark:text-red-400' : 'text-blue-600 dark:text-blue-400'
                  }`}>
                    {currentReaction.deltaH < 0 ? '🔥 Экзотермическая' : '❄️ Эндотермическая'}
                  </span>
                </div>
                <div className={`font-bold ${
                  currentReaction.deltaH < 0 ? 'text-red-800 dark:text-red-200' : 'text-blue-800 dark:text-blue-200'
                }`}>
                  ΔH = {currentReaction.deltaH} кДж/моль
                </div>
              </div>

              {/* Продукты */}
              <div className="products bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                <div className="text-sm font-medium text-green-600 dark:text-green-400 mb-2">Продукты реакции:</div>
                <div className="flex flex-wrap gap-2">
                  {currentReaction.products.map((product, index) => (
                    <span key={index} className="bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-medium">
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Описание реакции */}
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-2">
                <Info className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {currentReaction.description}
                </p>
              </div>
            </div>
          </div>

          {/* Калькулятор */}
          <div className="calculator-section">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
                <Calculator className="text-blue-600 dark:text-blue-400" size={20} />
                Калькулятор водорода (H₂)
              </h3>

              <div className="space-y-4">
                {/* Масса */}
                <div className="calculator-field">
                  <label className="block text-sm font-medium text-blue-700 dark:text-blue-300 mb-2">
                    Масса (г):
                  </label>
                  <input
                    type="number"
                    value={calculatorValues.mass.toFixed(3)}
                    onChange={(e) => calculateValues('mass', parseFloat(e.target.value) || 0)}
                    className="w-full p-3 border border-blue-200 dark:border-blue-700 rounded-lg bg-white dark:bg-gray-800 text-blue-900 dark:text-blue-100 font-mono text-lg"
                    step="0.001"
                  />
                </div>

                {/* Объем */}
                <div className="calculator-field">
                  <label className="block text-sm font-medium text-blue-700 dark:text-blue-300 mb-2">
                    Объем при н.у. (л):
                  </label>
                  <input
                    type="number"
                    value={calculatorValues.volume.toFixed(3)}
                    onChange={(e) => calculateValues('volume', parseFloat(e.target.value) || 0)}
                    className="w-full p-3 border border-blue-200 dark:border-blue-700 rounded-lg bg-white dark:bg-gray-800 text-blue-900 dark:text-blue-100 font-mono text-lg"
                    step="0.001"
                  />
                </div>

                {/* Количество вещества */}
                <div className="calculator-field">
                  <label className="block text-sm font-medium text-blue-700 dark:text-blue-300 mb-2">
                    Количество вещества (моль):
                  </label>
                  <input
                    type="number"
                    value={calculatorValues.moles.toFixed(3)}
                    onChange={(e) => calculateValues('moles', parseFloat(e.target.value) || 0)}
                    className="w-full p-3 border border-blue-200 dark:border-blue-700 rounded-lg bg-white dark:bg-gray-800 text-blue-900 dark:text-blue-100 font-mono text-lg"
                    step="0.001"
                  />
                </div>
              </div>

              {/* Константы */}
              <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border border-blue-100 dark:border-blue-700">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Константы H₂:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-600 dark:text-blue-400">Молярная масса:</span>
                    <span className="font-mono text-blue-800 dark:text-blue-200">2.016 г/моль</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-600 dark:text-blue-400">Молярный объем (н.у.):</span>
                    <span className="font-mono text-blue-800 dark:text-blue-200">22.4 л/моль</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-600 dark:text-blue-400">Плотность (н.у.):</span>
                    <span className="font-mono text-blue-800 dark:text-blue-200">0.090 г/л</span>
                  </div>
                </div>
              </div>

              {/* Энергетические расчеты */}
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Энергетические расчеты:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-green-600 dark:text-green-400">Энергия сгорания:</span>
                    <span className="font-mono text-green-800 dark:text-green-200">
                      {(calculatorValues.moles * 286).toFixed(1)} кДж
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-600 dark:text-green-400">Эквивалент в кВт·ч:</span>
                    <span className="font-mono text-green-800 dark:text-green-200">
                      {(calculatorValues.moles * 286 / 3.6).toFixed(2)} кВт·ч
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-600 dark:text-green-400">Масса воды (продукт):</span>
                    <span className="font-mono text-green-800 dark:text-green-200">
                      {(calculatorValues.moles * 18.015).toFixed(2)} г
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Предупреждения по безопасности */}
            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <div className="flex items-start gap-2">
                <AlertTriangle className="text-yellow-600 dark:text-yellow-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Меры безопасности:</h4>
                  <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                    <li>• Водород крайне горюч (пределы воспламенения 4-75%)</li>
                    <li>• Образует взрывоопасные смеси с воздухом</li>
                    <li>• Невидимое пламя - опасность ожогов</li>
                    <li>• Низкая плотность - быстро улетучивается</li>
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

export default HydrogenReactionSimulator; 