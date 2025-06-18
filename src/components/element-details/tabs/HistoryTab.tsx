
import React from "react";
import { Element } from "../../../data/elementTypes";
import HydrogenHistoryCompositeSection from "../new-sections/HydrogenHistoryCompositeSection";
import HeliumHistorySection from "../new-sections/HeliumHistorySection";
import LithiumHistorySection from "../new-sections/LithiumHistorySection";
import BerylliumHistorySection from "../new-sections/BerylliumHistorySection";
import BoronHistorySection from "../new-sections/BoronHistorySection";
import CarbonHistorySection from "../new-sections/CarbonHistorySection";
import NitrogenHistorySection from "../new-sections/NitrogenHistorySection";
import OxygenHistorySection from "../new-sections/OxygenHistorySection";
import FluorineHistorySection from "../new-sections/FluorineHistorySection";
import NeonHistorySection from "../new-sections/NeonHistorySection";
import SodiumHistorySection from "../new-sections/SodiumHistorySection";
import MagnesiumHistorySection from "../new-sections/MagnesiumHistorySection";
import AluminumHistorySection from "../new-sections/AluminumHistorySection";
import SiliconHistorySection from "../new-sections/SiliconHistorySection";
import PhosphorusHistorySection from "../new-sections/PhosphorusHistorySection";
import SulfurHistorySection from "../new-sections/SulfurHistorySection";
import { useLanguage } from "../../../context/LanguageContext";

const HistoryTab = ({ element }: { element: Element }) => {
  const { language } = useLanguage();
  
  const getGenericHistoryContent = (element: Element) => {
    if (language === 'ru') {
      return `История открытия элемента ${element.name} (${element.symbol}) включает в себя научные исследования и открытия, которые привели к его идентификации и изучению. Этот элемент был открыт в результате систематических исследований в области химии и физики.`;
    } else if (language === 'uk') {
      return `Історія відкриття елемента ${element.name} (${element.symbol}) включає наукові дослідження та відкриття, які привели до його ідентифікації та вивчення. Цей елемент було відкрито в результаті систематичних досліджень у галузі хімії та фізики.`;
    } else {
      return `The discovery history of ${element.name} (${element.symbol}) includes scientific research and discoveries that led to its identification and study. This element was discovered through systematic research in chemistry and physics.`;
    }
  };

  return (
    <div className="text-base">
      {element.atomic === "1" ? (
        <HydrogenHistoryCompositeSection />
      ) : element.atomic === "2" ? (
        <HeliumHistorySection />
      ) : element.atomic === "3" ? (
        <LithiumHistorySection />
      ) : element.atomic === "4" ? (
        <BerylliumHistorySection />
      ) : element.atomic === "5" ? (
        <BoronHistorySection />
      ) : element.atomic === "6" ? (
        <CarbonHistorySection />
      ) : element.atomic === "7" ? (
        <NitrogenHistorySection />
      ) : element.atomic === "8" ? (
        <OxygenHistorySection />
      ) : element.atomic === "9" ? (
        <FluorineHistorySection />
      ) : element.atomic === "10" ? (
        <NeonHistorySection />
      ) : element.atomic === "11" ? (
        <SodiumHistorySection />
      ) : element.atomic === "12" ? (
        <MagnesiumHistorySection />
      ) : element.atomic === "13" ? (
        <AluminumHistorySection />
      ) : element.atomic === "14" ? (
        <SiliconHistorySection />
      ) : element.atomic === "15" ? (
        <PhosphorusHistorySection />
      ) : element.atomic === "16" ? (
        <SulfurHistorySection />
      ) : (
        <div className="bg-orange-50 dark:bg-gray-900/40 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-orange-800 dark:text-orange-200">
            {language === 'ru' ? 'История открытия' : language === 'uk' ? 'Історія відкриття' : 'Discovery History'}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">{getGenericHistoryContent(element)}</p>
        </div>
      )}
    </div>
  );
};

export default HistoryTab;
