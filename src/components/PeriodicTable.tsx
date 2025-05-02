import { useState, useEffect, useCallback } from 'react';
import { Element as ElementType } from '../data/elementTypes';
import { elements } from '../data/elements';
import ElementDetails from './ElementDetails';
import TableContainer from './periodic-table/TableContainer';
import { useLanguage } from '../context/LanguageContext';
import ElementSearchResults from './search/ElementSearch';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

interface PeriodicTableProps {
  searchQuery?: string;
  onElementClick?: (element: ElementType) => void; // Make this prop optional
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

const PeriodicTable = ({ searchQuery = '', onElementClick }: PeriodicTableProps) => {
  const [selectedElement, setSelectedElement] = useState<ElementType | null>(null);
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const { lang } = useParams<{ lang?: string }>();
  const location = useLocation();
  
  // Use custom hook for element filtering
  const filteredElements = useElementSearch(searchQuery, language, t);
  
  const handleElementClick = (element: ElementType) => {
    // If onElementClick prop is provided, use it
    if (onElementClick) {
      onElementClick(element);
      return;
    }
    
    // Otherwise, use default navigation behavior
    const basePath = lang ? `/${lang}` : '';
    navigate(`${basePath}/${element.atomic}`);
  };
  
  const closeDetails = () => {
    // Return to base path based on language
    const basePath = lang ? `/${lang}` : '/';
    navigate(basePath);
  };
  
  const handleNavigateElement = (element: ElementType) => {
    // Navigate to the new element page
    const basePath = lang ? `/${lang}` : '';
    navigate(`${basePath}/${element.atomic}`);
  };
  
  return (
    <section 
      className="w-full mx-auto"
      role="region"
      aria-label={t.elementDetails.elementTable}
    >
      <div className="px-4 sm:px-12">
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
      
      {/* Element details popup is only shown on the main page if URL params indicate */}
      {selectedElement && location.pathname === '/' && (
        <ElementDetails 
          element={selectedElement} 
          onClose={closeDetails} 
          onNavigate={handleNavigateElement}
        />
      )}
    </section>
  );
};

export default PeriodicTable;
