import React from 'react';
import { Element } from '../../../data/elementTypes';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '../../../context/LanguageContext';
import PhysicalProperties from '../PhysicalProperties';
import ElementProperties from '../ElementProperties';
import AdditionalInfo from '../AdditionalInfo';
import ElementOxidationStatesSection from '../ElementOxidationStatesSection';

// Import detail sections for each element
import HydrogenDetailSections from "../new-sections/HydrogenDetailSections";
import HeliumDetailSections from "../new-sections/HeliumDetailSections";
import LithiumDetailSections from "../new-sections/LithiumDetailSections";
import BerylliumDetailSections from "../new-sections/BerylliumDetailSections";
import BoronDetailSections from "../new-sections/BoronDetailSections";
import CarbonDetailSections from "../new-sections/CarbonDetailSections";
import NitrogenDetailSections from "../new-sections/NitrogenDetailSections";
import OxygenDetailSections from "../new-sections/OxygenDetailSections";
import FluorineDetailSections from "../new-sections/FluorineDetailSections";
import NeonDetailSections from "../new-sections/NeonDetailSections";
import SodiumDetailSections from "../new-sections/SodiumDetailSections";
import MagnesiumDetailSections from "../new-sections/MagnesiumDetailSections";
import AluminumDetailSections from "../new-sections/AluminumDetailSections";
import SiliconDetailSections from "../new-sections/SiliconDetailSections";
import PhosphorusDetailSections from "../new-sections/PhosphorusDetailSections";
import SulfurDetailSections from "../new-sections/SulfurDetailSections";
import ChlorineDetailSections from "../new-sections/ChlorineDetailSections";
import ArgonDetailSections from "../new-sections/ArgonDetailSections";
import PotassiumDetailSections from "../new-sections/PotassiumDetailSections";
import CalciumDetailSections from "../new-sections/CalciumDetailSections";
import ScandiumDetailSections from "../new-sections/ScandiumDetailSections";
import TitaniumDetailSections from "../new-sections/TitaniumDetailSections";
import VanadiumDetailSections from "../new-sections/VanadiumDetailSections";
import ChromiumDetailSections from "../new-sections/ChromiumDetailSections";
import ManganeseDetailSections from "../new-sections/ManganeseDetailSections";
import IronDetailSections from "../new-sections/IronDetailSections";
import CobaltDetailSections from "../new-sections/CobaltDetailSections";
import NickelDetailSections from "../new-sections/NickelDetailSections";
import CopperDetailSections from "../new-sections/CopperDetailSections";
import ZincDetailSections from "../new-sections/ZincDetailSections";
import GalliumDetailSections from "../new-sections/GalliumDetailSections";
import GermaniumDetailSections from "../new-sections/GermaniumDetailSections";
import ArsenicDetailSections from "../new-sections/ArsenicDetailSections";
import SeleniumDetailSections from "../new-sections/SeleniumDetailSections";
import BromineDetailSections from "../new-sections/BromineDetailSections";

interface PropertiesTabProps {
  element: Element;
  categoryColor: string;
}

const PropertiesTab = ({ element, categoryColor }: PropertiesTabProps) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6 max-w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PhysicalProperties element={element} />
        <ElementProperties element={element} />
      </div>
      
      <Separator className="my-6 bg-gray-200 dark:bg-gray-700" />
      
      <AdditionalInfo element={element} />
      
      <Separator className="my-6 bg-gray-200 dark:bg-gray-700" />
      
      <ElementOxidationStatesSection element={element} />

      {/* --- ДОПОЛНИТЕЛЬНЫЕ СЕКЦИИ ДЛЯ КАЖДОГО ЭЛЕМЕНТА --- */}
      {element.atomic === "1" && <HydrogenDetailSections />}
      {element.atomic === "1" && (
        <div className="p-4 rounded-lg border border-blue-100 bg-blue-50 dark:bg-gray-800 my-2">
          <h3 className="font-semibold text-blue-700 dark:text-blue-200 mb-2 text-base">Физические и химические характеристики (стандартные условия):</h3>
          <ul className="text-xs pl-4 list-disc marker:text-blue-400">
            <li>Агрегатное состояние: газ</li>
            <li>Молекулярная масса (H₂): 2.01588 г/моль; атомная масса: 1.00784 (IUPAC)</li>
            <li>Цвет: отсутствует; Запах: отсутствует; Вкус: отсутствует</li>
            <li>Плотность (H₂): 0.08988 г/л при 0 °C и 1 атм</li>
            <li>Температура плавления: 13.99 K (–259.16 °C)</li>
            <li>Температура кипения: 20.271 K (–252.88 °C)</li>
            <li>Теплопроводность: 0.1805 Вт/(м К) (H₂, 27 °C)</li>
            <li>Электропроводность: не проводит в обычных условиях</li>
            <li>Электроотрицательность (Полинг): 2.20</li>
            <li>Энергия ионизации: 1312.0 кДж/моль</li>
            <li>Атомный радиус: 53 пм (расчётный), ковалентный — 37 пм</li>
            <li>Магнитные свойства: диамагнетик</li>
          </ul>
          <div className="mt-2 text-[11px] text-gray-500">
            Источники: IUPAC, CRC Handbook, WebElements
          </div>
        </div>
      )}
      {element.atomic === "2" && <HeliumDetailSections />}
      {element.atomic === "3" && <LithiumDetailSections />}
      {element.atomic === "4" && <BerylliumDetailSections />}
      {element.atomic === "5" && <BoronDetailSections />}
      {element.atomic === "6" && <CarbonDetailSections />}
      {element.atomic === "7" && <NitrogenDetailSections />}
      {element.atomic === "8" && <OxygenDetailSections />}
      {element.atomic === "9" && <FluorineDetailSections />}
      {element.atomic === "10" && <NeonDetailSections />}
      {element.atomic === "11" && <SodiumDetailSections />}
      {element.atomic === "12" && <MagnesiumDetailSections />}
      {element.atomic === "13" && <AluminumDetailSections />}
      {element.atomic === "14" && <SiliconDetailSections />}
      {element.atomic === "15" && <PhosphorusDetailSections />}
      {element.atomic === "16" && <SulfurDetailSections />}
      {element.atomic === "17" && <ChlorineDetailSections />}
      {element.atomic === "18" && <ArgonDetailSections />}
      {element.atomic === "19" && <PotassiumDetailSections />}
      {element.atomic === "20" && <CalciumDetailSections />}
      {element.atomic === "21" && <ScandiumDetailSections />}
      {element.atomic === "22" && <TitaniumDetailSections />}
      {element.atomic === "23" && <VanadiumDetailSections />}
      {element.atomic === "24" && <ChromiumDetailSections />}
      {element.atomic === "25" && <ManganeseDetailSections />}
      {element.atomic === "26" && <IronDetailSections />}
      {element.atomic === "27" && <CobaltDetailSections />}
      {element.atomic === "28" && <NickelDetailSections />}
      {element.atomic === "29" && <CopperDetailSections />}
      {element.atomic === "30" && <ZincDetailSections />}
      {element.atomic === "31" && <GalliumDetailSections />}
      {element.atomic === "32" && <GermaniumDetailSections />}
      {element.atomic === "33" && <ArsenicDetailSections />}
      {element.atomic === "34" && <SeleniumDetailSections />}
      {element.atomic === "35" && <BromineDetailSections />}
    </div>
  );
};

export default PropertiesTab;
