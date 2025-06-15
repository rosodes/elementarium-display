import React from "react";
import { Element } from "../../../data/elementTypes";
import HydrogenOccurrenceSection from "../new-sections/HydrogenOccurrenceSection";
import HeliumNaturalOccurrenceSection from "../new-sections/HeliumNaturalOccurrenceSection";
import LithiumNaturalOccurrenceSection from "../new-sections/LithiumNaturalOccurrenceSection";
import BerylliumNaturalOccurrenceSection from "../new-sections/BerylliumNaturalOccurrenceSection";
import BoronNaturalOccurrenceSection from "../new-sections/BoronNaturalOccurrenceSection";
import CarbonNaturalOccurrenceSection from "../new-sections/CarbonNaturalOccurrenceSection";

const OccurrenceTab = ({ element }: { element: Element }) => (
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
    ) : (
      <p className="text-gray-600 dark:text-gray-300 text-sm py-4 text-center rounded-lg bg-indigo-50 dark:bg-gray-900/40 font-medium max-w-xl mx-auto">
        Information about occurrence, major minerals, and main sources of this element will appear here.
      </p>
    )}
  </div>
);
export default OccurrenceTab;
