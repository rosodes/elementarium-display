
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const GroupNumbers = () => {
  const { t } = useLanguage();
  
  return (
    <div 
      className="flex flex-row flex-nowrap items-center gap-2 mb-4 px-0" 
      role="row" 
      aria-label={t.ui?.groupNumbersLabel || "Group numbers"}
    >
      {/* Period label placeholder with consistent spacing */}
      <div className="w-12 mr-2 flex-shrink-0" aria-hidden="true"></div>
      
      {Array.from({ length: 18 }, (_, i) => i + 1).map(num => (
        <div 
          key={`group-${num}`}
          className="group-label w-[70px] h-10 text-center text-sm font-bold flex-shrink-0 
                     text-gray-800 dark:text-gray-100 flex items-center justify-center
                     bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 
                     dark:from-blue-900/60 dark:via-blue-800/60 dark:to-blue-700/60
                     border-2 border-blue-200/70 dark:border-blue-600/70 rounded-xl
                     shadow-lg backdrop-blur-sm relative overflow-hidden cursor-pointer"
          aria-label={`${t.ui?.group || "Group"} ${num}`}
        >
          <span className="font-extrabold tracking-tight relative z-10">
            {num}
          </span>
        </div>
      ))}
    </div>
  );
};

export default GroupNumbers;
