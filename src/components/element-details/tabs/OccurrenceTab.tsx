
import React from "react";
import { Element } from "../../../data/elementTypes";
import HydrogenOccurrenceSection from "../new-sections/HydrogenOccurrenceSection";
import HeliumNaturalOccurrenceSection from "../new-sections/HeliumNaturalOccurrenceSection";
import LithiumNaturalOccurrenceSection from "../new-sections/LithiumNaturalOccurrenceSection";
import BerylliumNaturalOccurrenceSection from "../new-sections/BerylliumNaturalOccurrenceSection";
import BoronNaturalOccurrenceSection from "../new-sections/BoronNaturalOccurrenceSection";
import CarbonNaturalOccurrenceSection from "../new-sections/CarbonNaturalOccurrenceSection";
import NitrogenNaturalOccurrenceSection from "../new-sections/NitrogenNaturalOccurrenceSection";
import OxygenNaturalOccurrenceSection from "../new-sections/OxygenNaturalOccurrenceSection";
import FluorineNaturalOccurrenceSection from "../new-sections/FluorineNaturalOccurrenceSection";
import NeonNaturalOccurrenceSection from "../new-sections/NeonNaturalOccurrenceSection";
import SodiumNaturalOccurrenceSection from "../new-sections/SodiumNaturalOccurrenceSection";
import MagnesiumNaturalOccurrenceSection from "../new-sections/MagnesiumNaturalOccurrenceSection";
import AluminumNaturalOccurrenceSection from "../new-sections/AluminumNaturalOccurrenceSection";
import SiliconNaturalOccurrenceSection from "../new-sections/SiliconNaturalOccurrenceSection";
import PhosphorusNaturalOccurrenceSection from "../new-sections/PhosphorusNaturalOccurrenceSection";
import SulfurNaturalOccurrenceSection from "../new-sections/SulfurNaturalOccurrenceSection";
import { useLanguage } from "../../../context/LanguageContext";

const OccurrenceTab = ({ element }: { element: Element }) => {
  const { language } = useLanguage();
  
  const getGenericOccurrenceContent = (element: Element) => {
    if (language === 'ru') {
      return `Элемент ${element.name} (${element.symbol}) встречается в природе в различных формах и соединениях. Его распространенность и методы добычи зависят от геологических процессов и химических свойств элемента.`;
    } else if (language === 'uk') {
      return `Елемент ${element.name} (${element.symbol}) зустрічається в природі в різних формах та сполуках. Його поширеність та методи видобутку залежать від геологічних процесів та хімічних властивостей елемента.`;
    } else {
      return `Element ${element.name} (${element.symbol}) occurs in nature in various forms and compounds. Its abundance and extraction methods depend on geological processes and chemical properties of the element.`;
    }
  };

  return (
    <div className="text-base">
      {element.atomic === "1" ? (
        <HydrogenOccurrenceSection />
      ) : element.atomic === "2" ? (
        <HeliumNaturalOccurrenceSection />
      ) : element.atomic === "3" ? (
        <LithiumNaturalOccurrenceSection />
      ) : element.atomic === "4" ? (
        <BerylliumNaturalOccurrenceSection />
      ) : element.atomic === "5" ? (
        <BoronNaturalOccurrenceSection />
      ) : element.atomic === "6" ? (
        <CarbonNaturalOccurrenceSection />
      ) : element.atomic === "7" ? (
        <NitrogenNaturalOccurrenceSection />
      ) : element.atomic === "8" ? (
        <OxygenNaturalOccurrenceSection />
      ) : element.atomic === "9" ? (
        <FluorineNaturalOccurrenceSection />
      ) : element.atomic === "10" ? (
        <NeonNaturalOccurrenceSection />
      ) : (
        <div className="bg-green-50 dark:bg-gray-900/40 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-green-800 dark:text-green-200">
            {language === 'ru' ? 'Распространенность в природе' : language === 'uk' ? 'Поширеність в природі' : 'Natural Occurrence'}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">{getGenericOccurrenceContent(element)}</p>
        </div>
      )}
    </div>
  );
};

export default OccurrenceTab;
