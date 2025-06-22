import { useEffect, useState, useCallback, lazy, Suspense, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Element } from '../data/elementTypes';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import LoadingSpinner from '../components/ui/loading-spinner';
import QuickStats from '../components/periodic-table/QuickStats';
import TableLegend from '../components/periodic-table/TableLegend';
import { isSupportedLanguage, getCanonicalUrl } from '../lib/languageUtils';

// Lazy load the heavy PeriodicTable component
const PeriodicTable = lazy(() => import('../components/PeriodicTable'));

const Index = () => {
  console.log('Index component rendering');
  const { t, setLanguage, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [showLegend, setShowLegend] = useState(false);
  const { lang } = useParams<{ lang?: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const hasRedirected = useRef(false);

  // Упрощенная логика языковых редиректов БЕЗ бесконечного цикла
  useEffect(() => {
    // Предотвращаем повторные редиректы
    if (hasRedirected.current) return;

    const currentPath = location.pathname;
    
    // Если в URL есть языковой префикс
    if (lang) {
      if (isSupportedLanguage(lang)) {
        // Устанавливаем язык, если он отличается от текущего
        if (lang !== language) {
          setLanguage(lang);
        }
      } else {
        // Если языковой префикс некорректный, перенаправляем на английский
        hasRedirected.current = true;
        navigate(currentPath.replace(`/${lang}`, '') || '/', { replace: true });
      }
    } else {
      // Если нет языкового префикса, устанавливаем английский
      if (language !== 'en') {
        setLanguage('en');
      }
    }
  }, [lang, setLanguage, navigate, location.pathname]); // Убрали language из зависимостей!
  
  // Handle element click to navigate to element page with proper language support
  const handleElementClick = useCallback((element: Element) => {
    if (language === 'en') {
      // Для английского используем канонический URL без префикса
      navigate(`/element/${element.atomic}`);
    } else {
      // Для других языков добавляем префикс
      navigate(`/${language}/element/${element.atomic}`);
    }
  }, [language, navigate]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  // Canonical URL согласно языку
  const canonicalUrl = getCanonicalUrl(language as any, location.pathname.replace(`/${lang}`, '') || '/');
  
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
    language === "uk" ? "Періодична таблиця" : "",
    language === "fr" ? "Tableau périodique" : ""
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

  console.log('Index: About to render with Header and PeriodicTable');

  return (
    <>
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
              : language === "fr"
                ? "fr_FR"
                : "en_US"
          } 
        />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={t.title} />
        <meta name="twitter:description" content={t.subtitle} />
        <meta name="twitter:image" content="/og-image.png" />
        <meta name="twitter:site" content="@PTOnline" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {preconnectDomains.map(domain => (
          <link key={domain} rel="preconnect" href={domain} crossOrigin="" />
        ))}
        <script type="application/ld+json">
          {JSON.stringify(organizationStructuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Шапка сайта */}
        <Header onSearch={handleSearch} searchQuery={searchQuery} />
        
        {/* Основная периодическая таблица - СРАЗУ ПОД ШАПКОЙ */}
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

        {/* Переключатель легенды - ПОД ТАБЛИЦЕЙ */}
        <div className="max-w-7xl mx-auto px-4 py-4 text-center">
          <button
            onClick={() => setShowLegend(!showLegend)}
            className="legend-toggle px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 focus:ring-4 focus:ring-blue-300 focus:outline-none"
            aria-label={showLegend ? t.MainPageInstructions.legendToggle.hide : t.MainPageInstructions.legendToggle.show}
            aria-pressed={showLegend}
          >
            {showLegend ? t.MainPageInstructions.legendToggle.hide : t.MainPageInstructions.legendToggle.show}
          </button>
        </div>

        {/* Легенда цветов */}
        {showLegend && (
          <div className="max-w-7xl mx-auto px-4 pb-6">
            <TableLegend />
          </div>
        )}

        {/* Инструкции по использованию - НАД СТАТИСТИКОЙ */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="instructions-section bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border-2 border-gray-800 dark:border-gray-200 mb-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100">
                {t.MainPageInstructions.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="instruction-item">
                  <div className="text-4xl mb-2" role="img" aria-label="Клик">🖱️</div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {t.MainPageInstructions.clickElement.title}
                  </h4>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t.MainPageInstructions.clickElement.description}
                  </p>
                </div>
                <div className="instruction-item">
                  <div className="text-4xl mb-2" role="img" aria-label="Поиск">🔍</div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {t.MainPageInstructions.useSearch.title}
                  </h4>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t.MainPageInstructions.useSearch.description}
                  </p>
                </div>
                <div className="instruction-item">
                  <div className="text-4xl mb-2" role="img" aria-label="Цвета">🎨</div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {t.MainPageInstructions.studyColors.title}
                  </h4>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t.MainPageInstructions.studyColors.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Статистика внизу */}
        <div className="w-full">
          <QuickStats />
        </div>
        
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
