
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Input } from "../ui/input";
import { Search, X } from "lucide-react";
import { useLanguage } from '../../context/LanguageContext';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  }, [onSearch]);

  const clearSearch = useCallback(() => {
    setQuery('');
    onSearch('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [onSearch]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Focus search on Ctrl+/ or Cmd+/
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      // Clear search on Escape when input is focused
      if (e.key === 'Escape' && document.activeElement === inputRef.current && query) {
        clearSearch();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [clearSearch, query]);

  return (
    <div className="w-full mb-4" role="search">
      <label htmlFor="element-search" className="sr-only">
        {t.ui?.search || "Search elements"}
      </label>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-4 w-4" aria-hidden="true" />
        <Input
          id="element-search"
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={t.ui?.searchPlaceholder || "Search by name, symbol, or atomic number..."}
          className="pl-10 pr-10 focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-400 dark:border-gray-700"
          aria-label={t.ui?.search || "Search elements"}
        />
        {query && (
          <button 
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1"
            aria-label={t.ui?.clearSearch || "Clear search"}
            title={t.ui?.clearSearch || "Clear search"}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        <span className="sr-only">{t.ui?.searchShortcut || "Keyboard shortcut"}:</span>
        <kbd className="inline-flex items-center px-1.5 py-0.5 rounded border border-gray-300 dark:border-gray-600 ml-1 font-mono text-xs">
          <span className="sr-only md:not-sr-only mr-1">Ctrl</span>
          <span aria-hidden="true" className="md:hidden">⌃</span> + /
        </kbd>
      </div>
    </div>
  );
};

export default SearchBar;
