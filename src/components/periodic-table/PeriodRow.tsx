
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface PeriodRowProps {
  periodLabel: string;
  elements: React.ReactNode[];
}

const PeriodRow = ({ periodLabel, elements }: PeriodRowProps) => {
  const { t } = useLanguage();

  // Важно: никаких "rowClass" НЕ ДАЕМ div-у! Только для стилизации на grid родителе
  // Номер периода (1-7, 6*, 7*) идёт единым div
  // ДАЛЕЕ все элементы массива elements идут без обёртки!

  return (
    <>
      <div
        className="period-row-label"
        role="row"
        aria-label={`${t.ui?.period || "Period"} ${periodLabel}`}
        // Main CSS grid разруливается grid-layout.css через селекторы :nth-child и классы .period-x на div.periodic-table > children
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
      {/* Все элементы идут следом без обёртки! */}
      {elements.map((el, idx) => (
        <React.Fragment key={idx}>{el}</React.Fragment>
      ))}
    </>
  );
};

export default PeriodRow;
