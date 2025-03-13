
import React, { useState, useCallback } from 'react';
import { Input } from "../ui/input";
import { Search, X } from "lucide-react";
import { useLanguage } from '../../context/LanguageContext';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  }, [onSearch]);

  const clearSearch = useCallback(() => {
    setQuery('');
    onSearch('');
  }, [onSearch]);

  return (
    <div className="relative w-full max-w-md mx-auto mb-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-4 w-4" />
        <Input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={t.ui?.searchPlaceholder || "Search by name, symbol, or atomic number..."}
          className="pl-10 pr-10"
          aria-label={t.ui?.search || "Search elements"}
        />
        {query && (
          <button 
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
            aria-label={t.ui?.clearSearch || "Clear search"}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
