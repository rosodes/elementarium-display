
import React from "react";
import { Element } from "../../../data/elementTypes";
import ElementPieChartSection from "./ElementPieChartSection";
import ElementBarChartSection from "./ElementBarChartSection";

// Можно добавить сюда новые визуальные секции позже
const ElementDetailVisualSections: React.FC<{ element: Element }> = ({ element }) => (
  <>
    <ElementPieChartSection element={element} />
    <ElementBarChartSection element={element} />
  </>
);

export default ElementDetailVisualSections;
