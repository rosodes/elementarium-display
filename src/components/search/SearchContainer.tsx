
import React, { memo } from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import ElementSearchResults from './ElementSearch';

interface SearchContainerProps {
  searchQuery: string;
  filteredElements: ElementType[];
  onElementSelect: (element: ElementType) => void;
}

const SearchContainer = memo(({ searchQuery, filteredElements, onElementSelect }: SearchContainerProps) => {
  const showSearchResults = searchQuery.trim().length > 0 && filteredElements.length > 0;
  
  if (!showSearchResults) {
    return null;
  }
  
  return (
    <div className="px-4 sm:px-12">
      <ElementSearchResults 
        searchQuery={searchQuery}
        filteredElements={filteredElements}
        onElementSelect={onElementSelect}
      />
    </div>
  );
});

SearchContainer.displayName = 'SearchContainer';

export default SearchContainer;
