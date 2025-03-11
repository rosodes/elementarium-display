
import { Element } from '../data/elementTypes';
import { getCategoryColor, getSeriesColor } from '../data/elements';

interface ElementDetailsProps {
  element: Element;
  onClose: () => void;
}

const ElementDetails = ({ element, onClose }: ElementDetailsProps) => {
  const categoryColor = element.category 
    ? getCategoryColor(element.category) 
    : getSeriesColor(element.series);
    
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 overflow-hidden">
        <div className={`${categoryColor} p-4 flex justify-between items-center`}>
          <div className="flex items-center">
            <div className="text-5xl font-bold mr-4">{element.symbol}</div>
            <div>
              <h2 className="text-2xl font-bold">{element.name}</h2>
              <p className="text-sm opacity-80">Atomic number: {element.atomic}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Basic Information</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="font-medium">Series:</div>
                <div>{element.series}</div>
                
                <div className="font-medium">Atomic Weight:</div>
                <div>{element.weight}</div>
                
                <div className="font-medium">Electron Configuration:</div>
                <div className="break-words">{element.electronstring}</div>
                
                <div className="font-medium">Discovered:</div>
                <div>{element.discover}</div>
                
                <div className="font-medium">Group:</div>
                <div>{element.group}</div>
                
                <div className="font-medium">Period:</div>
                <div>{element.period}</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2">Physical Properties</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {element.melt && (
                  <>
                    <div className="font-medium">Melting Point:</div>
                    <div>{element.melt} K</div>
                  </>
                )}
                
                {element.boil && (
                  <>
                    <div className="font-medium">Boiling Point:</div>
                    <div>{element.boil} K</div>
                  </>
                )}
                
                {element.density?.stp && (
                  <>
                    <div className="font-medium">Density:</div>
                    <div>{element.density.stp} g/cm³</div>
                  </>
                )}
                
                {element.electroneg && (
                  <>
                    <div className="font-medium">Electronegativity:</div>
                    <div>{element.electroneg}</div>
                  </>
                )}
                
                {element.valence && (
                  <>
                    <div className="font-medium">Valence:</div>
                    <div>{element.valence}</div>
                  </>
                )}
                
                {element.oxidation && (
                  <>
                    <div className="font-medium">Oxidation States:</div>
                    <div>{element.oxidation}</div>
                  </>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">Atomic Structure</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div>
                <h4 className="font-medium mb-1">Electron Distribution:</h4>
                <div className="flex flex-wrap gap-2">
                  {element.electrons.map((count, index) => (
                    <div key={index} className={`${categoryColor} px-2 py-1 rounded-full text-xs`}>
                      Shell {index + 1}: {count}e⁻
                    </div>
                  ))}
                </div>
              </div>
              
              {element.radius && (
                <div>
                  <h4 className="font-medium mb-1">Atomic Radius:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {element.radius.calculated && (
                      <>
                        <div>Calculated:</div>
                        <div>{element.radius.calculated} pm</div>
                      </>
                    )}
                    {element.radius.empirical && (
                      <>
                        <div>Empirical:</div>
                        <div>{element.radius.empirical} pm</div>
                      </>
                    )}
                    {element.radius.covalent && (
                      <>
                        <div>Covalent:</div>
                        <div>{element.radius.covalent} pm</div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">Additional Information</h3>
            <p className="text-sm">
              {element.name} (symbol: {element.symbol}, atomic number: {element.atomic}) is a {element.series.toLowerCase()} 
              in period {element.period} and group {element.group} of the periodic table.
              {element.discover !== "Ancient" ? ` It was discovered in ${element.discover}.` : " It has been known since ancient times."}
              {element.melt && element.boil ? ` It melts at ${element.melt} K and boils at ${element.boil} K.` : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementDetails;
