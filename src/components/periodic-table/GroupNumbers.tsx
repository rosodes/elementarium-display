
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const GroupNumbers = () => {
  const { t } = useLanguage();
  
  return (
    <div 
      className="group-numbers-row" 
      role="row" 
      aria-label={t.ui?.groupNumbersLabel || "Group numbers"}
    >
      <div className="w-6 text-center" aria-hidden="true"></div>
      {Array.from({ length: 18 }, (_, i) => i + 1).map(num => (
        <div 
          key={`group-${num}`}
          className="w-[70px] text-center text-xs font-semibold opacity-70 flex-shrink-0 text-gray-800 dark:text-gray-200"
          aria-label={`${t.ui?.group || "Group"} ${num}`}
        >
          {num}
        </div>
      ))}
    </div>
  );
};

export default GroupNumbers;
