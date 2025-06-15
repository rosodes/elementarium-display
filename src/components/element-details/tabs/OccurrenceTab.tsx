
import React from "react";
import { Element } from "../../../data/elementTypes";
import HydrogenOccurrenceSection from "../new-sections/HydrogenOccurrenceSection";
const OccurrenceTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    {element.atomic === "1" ? (
      <HydrogenOccurrenceSection />
    ) : (
      <p className="text-gray-600 dark:text-gray-300 text-sm py-4 text-center rounded-lg bg-indigo-50 dark:bg-gray-900/40 font-medium max-w-xl mx-auto">
        Information about occurrence, major minerals, and main sources of this element will appear here.
      </p>
    )}
  </div>
);
export default OccurrenceTab;
