
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface PeriodRowProps {
  children: React.ReactNode;
  periodKey: string;
  className?: string;
  periodNumber?: number;
}

const PeriodRow = ({ children, periodKey, periodNumber, className = '' }: PeriodRowProps) => {
  const { t } = useLanguage();
  
  return (
    <div 
      key={periodKey} 
      className={`period-row flex flex-row flex-nowrap items-center gap-0.5 sm:gap-1 mb-1 ${className}`}
      role="row"
      aria-label={periodNumber ? `${t.ui?.period || "Period"} ${periodNumber}` : undefined}
    >
      {periodNumber && (
        <div 
          className="w-5 sm:w-6 text-center text-[8px] sm:text-xs font-semibold opacity-70 mr-0.5 sm:mr-1" 
          aria-label={`${t.ui?.period || "Period"} ${periodNumber}`}
        >
          {periodNumber}
        </div>
      )}
      {children}
    </div>
  );
};

export default PeriodRow;
