
import React from 'react';
import { Element } from '../data/elementTypes';
import ElementDetails from '../components/ElementDetails';
import { useValidatedTranslation } from '../hooks/useValidatedTranslation';

interface ElementMainContentProps {
  element: Element | null;
  loading: boolean;
  error: string | null;
  onNavigate: (element: Element) => void;
  onClose: () => void;
}

const ElementMainContent: React.FC<ElementMainContentProps> = ({
  element,
  loading,
  error,
  onNavigate,
  onClose
}) => {
  const { t } = useValidatedTranslation('ElementMainContent');

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">{t('ui.loading', 'Loading...')}</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-600">{error}</div>
      </div>
    );
  }

  if (!element) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">{t('ui.noResults', 'Element not found')}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ElementDetails
        element={element}
        onClose={onClose}
        onNavigate={onNavigate}
        isFullPage={true}
      />
    </div>
  );
};

export default ElementMainContent;
