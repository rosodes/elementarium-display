
import { useRef, useState, useEffect } from 'react';
import { elements } from '../data/elements';
import { Element } from '../data/elementTypes';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate, useParams } from 'react-router-dom';

export function useElementLogic() {
  const { t, language, setLanguage } = useLanguage();
  const mainRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const urlParams = useParams();
  const [element, setElement] = useState<Element | null>(null);
  const [elementId, setElementId] = useState<number | null>(null);
  const [lang, setLang] = useState<string>(language);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Load element and language
  useEffect(() => {
    const idParam = urlParams.elementId?.toString();
    if (!idParam) {
      setElement(null);
      setElementId(null);
      return;
    }
    const found = elements.find((el) => el && el.atomic === idParam);
    setElement(found || null);
    setElementId(found ? Number(found.atomic) : null);
    setLang(language);
    setLanguage(language);
    console.log('Loaded element:', found, 'for id:', idParam);
  }, [urlParams.elementId, language, setLanguage]);

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
      toast({
        title: t.ui?.elementRemoved || 'Removed from bookmarks',
        description: t.ui?.elementRemoved || 'Element removed from bookmarks',
      });
    } else {
      bookmarks.push(elementId);
      setIsBookmarked(true);
      toast({
        title: t.ui?.elementBookmarked || 'Bookmarked',
        description: t.ui?.elementBookmarked || 'Element bookmarked',
      });
    }
    localStorage.setItem('elementBookmarks', JSON.stringify(bookmarks));
  };

  // Navigation logic
  const handleHome = () => navigate(lang ? `/${lang}` : '/');
  const handlePrevious = () => {
    if (!element || Number(element.atomic) <= 1) return;
    const prev = elements.find(
      (el) => el && Number(el.atomic) === Number(element.atomic) - 1
    );
    if (prev) navigate(lang ? `/${lang}/element/${prev.atomic}` : `/element/${prev.atomic}`);
  };
  const handleNext = () => {
    if (!element || Number(element.atomic) >= 118) return;
    const next = elements.find(
      (el) => el && Number(el.atomic) === Number(element.atomic) + 1
    );
    if (next) navigate(lang ? `/${lang}/element/${next.atomic}` : `/element/${next.atomic}`);
  };

  const canGoPrevious = !!(element && Number(element.atomic) > 1);
  const canGoNext = !!(element && Number(element.atomic) < 118);

  const handleSkipToContent = () => {
    mainRef.current?.focus();
  };

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

  return {
    t,
    lang,
    mainRef,
    element,
    isBookmarked,
    canGoNext,
    canGoPrevious,
    handleHome,
    handleNext,
    handlePrevious,
    handleToggleBookmark,
    handleShare,
    handleSkipToContent,
  };
}
