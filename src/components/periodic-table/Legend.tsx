
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const blockColors = [
  { colorClass: 'bg-s-block', colorName: 'Синий', labelKey: 'sBlock' },
  { colorClass: 'bg-p-block', colorName: 'Красный', labelKey: 'pBlock' },
  { colorClass: 'bg-d-block', colorName: 'Зелёный', labelKey: 'dBlock' },
  { colorClass: 'bg-f-block', colorName: 'Фиолетовый', labelKey: 'fBlock' },
];

const Legend = () => {
  const { t } = useLanguage();

  return (
    <div className="legend flex flex-wrap gap-4 mb-6 text-xs">
      {blockColors.map(({ colorClass, colorName, labelKey }) => (
        <div key={colorClass} className="flex items-center gap-2">
          <div className={`w-4 h-4 rounded border ${colorClass}`}></div>
          <span className="text-gray-800 dark:text-gray-200 font-medium">
            {t.legend[labelKey]}
          </span>
          <span className="ml-1 text-gray-500 dark:text-gray-400">({colorName})</span>
        </div>
      ))}
      <div className="flex items-center gap-2">
        <div
          className="w-4 h-4 rounded border flex items-center justify-center"
          style={{
            background: 'rgba(239, 68, 68, 0.15)', // мягкий красный фон
            borderColor: '#ef4444',
          }}
        >
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
        </div>
        <span className="text-gray-800 dark:text-gray-200 font-medium">
          {t.legend.radioactive}
        </span>
        <span className="ml-1 text-gray-500 dark:text-gray-400">(Красный кружок)</span>
      </div>
    </div>
  );
};

export default Legend;
