
import { useEffect, useState, useCallback, lazy, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Element } from '../data/elementTypes';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import LoadingSpinner from '../components/ui/loading-spinner';

// Lazy load the heavy PeriodicTable component
const PeriodicTable = lazy(() => import('../components/PeriodicTable'));

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
  
  // Handle element click to navigate to element page with proper language support
  const handleElementClick = useCallback((element: Element) => {
    const baseUrl = lang ? `/${lang}` : '';
    navigate(`${baseUrl}/element/${element.atomic}`);
  }, [lang, navigate]);
  
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  // Canonical URL with language prefix if needed
  const canonicalUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}${lang ? `/${lang}` : '/'}`;
  
  // Preconnect to important domains
  const preconnectDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];
  
  return (
    <>
      {/* Server-side SEO metadata using Helmet */}
      <Helmet>
        <title>{t.title}</title>
        <meta name="description" content={t.subtitle} />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.subtitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        
        {/* Preconnect to important domains */}
        {preconnectDomains.map(domain => (
          <link key={domain} rel="preconnect" href={domain} crossOrigin="" />
        ))}
        
        {/* Add structured data for website */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": t.title,
            "description": t.subtitle,
            "url": canonicalUrl,
            "inLanguage": language || "en"
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header onSearch={handleSearch} />
        
        <main className="w-full">
          <Suspense fallback={
            <div className="flex justify-center items-center h-64">
              <LoadingSpinner size="lg" />
            </div>
          }>
            <PeriodicTable 
              searchQuery={searchQuery} 
              onElementClick={handleElementClick} 
            />
          </Suspense>
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
