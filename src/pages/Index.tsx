
import { useEffect, useState, useCallback } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import PeriodicTable from '../components/PeriodicTable';
import Header from '../components/Header';
import { useLanguage } from '../context/LanguageContext';

const Index = () => {
  const { t, setLanguage, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const { lang } = useParams<{ lang?: string }>();
  const location = useLocation();
  
  // Set language based on URL path if it's different from current language
  useEffect(() => {
    if (lang && ['en', 'ru', 'uk'].includes(lang) && lang !== language) {
      setLanguage(lang as 'en' | 'ru' | 'uk');
    }
  }, [lang, setLanguage, language]);
  
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header onSearch={handleSearch} />
      
      <main className="w-full">
        <PeriodicTable searchQuery={searchQuery} />
      </main>
      
      <footer className="py-4 sm:py-6 px-4 text-xs text-gray-500 dark:text-gray-400 text-center">
        <p>{t.footer.dataNote}</p>
        <p>{t.footer.credits}</p>
        <p className="mt-1">{t.footer.version} • {t.footer.license}</p>
      </footer>
    </div>
  );
};

export default Index;
