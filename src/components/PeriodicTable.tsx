
import { useState, useEffect, useCallback } from 'react';
import { Element as ElementType } from '../data/elementTypes';
import { elements } from '../data/elements';
import ElementDetails from './ElementDetails';
import Legend from './periodic-table/Legend';
import TableContainer from './periodic-table/TableContainer';
import SearchBar from './periodic-table/SearchBar';
import { useLanguage } from '../context/LanguageContext';

const PeriodicTable = () => {
  const [selectedElement, setSelectedElement] = useState<ElementType | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredElements, setFilteredElements] = useState<(ElementType | null)[]>([]);
  const { t } = useLanguage();
  
  useEffect(() => {
    // Filter elements when search query changes
    if (!searchQuery.trim()) {
      setFilteredElements([]);
      return;
    }
    
    const query = searchQuery.toLowerCase().trim();
    const filtered = elements.filter((element) => {
      if (!element) return false;
      
      const matchesName = element.name.toLowerCase().includes(query);
      const matchesSymbol = element.symbol.toLowerCase().includes(query);
      const matchesAtomic = element.atomic.toString().includes(query);
      
      return matchesName || matchesSymbol || matchesAtomic;
    });
    
    setFilteredElements(filtered);
  }, [searchQuery]);
  
  const handleElementClick = (element: ElementType) => {
    setSelectedElement(element);
  };
  
  const closeDetails = () => {
    setSelectedElement(null);
  };
  
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);
  
  return (
    <div 
      className="periodic-table-container w-full max-w-full overflow-auto py-4"
      role="region"
      aria-label={t.title}
    >
      <SearchBar onSearch={handleSearch} />
      
      {searchQuery && filteredElements.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2 text-center">
            {t.ui?.searchResults || "Search results"}
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {filteredElements.map((element) => (
              element && (
                <button
                  key={`search-${element.atomic}`}
                  onClick={() => handleElementClick(element)}
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label={`${element.name} (${element.symbol}), atomic number ${element.atomic}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold">{element.symbol}</span>
                    <span className="text-sm">{element.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{element.atomic}</span>
                  </div>
                </button>
              )
            ))}
          </div>
        </div>
      )}
      
      {searchQuery && filteredElements.length === 0 && (
        <div className="my-4 text-center text-gray-500 dark:text-gray-400">
          {t.ui?.searchNoResults || "No elements found matching your search"}
        </div>
      )}
      
      <Legend />
      
      <TableContainer 
        onElementClick={handleElementClick} 
        selectedElement={selectedElement}
      />
      
      {selectedElement && (
        <ElementDetails element={selectedElement} onClose={closeDetails} />
      )}
    </div>
  );
};

export default PeriodicTable;
