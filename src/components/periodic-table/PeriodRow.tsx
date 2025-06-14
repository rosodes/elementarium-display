
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface PeriodRowProps {
  periodLabel: string;
  elements: React.ReactNode[];
}

const PeriodRow = ({ periodLabel, elements }: PeriodRowProps) => {
  const { t } = useLanguage();

  // Формируем правильные CSS классы для периода
  let rowClass = `period-row period-${periodLabel}`;
  if (periodLabel === '6*') rowClass += ' lanthanides-row';
  if (periodLabel === '7*') rowClass += ' actinides-row';

  return (
    <div className={rowClass}>
      <div
        className="period-row-label"
        role="row"
        aria-label={`${t.ui?.period || "Period"} ${periodLabel}`}
        style={{
          gridColumn: 1,
          display: 'flex',
          alignItems: 'center',
          color: '#96a0ae',
          minHeight: 60,
          fontWeight: 500,
          fontSize: '1.05rem'
        }}
      >
        {periodLabel}
      </div>
      {/* Все элементы идут следом без дополнительной обёртки */}
      {elements}
    </div>
  );
};

export default PeriodRow;
