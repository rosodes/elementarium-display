
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Element } from '../../data/elementTypes';
import { useTranslation } from '../../hooks/useTranslation';

interface ElementNavigationProps {
  element: Element;
  onNavigate: (direction: 'prev' | 'next') => void;
}

const ElementNavigation: React.FC<ElementNavigationProps> = ({ element, onNavigate }) => {
  const { t } = useTranslation();

  return (
    <div className="element-navigation flex justify-between items-center p-4 border-t">
      <button
        onClick={() => onNavigate('prev')}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        disabled={parseInt(element.atomic) <= 1}
      >
        <ChevronLeft size={20} />
        {t('navigation.previous', 'Previous')}
      </button>
      
      <span className="text-sm text-gray-600">
        Element {element.atomic} of 118
      </span>
      
      <button
        onClick={() => onNavigate('next')}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        disabled={parseInt(element.atomic) >= 118}
      >
        {t('navigation.next', 'Next')}
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default ElementNavigation;
