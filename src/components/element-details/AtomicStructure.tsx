
import { Element } from '../../data/elementTypes';
import { useLanguage } from '../../context/LanguageContext';

interface AtomicStructureProps {
  element: Element;
  categoryColor: string;
}

const AtomicStructure = ({ element, categoryColor }: AtomicStructureProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="mt-4 sm:mt-6">
      <h3 className="text-base sm:text-lg font-bold mb-2">{t.elementDetails.atomicStructure}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm">
        <div>
          <h4 className="font-medium mb-1">{t.elementDetails.electronDistribution}:</h4>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {element.electrons.map((count, index) => (
              <div key={index} className={`${categoryColor} px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs`}>
                {t.elementDetails.shell} {index + 1}: {count}e⁻
              </div>
            ))}
          </div>
        </div>
        
        {element.radius && (
          <div>
            <h4 className="font-medium mb-1">{t.elementDetails.atomicRadius}:</h4>
            <div className="grid grid-cols-2 gap-1">
              {element.radius.calculated && (
                <>
                  <div>{t.elementDetails.calculated}:</div>
                  <div>{element.radius.calculated} pm</div>
                </>
              )}
              {element.radius.empirical && (
                <>
                  <div>{t.elementDetails.empirical}:</div>
                  <div>{element.radius.empirical} pm</div>
                </>
              )}
              {element.radius.covalent && (
                <>
                  <div>{t.elementDetails.covalent}:</div>
                  <div>{element.radius.covalent} pm</div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AtomicStructure;
