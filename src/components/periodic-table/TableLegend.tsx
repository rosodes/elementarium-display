
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const TableLegend = () => {
  const { t } = useLanguage();
  
  const legendItems = [
    { color: 'bg-s-block', label: 's-block', description: 'Щелочные и щелочноземельные металлы' },
    { color: 'bg-p-block', label: 'p-block', description: 'Неметаллы, металлоиды, некоторые металлы' },
    { color: 'bg-d-block', label: 'd-block', description: 'Переходные металлы' },
    { color: 'bg-f-block', label: 'f-block', description: 'Лантаноиды и актиноиды' },
  ];
  
  return (
    <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border">
      <h3 className="text-sm font-semibold mb-3 text-gray-800 dark:text-gray-200">
        Электронные блоки
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        {legendItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded ${item.color} border flex-shrink-0`}></div>
            <div>
              <div className="font-medium text-gray-800 dark:text-gray-200">
                {item.label}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-xs leading-tight">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-3 pt-2 border-t border-gray-200 dark:border-gray-600">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <span className="text-xs text-gray-600 dark:text-gray-400">
          Радиоактивные элементы
        </span>
      </div>
    </div>
  );
};

export default TableLegend;
