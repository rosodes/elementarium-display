
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
      <div aria-hidden="true"></div>
      {Array.from({ length: 18 }, (_, i) => i + 1).map(num => (
        <div 
          key={`group-${num}`}
          aria-label={`${t.ui?.group || "Group"} ${num}`}
        >
          {num}
        </div>
      ))}
    </div>
  );
};

export default GroupNumbers;
