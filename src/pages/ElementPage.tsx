import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { elements } from '../data/elements';
import { Element as ElementType } from '../data/elementTypes';
import ElementDetails from '../components/ElementDetails';
import ElementNavigation from '../components/element-details/ElementNavigation';
import ElementPageHead from '../components/element-details/ElementPageHead';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '@/components/ui/use-toast';
import ElementPageFooter from '../components/element-details/ElementPageFooter';

const ElementPage = () => {
  const { elementId, lang } = useParams<{ elementId: string, lang?: string }>();
  const [element, setElement] = useState<ElementType | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();
  const { toast } = useToast();
  const mainRef = useRef<HTMLDivElement>(null);

  // Skip link focus method
  const handleSkipToContent = () => {
    mainRef.current?.focus();
  };

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
        navigate(lang ? `/${lang}/404` : '/404', { replace: true });
      }
    }
  }, [elementId, navigate, lang]);

  // Navigation handlers
  const handleHome = () => navigate(lang ? `/${lang}` : '/');

  const handlePrevious = () => {
    if (element) {
      const prevElementId = parseInt(element.atomic) - 1;
      navigate(lang ? `/${lang}/element/${prevElementId}` : `/element/${prevElementId}`);
    }
  };

  const handleNext = () => {
    if (element) {
      const nextElementId = parseInt(element.atomic) + 1;
      navigate(lang ? `/${lang}/element/${nextElementId}` : `/element/${nextElementId}`);
    }
  };

  const handleToggleBookmark = () => {
    if (!elementId || !element) return;

    try {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarkedElements') || '[]');
      let newBookmarks;

      if (isBookmarked) {
        newBookmarks = bookmarks.filter((id: string) => id !== elementId);
        toast({
          title: t.ui?.elementRemoved || "Element removed from bookmarks",
          description: `${element.name} (${element.symbol}) has been removed from your bookmarks`,
          duration: 3000,
        });
      } else {
        newBookmarks = [...bookmarks, elementId];
        toast({
          title: t.ui?.elementBookmarked || "Element bookmarked",
          description: `${element.name} (${element.symbol}) has been added to your bookmarks`,
          duration: 3000,
        });
      }

      localStorage.setItem('bookmarkedElements', JSON.stringify(newBookmarks));
      setIsBookmarked(!isBookmarked);
    } catch (e) {
      console.error('Error updating bookmarks:', e);
    }
  };

  const handleShare = () => {
    if (!element) return;

    const shareData = {
      title: `${element.name} (${element.symbol}) - Periodic Table`,
      text: `Learn about ${element.name} (${element.symbol}), atomic number ${element.atomic}`,
      url: window.location.href
    };

    if (navigator.share && navigator.canShare(shareData)) {
      navigator.share(shareData).catch((error) => console.log('Error sharing:', error));
    } else {
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
    return (
      <main className="flex justify-center items-center min-h-[50vh] bg-white dark:bg-gray-900" aria-busy="true">
        <div className="animate-pulse">
          <p className="text-gray-800 dark:text-gray-100">{t.ui?.loading || 'Loading...'}</p>
        </div>
      </main>
    );
  }

  const canGoPrevious = parseInt(element.atomic) > 1;
  const canGoNext = parseInt(element.atomic) < elements.filter(Boolean).length;

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#element-main-content"
        className="sr-only focus:not-sr-only absolute top-0 left-0 bg-blue-700 text-white px-4 py-2 z-50 rounded-b-lg transition"
        tabIndex={0}
        onClick={handleSkipToContent}
      >
        {t.ui?.skipToContent || "Skip to main content"}
      </a>

      <div
        ref={mainRef}
        id="element-main-content"
        tabIndex={-1}
        className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 transition-colors duration-200 animate-fade-in focus:outline-none"
        role="main"
        aria-labelledby={`element-title-${element.atomic}`}
        aria-describedby={`element-details-title-${element.atomic}`}
      >
        <ElementPageHead element={element} lang={lang} />

        <nav
          aria-label={t.elementDetails?.element || "Element Navigation"}
          role="navigation"
          className="w-full"
        >
          <ElementNavigation
            element={element}
            isBookmarked={isBookmarked}
            onHome={handleHome}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onToggleBookmark={handleToggleBookmark}
            onShare={handleShare}
            canGoPrevious={canGoPrevious}
            canGoNext={canGoNext}
          />
        </nav>

        <section
          aria-labelledby={`element-details-title-${element.atomic}`}
          className="w-full max-w-7xl mx-auto py-8 px-4 md:px-12 xl:px-36 animate-fade-in"
          tabIndex={0}
        >
          <h1
            id={`element-details-title-${element.atomic}`}
            className="sr-only"
          >
            {element.name} ({element.symbol}) {t.elementDetails?.element}
          </h1>
          <div className="relative w-full max-w-none mx-0 rounded-2xl bg-white/90 dark:bg-gray-900/95 shadow-xl ring-2 ring-blue-300/10 dark:ring-blue-800/20 p-0 md:p-2 transition border border-gray-200 dark:border-gray-700">
            <ElementDetails
              element={element}
              onClose={handleHome}
              onNavigate={(newElement) => {
                navigate(lang ? `/${lang}/element/${newElement.atomic}` : `/element/${newElement.atomic}`);
              }}
              isFullPage={true}
            />
          </div>
        </section>

        <ElementPageFooter />
      </div>
    </>
  );
};

export default ElementPage;
