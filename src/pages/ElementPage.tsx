
import ElementPageHeader from '../components/element-details/ElementPageHeader';
import { useElementLogic } from './useElementLogic';
import ElementMainContent from './ElementMainContent';

const ElementPage = () => {
  const logic = useElementLogic();
  return (
    <>
      {/* <ElementPageHeader /> удаляем из ElementPage */}
      <ElementMainContent {...logic} />
    </>
  );
};

export default ElementPage;
