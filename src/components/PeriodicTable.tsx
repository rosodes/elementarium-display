
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
  const [filteredElements, setFilteredElements] = useState<ElementType[]>([]);
  const { t, language } = useLanguage();
  
  useEffect(() => {
    // Filter elements when search query changes
    if (!searchQuery.trim()) {
      setFilteredElements([]);
      return;
    }
    
    const query = searchQuery.toLowerCase().trim();
    const filtered = elements
      .filter((element): element is ElementType => {
        if (!element) return false;
        
        // Get translated element name if available
        const translatedName = t.ui?.elements?.[element.symbol.toLowerCase()] || element.name;
        
        const matchesName = translatedName.toLowerCase().includes(query) || 
                           element.name.toLowerCase().includes(query);
        const matchesSymbol = element.symbol.toLowerCase().includes(query);
        const matchesAtomic = element.atomic.toString().includes(query);
        
        return matchesName || matchesSymbol || matchesAtomic;
      });
    
    setFilteredElements(filtered);
  }, [searchQuery, t.ui?.elements, language]);
  
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
    <section 
      className="w-full mx-auto pt-8"
      role="region"
      aria-label={t.title}
    >
      <div className="pl-4 md:pl-16 text-left mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">{t.title}</h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2">{t.subtitle}</p>
      
        <div className="max-w-md mt-6">
          <SearchBar onSearch={handleSearch} />
          <Legend />
        </div>
      </div>
      
      {searchQuery && filteredElements.length > 0 && (
        <div className="pl-4 md:pl-16 mb-4 text-left" aria-live="polite">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
            {t.ui?.searchResults || "Search results"}
          </h2>
          <div className="flex flex-wrap gap-2">
            {filteredElements.map((element) => (
              <button
                key={`search-${element.atomic}`}
                onClick={() => handleElementClick(element)}
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-gray-200"
                aria-label={`${t.ui?.elements?.[element.symbol.toLowerCase()] || element.name} (${element.symbol}), ${t.elementDetails.atomicNumber} ${element.atomic}`}
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
      )}
      
      {searchQuery && filteredElements.length === 0 && (
        <div className="pl-4 md:pl-16 my-4 text-left text-gray-500 dark:text-gray-400" aria-live="polite">
          {t.ui?.searchNoResults || "No elements found matching your search"}
        </div>
      )}
      
      <div className="periodic-table-container px-6 sm:px-12 md:px-48">
        <TableContainer 
          onElementClick={handleElementClick} 
          selectedElement={selectedElement}
        />
      </div>
      
      {selectedElement && (
        <ElementDetails element={selectedElement} onClose={closeDetails} />
      )}
    </section>
  );
};

export default PeriodicTable;
