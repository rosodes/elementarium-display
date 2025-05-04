
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { elements } from '../data/elements';
import { Element as ElementType } from '../data/elementTypes';
import { Helmet } from 'react-helmet-async';
import ElementDetails from '../components/ElementDetails';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Home, Share, Star } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';

const ElementPage = () => {
  const { elementId, lang } = useParams<{ elementId: string, lang?: string }>();
  const [element, setElement] = useState<ElementType | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();
  const { toast } = useToast();
  
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
        
        // Check if element is bookmarked
        try {
          const bookmarks = JSON.parse(localStorage.getItem('bookmarkedElements') || '[]');
          setIsBookmarked(bookmarks.includes(elementId));
        } catch (e) {
          console.error('Error checking bookmark status:', e);
        }
      } else {
        // Redirect to 404 if element not found
        navigate(lang ? `/${lang}/404` : '/404', { replace: true });
      }
    }
  }, [elementId, navigate, lang]);
  
  // Handle bookmark toggle
  const toggleBookmark = () => {
    if (!elementId) return;
    
    try {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarkedElements') || '[]');
      let newBookmarks;
      
      if (isBookmarked) {
        newBookmarks = bookmarks.filter((id: string) => id !== elementId);
        toast({
          title: t.ui?.elementRemoved || "Element removed from bookmarks",
          description: `${element?.name} (${element?.symbol}) has been removed from your bookmarks`,
          duration: 3000,
        });
      } else {
        newBookmarks = [...bookmarks, elementId];
        toast({
          title: t.ui?.elementBookmarked || "Element bookmarked",
          description: `${element?.name} (${element?.symbol}) has been added to your bookmarks`,
          duration: 3000,
        });
      }
      
      localStorage.setItem('bookmarkedElements', JSON.stringify(newBookmarks));
      setIsBookmarked(!isBookmarked);
    } catch (e) {
      console.error('Error updating bookmarks:', e);
    }
  };
  
  // Handle share element
  const shareElement = () => {
    if (!element) return;
    
    const shareData = {
      title: `${element.name} (${element.symbol}) - Periodic Table`,
      text: `Learn about ${element.name} (${element.symbol}), atomic number ${element.atomic}`,
      url: window.location.href
    };
    
    if (navigator.share && navigator.canShare(shareData)) {
      navigator.share(shareData)
        .catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback if Web Share API is not available
      navigator.clipboard.writeText(window.location.href).then(() => {
        toast({
          title: t.ui?.linkCopied || "Link copied",
          description: t.ui?.linkCopiedToClipboard || "Link has been copied to clipboard",
          duration: 3000,
        });
      });
    }
  };
  
  if (!element) {
    return <div className="flex justify-center items-center h-screen">
      <div className="animate-pulse">
        <p>{t.ui?.loading || 'Loading...'}</p>
      </div>
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
  
  // Create a safer description with fallback for missing properties
  const elementDescription = `${element.name} (${element.symbol}): ${element.category} - ${element.summary || t.elementDetails?.notAvailable || 'Information not available'}`;
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Add SEO metadata using Helmet */}
      <Helmet>
        <title>{element ? `${element.name} (${element.symbol}) - ${t.title}` : t.loading}</title>
        <meta name="description" content={element ? `${element.name} (${element.symbol}): ${element.category} - ${element.summary || t.elementDetails?.notAvailable || 'Information not available'}` : ''} />
        {element && (
          <>
            <meta property="og:title" content={`${element.name} (${element.symbol}) - ${t.title}`} />
            <meta property="og:description" content={`${element.name} (${element.symbol}): ${element.category} - ${element.summary || t.elementDetails?.notAvailable || 'Information not available'}`} />
            <meta property="og:type" content="website" />
            <link rel="canonical" href={element ? `${window.location.origin}${lang ? `/${lang}` : ''}/element/${element.atomic}` : ''} />
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ChemicalSubstance",
                "name": element.name,
                "alternateName": element.symbol,
                "description": element.summary || t.elementDetails?.notAvailable || 'Information not available',
                "url": `${window.location.origin}${lang ? `/${lang}` : ''}/element/${element.atomic}`,
                "molecularFormula": element.symbol,
                "atomicNumber": element.atomic
              })}
            </script>
          </>
        )}
      </Helmet>
      
      {/* Navigation bar with actions */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto py-3 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost"
                size="sm"
                onClick={() => navigate(lang ? `/${lang}` : '/')}
                aria-label={t.elementDetails?.backToTable || "Back to Periodic Table"}
              >
                <Home className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">{t.elementDetails?.backToTable || "Back to Table"}</span>
              </Button>
              
              <span className="text-gray-500 dark:text-gray-400 hidden sm:inline">|</span>
              
              <div className="font-medium text-sm">
                {element ? `${element.name} (${element.symbol})` : t.ui?.loading || 'Loading...'}
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleBookmark}
                aria-label={isBookmarked ? "Remove from favorites" : "Add to favorites"}
                disabled={!element}
              >
                <Star className={`h-4 w-4 ${isBookmarked ? 'fill-yellow-400 text-yellow-400' : ''}`} />
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={shareElement}
                aria-label="Share"
                disabled={!element}
              >
                <Share className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Element details component with navigation */}
      <div className="container mx-auto py-6 px-4">
        {element ? (
          <>
            <div className="flex items-center mb-4 justify-between">
              <Button 
                variant="outline"
                size="sm"
                onClick={() => {
                  const prevElement = elements.find(e => e && e.atomic === String(parseInt(element.atomic) - 1));
                  if (prevElement) navigate(lang ? `/${lang}/element/${prevElement.atomic}` : `/element/${prevElement.atomic}`);
                }}
                disabled={parseInt(element.atomic) <= 1}
                aria-label={t.elementDetails?.previousElement || "Previous element"}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.elementDetails?.previous || "Previous"}
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const nextElement = elements.find(e => e && e.atomic === String(parseInt(element.atomic) + 1));
                  if (nextElement) navigate(lang ? `/${lang}/element/${nextElement.atomic}` : `/element/${nextElement.atomic}`);
                }}
                disabled={parseInt(element.atomic) >= elements.filter(Boolean).length}
                aria-label={t.elementDetails?.nextElement || "Next element"}
              >
                {t.elementDetails?.next || "Next"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <Separator className="my-4" />
            
            <ElementDetails 
              element={element} 
              onClose={() => navigate(lang ? `/${lang}` : '/')}
              onNavigate={(newElement) => {
                navigate(lang ? `/${lang}/element/${newElement.atomic}` : `/element/${newElement.atomic}`);
              }}
              isFullPage={true}
            />
          </>
        ) : (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse">
              <p>{t.ui?.loading || 'Loading...'}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ElementPage;
