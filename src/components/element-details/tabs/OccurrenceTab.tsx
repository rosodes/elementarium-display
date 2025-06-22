import React from 'react';
import { Element } from '../../../data/elementTypes';
import { useValidatedTranslation } from '../../../hooks/useValidatedTranslation';

interface OccurrenceTabProps {
  element: Element;
}

const OccurrenceTab: React.FC<OccurrenceTabProps> = ({ element }) => {
  const { t } = useValidatedTranslation('OccurrenceTab');

  return (
    <div className="occurrence-tab space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Распространение {element.name}
      </h3>
      
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
        <p className="text-gray-600 dark:text-gray-400">
          Информация о распространении элемента {element.name} в природе будет добавлена в будущих обновлениях.
        </p>
      </div>
    </div>
  );
};

export default OccurrenceTab;
