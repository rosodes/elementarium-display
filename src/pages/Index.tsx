
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

  // SEO: набор ключевых слов
  const seoKeywords = [
    "periodic table",
    "periodic table of elements",
    "chemical elements",
    "interactive periodic table",
    "Mendeleev table",
    t.title,
    t.subtitle,
    language === "ru" ? "Периодическая таблица" : "",
    language === "uk" ? "Періодична таблиця" : ""
  ].filter(Boolean).join(", ");

  // SEO: автор
  const seoAuthor = "Periodic Table Team";

  // SEO: site alt title
  const siteName = t.title || "Periodic Table of Elements";

  // SEO: расширенная разметка org + сайт
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "description": t.subtitle || "Interactive periodic table with element properties.",
    "url": canonicalUrl,
    "inLanguage": language || "en",
    "publisher": {
      "@type": "Organization",
      "name": "Periodic Table Project",
      "logo": {
        "@type": "ImageObject",
        "url": typeof window !== 'undefined' 
          ? window.location.origin + "/favicon.ico"
          : "/favicon.ico"
      }
    }
  };

  return (
    <>
      {/* SEO: Helmet + расширенные метатеги */}
      <Helmet>
        <title>{t.title} | Менделеевская таблица онлайн</title>
        <meta name="description" content={t.subtitle} />
        <meta name="keywords" content={seoKeywords} />
        <meta name="author" content={seoAuthor} />
        <meta property="og:title" content={`${t.title} | Менделеевская таблица`} />
        <meta property="og:description" content={t.subtitle} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content={language === "ru"
            ? "ru_RU"
            : language === "uk"
              ? "uk_UA"
              : "en_US"
          } 
        />
        <meta property="og:image" content="/og-image.png" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={t.title} />
        <meta name="twitter:description" content={t.subtitle} />
        <meta name="twitter:image" content="/og-image.png" />
        <meta name="twitter:site" content="@PTOnline" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        {/* fallback favicon */}
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* Preconnect to important domains */}
        {preconnectDomains.map(domain => (
          <link key={domain} rel="preconnect" href={domain} crossOrigin="" />
        ))}
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationStructuredData)}
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

