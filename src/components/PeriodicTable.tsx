
import { useState, useCallback, useMemo, memo } from 'react';
import { Element as ElementType } from '../data/elementTypes';
import { elements } from '../data/elements';
import TableContainer from './periodic-table/TableContainer';
import SearchContainer from './search/SearchContainer';
import { useValidatedTranslation } from '../hooks/useValidatedTranslation';
import { useNavigate, useParams } from 'react-router-dom';
import ElementDetails from './ElementDetails';

interface PeriodicTableProps {
  searchQuery?: string;
  onElementClick?: (element: ElementType) => void;
}

// Custom hook for element searching with memoization
const useElementSearch = (searchQuery: string, language: string, t: any) => {
  return useMemo(() => {
    if (!searchQuery?.trim()) {
      return [];
    }
    
    const query = searchQuery.toLowerCase().trim();
    
    return elements
      .filter((element): element is ElementType => {
        if (!element) return false;
        
        const translatedName = t('ui.elements.' + element.symbol.toLowerCase(), element.name);
        
        const matchesName = translatedName.toLowerCase().includes(query) || 
                           element.name.toLowerCase().includes(query);
        const matchesSymbol = element.symbol.toLowerCase().includes(query);
        const matchesAtomic = element.atomic.toString().includes(query);
        
        return matchesName || matchesSymbol || matchesAtomic;
      });
  }, [searchQuery, language]);
};

const PeriodicTable = ({ searchQuery = '', onElementClick }: PeriodicTableProps) => {
  const [selectedElement, setSelectedElement] = useState<ElementType | null>(null);
  const { t, language } = useValidatedTranslation('PeriodicTable');
  const navigate = useNavigate();
  const { lang } = useParams<{ lang?: string }>();
  
  const filteredElements = useElementSearch(searchQuery, language, t);
  
  const handleElementClick = useCallback((element: ElementType) => {
    if (onElementClick) {
      onElementClick(element);
      return;
    }
    
    const basePath = lang ? `/${lang}` : '';
    navigate(`${basePath}/element/${element.atomic}`);
  }, [onElementClick, lang, navigate]);
  
  const closeDetails = useCallback(() => {
    const basePath = lang ? `/${lang}` : '/';
    navigate(basePath);
  }, [lang, navigate]);
  
  const handleNavigateElement = useCallback((element: ElementType) => {
    const basePath = lang ? `/${lang}` : '';
    navigate(`${basePath}/element/${element.atomic}`);
  }, [lang, navigate]);
  
  return (
    <section 
      className="w-full"
      role="region"
      aria-label={t('ui.elementTable', "Periodic Table")}
    >
      <SearchContainer 
        searchQuery={searchQuery}
        filteredElements={filteredElements}
        onElementSelect={handleElementClick}
      />
      
      <div className="periodic-table-container">
        <TableContainer 
          onElementClick={handleElementClick} 
          selectedElement={selectedElement}
        />
      </div>
      
      {selectedElement && (
        <ElementDetails 
          element={selectedElement} 
          onClose={closeDetails} 
          onNavigate={handleNavigateElement}
        />
      )}
    </section>
  );
};

export default memo(PeriodicTable);
