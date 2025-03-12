
import React from 'react';

interface PeriodRowProps {
  children: React.ReactNode;
  periodKey: string;
  className?: string;
  periodNumber?: number;
}

const PeriodRow = ({ children, periodKey, periodNumber, className = '' }: PeriodRowProps) => {
  return (
    <div 
      key={periodKey} 
      className={`period-row flex flex-row flex-nowrap gap-1 ${className}`}
      role="row"
      aria-label={periodNumber ? `Period ${periodNumber}` : undefined}
    >
      {children}
    </div>
  );
};

export default PeriodRow;
