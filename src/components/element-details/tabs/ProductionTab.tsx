
import React from "react";
import { Element } from "../../../data/elementTypes";
import HydrogenProductionSection from "../new-sections/HydrogenProductionSection";
const ProductionTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    {element.atomic === "1" ? (
      <HydrogenProductionSection />
    ) : (
      <p className="text-gray-600 dark:text-gray-300 text-sm py-4 text-center rounded-lg bg-lime-50 dark:bg-gray-900/40 font-medium max-w-xl mx-auto">
        Информация о методах получения, промышленной продукции и синтезе элемента появится здесь.
      </p>
    )}
  </div>
);
export default ProductionTab;
