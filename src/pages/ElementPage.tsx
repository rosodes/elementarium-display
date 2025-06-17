
import { useElementLogic } from './useElementLogic';
import ElementMainContent from './ElementMainContent';
import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const ElementPage = () => {
  const logic = useElementLogic();
  const navigate = useNavigate();
  const { lang } = useParams<{ lang?: string }>();

  // Handler to navigate to a specific element using React Router
  const handleNavigate = (element: { atomic: string | number }) => {
    const atomic = String(element.atomic);
    const basePath = lang ? `/${lang}` : '';
    navigate(`${basePath}/element/${atomic}`);
  };

  // Handler to go back to home page
  const handleBackToHome = () => {
    const basePath = lang ? `/${lang}` : '';
    navigate(basePath);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header isElementPage={true} />
      
      {/* Back to Home Button */}
      <div className="container mx-auto px-4 py-4">
        <Button
          onClick={handleBackToHome}
          variant="outline"
          className="flex items-center gap-2 mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Вернуться на главную
        </Button>
      </div>
      
      <ElementMainContent
        element={logic.element ?? null}
        loading={false}
        error={null}
        onNavigate={handleNavigate}
        onClose={logic.handleHome}
      />
    </div>
  );
};

export default ElementPage;
