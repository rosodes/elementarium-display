
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface PeriodRowProps {
  periodLabel: string;
  elements: React.ReactNode[];
}

const PeriodRow = ({ periodLabel, elements }: PeriodRowProps) => {
  const { t } = useLanguage();

  // Use display: contents to make period row transparent to CSS Grid
  const rowClass = `period-row period-${periodLabel}`;

  return (
    <div className={rowClass} style={{ display: 'contents' }}>
      <div className="period-row-label">
        {periodLabel}
      </div>
      {elements}
    </div>
  );
};

export default PeriodRow;
