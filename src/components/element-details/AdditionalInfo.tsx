
import { Element } from '../../data/elementTypes';
import { useLanguage } from '../../context/LanguageContext';

interface AdditionalInfoProps {
  element: Element;
}

const AdditionalInfo = ({ element }: AdditionalInfoProps) => {
  const { t } = useLanguage();
  
  return (
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
  );
};

export default AdditionalInfo;
