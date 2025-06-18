
import React from "react";
import { Element } from "../../../data/elementTypes";
import HydrogenSafetySection from "../new-sections/HydrogenSafetySection";
import HeliumSafetySection from "../new-sections/HeliumSafetySection";
import LithiumSafetySection from "../new-sections/LithiumSafetySection";
import BerylliumSafetySection from "../new-sections/BerylliumSafetySection";
import BoronSafetySection from "../new-sections/BoronSafetySection";
import CarbonSafetySection from "../new-sections/CarbonSafetySection";
import NeonSafetySection from "../new-sections/NeonSafetySection";
import SodiumSafetySection from "../new-sections/SodiumSafetySection";
import MagnesiumSafetySection from "../new-sections/MagnesiumSafetySection";
import AluminumSafetySection from "../new-sections/AluminumSafetySection";
import SiliconSafetySection from "../new-sections/SiliconSafetySection";
import PhosphorusSafetySection from "../new-sections/PhosphorusSafetySection";
import SulfurSafetySection from "../new-sections/SulfurSafetySection";
import FluorineSafetySection from "../new-sections/FluorineSafetySection";
import { useLanguage } from "../../../context/LanguageContext";

const SafetyTab = ({ element }: { element: Element }) => {
  const { language } = useLanguage();
  
  const getGenericSafetyContent = (element: Element) => {
    if (language === 'ru') {
      return `Меры безопасности при работе с элементом ${element.name} (${element.symbol}) включают соблюдение стандартных лабораторных и промышленных протоколов. Необходимо учитывать химические свойства элемента и потенциальные риски при его использовании.`;
    } else if (language === 'uk') {
      return `Заходи безпеки при роботі з елементом ${element.name} (${element.symbol}) включають дотримання стандартних лабораторних та промислових протоколів. Необхідно враховувати хімічні властивості елемента та потенційні ризики при його використанні.`;
    } else {
      return `Safety measures when working with ${element.name} (${element.symbol}) include following standard laboratory and industrial protocols. It's important to consider the chemical properties of the element and potential risks during its use.`;
    }
  };

  return (
    <div className="text-base">
      {element.atomic === "1" ? (
        <HydrogenSafetySection />
      ) : element.atomic === "2" ? (
        <HeliumSafetySection />
      ) : element.atomic === "3" ? (
        <LithiumSafetySection />
      ) : element.atomic === "4" ? (
        <BerylliumSafetySection />
      ) : element.atomic === "5" ? (
        <BoronSafetySection />
      ) : element.atomic === "6" ? (
        <CarbonSafetySection />
      ) : element.atomic === "10" ? (
        <NeonSafetySection />
      ) : element.atomic === "11" ? (
        <SodiumSafetySection />
      ) : element.atomic === "12" ? (
        <MagnesiumSafetySection />
      ) : element.atomic === "13" ? (
        <AluminumSafetySection />
      ) : element.atomic === "14" ? (
        <SiliconSafetySection />
      ) : element.atomic === "15" ? (
        <PhosphorusSafetySection />
      ) : element.atomic === "16" ? (
        <SulfurSafetySection />
      ) : element.atomic === "9" ? (
        <FluorineSafetySection />
      ) : (
        <div className="bg-red-50 dark:bg-gray-900/40 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-red-800 dark:text-red-200">
            {language === 'ru' ? 'Меры безопасности' : language === 'uk' ? 'Заходи безпеки' : 'Safety Measures'}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">{getGenericSafetyContent(element)}</p>
        </div>
      )}
    </div>
  );
};

export default SafetyTab;
