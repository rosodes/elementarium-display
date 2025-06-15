import React from "react";
import { Element } from "../../../data/elementTypes";
import HydrogenCompoundsSection from "../new-sections/HydrogenCompoundsSection";
import HeliumCompoundsSection from "../new-sections/HeliumCompoundsSection";
import LithiumCompoundsSection from "../new-sections/LithiumCompoundsSection";
import BerylliumCompoundsSection from "../new-sections/BerylliumCompoundsSection";
import BoronCompoundsSection from "../new-sections/BoronCompoundsSection";
import CarbonCompoundsSection from "../new-sections/CarbonCompoundsSection";
import NitrogenCompoundsSection from "../new-sections/NitrogenCompoundsSection";
import OxygenCompoundsSection from "../new-sections/OxygenCompoundsSection";
import FluorineOxStatesSection from "../new-sections/FluorineOxStatesSection";
import NeonCompoundsSection from "../new-sections/NeonCompoundsSection";

const CompoundsTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    {element.atomic === "1" ? (
      <HydrogenCompoundsSection />
    ) : element.atomic === "2" ? (
      <HeliumCompoundsSection />
    ) : element.atomic === "3" ? (
      <LithiumCompoundsSection />
    ) : element.atomic === "4" ? (
      <BerylliumCompoundsSection />
    ) : element.atomic === "5" ? (
      <BoronCompoundsSection />
    ) : element.atomic === "6" ? (
      <CarbonCompoundsSection />
    ) : element.atomic === "7" ? (
      <NitrogenCompoundsSection />
    ) : element.atomic === "8" ? (
      <OxygenCompoundsSection />
    ) : element.atomic === "9" ? (
      <FluorineOxStatesSection />
    ) : element.atomic === "10" ? (
      <NeonCompoundsSection />
    ) : (
      <p className="text-gray-600 dark:text-gray-300 text-sm py-4 text-center rounded-lg bg-teal-50 dark:bg-gray-900/40 font-medium max-w-xl mx-auto">
        Information about chemical compounds and main classes of compounds for this element will be shown here.
      </p>
    )}
  </div>
);

export default CompoundsTab;
