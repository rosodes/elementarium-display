
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface PeriodRowProps {
  periodLabel: string;
  elements: React.ReactNode[];
}

const PeriodRow = ({ periodLabel, elements }: PeriodRowProps) => {
  const { t } = useLanguage();

  return (
    <>
      <div 
        className={`period-row-label period-${periodLabel}-label`}
        style={{
          gridColumn: 1,
          gridRow: periodLabel === "1" ? 2 : 
                   periodLabel === "2" ? 3 :
                   periodLabel === "3" ? 4 :
                   periodLabel === "4" ? 5 :
                   periodLabel === "5" ? 6 :
                   periodLabel === "6" ? 7 : 8
        }}
      >
        {periodLabel}
      </div>
      {elements}
    </>
  );
};

export default PeriodRow;
