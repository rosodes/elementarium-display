
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { translationValidator } from '../i18n/enhancedTranslationValidator';

// Компонент для валидации переводов на уровне страниц
export const PageTranslationValidator: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) {
      // Определяем требуемые переводы для каждой страницы
      const getRequiredTranslationsForPage = (pathname: string): string[] => {
        if (pathname.includes('/element/')) {
          return [
            'elementDetails.tabs.overview',
            'elementDetails.tabs.properties', 
            'elementDetails.tabs.structure',
            'elementDetails.tabs.applications',
            'elementDetails.tabs.history',
            'elementDetails.tabs.abundance',
            'elementDetails.tabs.compounds',
            'elementDetails.tabs.bio',
            'elementDetails.tabs.production',
            'elementDetails.tabs.safety',
            'elementDetails.atomicNumber',
            'elementDetails.showMoreInfo',
            'elementDetails.viewOnWikipedia',
            'elementDetails.closeDetails',
            'elementDetails.series',
            'elementDetails.atomicWeight',
            'elementDetails.electronConfig',
            'elementDetails.discovered',
            'elementDetails.meltingPoint',
            'elementDetails.boilingPoint',
            'elementDetails.density',
            'elementDetails.electronegativity',
            'elementDetails.valence',
            'elementDetails.oxidationStates'
          ];
        }
        
        // Главная страница
        if (pathname === '/' || pathname.startsWith('/en') || pathname.startsWith('/ru') || pathname.startsWith('/uk')) {
          return [
            'title',
            'subtitle',
            'search',
            'toggleTheme',
            'selectLanguage',
            'ui.loading',
            'ui.radioactive',
            'ui.searchPlaceholder',
            'ui.noResults',
            'legend.title',
            'categories.alkali',
            'categories.alkaline',
            'categories.transition',
            'categories.postTransition',
            'categories.metalloid',
            'categories.nonmetal',
            'categories.noble',
            'categories.lanthanide',
            'categories.actinide'
          ];
        }
        
        return [];
      };

      const requiredPaths = getRequiredTranslationsForPage(location.pathname);
      if (requiredPaths.length > 0) {
        const pageName = location.pathname.includes('/element/') ? 'ElementDetailsPage' : 'HomePage';
        translationValidator.validateComponent(pageName, requiredPaths);
      }
    }
  }, [location.pathname]);

  return null;
};
