
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
      {/* Period label placeholder with better spacing */}
      <div className="w-10 mr-3" aria-hidden="true"></div>
      
      {Array.from({ length: 18 }, (_, i) => i + 1).map(num => (
        <div 
          key={`group-${num}`}
          className="group-label w-[70px] h-12 text-center text-sm font-bold flex-shrink-0 
                     text-gray-800 dark:text-gray-100 flex items-center justify-center
                     bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 
                     dark:from-blue-900/50 dark:via-blue-800/50 dark:to-blue-700/50
                     border-2 border-blue-200/60 dark:border-blue-600/60 rounded-xl
                     shadow-lg hover:shadow-xl transition-all duration-400 ease-out
                     hover:transform hover:-translate-y-1 hover:scale-105
                     backdrop-blur-sm border-gradient relative overflow-hidden
                     cursor-pointer"
          style={{
            animationDelay: `${num * 50}ms`
          }}
          aria-label={`${t.ui?.group || "Group"} ${num}`}
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent 
                          opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          
          <span className="font-extrabold tracking-tight relative z-10 
                          transition-all duration-300 hover:scale-110">
            {num}
          </span>
          
          {/* Subtle border glow */}
          <div className="absolute inset-0 rounded-xl border border-white/20 opacity-0 
                          hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
};

export default GroupNumbers;
