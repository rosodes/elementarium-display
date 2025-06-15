import React from "react";
import { Element } from "../../../data/elementTypes";
import HydrogenBioSection from "../new-sections/HydrogenBioSection";
import LithiumBioSection from "../new-sections/LithiumBioSection";
import BerylliumBioSection from "../new-sections/BerylliumBioSection";
const BioTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    {element.atomic === "1" ? (
      <HydrogenBioSection />
    ) : element.atomic === "3" ? (
      <LithiumBioSection />
    ) : element.atomic === "4" ? (
      <BerylliumBioSection />
    ) : (
      <p className="text-gray-600 dark:text-gray-300 text-sm py-4 text-center rounded-lg bg-rose-50 dark:bg-gray-900/40 font-medium max-w-xl mx-auto">
        Information about biological role, toxicity, or lack thereof will be displayed here for this element.
      </p>
    )}
  </div>
);
export default BioTab;
