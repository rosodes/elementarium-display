
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
                   dark:from-emerald-900/60 dark:via-emerald-800/60 dark:to-emerald-700/60
                   border-2 border-emerald-200/70 dark:border-emerald-600/70 rounded-xl
                   shadow-lg hover:shadow-xl transition-all duration-500 ease-out
                   hover:transform hover:-translate-y-2 hover:scale-105
                   backdrop-blur-sm relative overflow-hidden cursor-pointer
                   hover:border-emerald-300/80 dark:hover:border-emerald-500/80" 
        aria-label={`${t.ui?.period || "Period"} ${periodLabel}`}
      >
        {/* Enhanced background with depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent 
                        opacity-0 hover:opacity-100 transition-all duration-400 rounded-xl" />
        
        {/* Subtle animated shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                        -translate-x-full hover:translate-x-full transition-transform duration-700
                        ease-in-out rounded-xl" />
        
        <span className="font-extrabold tracking-tight relative z-10
                        transition-all duration-300 hover:scale-115 drop-shadow-sm
                        hover:drop-shadow-md">
          {periodLabel}
        </span>
        
        {/* Enhanced border glow */}
        <div className="absolute inset-0 rounded-xl border border-white/30 opacity-0 
                        hover:opacity-100 transition-all duration-400
                        hover:shadow-[inset_0_0_15px_rgba(255,255,255,0.3)]" />
        
        {/* Corner accents */}
        <div className="absolute top-0.5 left-0.5 w-2 h-2 border-t border-l border-white/50 rounded-tl-lg
                        opacity-0 hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0.5 right-0.5 w-2 h-2 border-b border-r border-white/50 rounded-br-lg
                        opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="flex flex-row flex-nowrap items-center gap-2 transition-all duration-300">
        {elements}
      </div>
    </div>
  );
};

export default PeriodRow;
