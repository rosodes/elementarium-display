
import { Element } from '../../data/elementTypes';
import { useLanguage } from '../../context/LanguageContext';

interface PhysicalPropertiesProps {
  element: Element;
}

const PhysicalProperties = ({ element }: PhysicalPropertiesProps) => {
  const { t } = useLanguage();
  
  return (
    <div>
      <h3 className="text-base sm:text-lg font-bold mb-2">{t.elementDetails.physicalProperties}</h3>
      <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
        {element.melt && (
          <>
            <div className="font-medium">{t.elementDetails.meltingPoint}:</div>
            <div>{element.melt} K</div>
          </>
        )}
        
        {element.boil && (
          <>
            <div className="font-medium">{t.elementDetails.boilingPoint}:</div>
            <div>{element.boil} K</div>
          </>
        )}
        
        {element.density?.stp && (
          <>
            <div className="font-medium">{t.elementDetails.density}:</div>
            <div>{element.density.stp} g/cm³</div>
          </>
        )}
        
        {element.electroneg && (
          <>
            <div className="font-medium">{t.elementDetails.electronegativity}:</div>
            <div>{element.electroneg}</div>
          </>
        )}
        
        {element.valence && (
          <>
            <div className="font-medium">{t.elementDetails.valence}:</div>
            <div>{element.valence}</div>
          </>
        )}
        
        {element.oxidation && (
          <>
            <div className="font-medium">{t.elementDetails.oxidationStates}:</div>
            <div>{element.oxidation}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default PhysicalProperties;
