import { useElementLogic } from './useElementLogic';
import ElementMainContent from './ElementMainContent';
import Header from '../components/Header';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useValidatedTranslation } from '../hooks/useValidatedTranslation';
import { useLanguage } from '../context/LanguageContext';
import { elements } from '../data/elements';
import { useState, useCallback, useEffect } from 'react';
import { Element as ElementType } from '../data/elementTypes';
import { isSupportedLanguage } from '../lib/languageUtils';

const ElementPage = () => {
  const logic = useElementLogic();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams<{ lang?: string }>();
  const { language, setLanguage } = useLanguage();
  const { t } = useValidatedTranslation('ElementPage');
  const [searchQuery, setSearchQuery] = useState('');

  // Логика языковых маршрутов для элементов согласно best practices
  useEffect(() => {
    if (lang) {
      if (isSupportedLanguage(lang)) {
        // Устанавливаем язык, если он отличается от текущего
        if (lang !== language) {
          setLanguage(lang);
        }
      } else {
        // Если языковой префикс некорректный, перенаправляем на английский
        const pathWithoutLang = location.pathname.replace(`/${lang}`, '');
        navigate(pathWithoutLang || '/', { replace: true });
      }
    } else {
      // Если нет языкового префикса, устанавливаем английский
      if (language !== 'en') {
        setLanguage('en');
      }
    }
  }, [lang, language, setLanguage, navigate, location.pathname]);

  // Handler to navigate to a specific element using React Router
  const handleNavigate = (element: { atomic: string | number }) => {
    const atomic = String(element.atomic);
    if (language === 'en') {
      // Для английского используем канонический URL без префикса
      navigate(`/element/${atomic}`);
    } else {
      // Для других языков добавляем префикс
      navigate(`/${language}/element/${atomic}`);
    }
  };

  // Search handler - find element and navigate to it
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    
    if (!query.trim()) return;
    
    const searchTerm = query.toLowerCase().trim();
    
    // Ищем элемент по различным критериям
    const foundElement = elements.find((element): element is ElementType => {
      if (!element) return false;
      
      // Поиск по атомному номеру
      if (element.atomic.toString() === searchTerm) return true;
      
      // Поиск по символу (точное совпадение)
      if (element.symbol.toLowerCase() === searchTerm) return true;
      
      // Поиск по названию (частичное совпадение)
      if (element.name.toLowerCase().includes(searchTerm)) return true;
      
      return false;
    });
    
    // Если элемент найден - переходим к нему
    if (foundElement) {
      if (language === 'en') {
        navigate(`/element/${foundElement.atomic}`);
      } else {
        navigate(`/${language}/element/${foundElement.atomic}`);
      }
      setSearchQuery(''); // Очищаем поиск после навигации
    }
  }, [language, navigate]);

  // Handler to go back to home page согласно best practices
  const handleBackToHome = () => {
    if (language === 'en') {
      // Для английского используем канонический URL без префикса
      navigate('/', { replace: true });
    } else {
      // Для других языков добавляем префикс
      navigate(`/${language}`, { replace: true });
    }
  };

  // Navigation handlers for previous/next element
  const handlePrevious = () => {
    if (!logic.element || Number(logic.element.atomic) <= 1) return;
    const prevAtomic = Number(logic.element.atomic) - 1;
    const prevElement = elements.find(el => el && Number(el.atomic) === prevAtomic);
    if (prevElement) {
      if (language === 'en') {
        navigate(`/element/${prevElement.atomic}`);
      } else {
        navigate(`/${language}/element/${prevElement.atomic}`);
      }
    }
  };

  const handleNext = () => {
    if (!logic.element || Number(logic.element.atomic) >= 118) return;
    const nextAtomic = Number(logic.element.atomic) + 1;
    const nextElement = elements.find(el => el && Number(el.atomic) === nextAtomic);
    if (nextElement) {
      if (language === 'en') {
        navigate(`/element/${nextElement.atomic}`);
      } else {
        navigate(`/${language}/element/${nextElement.atomic}`);
      }
    }
  };

  const canGoPrevious = logic.element && Number(logic.element.atomic) > 1;
  const canGoNext = logic.element && Number(logic.element.atomic) < 118;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header 
        isElementPage={true} 
        onSearch={handleSearch}
        searchQuery={searchQuery}
      />
      
      {/* Navigation Buttons */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          {/* Back to Home Button */}
          <Button
            onClick={handleBackToHome}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('ui.backToHome', 'Back to Home')}
          </Button>
          
          {/* Previous/Next Element Buttons */}
          <div className="flex items-center gap-2">
            <Button
              onClick={handlePrevious}
              variant="outline"
              disabled={!canGoPrevious}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              {t('ui.previousElement', 'Previous Element')}
            </Button>
            
            <Button
              onClick={handleNext}
              variant="outline"
              disabled={!canGoNext}
              className="flex items-center gap-2"
            >
              {t('ui.nextElement', 'Next Element')}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <ElementMainContent
        element={logic.element ?? null}
        loading={false}
        error={null}
        onNavigate={handleNavigate}
        onClose={handleBackToHome}
      />
    </div>
  );
};

export default ElementPage;
