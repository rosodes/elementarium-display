
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface PeriodRowProps {
  periodLabel: string;
  elements: React.ReactNode[];
}

const PeriodRow = ({ periodLabel, elements }: PeriodRowProps) => {
  const { t } = useLanguage();
  // Показываем номер периода слева и далее все элементы по месту
  return (
    <>
      <div
        className="period-row"
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
    </>
  );
};

export default PeriodRow;
