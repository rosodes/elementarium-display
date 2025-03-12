
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
      className={`period-row flex flex-row flex-nowrap items-center gap-1 mb-1 ${className}`}
      role="row"
      aria-label={periodNumber ? `Period ${periodNumber}` : undefined}
    >
      {periodNumber && (
        <div className="period-number w-6 text-center text-xs font-semibold opacity-60 mr-1" aria-hidden="true">
          {periodNumber}
        </div>
      )}
      {children}
    </div>
  );
};

export default PeriodRow;
