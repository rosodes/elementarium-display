
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

const SafetyTab = ({ element }: { element: Element }) => (
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
    ) : (
      <p className="text-gray-600 dark:text-gray-300 text-sm py-4 text-center rounded-lg bg-red-50 dark:bg-gray-900/40 font-medium max-w-xl mx-auto">
        Safety precautions, hazards, handling and disposal guidelines for this element will be displayed here.
      </p>
    )}
  </div>
);
export default SafetyTab;
