
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const GroupNumbers = () => {
  const { t } = useLanguage();
  
  return (
    <div 
      className="flex flex-row flex-nowrap items-center gap-2 mb-6 px-2" 
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
