
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { elements } from '../data/elements';
import { Element as ElementType } from '../data/elementTypes';
import { Helmet } from 'react-helmet-async';
import ElementDetails from '../components/ElementDetails';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const ElementPage = () => {
  const { elementId, lang } = useParams<{ elementId: string, lang?: string }>();
  const [element, setElement] = useState<ElementType | null>(null);
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();
  
  // Set language based on URL parameter
  useEffect(() => {
    if (lang && ['en', 'ru', 'uk'].includes(lang) && lang !== language) {
      setLanguage(lang);
    }
  }, [lang, language, setLanguage]);
  
  // Find element based on elementId parameter
  useEffect(() => {
    if (elementId) {
      const foundElement = elements.find(e => e && e.atomic === elementId);
      if (foundElement) {
        setElement(foundElement as ElementType);
      } else {
        // Redirect to 404 if element not found
        navigate(lang ? `/${lang}/404` : '/404', { replace: true });
      }
    }
  }, [elementId, navigate, lang]);
  
  if (!element) {
    return <div className="flex justify-center items-center h-screen">
      <p>{t.ui?.loading || 'Loading...'}</p>
    </div>;
  }
  
  // Create canonical URL with proper language prefix
  const canonicalUrl = `${window.location.origin}${lang ? `/${lang}` : ''}/element/${element.atomic}`;
  
  // Navigation to previous and next elements
  const handleNavigateElement = (direction: 'prev' | 'next') => {
    const currentAtomicNumber = parseInt(element.atomic);
    
    // Convert to number for comparison
    if (direction === 'prev' && currentAtomicNumber > 1) {
      const prevElementId = currentAtomicNumber - 1;
      navigate(lang ? `/${lang}/element/${prevElementId}` : `/element/${prevElementId}`);
    } else if (direction === 'next' && currentAtomicNumber < elements.length) {
      const nextElementId = currentAtomicNumber + 1;
      navigate(lang ? `/${lang}/element/${nextElementId}` : `/element/${nextElementId}`);
    }
  };
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Add SEO metadata using Helmet */}
      <Helmet>
        <title>{`${element.name} (${element.symbol}) - ${t.title}`}</title>
        <meta name="description" content={`${element.name} (${element.symbol}): ${element.category} - ${element.summary || t.elementDetails.notAvailable}`} />
        <meta property="og:title" content={`${element.name} (${element.symbol}) - ${t.title}`} />
        <meta property="og:description" content={`${element.name} (${element.symbol}): ${element.category} - ${element.summary || t.elementDetails.notAvailable}`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ChemicalSubstance",
            "name": element.name,
            "alternateName": element.symbol,
            "description": element.summary || t.elementDetails.notAvailable,
            "url": canonicalUrl,
            "molecularFormula": element.symbol,
            "atomicNumber": element.atomic
          })}
        </script>
      </Helmet>
      
      {/* Element details component with navigation */}
      <div className="container mx-auto py-6 px-4">
        <div className="flex items-center mb-4 justify-between">
          <Button 
            variant="outline"
            size="sm"
            onClick={() => navigate(lang ? `/${lang}` : '/')}
            aria-label={t.elementDetails?.backToTable || "Back to Periodic Table"}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.elementDetails?.backToTable || "Back to Table"}
          </Button>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavigateElement('prev')}
              disabled={parseInt(element.atomic) <= 1}
              aria-label={t.elementDetails?.previousElement || "Previous element"}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.elementDetails?.previous || "Previous"}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavigateElement('next')}
              disabled={parseInt(element.atomic) >= elements.length}
              aria-label={t.elementDetails?.nextElement || "Next element"}
            >
              {t.elementDetails?.next || "Next"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <Separator className="my-4" />
        
        <ElementDetails 
          element={element} 
          onClose={() => navigate(lang ? `/${lang}` : '/')}
          onNavigate={(newElement) => {
            navigate(lang ? `/${lang}/element/${newElement.atomic}` : `/element/${newElement.atomic}`);
          }}
        />
      </div>
    </div>
  );
};

export default ElementPage;
