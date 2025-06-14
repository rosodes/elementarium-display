
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { elements } from '../data/elements';
import { Element as ElementType } from '../data/elementTypes';
import ElementDetails from '../components/ElementDetails';
import ElementNavigation from '../components/element-details/ElementNavigation';
import ElementPageHead from '../components/element-details/ElementPageHead';
import { useLanguage } from '../context/LanguageContext';
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
      navigator.share(shareData)
        .catch((error) => console.log('Error sharing:', error));
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
          <p>{t.ui?.loading || 'Loading...'}</p>
        </div>
      </main>
    );
  }

  const canGoPrevious = parseInt(element.atomic) > 1;
  const canGoNext = parseInt(element.atomic) < elements.filter(Boolean).length;

  return (
    <div
      className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-200"
      role="main"
      aria-labelledby={`element-title-${element.atomic}`}
      tabIndex={-1}
      id="element-fullpage"
    >
      <ElementPageHead element={element} lang={lang} />

      {/* Навигация по элементу */}
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

      {/* Content full width, semantically sectioned */}
      <section
        aria-labelledby={`element-details-title-${element.atomic}`}
        className="w-full py-8 animate-fade-in"
        tabIndex={0}
      >
        <h1
          id={`element-details-title-${element.atomic}`}
          className="sr-only"
        >
          {element.name} ({element.symbol}) {t.elementDetails?.element}
        </h1>
        <div className="w-full max-w-none mx-0">
          {/* Вставляем ElementDetails, который уже покрывает большую часть информации и хорошо структурирован */}
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
      <footer
        className="w-full py-4 px-6 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
        aria-label={t.footer?.credits}
      >
        <Separator />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>
            {t.footer.dataNote}
          </span>
          <span>
            {t.footer.credits}
          </span>
          <span className="mt-1">
            {t.footer.version} • {t.footer.license}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default ElementPage;
