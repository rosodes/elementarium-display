
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getElement } from '../data/elements';
import { Element as ElementType } from '../data/elementTypes';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import ElementDetails from '../components/ElementDetails';
import NotFound from './NotFound';
import { Helmet } from 'react-helmet-async';
import { getCategoryColor, getSeriesColor } from '../data/elements';
import Header from '../components/Header';

const ElementPage = () => {
  const { elementId, lang } = useParams<{ elementId: string; lang?: string }>();
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
    navigate(`${baseUrl}/element/${newElement.atomic}`);
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
  
  // Get element colors
  const categoryColor = element.category 
    ? getCategoryColor(element.category) 
    : getSeriesColor(element.series);
  
  // Get translated element name if available
  const translatedName = t.ui?.elements?.[element.symbol.toLowerCase()] || element.name;
  const pageTitle = `${translatedName} (${element.symbol}) - ${t.title}`;
  const pageDescription = `${translatedName} (${element.symbol}), ${t.elementDetails.atomicNumber}: ${element.atomic}, ${t.elementDetails.atomicWeight}: ${element.weight}`;
  
  // Canonical URL for this element with language prefix if needed
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const canonicalUrl = `${origin}${lang ? `/${lang}` : ''}/element/${element.atomic}`;
  
  // Получаем следующий и предыдущий элементы для навигации
  const nextElementId = element.atomic < 118 ? element.atomic + 1 : null;
  const prevElementId = element.atomic > 1 ? element.atomic - 1 : null;
  
  // Данные для структурированных данных Schema.org
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ChemicalSubstance",
    "name": translatedName,
    "alternateName": element.symbol,
    "description": pageDescription,
    "molecularFormula": element.symbol,
    "url": canonicalUrl,
    "identifier": {
      "@type": "PropertyValue",
      "propertyID": "atomic-number",
      "value": element.atomic
    },
    "disambiguatingDescription": `${t.elementDetails.atomicNumber}: ${element.atomic}, ${t.elementDetails.atomicWeight}: ${element.weight}`,
    // Дополнительные данные для поисковых систем
    "potentialAction": {
      "@type": "ViewAction",
      "target": canonicalUrl
    }
  };
  
  return (
    <>
      {/* Enhanced SEO metadata using Helmet */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {/* Добавляем hreflang для мультиязычности */}
        <link rel="alternate" hrefLang="en" href={`${origin}/element/${element.atomic}`} />
        <link rel="alternate" hrefLang="ru" href={`${origin}/ru/element/${element.atomic}`} />
        <link rel="alternate" hrefLang="uk" href={`${origin}/uk/element/${element.atomic}`} />
        {/* Schema.org структурированные данные для химического элемента */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      
      <div 
        className="min-h-screen transition-colors duration-200"
        style={{ 
          backgroundColor: `color-mix(in srgb, ${categoryColor.split(' ')[0]} 10%, ${language === 'light' ? 'white' : '#1a1a1a'})`
        }}
        itemScope
        itemType="http://schema.org/ChemicalSubstance"
      >
        {/* Используем Header с флагом, что это страница элемента */}
        <Header isElementPage={true} />
        
        <main className="container mx-auto px-4 pt-4 pb-8">
          {/* Back button */}
          <Link 
            to={lang ? `/${lang}` : '/'}
            className="inline-flex items-center my-4 px-4 py-2 text-sm font-medium rounded-md bg-white/20 hover:bg-white/30 text-gray-800 dark:text-gray-200 transition-colors"
            aria-label={t.ui?.back || 'Back to Periodic Table'}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.ui?.back || 'Back to Periodic Table'}
          </Link>
          
          {/* Display element details as a full page */}
          <div className="w-full max-w-7xl mx-auto">
            <ElementDetails 
              element={element} 
              onClose={handleClose} 
              onNavigate={handleNavigateElement}
              isFullPage={true} 
            />
          </div>
        </main>
        
        <footer className="py-4 sm:py-6 px-4 text-xs text-gray-600 dark:text-gray-400 text-center">
          <p>{t.footer.dataNote}</p>
          <p>{t.footer.credits}</p>
          <p className="mt-1">{t.footer.version} • {t.footer.license}</p>
        </footer>
      </div>
    </>
  );
};

export default ElementPage;
