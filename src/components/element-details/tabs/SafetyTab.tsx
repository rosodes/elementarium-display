
import React from "react";
import { Element } from "../../../data/elementTypes";
const SafetyTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    <h2 className="text-lg font-bold mb-2">Safety / Precautions</h2>
    <div className="text-sm text-gray-700 dark:text-gray-100">
      <p>Данные о мерах безопасности, утилизации, опасностях и нормах для этого элемента будут показаны здесь.</p>
    </div>
  </div>
);
export default SafetyTab;
