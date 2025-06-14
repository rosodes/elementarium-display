
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
      className={`period-row period-${periodLabel.replace('*', '')}`}
      role="row"
      aria-label={`${t.ui?.period || "Period"} ${periodLabel}`}
    >
      <div 
        aria-label={`${t.ui?.period || "Period"} ${periodLabel}`}
      >
        {periodLabel}
      </div>
      {elements}
    </div>
  );
};

export default PeriodRow;
