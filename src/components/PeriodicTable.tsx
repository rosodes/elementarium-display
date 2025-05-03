
import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { Element as ElementType } from '../data/elementTypes';
import { elements } from '../data/elements';
import TableContainer from './periodic-table/TableContainer';
import { useLanguage } from '../context/LanguageContext';
import ElementSearchResults from './search/ElementSearch';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import ElementDetails from './ElementDetails';

interface PeriodicTableProps {
  searchQuery?: string;
  onElementClick?: (element: ElementType) => void;
}

// Custom hook for element searching with memoization
const useElementSearch = (searchQuery: string, language: string, t: any) => {
  // Memoize filtered elements to avoid unnecessary re-filtering
  return useMemo(() => {
    if (!searchQuery?.trim()) {
      return [];
    }
    
    const query = searchQuery.toLowerCase().trim();
    
    return elements
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
  }, [searchQuery, t.ui?.elements, language]);
};

// Memoized search results component for better performance
const MemoizedSearchResults = memo(ElementSearchResults);

// Memoized table container to prevent unnecessary re-renders
const MemoizedTableContainer = memo(TableContainer);

const PeriodicTable = ({ searchQuery = '', onElementClick }: PeriodicTableProps) => {
  const [selectedElement, setSelectedElement] = useState<ElementType | null>(null);
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const { lang } = useParams<{ lang?: string }>();
  const location = useLocation();
  
  // Use custom hook for element filtering with memoization
  const filteredElements = useElementSearch(searchQuery, language, t);
  
  // Memoize click handler to avoid recreating on every render
  const handleElementClick = useCallback((element: ElementType) => {
    // If onElementClick prop is provided, use it
    if (onElementClick) {
      onElementClick(element);
      return;
    }
    
    // Otherwise, use default navigation behavior
    const basePath = lang ? `/${lang}` : '';
    navigate(`${basePath}/element/${element.atomic}`);
  }, [onElementClick, lang, navigate]);
  
  const closeDetails = useCallback(() => {
    // Return to base path based on language
    const basePath = lang ? `/${lang}` : '/';
    navigate(basePath);
  }, [lang, navigate]);
  
  const handleNavigateElement = useCallback((element: ElementType) => {
    // Navigate to the new element page
    const basePath = lang ? `/${lang}` : '';
    navigate(`${basePath}/element/${element.atomic}`);
  }, [lang, navigate]);
  
  // Check if search results should be shown
  const showSearchResults = searchQuery.trim().length > 0 && filteredElements.length > 0;
  
  return (
    <section 
      className="w-full mx-auto"
      role="region"
      aria-label={t.elementDetails?.elementTable || "Periodic Table"}
    >
      <div className="px-4 sm:px-12">
        {/* Search results section - only render when needed */}
        {showSearchResults && (
          <MemoizedSearchResults 
            searchQuery={searchQuery}
            filteredElements={filteredElements}
            onElementSelect={handleElementClick}
          />
        )}
      </div>
      
      <div className="periodic-table-container w-full">
        <MemoizedTableContainer 
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

// Export memoized component
export default memo(PeriodicTable);
