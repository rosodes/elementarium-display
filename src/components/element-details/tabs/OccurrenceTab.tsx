
import React from "react";
import { Element } from "../../../data/elementTypes";
const OccurrenceTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    <h2 className="text-lg font-bold mb-2">Occurrence / Abundance</h2>
    <div className="text-sm text-gray-700 dark:text-gray-100">
      <p>Здесь будет расписана распространённость, основные минералы и источники элемента.</p>
    </div>
  </div>
);
export default OccurrenceTab;
