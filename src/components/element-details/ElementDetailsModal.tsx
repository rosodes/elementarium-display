
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Element } from '../../data/elementTypes';
import { useValidatedTranslation } from '../../hooks/useValidatedTranslation';
import ElementDetailsContent from './ElementDetailsContent';
import ElementNavigation from './ElementNavigation';

interface ElementDetailsModalProps {
  element: Element | null;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
  isOpen: boolean;
}

const ElementDetailsModal: React.FC<ElementDetailsModalProps> = ({
  element,
  onClose,
  onNavigate,
  isOpen
}) => {
  const { t } = useValidatedTranslation('ElementDetailsModal');
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleArrowKeys = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        onNavigate('prev');
      } else if (e.key === 'ArrowRight') {
        onNavigate('next');
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleArrowKeys);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleArrowKeys);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen || !element) return null;

  return (
    <div className="element-modal-overlay" onClick={onClose}>
      <div 
        className="element-modal"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        role="dialog"
        aria-labelledby="element-modal-title"
        aria-modal="true"
      >
        <div className="element-modal__header">
          <h2 id="element-modal-title" className="element-modal__title">
            {element.name} ({element.symbol})
          </h2>
          <button
            className="element-modal__close"
            onClick={onClose}
            aria-label={t('ui.close', 'Close')}
          >
            <X size={24} />
          </button>
        </div>

        <div className="element-modal__content">
          <ElementDetailsContent element={element} />
        </div>

        <div className="element-modal__footer">
          <ElementNavigation
            element={element}
            onNavigate={onNavigate}
          />
        </div>
      </div>
    </div>
  );
};

export default ElementDetailsModal;
