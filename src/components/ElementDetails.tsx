
import { Element } from '../data/elementTypes';
import { getCategoryColor, getSeriesColor } from '../data/elements';
import { useLanguage } from '../context/LanguageContext';
import { X } from 'lucide-react';
import ElementImage from './element-details/ElementImage';
import BasicInfo from './element-details/BasicInfo';
import PhysicalProperties from './element-details/PhysicalProperties';
import AtomicStructure from './element-details/AtomicStructure';
import AdditionalInfo from './element-details/AdditionalInfo';

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
            <ElementImage element={element} categoryColor={categoryColor} />
            <div>
              <div className="text-3xl sm:text-5xl font-bold">{element.symbol}</div>
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
            <BasicInfo element={element} />
            <PhysicalProperties element={element} />
          </div>
          
          <AtomicStructure element={element} categoryColor={categoryColor} />
          <AdditionalInfo element={element} />
        </div>
      </div>
    </div>
  );
};

export default ElementDetails;
