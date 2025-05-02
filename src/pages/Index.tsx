
import { useEffect, useState, useCallback } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import PeriodicTable from '../components/PeriodicTable';
import Header from '../components/Header';
import { useLanguage } from '../context/LanguageContext';
import { Element } from '../data/elementTypes';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  const { t, setLanguage, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const { lang } = useParams<{ lang?: string }>();
  const navigate = useNavigate();
  
  // Set language based on URL path if it's different from current language
  useEffect(() => {
    if (lang && ['en', 'ru', 'uk'].includes(lang) && lang !== language) {
      setLanguage(lang as 'en' | 'ru' | 'uk');
    }
  }, [lang, setLanguage, language]);
  
  // Handle element click to navigate to element page
  const handleElementClick = useCallback((element: Element) => {
    const baseUrl = lang ? `/${lang}` : '';
    navigate(`${baseUrl}/element/${element.atomic}`);
  }, [lang, navigate]);
  
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);
  
  return (
    <>
      {/* Server-side SEO metadata using Helmet */}
      <Helmet>
        <title>{t.title}</title>
        <meta name="description" content={t.subtitle} />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.subtitle} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header onSearch={handleSearch} />
        
        <main className="w-full">
          <PeriodicTable 
            searchQuery={searchQuery} 
            onElementClick={handleElementClick} 
          />
        </main>
        
        <footer className="py-4 sm:py-6 px-4 text-xs text-gray-500 dark:text-gray-400 text-center">
          <p>{t.footer.dataNote}</p>
          <p>{t.footer.credits}</p>
          <p className="mt-1">{t.footer.version} • {t.footer.license}</p>
        </footer>
      </div>
    </>
  );
};

export default Index;
