
import { useState } from 'react';
import { Image } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { Element } from '../../data/elementTypes';
import { useLanguage } from '../../context/LanguageContext';

// Импорт изображения водорода — картинка добавляется через public
const HYDROGEN_IMAGE = "/public/hydrogen-unique-illustration.png"; // путь статический

interface ElementImageProps {
  element: Element;
  categoryColor: string;
}

const ElementImage = ({ element, categoryColor }: ElementImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useLanguage();

  // Возвращаем уникальную картинку только для водорода, иначе — placeholder
  const getElementImageUrl = (element: Element) => {
    if (element.atomic === "1") {
      return HYDROGEN_IMAGE;
    }
    // Иначе — placeholder по символу
    return `https://placehold.co/48x48/668ad8/FFFFFF/svg?text=${element.symbol}`;
  };

  const isHydrogen = element.atomic === "1";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="w-12 h-12 rounded-md overflow-hidden mr-3 sm:mr-4 flex items-center justify-center bg-white bg-opacity-20 hover:bg-opacity-30 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-60"
          aria-label={`${element.name} image`}
        >
          {isHydrogen ? (
            <img
              src={getElementImageUrl(element)}
              alt={element.name}
              className="w-full h-full object-contain rounded-sm"
              style={{ background: 'radial-gradient(circle at 50% 60%, #e3faff 70%, #c6e2f9 100%)' }} // нежно-голубые тона
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(false)}
            />
          ) : (
            imageLoaded ? (
              <img
                src={getElementImageUrl(element)}
                alt={element.name}
                className="w-full h-full object-cover rounded-sm"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(false)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-sm">
                <Image size={24} className="text-gray-400 dark:text-gray-500" />
              </div>
            )
          )}
          <span className="sr-only">{t.elementDetails.showMoreInfo}</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md flex flex-col items-center p-1 rounded-lg">
        <div className="w-full max-h-[80vh] overflow-hidden flex items-center justify-center bg-black rounded-t-lg">
          <img
            src={getElementImageUrl(element)}
            alt={element.name}
            className="max-w-full max-h-[80vh] object-contain"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold">{element.name} ({element.symbol})</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{t.elementDetails.atomicNumber}: {element.atomic}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ElementImage;

