import React from "react";
import { Element } from "../../../data/elementTypes";
import HydrogenOxStatesSection from "../new-sections/HydrogenOxStatesSection";
import HeliumOxStatesSection from "../new-sections/HeliumOxStatesSection";
import LithiumOxStatesSection from "../new-sections/LithiumOxStatesSection";
import BerylliumOxStatesSection from "../new-sections/BerylliumOxStatesSection";
import BoronOxStatesSection from "../new-sections/BoronOxStatesSection";
import CarbonOxStatesSection from "../new-sections/CarbonOxStatesSection";
import NitrogenOxStatesSection from "../new-sections/NitrogenOxStatesSection";
import OxygenOxStatesSection from "../new-sections/OxygenOxStatesSection";
import FluorineOxStatesSection from "../new-sections/FluorineOxStatesSection";
import NeonOxStatesSection from "../new-sections/NeonOxStatesSection";
import SodiumOxStatesSection from "../new-sections/SodiumOxStatesSection";
import MagnesiumOxStatesSection from "../new-sections/MagnesiumOxStatesSection";
import AluminumOxStatesSection from "../new-sections/AluminumOxStatesSection";
import SiliconOxStatesSection from "../new-sections/SiliconOxStatesSection";
import PhosphorusOxStatesSection from "../new-sections/PhosphorusOxStatesSection";
import SulfurOxStatesSection from "../new-sections/SulfurOxStatesSection";

const CompoundsTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    {element.atomic === "1" ? (
      <HydrogenOxStatesSection />
    ) : element.atomic === "2" ? (
      <HeliumOxStatesSection />
    ) : element.atomic === "3" ? (
      <LithiumOxStatesSection />
    ) : element.atomic === "4" ? (
      <BerylliumOxStatesSection />
    ) : element.atomic === "5" ? (
      <BoronOxStatesSection />
    ) : element.atomic === "6" ? (
      <CarbonOxStatesSection />
    ) : element.atomic === "7" ? (
      <NitrogenOxStatesSection />
    ) : element.atomic === "8" ? (
      <OxygenOxStatesSection />
    ) : element.atomic === "9" ? (
      <FluorineOxStatesSection />
    ) : element.atomic === "10" ? (
      <NeonOxStatesSection />
    ) : element.atomic === "11" ? (
      <SodiumOxStatesSection />
    ) : element.atomic === "12" ? (
      <MagnesiumOxStatesSection />
    ) : element.atomic === "13" ? (
      <AluminumOxStatesSection />
    ) : element.atomic === "14" ? (
      <SiliconOxStatesSection />
    ) : element.atomic === "15" ? (
      <PhosphorusOxStatesSection />
    ) : element.atomic === "16" ? (
      <SulfurOxStatesSection />
    ) : (
      <p className="text-gray-600 dark:text-gray-300 text-sm py-4 text-center rounded-lg bg-purple-50 dark:bg-gray-900/40 font-medium max-w-xl mx-auto">
        Information about compounds, chemical properties, and typical reactions of this element will be displayed here.
      </p>
    )}
  </div>
);
export default CompoundsTab;
