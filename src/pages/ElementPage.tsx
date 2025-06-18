
import { useElementLogic } from './useElementLogic';
import ElementMainContent from './ElementMainContent';
import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useLanguage } from '../context/LanguageContext';
import { elements } from '../data/elements';

const ElementPage = () => {
  const logic = useElementLogic();
  const navigate = useNavigate();
  const { lang } = useParams<{ lang?: string }>();
  const { t } = useLanguage();

  // Handler to navigate to a specific element using React Router
  const handleNavigate = (element: { atomic: string | number }) => {
    const atomic = String(element.atomic);
    const basePath = lang ? `/${lang}` : '';
    navigate(`${basePath}/element/${atomic}`);
  };

  // Handler to go back to home page - FIXED
  const handleBackToHome = () => {
    const basePath = lang ? `/${lang}` : '';
    navigate(basePath, { replace: true });
  };

  // Navigation handlers for previous/next element
  const handlePrevious = () => {
    if (!logic.element || Number(logic.element.atomic) <= 1) return;
    const prevAtomic = Number(logic.element.atomic) - 1;
    const prevElement = elements.find(el => el && Number(el.atomic) === prevAtomic);
    if (prevElement) {
      const basePath = lang ? `/${lang}` : '';
      navigate(`${basePath}/element/${prevElement.atomic}`);
    }
  };

  const handleNext = () => {
    if (!logic.element || Number(logic.element.atomic) >= 118) return;
    const nextAtomic = Number(logic.element.atomic) + 1;
    const nextElement = elements.find(el => el && Number(el.atomic) === nextAtomic);
    if (nextElement) {
      const basePath = lang ? `/${lang}` : '';
      navigate(`${basePath}/element/${nextElement.atomic}`);
    }
  };

  const canGoPrevious = logic.element && Number(logic.element.atomic) > 1;
  const canGoNext = logic.element && Number(logic.element.atomic) < 118;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header isElementPage={true} />
      
      {/* Navigation Buttons */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          {/* Back to Home Button - FIXED */}
          <Button
            onClick={handleBackToHome}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.ui?.backToHome || 'Back to Home'}
          </Button>
          
          {/* Previous/Next Element Buttons - FIXED */}
          <div className="flex items-center gap-2">
            <Button
              onClick={handlePrevious}
              variant="outline"
              disabled={!canGoPrevious}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              {t.ui?.previousElement || 'Previous Element'}
            </Button>
            
            <Button
              onClick={handleNext}
              variant="outline"
              disabled={!canGoNext}
              className="flex items-center gap-2"
            >
              {t.ui?.nextElement || 'Next Element'}
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
