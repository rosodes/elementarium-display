
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getElement } from '../data/elements';
import { Element as ElementType } from '../data/elementTypes';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import ElementDetails from '../components/ElementDetails';
import NotFound from './NotFound'; // Added missing import

const ElementPage = () => {
  const { elementId, lang } = useParams<{ elementId: string, lang?: string }>();
  const navigate = useNavigate();
  const { t, setLanguage, language } = useLanguage();
  
  // Parse elementId to get the atomic number
  const atomicNumber = parseInt(elementId || '0', 10);
  const element = getElement(atomicNumber);
  
  // Set language based on URL if provided
  useEffect(() => {
    if (lang && ['en', 'ru', 'uk'].includes(lang) && lang !== language) {
      setLanguage(lang as 'en' | 'ru' | 'uk');
    }
  }, [lang, setLanguage, language]);
  
  // Handle navigation when element changes
  const handleNavigateElement = (newElement: ElementType) => {
    const baseUrl = lang ? `/${lang}` : '';
    navigate(`${baseUrl}/${newElement.atomic}`);
  };
  
  // Handle close button click
  const handleClose = () => {
    const baseUrl = lang ? `/${lang}` : '';
    navigate(baseUrl);
  };
  
  // If element not found, redirect to 404
  if (!element) {
    return <NotFound />;
  }
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      
      <main className="container mx-auto px-4 pt-4">
        {/* Back button */}
        <Link 
          to={lang ? `/${lang}` : '/'}
          className="inline-flex items-center mb-4 px-4 py-2 text-sm font-medium rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.ui.back || 'Back to Periodic Table'}
        </Link>
        
        {/* Display element details with full-page styling */}
        <div className="w-full max-w-7xl mx-auto">
          <ElementDetails 
            element={element} 
            onClose={handleClose} 
            onNavigate={handleNavigateElement}
            isFullPage={true} // New prop to change styling for full page mode
          />
        </div>
      </main>
      
      <footer className="py-4 sm:py-6 px-4 text-xs text-gray-500 dark:text-gray-400 text-center mt-8">
        <p>{t.footer.dataNote}</p>
        <p>{t.footer.credits}</p>
        <p className="mt-1">{t.footer.version} • {t.footer.license}</p>
      </footer>
    </div>
  );
};

export default ElementPage;
