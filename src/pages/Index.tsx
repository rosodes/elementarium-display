
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
  console.log('Index component rendering');
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

  console.log('Index: About to render with Header');

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
        
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="flex-1">
              <header>
                <h2 className="text-lg font-bold mb-1">{t.footer.mainTitle}</h2>
                <h3 className="text-base font-semibold mb-2">{t.footer.whyImportant}</h3>
              </header>
              <p className="text-sm text-left text-gray-800 dark:text-gray-200 mb-2">
                {t.footer.mainDescription1}
              </p>
              <p className="text-sm text-left text-gray-800 dark:text-gray-200">
                {t.footer.mainDescription2}
              </p>
            </div>
            <div className="flex-1">
              <section>
                <div className="pb-2 flex items-center">
                  <h2 className="text-base font-semibold">{t.footer.colorLegendTitle}</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm text-sm">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="font-bold p-2 border-b border-gray-200 dark:border-gray-700">{t.footer.colorCategoryColumn}</td>
                        <td className="font-bold p-2 border-b border-gray-200 dark:border-gray-700">{t.footer.descriptionColumn}</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                          <span className="inline-block w-5 h-5 rounded bg-s-block border mr-2 align-middle" /> 
                          <span className="align-middle font-semibold">s-блок</span>
                        </td>
                        <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                          {t.footer.sBlockDescription}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                          <span className="inline-block w-5 h-5 rounded bg-p-block border mr-2 align-middle" /> 
                          <span className="align-middle font-semibold">p-блок</span>
                        </td>
                        <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                          {t.footer.pBlockDescription}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                          <span className="inline-block w-5 h-5 rounded bg-d-block border mr-2 align-middle" /> 
                          <span className="align-middle font-semibold">d-блок</span>
                        </td>
                        <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                          {t.footer.dBlockDescription}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                          <span className="inline-block w-5 h-5 rounded bg-f-block border mr-2 align-middle" /> 
                          <span className="align-middle font-semibold">f-блок</span>
                        </td>
                        <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                          {t.footer.fBlockDescription}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                          <span className="inline-block w-5 h-5 rounded bg-alkali border mr-2 align-middle" /> 
                          <span className="align-middle font-semibold">{t.legend.alkali}</span>
                        </td>
                        <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                          {t.footer.alkaliMetalsDescription}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                          <span className="inline-block w-5 h-5 rounded bg-post_transition border mr-2 align-middle" /> 
                          <span className="align-middle font-semibold">{t.legend.postTransition}</span>
                        </td>
                        <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                          {t.footer.postTransitionDescription}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                          <span className="inline-block w-5 h-5 rounded bg-metalloid border mr-2 align-middle" /> 
                          <span className="align-middle font-semibold">{t.legend.metalloids}</span>
                        </td>
                        <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                          {t.footer.metalloidsDescription}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                          <span className="inline-block w-5 h-5 rounded bg-unknown border mr-2 align-middle" /> 
                          <span className="align-middle font-semibold">{t.categories.unknown}</span>
                        </td>
                        <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                          {t.footer.unknownPropertiesDescription}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                          <span className="inline-block w-5 h-5 rounded bg-noble border mr-2 align-middle" /> 
                          <span className="align-middle font-semibold">{t.legend.noble}</span>
                        </td>
                        <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                          {t.footer.nobleGasesDescription}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2">
                          <span className="inline-block w-3 h-3 rounded-full bg-red-500 animate-pulse mr-2 align-middle" /> 
                          <span className="align-middle font-semibold">{t.legend.radioactive}</span>
                        </td>
                        <td className="p-2">
                          {t.footer.radioactiveDescription}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
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
