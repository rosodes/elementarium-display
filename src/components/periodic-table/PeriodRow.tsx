
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
      className="period-row flex flex-row flex-nowrap items-center gap-1.5 mb-2 px-2"
      role="row"
      aria-label={`${t.ui?.period || "Period"} ${periodLabel}`}
    >
      <div 
        className="w-6 h-[70px] flex items-center justify-center mr-2
                   text-sm font-bold text-gray-700 dark:text-gray-300
                   bg-gradient-to-b from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30
                   border border-green-200 dark:border-green-700 rounded-lg
                   shadow-sm hover:shadow-md transition-all duration-200" 
        aria-label={`${t.ui?.period || "Period"} ${periodLabel}`}
      >
        {periodLabel}
      </div>
      {elements}
    </div>
  );
};

export default PeriodRow;
