
import React from "react";
import { Element } from "../../../data/elementTypes";
const CompoundsTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    <h2 className="text-lg font-bold mb-2">Compounds / Chemistry</h2>
    <div className="text-sm text-gray-700 dark:text-gray-100">
      <p>Здесь будут описаны основные химические соединения и химия элемента.</p>
    </div>
  </div>
);
export default CompoundsTab;
