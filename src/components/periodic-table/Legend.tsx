
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Legend = () => {
  const { t } = useLanguage();
  
  return (
    <div className="legend flex flex-wrap justify-center items-center gap-3 mb-6 mt-2 text-xs">
      <div className="flex items-center">
        <div className="w-4 h-4 bg-s-block mr-1 rounded"></div>
        <span>{t.legend.sBlock}</span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 bg-p-block mr-1 rounded"></div>
        <span>{t.legend.pBlock}</span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 bg-d-block mr-1 rounded"></div>
        <span>{t.legend.dBlock}</span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 bg-f-block mr-1 rounded"></div>
        <span>{t.legend.fBlock}</span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 rounded mr-1 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
        </div>
        <span>{t.legend.radioactive}</span>
      </div>
    </div>
  );
};

export default Legend;
