
import { useElementLogic } from './useElementLogic';
import ElementMainContent from './ElementMainContent';

const ElementPage = () => {
  const logic = useElementLogic();

  // Handler to navigate to a specific element
  const handleNavigate = (element: { atomic: string | number }) => {
    // By atomic number, navigate using the URL structure
    const atomic = String(element.atomic);
    // If using language prefix, use logic.lang
    if (logic.lang && logic.lang !== "en") {
      window.location.href = `/${logic.lang}/element/${atomic}`;
    } else {
      window.location.href = `/element/${atomic}`;
    }
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
