
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
      className="period-row flex flex-row flex-nowrap items-center gap-2 mb-4 px-2"
      role="row"
      aria-label={`${t.ui?.period || "Period"} ${periodLabel}`}
    >
      <div 
        className="period-label w-10 h-[70px] flex items-center justify-center mr-3
                   text-sm font-bold text-gray-800 dark:text-gray-100
                   bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-150 
                   dark:from-emerald-900/60 dark:via-emerald-800/60 dark:to-emerald-700/60
                   border-2 border-emerald-200/70 dark:border-emerald-600/70 rounded-xl
                   shadow-lg backdrop-blur-sm relative overflow-hidden cursor-pointer" 
        aria-label={`${t.ui?.period || "Period"} ${periodLabel}`}
      >
        <span className="font-extrabold tracking-tight relative z-10">
          {periodLabel}
        </span>
      </div>
      
      <div className="flex flex-row flex-nowrap items-center gap-2">
        {elements}
      </div>
    </div>
  );
};

export default PeriodRow;
