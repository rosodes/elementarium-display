
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface PeriodRowProps {
  periodLabel: string;
  elements: React.ReactNode[];
}

const PeriodRow = ({ periodLabel, elements }: PeriodRowProps) => {
  const { t } = useLanguage();
  
  return (
    <div 
      key={`period-row-${periodLabel}`} 
      className="period-row flex flex-row flex-nowrap items-center gap-2 mb-4 px-2
                 animate-slide-up transition-all duration-300 hover:transform hover:translate-x-1"
      style={{
        animationDelay: `${parseInt(periodLabel) * 100}ms`
      }}
      role="row"
      aria-label={`${t.ui?.period || "Period"} ${periodLabel}`}
    >
      <div 
        className="period-label w-10 h-[70px] flex items-center justify-center mr-3
                   text-sm font-bold text-gray-800 dark:text-gray-100
                   bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-150 
                   dark:from-emerald-900/50 dark:via-emerald-800/50 dark:to-emerald-700/50
                   border-2 border-emerald-200/60 dark:border-emerald-600/60 rounded-xl
                   shadow-lg hover:shadow-xl transition-all duration-400 ease-out
                   hover:transform hover:-translate-y-1 hover:scale-105
                   backdrop-blur-sm relative overflow-hidden cursor-pointer" 
        aria-label={`${t.ui?.period || "Period"} ${periodLabel}`}
      >
        {/* Background enhancement */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent 
                        opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        
        <span className="font-extrabold tracking-tight relative z-10
                        transition-all duration-300 hover:scale-110">
          {periodLabel}
        </span>
        
        {/* Subtle border glow */}
        <div className="absolute inset-0 rounded-xl border border-white/20 opacity-0 
                        hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="flex flex-row flex-nowrap items-center gap-2 transition-all duration-300">
        {elements}
      </div>
    </div>
  );
};

export default PeriodRow;
