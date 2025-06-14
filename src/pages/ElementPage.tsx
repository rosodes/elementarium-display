
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '@/components/ui/use-toast';
import ElementDetails from '../components/ElementDetails';
import ElementNavigation from '../components/element-details/ElementNavigation';
import ElementPageHead from '../components/element-details/ElementPageHead';
import ElementPageFooter from '../components/element-details/ElementPageFooter';
import ElementPageHeader from '../components/element-details/ElementPageHeader';
// Removed broken imports for useElementLoader, useElementBookmark, useElementNavigation

// Inline logic previously handled by the hooks
import elements from '../data/elements';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Element } from '../data/elementTypes';

const ElementPage = () => {
  const { t, language, setLanguage } = useLanguage();
  const mainRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const urlParams = useParams();
  const [element, setElement] = useState<Element | null>(null);
  const [elementId, setElementId] = useState<number | null>(null);
  const [lang, setLang] = useState<string>(language);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Load the element and language
  useEffect(() => {
    // Find the correct element from url params
    let id = urlParams.atomic?.toString() || urlParams.id?.toString();
    let atomicNumber = id ? parseInt(id, 10) : NaN;
    const found = !isNaN(atomicNumber) && elements.find((el) => el.atomic === atomicNumber);
    setElement(found || null);
    setElementId(found ? found.atomic : null);
    // Language
    setLang(language);
    setLanguage(language);
  }, [urlParams.atomic, urlParams.id, language, setLanguage]);

  // Bookmark logic (localStorage-based)
  useEffect(() => {
    if (!elementId) return;
    const bookmarks = JSON.parse(localStorage.getItem('elementBookmarks') || '[]');
    setIsBookmarked(bookmarks.includes(elementId));
  }, [elementId]);
  const handleToggleBookmark = () => {
    if (!elementId) return;
    let bookmarks = JSON.parse(localStorage.getItem('elementBookmarks') || '[]');
    if (bookmarks.includes(elementId)) {
      bookmarks = bookmarks.filter((id: number) => id !== elementId);
      setIsBookmarked(false);
    } else {
      bookmarks.push(elementId);
      setIsBookmarked(true);
    }
    localStorage.setItem('elementBookmarks', JSON.stringify(bookmarks));
    toast({
      title: isBookmarked ? t.ui?.removedFromFavorites : t.ui?.addedToFavorites,
      description: isBookmarked ? t.ui?.elementRemoved : t.ui?.elementAdded,
    });
  };

  // Navigation logic
  const handleHome = () => navigate(lang ? `/${lang}` : '/');
  const handlePrevious = () => {
    if (!element || element.atomic <= 1) return;
    const prev = elements.find((el) => el.atomic === element.atomic - 1);
    if (prev) navigate(lang ? `/${lang}/element/${prev.atomic}` : `/element/${prev.atomic}`);
  };
  const handleNext = () => {
    if (!element || element.atomic >= 118) return;
    const next = elements.find((el) => el.atomic === element.atomic + 1);
    if (next) navigate(lang ? `/${lang}/element/${next.atomic}` : `/element/${next.atomic}`);
  };
  const canGoPrevious = !!(element && element.atomic > 1);
  const canGoNext = !!(element && element.atomic < 118);

  // Skip link focus method
  const handleSkipToContent = () => {
    mainRef.current?.focus();
  };

  // Share handler
  const handleShare = () => {
    if (!element) return;
    const shareData = {
      title: `${element.name} (${element.symbol}) - Periodic Table`,
      text: `Learn about ${element.name} (${element.symbol}), atomic number ${element.atomic}`,
      url: window.location.href,
    };
    if (navigator.share && navigator.canShare(shareData)) {
      navigator.share(shareData).catch((error) => console.log('Error sharing:', error));
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        toast({
          title: t.ui?.linkCopied || 'Link copied',
          description: t.ui?.linkCopiedToClipboard || 'Link has been copied to clipboard',
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

      <ElementPageHeader />

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
                handleHome();
                setTimeout(() => {
                  window.location.assign(lang ? `/${lang}/element/${newElement.atomic}` : `/element/${newElement.atomic}`);
                }, 1);
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
