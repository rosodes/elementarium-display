
import React from "react";
import { Element } from "../../../data/elementTypes";
import HydrogenHistorySection from "../new-sections/HydrogenHistorySection";
import LithiumHistorySection from "../new-sections/LithiumHistorySection";
const HistoryTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    {element.atomic === "1" ? (
      <HydrogenHistorySection />
    ) : element.atomic === "3" ? (
      <LithiumHistorySection />
    ) : (
      <p className="text-gray-600 dark:text-gray-300 text-sm py-4 text-center rounded-lg bg-orange-50 dark:bg-gray-900/40 font-medium max-w-xl mx-auto">
        Information about discovery, etymology, historical facts and discoverers of this element will be shown here.
      </p>
    )}
  </div>
);
export default HistoryTab;
