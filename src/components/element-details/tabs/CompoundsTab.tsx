
import React from "react";
import { Element } from "../../../data/elementTypes";
import HydrogenCompoundsSection from "../new-sections/HydrogenCompoundsSection";
import LithiumOxStatesSection from "../new-sections/LithiumOxStatesSection";
import LithiumReactivitySection from "../new-sections/LithiumReactivitySection";
const CompoundsTab = ({ element }: { element: Element }) => (
  <div className="text-base space-y-6">
    {element.atomic === "1" ? (
      <HydrogenCompoundsSection />
    ) : element.atomic === "3" ? (
      <>
        <LithiumOxStatesSection />
        <LithiumReactivitySection />
      </>
    ) : (
      <p className="text-gray-600 dark:text-gray-300 text-sm py-4 text-center rounded-lg bg-emerald-50 dark:bg-gray-900/40 font-medium max-w-xl mx-auto">
        Here you will find essential information about key compounds and chemistry of this element.
      </p>
    )}
  </div>
);
export default CompoundsTab;
