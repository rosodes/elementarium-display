
import React from "react";
import { Element } from "../../../data/elementTypes";
import HydrogenNaturalOccurrenceSection from "../new-sections/HydrogenNaturalOccurrenceSection";
import HeliumNaturalOccurrenceSection from "../new-sections/HeliumNaturalOccurrenceSection";
import LithiumNaturalOccurrenceSection from "../new-sections/LithiumNaturalOccurrenceSection";
import BerylliumNaturalOccurrenceSection from "../new-sections/BerylliumNaturalOccurrenceSection";
import BoronNaturalOccurrenceSection from "../new-sections/BoronNaturalOccurrenceSection";
import CarbonNaturalOccurrenceSection from "../new-sections/CarbonNaturalOccurrenceSection";
import NitrogenNaturalOccurrenceSection from "../new-sections/NitrogenNaturalOccurrenceSection";
import OxygenNaturalOccurrenceSection from "../new-sections/OxygenNaturalOccurrenceSection";
import NeonNaturalOccurrenceSection from "../new-sections/NeonNaturalOccurrenceSection";
import SodiumNaturalOccurrenceSection from "../new-sections/SodiumNaturalOccurrenceSection";
import MagnesiumNaturalOccurrenceSection from "../new-sections/MagnesiumNaturalOccurrenceSection";
import AluminumNaturalOccurrenceSection from "../new-sections/AluminumNaturalOccurrenceSection";
import SiliconNaturalOccurrenceSection from "../new-sections/SiliconNaturalOccurrenceSection";
import PhosphorusNaturalOccurrenceSection from "../new-sections/PhosphorusNaturalOccurrenceSection";
import SulfurNaturalOccurrenceSection from "../new-sections/SulfurNaturalOccurrenceSection";
import FluorineNaturalOccurrenceSection from "../new-sections/FluorineNaturalOccurrenceSection";

const OccurrenceTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    {element.atomic === "1" ? (
      <HydrogenNaturalOccurrenceSection />
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
      <p className="text-gray-600 dark:text-gray-300 text-sm py-4 text-center rounded-lg bg-green-50 dark:bg-gray-900/40 font-medium max-w-xl mx-auto">
        Information about abundance and occurrence of this element in nature will be displayed here.
      </p>
    )}
  </div>
);
export default OccurrenceTab;
