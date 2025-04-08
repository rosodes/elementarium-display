
import React from 'react';
import { Element as ElementType } from '@/data/elementTypes';
import { useLanguage } from '@/context/LanguageContext';

interface ElementSearchResultsProps {
  searchQuery: string;
  filteredElements: ElementType[];
  onElementSelect: (element: ElementType) => void;
}

const ElementSearchResults: React.FC<ElementSearchResultsProps> = ({
  searchQuery,
  filteredElements,
  onElementSelect
}) => {
  const { t } = useLanguage();

  if (!searchQuery) {
    return null;
  }

  if (filteredElements.length === 0) {
    return (
      <div className="my-4 text-left text-gray-500 dark:text-gray-400" aria-live="polite">
        {t.ui?.searchNoResults || "No elements found matching your search"}
      </div>
    );
  }

  return (
    <div className="mb-6 text-left" aria-live="polite">
      <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
        {t.ui?.searchResults || "Search results"}
      </h2>
      <div className="flex flex-wrap gap-2">
        {filteredElements.map((element) => (
          <button
            key={`search-${element.atomic}`}
            onClick={() => onElementSelect(element)}
            className="p-2 bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700 
                     hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-gray-200"
            aria-label={`${t.ui?.elements?.[element.symbol.toLowerCase()] || element.name} (${element.symbol}), ${t.elementDetails?.atomicNumber} ${element.atomic}`}
          >
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold">{element.symbol}</span>
              <span className="text-sm">{t.ui?.elements?.[element.symbol.toLowerCase()] || element.name}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">{element.atomic}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ElementSearchResults;
