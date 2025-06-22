import { useMemo, useCallback, useState, useEffect } from 'react';
import { Element as ElementType } from '../data/elementTypes';
import { elements } from '../data/elements';
import { useValidatedTranslation } from './useValidatedTranslation';
import { SearchFilters } from '../components/search/EnhancedSearchBar';

interface UseElementSearchProps {
  searchQuery: string;
  filters: SearchFilters;
  debounceMs?: number;
}

interface SearchResult {
  element: ElementType;
  matchScore: number;
  matchedFields: string[];
}

interface UseElementSearchReturn {
  results: SearchResult[];
  filteredElements: ElementType[];
  totalCount: number;
  isSearching: boolean;
  searchStats: {
    searchTime: number;
    totalElements: number;
    filteredCount: number;
  };
}

export const useElementSearch = ({
  searchQuery,
  filters,
  debounceMs = 300
}: UseElementSearchProps): UseElementSearchReturn => {
  const { t } = useValidatedTranslation('ElementSearch');
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);
  const [isSearching, setIsSearching] = useState(false);
  const [searchStats, setSearchStats] = useState({
    searchTime: 0,
    totalElements: elements.length,
    filteredCount: 0,
  });

  // Debounce search query
  useEffect(() => {
    setIsSearching(true);
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      setIsSearching(false);
    }, debounceMs);

    return () => clearTimeout(handler);
  }, [searchQuery, debounceMs]);

  // Get searchable elements (filter nulls)
  const searchableElements = useMemo(() => {
    return elements.filter((element): element is ElementType => element !== null);
  }, []);

  // Calculate match score for search relevance
  const calculateMatchScore = useCallback((element: ElementType, query: string): { score: number; fields: string[] } => {
    if (!query.trim()) return { score: 0, fields: [] };

    const normalizedQuery = query.toLowerCase().trim();
    let score = 0;
    const matchedFields: string[] = [];

    // Exact matches get highest score
    if (element.symbol.toLowerCase() === normalizedQuery) {
      score += 100;
      matchedFields.push('symbol');
    } else if (element.name.toLowerCase() === normalizedQuery) {
      score += 90;
      matchedFields.push('name');
    } else if (element.atomic === normalizedQuery) {
      score += 95;
      matchedFields.push('atomic');
    }

    // Partial matches
    if (element.symbol.toLowerCase().includes(normalizedQuery)) {
      score += 50;
      if (!matchedFields.includes('symbol')) matchedFields.push('symbol');
    }
    if (element.name.toLowerCase().includes(normalizedQuery)) {
      score += 40;
      if (!matchedFields.includes('name')) matchedFields.push('name');
    }
    if (element.atomic.toString().includes(normalizedQuery)) {
      score += 60;
      if (!matchedFields.includes('atomic')) matchedFields.push('atomic');
    }

    // Category matches
    if (element.category?.toLowerCase().includes(normalizedQuery)) {
      score += 30;
      matchedFields.push('category');
    }

    // Series matches
    if (element.series?.toLowerCase().includes(normalizedQuery)) {
      score += 25;
      matchedFields.push('series');
    }

    // Discoverer matches
    if (element.discover?.toLowerCase().includes(normalizedQuery)) {
      score += 20;
      matchedFields.push('discover');
    }

    return { score, fields: matchedFields };
  }, []);

  // Apply filters to elements
  const applyFilters = useCallback((element: ElementType, filters: SearchFilters): boolean => {
    // Category filter
    if (filters.categories.length > 0 && element.category) {
      if (!filters.categories.includes(element.category)) {
        return false;
      }
    }

    // Period filter
    if (filters.periods.length > 0 && element.period) {
      if (!filters.periods.includes(element.period)) {
        return false;
      }
    }

    // Group filter
    if (filters.groups.length > 0 && element.group) {
      if (!filters.groups.includes(element.group)) {
        return false;
      }
    }

    // Properties filters
    if (filters.properties.metals || filters.properties.nonmetals) {
      const isMetallic = ['alkali metal', 'alkaline earth metal', 'transition metal', 'post-transition metal']
        .includes(element.category || '');
      
      if (filters.properties.metals && !isMetallic) return false;
      if (filters.properties.nonmetals && isMetallic) return false;
    }

    if (filters.properties.radioactive && !element.radioactive) {
      return false;
    }

    if (filters.properties.natural && element.radioactive) {
      return false;
    }

    if (filters.properties.synthetic && !element.radioactive) {
      return false;
    }

    // Mass range filter
    if (filters.massRange.min !== null || filters.massRange.max !== null) {
      const mass = parseFloat(element.weight);
      if (!isNaN(mass)) {
        if (filters.massRange.min !== null && mass < filters.massRange.min) {
          return false;
        }
        if (filters.massRange.max !== null && mass > filters.massRange.max) {
          return false;
        }
      }
    }

    return true;
  }, []);

  // Main search and filter logic
  const { results, filteredElements } = useMemo(() => {
    const startTime = performance.now();

    // First apply filters
    const filtered = searchableElements.filter(element => applyFilters(element, filters));

    // Then apply search
    let searchResults: SearchResult[] = [];

    if (debouncedQuery.trim()) {
      searchResults = filtered
        .map(element => {
          const { score, fields } = calculateMatchScore(element, debouncedQuery);
          return {
            element,
            matchScore: score,
            matchedFields: fields,
          };
        })
        .filter(result => result.matchScore > 0)
        .sort((a, b) => b.matchScore - a.matchScore);
    } else {
      // No search query, return all filtered elements
      searchResults = filtered.map(element => ({
        element,
        matchScore: 0,
        matchedFields: [],
      }));
    }

    const endTime = performance.now();
    
    // Update search stats
    setSearchStats({
      searchTime: endTime - startTime,
      totalElements: searchableElements.length,
      filteredCount: searchResults.length,
    });

    return {
      results: searchResults,
      filteredElements: searchResults.map(r => r.element),
    };
  }, [searchableElements, debouncedQuery, filters, calculateMatchScore, applyFilters]);

  return {
    results,
    filteredElements,
    totalCount: searchableElements.length,
    isSearching,
    searchStats,
  };
};

// Hook for virtualized element grid
export const useVirtualizedElements = (
  elements: ElementType[],
  containerHeight: number,
  itemHeight: number
) => {
  const [scrollTop, setScrollTop] = useState(0);

  const visibleRange = useMemo(() => {
    const start = Math.floor(scrollTop / itemHeight);
    const visibleCount = Math.ceil(containerHeight / itemHeight);
    const end = Math.min(start + visibleCount + 1, elements.length);

    return { start, end };
  }, [scrollTop, itemHeight, containerHeight, elements.length]);

  const visibleElements = useMemo(() => {
    return elements.slice(visibleRange.start, visibleRange.end).map((element, index) => ({
      element,
      index: visibleRange.start + index,
      top: (visibleRange.start + index) * itemHeight,
    }));
  }, [elements, visibleRange, itemHeight]);

  const totalHeight = elements.length * itemHeight;

  return {
    visibleElements,
    totalHeight,
    setScrollTop,
    visibleRange,
  };
}; 