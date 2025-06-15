
import React from "react";
import { Element } from "../../../data/elementTypes";
const BioTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    <h2 className="text-lg font-bold mb-2">Biological Role / Toxicity</h2>
    <div className="text-sm text-gray-700 dark:text-gray-100">
      <p>Информация о биологической роли, токсичности или отсутствии таковых для элемента будет отображаться здесь.</p>
    </div>
  </div>
);
export default BioTab;
