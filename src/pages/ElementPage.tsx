
import { useElementLogic } from './useElementLogic';
import ElementMainContent from './ElementMainContent';
import { useNavigate, useParams } from 'react-router-dom';

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

  return (
    <>
      <ElementMainContent
        element={logic.element ?? null}
        loading={false}
        error={null}
        onNavigate={handleNavigate}
        onClose={logic.handleHome}
      />
    </>
  );
};

export default ElementPage;
