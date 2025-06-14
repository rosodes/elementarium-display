
import React from 'react';
import { elements } from '../../data/elements';

const QuickStats = () => {
  const totalElements = elements.length;
  const naturalElements = elements.filter(el => el && parseInt(el.atomic) <= 92).length;
  const syntheticElements = totalElements - naturalElements;
  const radioactiveElements = elements.filter(el => {
    if (!el) return false;
    const radioactiveNumbers = [43, 61, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118];
    return radioactiveNumbers.includes(parseInt(el.atomic));
  }).length;
  
  return (
    <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        <div>
          <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{totalElements}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Всего элементов</div>
        </div>
        <div>
          <div className="text-lg font-bold text-green-600 dark:text-green-400">{naturalElements}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Природных</div>
        </div>
        <div>
          <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{syntheticElements}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Синтетических</div>
        </div>
        <div>
          <div className="text-lg font-bold text-red-600 dark:text-red-400">{radioactiveElements}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Радиоактивных</div>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
