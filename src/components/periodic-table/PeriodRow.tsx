
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface PeriodRowProps {
  periodLabel: string;
  elements: React.ReactNode[];
}

const PeriodRow = ({ periodLabel, elements }: PeriodRowProps) => {
  const { t } = useLanguage();
  
  return (
    <div 
      key={`period-row-${periodLabel}`} 
      className="period-row flex flex-row flex-nowrap items-center gap-2 mb-3 px-2"
      role="row"
      aria-label={`${t.ui?.period || "Period"} ${periodLabel}`}
    >
      <div 
        className="period-label w-8 h-[70px] flex items-center justify-center mr-2
                   text-sm font-bold text-gray-700 dark:text-gray-200
                   bg-gradient-to-br from-green-50 via-green-100 to-green-200 
                   dark:from-green-900/40 dark:via-green-800/40 dark:to-green-700/40
                   border border-green-200 dark:border-green-600 rounded-lg
                   shadow-sm hover:shadow-md transition-all duration-300
                   hover:transform hover:-translate-y-0.5" 
        aria-label={`${t.ui?.period || "Period"} ${periodLabel}`}
      >
        <span className="font-extrabold tracking-tight">{periodLabel}</span>
      </div>
      
      <div className="flex flex-row flex-nowrap items-center gap-2">
        {elements}
      </div>
    </div>
  );
};

export default PeriodRow;
