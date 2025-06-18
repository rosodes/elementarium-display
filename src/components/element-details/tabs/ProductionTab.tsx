
import React from "react";
import { Element } from "../../../data/elementTypes";
import HydrogenProductionSection from "../new-sections/HydrogenProductionSection";
import HeliumExtractionSection from "../new-sections/HeliumExtractionSection";
import LithiumExtractionSection from "../new-sections/LithiumExtractionSection";
import BerylliumExtractionSection from "../new-sections/BerylliumExtractionSection";
import BoronExtractionSection from "../new-sections/BoronExtractionSection";
import CarbonExtractionSection from "../new-sections/CarbonExtractionSection";
import NitrogenExtractionSection from "../new-sections/NitrogenExtractionSection";
import OxygenExtractionSection from "../new-sections/OxygenExtractionSection";
import FluorineExtractionSection from "../new-sections/FluorineExtractionSection";
import NeonExtractionSection from "../new-sections/NeonExtractionSection";
import SodiumExtractionSection from "../new-sections/SodiumExtractionSection";
import MagnesiumExtractionSection from "../new-sections/MagnesiumExtractionSection";
import AluminumExtractionSection from "../new-sections/AluminumExtractionSection";
import SiliconExtractionSection from "../new-sections/SiliconExtractionSection";
import PhosphorusExtractionSection from "../new-sections/PhosphorusExtractionSection";
import SulfurExtractionSection from "../new-sections/SulfurExtractionSection";
import { useLanguage } from "../../../context/LanguageContext";

const ProductionTab = ({ element }: { element: Element }) => {
  const { language } = useLanguage();
  
  const getGenericProductionContent = (element: Element) => {
    if (language === 'ru') {
      return `Производство элемента ${element.name} (${element.symbol}) включает в себя различные промышленные и лабораторные методы. Способы получения зависят от природных источников элемента и его химических свойств.`;
    } else if (language === 'uk') {
      return `Виробництво елемента ${element.name} (${element.symbol}) включає різні промислові та лабораторні методи. Способи отримання залежать від природних джерел елемента та його хімічних властивостей.`;
    } else {
      return `Production of ${element.name} (${element.symbol}) involves various industrial and laboratory methods. Production methods depend on natural sources of the element and its chemical properties.`;
    }
  };

  return (
    <div className="text-base">
      {element.atomic === "1" ? (
        <HydrogenProductionSection />
      ) : element.atomic === "2" ? (
        <HeliumExtractionSection />
      ) : element.atomic === "3" ? (
        <LithiumExtractionSection />
      ) : element.atomic === "4" ? (
        <BerylliumExtractionSection />
      ) : element.atomic === "5" ? (
        <BoronExtractionSection />
      ) : element.atomic === "6" ? (
        <CarbonExtractionSection />
      ) : element.atomic === "7" ? (
        <NitrogenExtractionSection />
      ) : element.atomic === "8" ? (
        <OxygenExtractionSection />
      ) : element.atomic === "9" ? (
        <FluorineExtractionSection />
      ) : element.atomic === "10" ? (
        <NeonExtractionSection />
      ) : element.atomic === "11" ? (
        <SodiumExtractionSection />
      ) : element.atomic === "12" ? (
        <MagnesiumExtractionSection />
      ) : element.atomic === "13" ? (
        <AluminumExtractionSection />
      ) : element.atomic === "14" ? (
        <SiliconExtractionSection />
      ) : element.atomic === "15" ? (
        <PhosphorusExtractionSection />
      ) : element.atomic === "16" ? (
        <SulfurExtractionSection />
      ) : (
        <div className="bg-purple-50 dark:bg-gray-900/40 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-purple-800 dark:text-purple-200">
            {language === 'ru' ? 'Методы производства' : language === 'uk' ? 'Методи виробництва' : 'Production Methods'}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">{getGenericProductionContent(element)}</p>
        </div>
      )}
    </div>
  );
};

export default ProductionTab;
