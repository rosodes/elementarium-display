
import { useElementLogic } from './useElementLogic';
import ElementMainContent from './ElementMainContent';
import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';

const ElementPage = () => {
  console.log('ElementPage component rendering');
  const logic = useElementLogic();
  const navigate = useNavigate();
  const { lang } = useParams<{ lang?: string }>();

  // Handler to navigate to a specific element using React Router
  const handleNavigate = (element: { atomic: string | number }) => {
    const atomic = String(element.atomic);
    const basePath = lang ? `/${lang}` : '';
    navigate(`${basePath}/element/${atomic}`);
  };

  console.log('ElementPage: About to render with Header');

  return (
    <div className="min-h-screen">
      <Header isElementPage={true} />
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
