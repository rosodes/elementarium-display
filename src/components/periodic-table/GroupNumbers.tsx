
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const GroupNumbers = () => {
  const { t } = useLanguage();
  
  return (
    <div 
      className="flex flex-row flex-nowrap items-center gap-2 mb-4 px-2" 
      role="row" 
      aria-label={t.ui?.groupNumbersLabel || "Group numbers"}
    >
      {/* Period label placeholder */}
      <div className="w-8 mr-2" aria-hidden="true"></div>
      
      {Array.from({ length: 18 }, (_, i) => i + 1).map(num => (
        <div 
          key={`group-${num}`}
          className="group-label w-[70px] h-10 text-center text-sm font-bold flex-shrink-0 
                     text-gray-700 dark:text-gray-200 flex items-center justify-center
                     bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 
                     dark:from-blue-900/40 dark:via-blue-800/40 dark:to-blue-700/40
                     border border-blue-200 dark:border-blue-600 rounded-lg
                     shadow-sm hover:shadow-md transition-all duration-300
                     hover:transform hover:-translate-y-0.5"
          aria-label={`${t.ui?.group || "Group"} ${num}`}
        >
          <span className="font-extrabold tracking-tight">{num}</span>
        </div>
      ))}
    </div>
  );
};

export default GroupNumbers;
