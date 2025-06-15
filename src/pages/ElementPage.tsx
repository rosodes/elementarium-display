
import ElementPageHeader from '../components/element-details/ElementPageHeader';
import { useElementLogic } from './useElementLogic';
import ElementMainContent from './ElementMainContent';

/*
 * Fixes: 
 * - Only pass the required props to ElementMainContent as described by ElementMainContentProps.
 */
const ElementPage = () => {
  const logic = useElementLogic();

  // Map props as required by ElementMainContent
  return (
    <>
      <ElementMainContent
        element={logic.element ?? null}
        loading={!!logic.isLoading}
        error={logic.error ?? null}
        onNavigate={logic.handleNavigateElement}
        onClose={logic.handleClose}
      />
    </>
  );
};

export default ElementPage;
