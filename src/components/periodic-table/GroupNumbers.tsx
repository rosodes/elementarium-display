
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const GroupNumbers = () => {
  const { t } = useLanguage();
  
  return (
    <div 
      className="flex flex-row flex-nowrap items-center gap-2 mb-6 px-2 animate-fade-in" 
      role="row" 
      aria-label={t.ui?.groupNumbersLabel || "Group numbers"}
    >
      {/* Period label placeholder with enhanced spacing */}
      <div className="w-10 mr-3" aria-hidden="true"></div>
      
      {Array.from({ length: 18 }, (_, i) => i + 1).map(num => (
        <div 
          key={`group-${num}`}
          className="group-label w-[70px] h-12 text-center text-sm font-bold flex-shrink-0 
                     text-gray-800 dark:text-gray-100 flex items-center justify-center
                     bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 
                     dark:from-blue-900/60 dark:via-blue-800/60 dark:to-blue-700/60
                     border-2 border-blue-200/70 dark:border-blue-600/70 rounded-xl
                     shadow-lg hover:shadow-xl transition-all duration-500 ease-out
                     hover:transform hover:-translate-y-2 hover:scale-105
                     backdrop-blur-sm relative overflow-hidden cursor-pointer
                     hover:border-blue-300/80 dark:hover:border-blue-500/80"
          style={{
            animationDelay: `${num * 50}ms`
          }}
          aria-label={`${t.ui?.group || "Group"} ${num}`}
        >
          {/* Enhanced background pattern with depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent 
                          opacity-0 hover:opacity-100 transition-all duration-400 rounded-xl" />
          
          {/* Subtle animated shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                          -translate-x-full hover:translate-x-full transition-transform duration-700
                          ease-in-out rounded-xl" />
          
          <span className="font-extrabold tracking-tight relative z-10 
                          transition-all duration-300 hover:scale-115 drop-shadow-sm
                          hover:drop-shadow-md">
            {num}
          </span>
          
          {/* Enhanced border glow with pulse effect */}
          <div className="absolute inset-0 rounded-xl border border-white/30 opacity-0 
                          hover:opacity-100 transition-all duration-400
                          hover:shadow-[inset_0_0_15px_rgba(255,255,255,0.3)]" />
          
          {/* Corner accents for premium feel */}
          <div className="absolute top-0.5 left-0.5 w-2 h-2 border-t border-l border-white/50 rounded-tl-lg
                          opacity-0 hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0.5 right-0.5 w-2 h-2 border-b border-r border-white/50 rounded-br-lg
                          opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
};

export default GroupNumbers;
