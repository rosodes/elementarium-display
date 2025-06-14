
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const GroupNumbers = () => {
  const { t } = useLanguage();
  
  return (
    <div 
      className="flex flex-row flex-nowrap items-center gap-1.5 mb-3 px-2" 
      role="row" 
      aria-label={t.ui?.groupNumbersLabel || "Group numbers"}
    >
      <div className="w-6 mr-2" aria-hidden="true"></div>
      {Array.from({ length: 18 }, (_, i) => i + 1).map(num => (
        <div 
          key={`group-${num}`}
          className="w-[70px] text-center text-sm font-bold flex-shrink-0 
                     text-gray-700 dark:text-gray-300 py-2 px-1
                     bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30
                     border border-blue-200 dark:border-blue-700 rounded-lg
                     shadow-sm hover:shadow-md transition-all duration-200"
          aria-label={`${t.ui?.group || "Group"} ${num}`}
        >
          {num}
        </div>
      ))}
    </div>
  );
};

export default GroupNumbers;
