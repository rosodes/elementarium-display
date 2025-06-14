import React from "react";
import { Element } from "../../../data/elementTypes";
import ElementToxicitySection from "../ElementToxicitySection";
import ElementHistorySection from "../ElementHistorySection";

interface OverviewTabProps {
  element: Element;
}

const OverviewTab = ({ element }: OverviewTabProps) => {
  return (
    <div>
      <ElementToxicitySection element={element} />
      <ElementHistorySection element={element} />
    </div>
  );
};

export default OverviewTab;
