
import React from "react";
import { Element } from "../../../data/elementTypes";
import ElementOxidationStatesSection from "../ElementOxidationStatesSection";
import ElementProperties from "../ElementProperties";

interface PropertiesTabProps {
  element: Element;
  categoryColor?: string;
}

const PropertiesTab = ({ element, categoryColor }: PropertiesTabProps) => {
  return (
    <div>
      <ElementOxidationStatesSection element={element} />
      <ElementProperties element={element} />
    </div>
  );
};

export default PropertiesTab;
