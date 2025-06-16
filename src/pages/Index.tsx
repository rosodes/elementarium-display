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

      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header onSearch={handleSearch} />
        <main>
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
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 px-4 pb-4">
          <div className="flex-1">
            <header>
              <h2 className="text-lg font-bold mb-1">Таблица Менделеева – основы химии</h2>
              <h3 className="text-base font-semibold mb-2">Почему <span className="font-bold italic underline">Периодическая система</span> важна?</h3>
            </header>
            <p className="text-sm text-left text-gray-800 dark:text-gray-200 mb-2">
              <span className="font-bold italic underline">Периодическая таблица</span> элементов, созданная Дмитрием Менделеевым, ― это <span className="font-bold italic underline">фундамент</span> современной химии. Она помогает понять <span className="font-bold italic underline">свойства элементов</span>, их <span className="font-bold italic underline">структуру</span> и <span className="font-bold italic underline">взаимодействие</span> между ними. Благодаря&nbsp;ней ученые предсказали существование новых элементов и объяснили закономерности природы. Сегодня <span className="font-bold italic underline">Периодическая таблица</span> используется по всему миру — в науке, образовании и промышленности.
            </p>
            <p className="text-sm text-left text-gray-800 dark:text-gray-200">
              <span className="font-bold italic underline">Таблица Менделеева</span> — уникальное научное достижение, служащее <span className="font-bold italic underline">основой всей современной химии</span>. Созданная <span className="font-bold italic underline">Дмитрием Ивановичем Менделеевым</span> в <span className="font-bold italic underline">1869&nbsp;году</span>, она упорядочивает все известные химические элементы по возрастанию их атомных номеров, сочетая их в группы и периоды по похожим свойствам. Такой подход позволяет быстро находить информацию об элементах, <span className="font-bold italic underline">предсказывать характеристики ещё не открытых веществ</span>, а также видеть закономерности в строении вещества. Сегодня таблица стала незаменимым инструментом для <span className="font-bold italic underline">школьников, студентов, преподавателей</span> и учёных во всём мире. С её помощью исследуются свойства новых материалов, развивается <span className="font-bold italic underline">медицина, энергетика, нанотехнологии</span> и многие другие отрасли науки и промышленности. Простота её структуры скрывает глубокую логику природы, помогая <span className="font-bold italic underline">раскрывать тайны окружающего мира</span>. В этом справочнике собраны все элементы, их свойства, история и современные научные данные.
            </p>
          </div>
          <div className="flex-1">
            <section>
              <div className="pb-2 flex items-center">
                <h2 className="text-base font-semibold">Цветовая легенда по блокам и категориям элементов</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-[340px] w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm text-sm">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="font-bold p-2 border-b border-gray-200 dark:border-gray-700">Цвет / Категория</td>
                      <td className="font-bold p-2 border-b border-gray-200 dark:border-gray-700">Описание</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="inline-block w-5 h-5 rounded bg-s-block border mr-2 align-middle" /> 
                        <span className="align-middle font-semibold">s-блок</span>
                      </td>
                      <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                        Щелочные и щелочноземельные металлы <span className="text-xs text-gray-600">(Na, Ca)</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="inline-block w-5 h-5 rounded bg-p-block border mr-2 align-middle" /> 
                        <span className="align-middle font-semibold">p-блок</span>
                      </td>
                      <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                        Неметаллы, галогены, благородные газы, часть металлов <span className="text-xs text-gray-600">(C, O, F, Ne)</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="inline-block w-5 h-5 rounded bg-d-block border mr-2 align-middle" /> 
                        <span className="align-middle font-semibold">d-блок</span>
                      </td>
                      <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                        Переходные металлы <span className="text-xs text-gray-600">(Fe, Cu, Zn)</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="inline-block w-5 h-5 rounded bg-f-block border mr-2 align-middle" /> 
                        <span className="align-middle font-semibold">f-блок</span>
                      </td>
                      <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                        Лантаноиды и актиноиды <span className="text-xs text-gray-600">(Ce, U)</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="inline-block w-5 h-5 rounded bg-alkali border mr-2 align-middle" /> 
                        <span className="align-middle font-semibold">Щелочные металлы</span>
                      </td>
                      <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                        Пример: литий, натрий <span className="text-xs text-gray-600">(Li, Na)</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="inline-block w-5 h-5 rounded bg-post_transition border mr-2 align-middle" /> 
                        <span className="align-middle font-semibold">Постпереходные металлы</span>
                      </td>
                      <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                        Пример: алюминий, индий <span className="text-xs text-gray-600">(Al, In)</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="inline-block w-5 h-5 rounded bg-metalloid border mr-2 align-middle" /> 
                        <span className="align-middle font-semibold">Металлоиды</span>
                      </td>
                      <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                        Пример: бор, кремний <span className="text-xs text-gray-600">(B, Si)</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="inline-block w-5 h-5 rounded bg-unknown border mr-2 align-middle" /> 
                        <span className="align-middle font-semibold">Неизвестные свойства</span>
                      </td>
                      <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                        Элементы с неизвестными или неполными характеристиками
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="inline-block w-5 h-5 rounded bg-noble border mr-2 align-middle" /> 
                        <span className="align-middle font-semibold">Благородные газы</span>
                      </td>
                      <td className="p-2 border-b border-gray-100 dark:border-gray-700">
                        Пример: гелий, неон, аргон <span className="text-xs text-gray-600">(He, Ne, Ar)</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">
                        <span className="inline-block w-3 h-3 rounded-full bg-red-500 animate-pulse mr-2 align-middle" /> 
                        <span className="align-middle font-semibold">Радиоактивные элементы</span>
                      </td>
                      <td className="p-2">
                        Помечаются пульсирующей меткой/фоном, легко заметны в таблице
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
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
