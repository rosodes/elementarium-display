
import React from 'react';

interface PeriodRowProps {
  children: React.ReactNode;
  periodKey: string;
  className?: string;
}

const PeriodRow = ({ children, periodKey, className = '' }: PeriodRowProps) => {
  return (
    <div key={periodKey} className={`period-row ${className}`}>
      {children}
    </div>
  );
};

export default PeriodRow;
