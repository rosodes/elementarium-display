
import React from "react";
import { Element } from "../../../data/elementTypes";
const ProductionTab = ({ element }: { element: Element }) => (
  <div className="text-base">
    <h2 className="text-lg font-bold mb-2">Production / Synthesis</h2>
    <div className="text-sm text-gray-700 dark:text-gray-100">
      <p>Информация о методах получения, промышленной продукции и синтезе элемента появится здесь.</p>
    </div>
  </div>
);
export default ProductionTab;
