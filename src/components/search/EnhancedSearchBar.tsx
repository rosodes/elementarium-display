import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import { elements } from '../../data/elements';
import { useValidatedTranslation } from '../../hooks/useValidatedTranslation';
import { Search, X, Filter, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Checkbox } from '../ui/checkbox';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';

interface EnhancedSearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onFiltersChange: (filters: SearchFilters) => void;
  className?: string;
}

export interface SearchFilters {
  categories: string[];
  periods: number[];
  groups: number[];
  properties: {
    metals: boolean;
    nonmetals: boolean;
    radioactive: boolean;
    natural: boolean;
    synthetic: boolean;
  };
  massRange: {
    min: number | null;
    max: number | null;
  };
}

const defaultFilters: SearchFilters = {
  categories: [],
  periods: [],
  groups: [],
  properties: {
    metals: false,
    nonmetals: false,
    radioactive: false,
    natural: false,
    synthetic: false,
  },
  massRange: {
    min: null,
    max: null,
  },
};

const EnhancedSearchBar: React.FC<EnhancedSearchBarProps> = ({
  searchQuery,
  onSearchChange,
  onFiltersChange,
  className = '',
}) => {
  const [filters, setFilters] = useState<SearchFilters>(defaultFilters);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<ElementType[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { t, language } = useValidatedTranslation('EnhancedSearchBar');

  // Получаем уникальные категории, периоды и группы
  const availableOptions = useMemo(() => {
    const categories = [...new Set(elements.filter(el => el?.category).map(el => el!.category))];
    const periods = [...new Set(elements.filter(el => el?.period).map(el => el!.period))].sort((a, b) => a! - b!);
    const groups = [...new Set(elements.filter(el => el?.group).map(el => el!.group))].sort((a, b) => a! - b!);
    
    return { categories, periods, groups };
  }, []);

  // Генерируем подсказки на основе поискового запроса
  const generateSuggestions = useCallback((query: string) => {
    if (!query.trim()) return [];
    
    const normalizedQuery = query.toLowerCase();
    
    return elements
      .filter((element): element is ElementType => {
        if (!element) return false;
        
        const matchesName = element.name.toLowerCase().includes(normalizedQuery);
        const matchesSymbol = element.symbol.toLowerCase().includes(normalizedQuery);
        const matchesAtomic = element.atomic.toString().includes(normalizedQuery);
        const matchesCategory = element.category?.toLowerCase().includes(normalizedQuery);
        
        return matchesName || matchesSymbol || matchesAtomic || matchesCategory;
      })
      .slice(0, 8); // Ограничиваем количество подсказок
  }, []);

  useEffect(() => {
    const newSuggestions = generateSuggestions(searchQuery);
    setSuggestions(newSuggestions);
    setHighlightedIndex(-1);
  }, [searchQuery, generateSuggestions]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onSearchChange(value);
    setShowSuggestions(value.length > 0);
  };

  const handleSuggestionClick = (element: ElementType) => {
    onSearchChange(element.name);
    setShowSuggestions(false);
    searchInputRef.current?.blur();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && suggestions[highlightedIndex]) {
          handleSuggestionClick(suggestions[highlightedIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  const updateFilters = (newFilters: SearchFilters) => {
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearAllFilters = () => {
    updateFilters(defaultFilters);
  };

  const hasActiveFilters = useMemo(() => {
    return (
      filters.categories.length > 0 ||
      filters.periods.length > 0 ||
      filters.groups.length > 0 ||
      Object.values(filters.properties).some(Boolean) ||
      filters.massRange.min !== null ||
      filters.massRange.max !== null
    );
  }, [filters]);

  const activeFiltersCount = useMemo(() => {
    return (
      filters.categories.length +
      filters.periods.length +
      filters.groups.length +
      Object.values(filters.properties).filter(Boolean).length +
      (filters.massRange.min !== null ? 1 : 0) +
      (filters.massRange.max !== null ? 1 : 0)
    );
  }, [filters]);

  return (
    <div className={`relative w-full max-w-2xl mx-auto ${className}`}>
      <div className="relative flex items-center gap-2">
        {/* Поисковое поле */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            ref={searchInputRef}
            type="text"
            placeholder={t('searchPlaceholder', 'Поиск элементов по названию, символу или номеру...')}
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setShowSuggestions(searchQuery.length > 0)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            className="pl-10 pr-10 h-11 text-base border-2 border-gray-200 dark:border-gray-700 
                     focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
            autoComplete="off"
            aria-label={t('searchAriaLabel', 'Поиск химических элементов')}
            aria-expanded={showSuggestions}
            aria-haspopup="listbox"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                onSearchChange('');
                setShowSuggestions(false);
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={t('clearSearch', 'Очистить поиск')}
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>

        {/* Кнопка фильтров */}
        <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="default"
              className="h-11 px-4 border-2 border-gray-200 dark:border-gray-700 relative"
              aria-label={t('filtersButton', 'Фильтры')}
            >
              <Filter className="h-4 w-4 mr-2" />
              {t('filters', 'Фильтры')}
              <ChevronDown className="h-3 w-3 ml-2" />
              {activeFiltersCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs flex items-center justify-center"
                >
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-4" align="end">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">{t('filtersTitle', 'Фильтры')}</h4>
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                    className="h-8 px-2 text-xs"
                  >
                    {t('clearAll', 'Очистить все')}
                  </Button>
                )}
              </div>

              <Separator />

              {/* Категории */}
              <div className="space-y-2">
                <h5 className="text-sm font-medium">{t('categories', 'Категории')}</h5>
                <div className="grid grid-cols-1 gap-2 max-h-32 overflow-y-auto">
                  {availableOptions.categories.map((category) => (
                    <label key={category} className="flex items-center space-x-2 cursor-pointer">
                      <Checkbox
                        checked={filters.categories.includes(category)}
                        onCheckedChange={(checked) => {
                          const newCategories = checked
                            ? [...filters.categories, category]
                            : filters.categories.filter(c => c !== category);
                          updateFilters({ ...filters, categories: newCategories });
                        }}
                      />
                      <span className="text-sm capitalize">
                        {t(`categoryNames.${category}`, category)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Свойства */}
              <div className="space-y-2">
                <h5 className="text-sm font-medium">{t('properties', 'Свойства')}</h5>
                <div className="space-y-2">
                  {Object.entries(filters.properties).map(([key, value]) => (
                    <label key={key} className="flex items-center space-x-2 cursor-pointer">
                      <Checkbox
                        checked={value}
                        onCheckedChange={(checked) => {
                          updateFilters({
                            ...filters,
                            properties: {
                              ...filters.properties,
                              [key]: checked as boolean,
                            },
                          });
                        }}
                      />
                      <span className="text-sm">
                        {t(`properties.${key}`, key)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Периоды и группы */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h5 className="text-sm font-medium">{t('periods', 'Периоды')}</h5>
                  <div className="max-h-24 overflow-y-auto space-y-1">
                    {availableOptions.periods.map((period) => (
                      <label key={period} className="flex items-center space-x-2 cursor-pointer">
                        <Checkbox
                          checked={filters.periods.includes(period!)}
                          onCheckedChange={(checked) => {
                            const newPeriods = checked
                              ? [...filters.periods, period!]
                              : filters.periods.filter(p => p !== period);
                            updateFilters({ ...filters, periods: newPeriods });
                          }}
                        />
                        <span className="text-sm">{period}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="text-sm font-medium">{t('groups', 'Группы')}</h5>
                  <div className="max-h-24 overflow-y-auto space-y-1">
                    {availableOptions.groups.map((group) => (
                      <label key={group} className="flex items-center space-x-2 cursor-pointer">
                        <Checkbox
                          checked={filters.groups.includes(group!)}
                          onCheckedChange={(checked) => {
                            const newGroups = checked
                              ? [...filters.groups, group!]
                              : filters.groups.filter(g => g !== group);
                            updateFilters({ ...filters, groups: newGroups });
                          }}
                        />
                        <span className="text-sm">{group}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Подсказки */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-y-auto">
          <div className="p-2 text-xs text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-700">
            {t('suggestionsTitle', 'Предложения')}
          </div>
          <ul role="listbox" className="py-1">
            {suggestions.map((element, index) => (
              <li
                key={element.atomic}
                role="option"
                aria-selected={index === highlightedIndex}
                className={`px-4 py-2 cursor-pointer flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  index === highlightedIndex ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                }`}
                onClick={() => handleSuggestionClick(element)}
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 text-xs font-bold text-white rounded"
                       style={{ backgroundColor: '#6b7280' }}>
                    {element.symbol}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{element.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {t('atomicNumber', 'Атомный номер')}: {element.atomic}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-400">
                  {element.category}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Активные фильтры */}
      {hasActiveFilters && (
        <div className="mt-3 flex flex-wrap gap-2">
          {filters.categories.map((category) => (
            <Badge key={category} variant="secondary" className="text-xs">
              {t(`categoryNames.${category}`, category)}
              <Button
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 ml-1 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => {
                  updateFilters({
                    ...filters,
                    categories: filters.categories.filter(c => c !== category),
                  });
                }}
              >
                <X className="h-2 w-2" />
              </Button>
            </Badge>
          ))}
          {Object.entries(filters.properties)
            .filter(([, value]) => value)
            .map(([key]) => (
              <Badge key={key} variant="secondary" className="text-xs">
                {t(`properties.${key}`, key)}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0 ml-1 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => {
                    updateFilters({
                      ...filters,
                      properties: {
                        ...filters.properties,
                        [key]: false,
                      },
                    });
                  }}
                >
                  <X className="h-2 w-2" />
                </Button>
              </Badge>
            ))}
        </div>
      )}
    </div>
  );
};

export default EnhancedSearchBar; 