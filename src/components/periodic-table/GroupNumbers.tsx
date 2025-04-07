
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const GroupNumbers = () => {
  const { t } = useLanguage();
  
  return (
    <div 
      className="flex flex-row flex-nowrap items-center gap-0.5 sm:gap-1 mb-1" 
      role="row" 
      aria-label={t.ui?.groupNumbersLabel || "Group numbers"}
    >
      <div className="w-5 sm:w-6 mr-0.5 sm:mr-1" aria-hidden="true"></div>
      {Array.from({ length: 18 }, (_, i) => i + 1).map(num => (
        <div 
          key={`group-${num}`}
          className="w-[54px] sm:w-[70px] text-center text-[8px] sm:text-xs font-semibold opacity-70 flex-shrink-0 text-gray-800 dark:text-gray-200"
          aria-label={`${t.ui?.group || "Group"} ${num}`}
        >
          {num}
        </div>
      ))}
    </div>
  );
};

export default GroupNumbers;
