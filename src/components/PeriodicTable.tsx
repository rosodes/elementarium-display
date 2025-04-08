
import { useState, useEffect, useCallback } from 'react';
import { Element as ElementType } from '../data/elementTypes';
import { elements } from '../data/elements';
import ElementDetails from './ElementDetails';
import TableContainer from './periodic-table/TableContainer';
import { useLanguage } from '../context/LanguageContext';
import ElementSearchResults from './search/ElementSearch';

interface PeriodicTableProps {
  searchQuery?: string;
}

const useElementSearch = (searchQuery: string, language: string, t: any) => {
  const [filteredElements, setFilteredElements] = useState<ElementType[]>([]);

  useEffect(() => {
    // Filter elements when search query changes or language changes
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

  return filteredElements;
}

const PeriodicTable = ({ searchQuery = '' }: PeriodicTableProps) => {
  const [selectedElement, setSelectedElement] = useState<ElementType | null>(null);
  const { t, language } = useLanguage();
  
  // Use custom hook for element filtering
  const filteredElements = useElementSearch(searchQuery, language, t);
  
  const handleElementClick = (element: ElementType) => {
    setSelectedElement(element);
  };
  
  const closeDetails = () => {
    setSelectedElement(null);
  };
  
  return (
    <section 
      className="w-full mx-auto"
      role="region"
      aria-label={t.title}
    >
      <div className="px-12">
        {/* Search results section */}
        <ElementSearchResults 
          searchQuery={searchQuery}
          filteredElements={filteredElements}
          onElementSelect={handleElementClick}
        />
      </div>
      
      <div className="periodic-table-container w-full">
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
