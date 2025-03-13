
import { Element } from '../data/elementTypes';
import { getCategoryColor, getSeriesColor } from '../data/elements';
import { useLanguage } from '../context/LanguageContext';
import { X } from 'lucide-react';

interface ElementDetailsProps {
  element: Element;
  onClose: () => void;
}

const ElementDetails = ({ element, onClose }: ElementDetailsProps) => {
  const { t } = useLanguage();
  const categoryColor = element.category 
    ? getCategoryColor(element.category) 
    : getSeriesColor(element.series);
    
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full mx-auto overflow-hidden">
        <div className={`${categoryColor} p-3 sm:p-4 flex justify-between items-center`}>
          <div className="flex items-center">
            <div className="text-3xl sm:text-5xl font-bold mr-3 sm:mr-4">{element.symbol}</div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">{element.name}</h2>
              <p className="text-xs sm:text-sm opacity-80">{t.elementDetails.atomicNumber}: {element.atomic}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-1.5 sm:p-2 text-gray-800 dark:text-white"
            aria-label={t.ui?.close}
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
        
        <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto dark:text-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
          </div>
          
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
          
          <div className="mt-4 sm:mt-6">
            <h3 className="text-base sm:text-lg font-bold mb-2">{t.elementDetails.additionalInfo}</h3>
            <p className="text-xs sm:text-sm">
              {element.name} ({t.elementDetails.symbol}: {element.symbol}, {t.elementDetails.atomicNumber}: {element.atomic}) {t.elementDetails.is} {element.series.toLowerCase()} 
              {t.elementDetails.inPeriodGroup.replace('{period}', element.period.toString()).replace('{group}', element.group.toString())}
              {element.discover !== "Ancient" 
                ? ` ${t.elementDetails.discoveredIn.replace('{year}', element.discover)}` 
                : ` ${t.elementDetails.knownSinceAncient}`}
              {element.melt && element.boil 
                ? ` ${t.elementDetails.meltingBoilingPoints.replace('{melt}', element.melt).replace('{boil}', element.boil)}` 
                : ""}
              {element.density?.stp 
                ? ` ${t.elementDetails.densityIs.replace('{density}', element.density.stp)}` 
                : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementDetails;
