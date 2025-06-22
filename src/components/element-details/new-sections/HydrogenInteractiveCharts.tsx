import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
         AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
         ScatterChart, Scatter } from "recharts";
import { BarChart3, TrendingUp, Activity, Target, Zap, Globe } from 'lucide-react';

// Данные для разных диаграмм
const hydrogenProductionData = [
  { year: 2010, total: 50, steamReforming: 48, electrolysis: 1.5, other: 0.5 },
  { year: 2015, total: 58, steamReforming: 55, electrolysis: 2.2, other: 0.8 },
  { year: 2020, total: 70, steamReforming: 65, electrolysis: 3.5, other: 1.5 },
  { year: 2025, total: 85, steamReforming: 75, electrolysis: 7, other: 3 },
  { year: 2030, total: 120, steamReforming: 95, electrolysis: 18, other: 7 },
  { year: 2050, total: 500, steamReforming: 200, electrolysis: 250, other: 50 }
];

const hydrogenPropertiesRadar = [
  { property: 'Плотность энергии', value: 95, fullMark: 100 },
  { property: 'Экологичность', value: 100, fullMark: 100 },
  { property: 'Эффективность', value: 85, fullMark: 100 },
  { property: 'Доступность', value: 60, fullMark: 100 },
  { property: 'Безопасность', value: 70, fullMark: 100 },
  { property: 'Стоимость', value: 40, fullMark: 100 }
];

const hydrogenTemperatureData = [
  { temp: -273, pressure: 0, phase: 'Невозможно' },
  { temp: -259.16, pressure: 1, phase: 'Жидкость/Газ' },
  { temp: -252.87, pressure: 1, phase: 'Газ' },
  { temp: 0, pressure: 1, phase: 'Газ' },
  { temp: 100, pressure: 1, phase: 'Газ' },
  { temp: 500, pressure: 1, phase: 'Газ' },
  { temp: 1000, pressure: 1, phase: 'Газ' },
  { temp: 3000, pressure: 1, phase: 'Плазма' }
];

const hydrogenApplicationsData = [
  { application: 'Аммиак (NH₃)', percentage: 54, color: '#22c55e' },
  { application: 'Нефтепереработка', percentage: 23, color: '#3b82f6' },
  { application: 'Метанол', percentage: 8, color: '#8b5cf6' },
  { application: 'Сталелитейная пром.', percentage: 7, color: '#f59e0b' },
  { application: 'Другие химикаты', percentage: 5, color: '#ef4444' },
  { application: 'Транспорт/энергетика', percentage: 3, color: '#06b6d4' }
];

const HydrogenInteractiveCharts: React.FC = () => {
  const [activeChart, setActiveChart] = useState('production');

  const chartOptions = [
    { id: 'production', title: 'Производство водорода', icon: <BarChart3 size={20} /> },
    { id: 'properties', title: 'Характеристики', icon: <Target size={20} /> },
    { id: 'temperature', title: 'Фазовые состояния', icon: <Activity size={20} /> },
    { id: 'applications', title: 'Применения', icon: <Globe size={20} /> }
  ];

  const renderChart = () => {
    switch (activeChart) {
      case 'production':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={hydrogenProductionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis label={{ value: 'Млн тонн/год', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                formatter={(value, name) => [`${value} млн т/год`, name]}
                labelFormatter={(year) => `Год: ${year}`}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="steamReforming" 
                stackId="1" 
                stroke="#22c55e" 
                fill="#22c55e" 
                fillOpacity={0.8}
                name="Паровая конверсия"
              />
              <Area 
                type="monotone" 
                dataKey="electrolysis" 
                stackId="1" 
                stroke="#3b82f6" 
                fill="#3b82f6" 
                fillOpacity={0.8}
                name="Электролиз"
              />
              <Area 
                type="monotone" 
                dataKey="other" 
                stackId="1" 
                stroke="#8b5cf6" 
                fill="#8b5cf6" 
                fillOpacity={0.8}
                name="Другие методы"
              />
            </AreaChart>
          </ResponsiveContainer>
        );

      case 'properties':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={hydrogenPropertiesRadar}>
              <PolarGrid />
              <PolarAngleAxis dataKey="property" tick={{ fontSize: 12 }} />
              <PolarRadiusAxis 
                angle={30} 
                domain={[0, 100]} 
                tick={{ fontSize: 10 }}
                tickFormatter={(value) => `${value}%`}
              />
              <Radar
                name="Водород"
                dataKey="value"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Рейтинг']}
              />
            </RadarChart>
          </ResponsiveContainer>
        );

      case 'temperature':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart data={hydrogenTemperatureData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="temp" 
                domain={[-300, 3500]}
                label={{ value: 'Температура (°C)', position: 'insideBottom', offset: -5 }}
              />
              <YAxis 
                dataKey="pressure"
                domain={[0, 5]}
                label={{ value: 'Давление (атм)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                formatter={(value, name) => {
                  if (name === 'temp') return [`${value}°C`, 'Температура'];
                  if (name === 'pressure') return [`${value} атм`, 'Давление'];
                  return [value, name];
                }}
                labelFormatter={(label, payload) => {
                  if (payload && payload[0]) {
                    return `Фаза: ${payload[0].payload.phase}`;
                  }
                  return label;
                }}
              />
              <Scatter 
                name="Фазовые состояния" 
                fill="#ef4444"
                stroke="#dc2626"
                strokeWidth={2}
                r={8}
              />
            </ScatterChart>
          </ResponsiveContainer>
        );

      case 'applications':
        return (
          <div className="h-96 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
              {hydrogenApplicationsData.map((app, index) => (
                <div key={index} className="application-bar">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {app.application}
                    </span>
                    <span className="text-sm font-bold" style={{ color: app.color }}>
                      {app.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${app.percentage}%`, 
                        backgroundColor: app.color 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="my-6 border border-gray-200 dark:border-gray-700 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6">
        <CardTitle className="text-xl font-bold text-blue-900 dark:text-blue-100 flex items-center gap-3">
          <TrendingUp className="text-blue-600 dark:text-blue-400" size={24} />
          Интерактивные диаграммы водорода
        </CardTitle>
        
        {/* Переключатели графиков */}
        <div className="flex flex-wrap gap-2 mt-4">
          {chartOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveChart(option.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeChart === option.id
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 border border-blue-200 dark:border-blue-800'
              }`}
            >
              {option.icon}
              {option.title}
            </button>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        {/* Описание текущего графика */}
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          {activeChart === 'production' && (
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <BarChart3 className="text-green-500" size={18} />
                Прогноз развития производства водорода
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                График показывает текущее состояние и прогноз развития мирового производства водорода по методам получения. 
                Ожидается значительный рост доли электролиза (зеленого водорода) к 2050 году.
              </p>
            </div>
          )}
          
          {activeChart === 'properties' && (
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <Target className="text-blue-500" size={18} />
                Сравнительный анализ характеристик водорода
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Радарная диаграмма отображает ключевые характеристики водорода как энергоносителя. 
                Высокие показатели экологичности и плотности энергии, но пока низкая стоимость производства.
              </p>
            </div>
          )}
          
          {activeChart === 'temperature' && (
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <Activity className="text-red-500" size={18} />
                Фазовая диаграмма водорода
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Диаграмма показывает различные агрегатные состояния водорода при разных температурах и давлениях. 
                При обычных условиях водород - газ, при экстремально высоких температурах превращается в плазму.
              </p>
            </div>
          )}
          
          {activeChart === 'applications' && (
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <Globe className="text-purple-500" size={18} />
                Структура потребления водорода по отраслям
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Более половины производимого водорода используется для синтеза аммиака (удобрения). 
                Значительная доля идет на нефтепереработку и производство химических веществ.
              </p>
            </div>
          )}
        </div>

        {/* Сам график */}
        <div className="chart-container bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
          {renderChart()}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="stat-card bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="text-green-500" size={16} />
              <span className="font-semibold text-green-800 dark:text-green-200">Энергетическая ценность</span>
            </div>
            <div className="text-green-700 dark:text-green-300">
              142 МДж/кг - в 3 раза больше чем у бензина
            </div>
          </div>
          
          <div className="stat-card bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="text-blue-500" size={16} />
              <span className="font-semibold text-blue-800 dark:text-blue-200">Мировой рынок</span>
            </div>
            <div className="text-blue-700 dark:text-blue-300">
              $130 млрд в 2020, прогноз $201 млрд к 2025
            </div>
          </div>
          
          <div className="stat-card bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="text-purple-500" size={16} />
              <span className="font-semibold text-purple-800 dark:text-purple-200">Рост производства</span>
            </div>
            <div className="text-purple-700 dark:text-purple-300">
              7-кратное увеличение к 2050 году
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HydrogenInteractiveCharts; 