import { useEffect, useCallback, useRef, useState } from 'react';
import { useValidatedTranslation } from './useValidatedTranslation';

interface UseA11yNavigationProps {
  items: Array<{ id: string; element?: HTMLElement }>;
  orientation?: 'horizontal' | 'vertical' | 'grid';
  loop?: boolean;
  disabled?: boolean;
  onActivate?: (itemId: string) => void;
  gridColumns?: number;
}

interface UseA11yNavigationReturn {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  handleKeyDown: (event: React.KeyboardEvent) => void;
  getItemProps: (index: number) => {
    tabIndex: number;
    'aria-selected': boolean;
    onKeyDown: (event: React.KeyboardEvent) => void;
    onFocus: () => void;
    ref: (element: HTMLElement | null) => void;
  };
  announceToScreenReader: (message: string) => void;
}

export const useA11yNavigation = ({
  items,
  orientation = 'horizontal',
  loop = true,
  disabled = false,
  onActivate,
  gridColumns = 1,
}: UseA11yNavigationProps): UseA11yNavigationReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemRefs = useRef<Map<number, HTMLElement>>(new Map());
  const announcementRef = useRef<HTMLDivElement | null>(null);
  const { t } = useValidatedTranslation('A11y');

  // Create screen reader announcements
  useEffect(() => {
    if (!announcementRef.current) {
      const announcer = document.createElement('div');
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      announcer.className = 'sr-only';
      announcer.style.cssText = `
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
      `;
      document.body.appendChild(announcer);
      announcementRef.current = announcer;
    }

    return () => {
      if (announcementRef.current) {
        document.body.removeChild(announcementRef.current);
        announcementRef.current = null;
      }
    };
  }, []);

  const announceToScreenReader = useCallback((message: string) => {
    if (announcementRef.current) {
      announcementRef.current.textContent = message;
    }
  }, []);

  const getNextIndex = useCallback((direction: 'next' | 'prev' | 'up' | 'down', currentIdx: number) => {
    if (items.length === 0) return 0;

    let nextIndex = currentIdx;

    switch (orientation) {
      case 'horizontal':
        if (direction === 'next') {
          nextIndex = currentIdx + 1;
        } else if (direction === 'prev') {
          nextIndex = currentIdx - 1;
        }
        break;

      case 'vertical':
        if (direction === 'down') {
          nextIndex = currentIdx + 1;
        } else if (direction === 'up') {
          nextIndex = currentIdx - 1;
        }
        break;

      case 'grid':
        switch (direction) {
          case 'next':
            nextIndex = currentIdx + 1;
            break;
          case 'prev':
            nextIndex = currentIdx - 1;
            break;
          case 'down':
            nextIndex = currentIdx + gridColumns;
            break;
          case 'up':
            nextIndex = currentIdx - gridColumns;
            break;
        }
        break;
    }

    // Handle bounds
    if (nextIndex < 0) {
      nextIndex = loop ? items.length - 1 : 0;
    } else if (nextIndex >= items.length) {
      nextIndex = loop ? 0 : items.length - 1;
    }

    return nextIndex;
  }, [items.length, orientation, loop, gridColumns]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (disabled || items.length === 0) return;

    let direction: 'next' | 'prev' | 'up' | 'down' | null = null;
    let shouldPreventDefault = true;

    switch (event.key) {
      case 'ArrowRight':
        direction = orientation === 'vertical' ? null : 'next';
        break;
      case 'ArrowLeft':
        direction = orientation === 'vertical' ? null : 'prev';
        break;
      case 'ArrowDown':
        direction = orientation === 'horizontal' ? null : 'down';
        break;
      case 'ArrowUp':
        direction = orientation === 'horizontal' ? null : 'up';
        break;
      case 'Home':
        setCurrentIndex(0);
        break;
      case 'End':
        setCurrentIndex(items.length - 1);
        break;
      case 'Enter':
      case ' ':
        if (onActivate) {
          onActivate(items[currentIndex]?.id);
        }
        break;
      default:
        shouldPreventDefault = false;
        break;
    }

    if (direction) {
      const nextIndex = getNextIndex(direction, currentIndex);
      setCurrentIndex(nextIndex);
      
      // Focus the next element
      setTimeout(() => {
        const nextElement = itemRefs.current.get(nextIndex);
        if (nextElement) {
          nextElement.focus();
        }
      }, 0);
    }

    if (shouldPreventDefault) {
      event.preventDefault();
    }
  }, [currentIndex, disabled, items, getNextIndex, onActivate]);

  const getItemProps = useCallback((index: number) => {
    return {
      tabIndex: index === currentIndex ? 0 : -1,
      'aria-selected': index === currentIndex,
      onKeyDown: handleKeyDown,
      onFocus: () => setCurrentIndex(index),
      ref: (element: HTMLElement | null) => {
        if (element) {
          itemRefs.current.set(index, element);
        } else {
          itemRefs.current.delete(index);
        }
      },
    };
  }, [currentIndex, handleKeyDown]);

  return {
    currentIndex,
    setCurrentIndex,
    handleKeyDown,
    getItemProps,
    announceToScreenReader,
  };
};

interface UseA11yAnnouncementsProps {
  language: string;
}

interface UseA11yAnnouncementsReturn {
  announceElementSelection: (elementName: string, atomicNumber: string) => void;
  announceSearchResults: (count: number, query?: string) => void;
  announceFilterChange: (activeFilters: number) => void;
  announceLanguageChange: (language: string) => void;
  announceThemeChange: (theme: string) => void;
}

export const useA11yAnnouncements = ({ language }: UseA11yAnnouncementsProps): UseA11yAnnouncementsReturn => {
  const { t } = useValidatedTranslation('A11yAnnouncements');
  const announcementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!announcementRef.current) {
      const announcer = document.createElement('div');
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      announcer.className = 'sr-only';
      announcer.style.cssText = `
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
      `;
      document.body.appendChild(announcer);
      announcementRef.current = announcer;
    }

    return () => {
      if (announcementRef.current && document.body.contains(announcementRef.current)) {
        document.body.removeChild(announcementRef.current);
        announcementRef.current = null;
      }
    };
  }, []);

  const announce = useCallback((message: string) => {
    if (announcementRef.current) {
      // Clear previous message
      announcementRef.current.textContent = '';
      // Set new message after a brief delay to ensure screen reader picks it up
      setTimeout(() => {
        if (announcementRef.current) {
          announcementRef.current.textContent = message;
        }
      }, 100);
    }
  }, []);

  const announceElementSelection = useCallback((elementName: string, atomicNumber: string) => {
    const message = t('elementSelected', `Выбран элемент ${elementName}, атомный номер ${atomicNumber}`);
    announce(message);
  }, [announce, t]);

  const announceSearchResults = useCallback((count: number, query?: string) => {
    let message: string;
    if (query) {
      message = t('searchResults', `Найдено ${count} элементов по запросу "${query}"`);
    } else {
      message = t('totalElements', `Показано ${count} элементов`);
    }
    announce(message);
  }, [announce, t]);

  const announceFilterChange = useCallback((activeFilters: number) => {
    const message = t('filtersChanged', `Активных фильтров: ${activeFilters}`);
    announce(message);
  }, [announce, t]);

  const announceLanguageChange = useCallback((language: string) => {
    const message = t('languageChanged', `Язык изменен на ${language}`);
    announce(message);
  }, [announce, t]);

  const announceThemeChange = useCallback((theme: string) => {
    const message = t('themeChanged', `Тема изменена на ${theme}`);
    announce(message);
  }, [announce, t]);

  return {
    announceElementSelection,
    announceSearchResults,
    announceFilterChange,
    announceLanguageChange,
    announceThemeChange,
  };
};

// Hook for managing focus
interface UseFocusManagementReturn {
  focusElement: (selector: string) => void;
  trapFocus: (containerRef: React.RefObject<HTMLElement>) => () => void;
  restoreFocus: () => void;
  saveFocus: () => void;
}

export const useFocusManagement = (): UseFocusManagementReturn => {
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  const focusElement = useCallback((selector: string) => {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      element.focus();
    }
  }, []);

  const saveFocus = useCallback(() => {
    lastFocusedElement.current = document.activeElement as HTMLElement;
  }, []);

  const restoreFocus = useCallback(() => {
    if (lastFocusedElement.current) {
      lastFocusedElement.current.focus();
      lastFocusedElement.current = null;
    }
  }, []);

  const trapFocus = useCallback((containerRef: React.RefObject<HTMLElement>) => {
    const container = containerRef.current;
    if (!container) return () => {};

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable?.focus();
          e.preventDefault();
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    firstFocusable?.focus();

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return {
    focusElement,
    trapFocus,
    restoreFocus,
    saveFocus,
  };
};

// Hook for color contrast checking
interface UseColorContrastReturn {
  checkContrast: (foreground: string, background: string) => {
    ratio: number;
    level: 'AAA' | 'AA' | 'AA-Large' | 'fail';
    passes: boolean;
  };
  ensureAccessibleColors: (foreground: string, background: string) => {
    foreground: string;
    background: string;
    adjusted: boolean;
  };
}

export const useColorContrast = (): UseColorContrastReturn => {
  const hexToRgb = useCallback((hex: string): [number, number, number] => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result 
      ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
      : [0, 0, 0];
  }, []);

  const getLuminance = useCallback((r: number, g: number, b: number): number => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }, []);

  const checkContrast = useCallback((foreground: string, background: string) => {
    const fgRgb = hexToRgb(foreground);
    const bgRgb = hexToRgb(background);
    
    const fgLuminance = getLuminance(...fgRgb);
    const bgLuminance = getLuminance(...bgRgb);
    
    const ratio = (Math.max(fgLuminance, bgLuminance) + 0.05) / 
                  (Math.min(fgLuminance, bgLuminance) + 0.05);
    
    let level: 'AAA' | 'AA' | 'AA-Large' | 'fail';
    let passes = false;
    
    if (ratio >= 7) {
      level = 'AAA';
      passes = true;
    } else if (ratio >= 4.5) {
      level = 'AA';
      passes = true;
    } else if (ratio >= 3) {
      level = 'AA-Large';
      passes = true;
    } else {
      level = 'fail';
      passes = false;
    }
    
    return { ratio, level, passes };
  }, [hexToRgb, getLuminance]);

  const ensureAccessibleColors = useCallback((foreground: string, background: string) => {
    const contrast = checkContrast(foreground, background);
    
    if (contrast.passes) {
      return { foreground, background, adjusted: false };
    }

    // Simple adjustment: make foreground darker or lighter
    const fgRgb = hexToRgb(foreground);
    const bgRgb = hexToRgb(background);
    const bgLuminance = getLuminance(...bgRgb);
    
    let adjustedFg = foreground;
    
    if (bgLuminance > 0.5) {
      // Light background, make foreground darker
      adjustedFg = '#000000';
    } else {
      // Dark background, make foreground lighter  
      adjustedFg = '#ffffff';
    }
    
    return { 
      foreground: adjustedFg, 
      background, 
      adjusted: true 
    };
  }, [checkContrast, hexToRgb, getLuminance]);

  return {
    checkContrast,
    ensureAccessibleColors,
  };
}; 