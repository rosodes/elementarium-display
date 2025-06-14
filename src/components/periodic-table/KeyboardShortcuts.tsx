
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface KeyboardShortcutsProps {
  onSearch?: () => void;
}

const KeyboardShortcuts = ({ onSearch }: KeyboardShortcutsProps) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K для поиска
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        onSearch?.();
      }
      
      // Escape для возврата на главную
      if (e.key === 'Escape' && window.location.pathname !== '/') {
        navigate('/');
      }
      
      // H для возврата на главную
      if (e.key === 'h' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const activeElement = document.activeElement;
        const isInputFocused = activeElement?.tagName === 'INPUT' || 
                              activeElement?.tagName === 'TEXTAREA' ||
                              activeElement?.getAttribute('contenteditable') === 'true';
        
        if (!isInputFocused) {
          navigate('/');
        }
      }
    };
    
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [navigate, onSearch]);
  
  return null;
};

export default KeyboardShortcuts;
