
import React from "react";
import { Element } from "../../../data/elementTypes";
import HydrogenSafetySection from "../new-sections/HydrogenSafetySection";
const SafetyTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    {element.atomic === "1" ? (
      <HydrogenSafetySection />
    ) : (
      <p className="text-gray-600 dark:text-gray-300 text-sm py-4 text-center rounded-lg bg-red-50 dark:bg-gray-900/40 font-medium max-w-xl mx-auto">
        Safety precautions, hazards, handling and disposal guidelines for this element will be displayed here.
      </p>
    )}
  </div>
);
export default SafetyTab;
