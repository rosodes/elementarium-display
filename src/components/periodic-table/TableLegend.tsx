
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const TableLegend = () => {
  const { t } = useLanguage();
  
  const legendItems = [
    { color: 'bg-s-block', label: t.legend.sBlock, description: t.legend.categoriesTitle || '' },
    { color: 'bg-p-block', label: t.legend.pBlock, description: t.legend.blocksTitle || '' },
    { color: 'bg-d-block', label: t.legend.dBlock, description: t.legend.transition || '' },
    { color: 'bg-f-block', label: t.legend.fBlock, description: t.legend.lanthanides + ', ' + t.legend.actinides },
  ];
  
  return (
    <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border">
      <h3 className="text-sm font-semibold mb-3 text-gray-800 dark:text-gray-200">
        {t.legend.title}
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        {legendItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded ${item.color} border flex-shrink-0`}></div>
            <div>
              <div className="font-medium text-gray-800 dark:text-gray-200">
                {item.label}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-xs leading-tight">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-3 pt-2 border-t border-gray-200 dark:border-gray-600">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <span className="text-xs text-gray-600 dark:text-gray-400">
          {t.legend.radioactive}
        </span>
      </div>
    </div>
  );
};

export default TableLegend;
