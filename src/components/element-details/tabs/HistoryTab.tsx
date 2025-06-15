
import React from "react";
import { Element } from "../../../data/elementTypes";
const HistoryTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    <h2 className="text-lg font-bold mb-2">History / Discovery</h2>
    <div className="text-sm text-gray-700 dark:text-gray-100">
      <p>Информация об открытии, этимологии, исторических фактах и первооткрывателях элемента появится здесь.</p>
    </div>
  </div>
);
export default HistoryTab;
