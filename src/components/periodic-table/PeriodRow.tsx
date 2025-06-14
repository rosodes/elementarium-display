
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface PeriodRowProps {
  periodLabel: string;
  elements: React.ReactNode[];
}

const PeriodRow = ({ periodLabel, elements }: PeriodRowProps) => {
  const { t } = useLanguage();

  return (
    <div className="f-block-row">
      <div className={`period-row-label period-${periodLabel}-label`}>
        {periodLabel}
      </div>
      {elements}
    </div>
  );
};

export default PeriodRow;
