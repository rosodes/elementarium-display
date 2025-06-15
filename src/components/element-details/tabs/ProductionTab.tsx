
import React from "react";
import { Element } from "../../../data/elementTypes";
import HydrogenProductionSection from "../new-sections/HydrogenProductionSection";
import LithiumExtractionSection from "../new-sections/LithiumExtractionSection";
const ProductionTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    {element.atomic === "1" ? (
      <HydrogenProductionSection />
    ) : element.atomic === "3" ? (
      <LithiumExtractionSection />
    ) : (
      <p className="text-gray-600 dark:text-gray-300 text-sm py-4 text-center rounded-lg bg-lime-50 dark:bg-gray-900/40 font-medium max-w-xl mx-auto">
        Methods of production, industrial synthesis and relevant data for this element will be shown here.
      </p>
    )}
  </div>
);
export default ProductionTab;
