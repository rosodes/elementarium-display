
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface PeriodRowProps {
  periodLabel: string;
  elements: React.ReactNode[];
}

const PeriodRow = ({ periodLabel, elements }: PeriodRowProps) => {
  const { t } = useLanguage();

  // Для f-блока добавляем специальные классы, если нужно
  let rowClass = `period-row period-${periodLabel}`;
  if (periodLabel === '6*') rowClass += ' lanthanides-row';
  if (periodLabel === '7*') rowClass += ' actinides-row';

  // Используем fragment, чтобы элементы попадали непосредственно в сетку
  return (
    <>
      <div
        className={rowClass}
        role="row"
        aria-label={`${t.ui?.period || "Period"} ${periodLabel}`}
        style={{ display: 'contents' }}
      >
        <div aria-label={`${t.ui?.period || "Period"} ${periodLabel}`}>
          {periodLabel}
        </div>
        {elements}
      </div>
    </>
  );
};

export default PeriodRow;
