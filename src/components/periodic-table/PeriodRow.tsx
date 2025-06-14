
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface PeriodRowProps {
  periodLabel: string;
  elements: React.ReactNode[];
}

const PeriodRow = ({ periodLabel, elements }: PeriodRowProps) => {
  const { t } = useLanguage();
  
  // Determine CSS class based on period label
  const getRowClass = () => {
    if (periodLabel.includes('*')) {
      // For lanthanides and actinides
      return periodLabel.includes('6') ? 'lanthanides-row' : 'actinides-row';
    }
    return `period-${periodLabel}`;
  };
  
  return (
    <div 
      className={`period-row ${getRowClass()}`}
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
