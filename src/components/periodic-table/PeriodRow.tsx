
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface PeriodRowProps {
  periodLabel: string;
  elements: React.ReactNode[];
}

const PeriodRow = ({ periodLabel, elements }: PeriodRowProps) => {
  const { t } = useLanguage();

  // Класс для строки периода, необходим для grid-positioning
  // Для f-блока добавляем классы отдельно, если потребуется!
  let rowClass = `period-row period-${periodLabel}`;
  if (periodLabel === '6*') rowClass += ' lanthanides-row';
  if (periodLabel === '7*') rowClass += ' actinides-row';

  return (
    <div
      className={rowClass}
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

