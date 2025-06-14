
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface PeriodRowProps {
  periodLabel: string;
  elements: React.ReactNode[];
  className?: string;
}

const PeriodRow = ({ periodLabel, elements, className = '' }: PeriodRowProps) => {
  const { t } = useLanguage();

  return (
    <div className={`${className}`}>
      <div className="period-row-label">
        {periodLabel}
      </div>
      {elements}
    </div>
  );
};

export default PeriodRow;
