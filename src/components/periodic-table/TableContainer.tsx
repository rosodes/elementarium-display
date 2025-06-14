import React, { useEffect, useRef, memo, useState } from 'react';
import { Element as ElementType } from '../../data/elementTypes';
import { useLanguage } from '../../context/LanguageContext';
import TableGrid from './TableGrid';
import FBlockSection from './FBlockSection';
import TableLegend from './TableLegend';
import QuickStats from './QuickStats';
import KeyboardShortcuts from './KeyboardShortcuts';
import LoadingIndicator from '../ui/loading-indicator';

interface TableContainerProps {
  onElementClick: (element: ElementType) => void;
  selectedElement: ElementType | null;
}

const TableContainer = memo(({ onElementClick, selectedElement }: TableContainerProps) => {
  const tableRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useLanguage();
  
  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && selectedElement) {
      // This will be handled by parent
    }
  };

  // Add smooth animation when table is first rendered
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      if (tableRef.current) {
        tableRef.current.classList.add('fade-in-animation');
      }
    }, 100);
    
    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe elements that should be lazy-loaded
    const elements = tableRef.current?.querySelectorAll('.element-card') || [];
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      clearTimeout(timer);
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const handleSearchFocus = () => {
    const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
    searchInput?.focus();
  };

  if (!isLoaded) {
    return <LoadingIndicator size="lg" text="Загрузка периодической таблицы..." />;
  }

  return (
    <>
      <KeyboardShortcuts onSearch={handleSearchFocus} />
      <div 
        className="periodic-table-wrapper relative overflow-hidden w-full"
        role="grid"
        onKeyDown={handleKeyDown}
        ref={tableRef}
        aria-label={t.elementDetails.elementTable}
      >
        <div className="flex flex-col items-center w-full space-y-6">
          <QuickStats />
          <TableLegend />
          
          {/* Центрированная периодическая таблица с улучшенным выравниванием */}
          <div className="w-full flex flex-col items-center justify-center overflow-x-auto">
            <div className="flex flex-col items-center gap-6 min-w-fit">
              <div className="w-full flex justify-center">
                <TableGrid onElementClick={onElementClick} />
              </div>
              <div className="w-full flex justify-center">
                <FBlockSection onElementClick={onElementClick} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Keyboard shortcuts hint */}
        <div className="mt-6 p-2 text-xs text-gray-500 dark:text-gray-400 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <span>
              <kbd className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">Ctrl+K</kbd>
              {" "}{t.ui?.hotkeySearch || "Search"}
            </span>
            <span>
              <kbd className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">H</kbd>
              {" "}{t.ui?.hotkeyHome || "Home"}
            </span>
            <span>
              <kbd className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">Esc</kbd>
              {" "}{t.ui?.hotkeyClose || "Close"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
});

TableContainer.displayName = 'TableContainer';

export default TableContainer;
