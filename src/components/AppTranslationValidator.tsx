
import React from 'react';
import { TranslationValidationProvider } from './TranslationValidationProvider';
import { PageTranslationValidator } from './PageTranslationValidator';

interface AppTranslationValidatorProps {
  children: React.ReactNode;
}

// Основной компонент для валидации переводов в приложении
export const AppTranslationValidator: React.FC<AppTranslationValidatorProps> = ({ children }) => {
  return (
    <TranslationValidationProvider>
      <PageTranslationValidator />
      {children}
    </TranslationValidationProvider>
  );
};
