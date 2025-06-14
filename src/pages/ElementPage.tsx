
import ElementPageHeader from '../components/element-details/ElementPageHeader';
import { useElementLogic } from './useElementLogic';
import ElementMainContent from './ElementMainContent';

const ElementPage = () => {
  const logic = useElementLogic();
  return (
    <>
      <ElementPageHeader />
      <ElementMainContent {...logic} />
    </>
  );
};

export default ElementPage;
