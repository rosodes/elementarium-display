
import { Element } from '../../data/elementTypes';
import { useLanguage } from '../../context/LanguageContext';

interface BasicInfoProps {
  element: Element;
}

const BasicInfo = ({ element }: BasicInfoProps) => {
  const { t } = useLanguage();
  
  return (
    <div>
      <h3 className="text-base sm:text-lg font-bold mb-2">{t.elementDetails.basicInfo}</h3>
      <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
        <div className="font-medium">{t.elementDetails.series}:</div>
        <div>{element.series}</div>
        
        <div className="font-medium">{t.elementDetails.atomicWeight}:</div>
        <div>{element.weight}</div>
        
        <div className="font-medium">{t.elementDetails.electronConfig}:</div>
        <div className="break-words">{element.electronstring}</div>
        
        <div className="font-medium">{t.elementDetails.discovered}:</div>
        <div>{element.discover}</div>
        
        <div className="font-medium">{t.elementDetails.group}:</div>
        <div>{element.group}</div>
        
        <div className="font-medium">{t.elementDetails.period}:</div>
        <div>{element.period}</div>
      </div>
    </div>
  );
};

export default BasicInfo;
