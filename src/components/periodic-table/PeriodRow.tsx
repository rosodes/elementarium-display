
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
      className="period-row flex flex-row flex-nowrap items-center gap-0.5 sm:gap-1 mb-1"
      role="row"
      aria-label={`${t.ui?.period || "Period"} ${periodLabel}`}
    >
      <div 
        className="w-5 sm:w-6 text-center text-[8px] sm:text-xs font-semibold opacity-70 mr-0.5 sm:mr-1 text-foreground" 
        aria-label={`${t.ui?.period || "Period"} ${periodLabel}`}
      >
        {periodLabel}
      </div>
      {elements}
    </div>
  );
};

export default PeriodRow;
