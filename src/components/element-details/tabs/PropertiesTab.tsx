
import React from "react";
import { Element } from "../../../data/elementTypes";
import ElementOxidationStatesSection from "../ElementOxidationStatesSection";
import ElementProperties from "../ElementProperties";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { useLanguage } from "../../../context/LanguageContext";
// --- подключаем общие секции деталей элементов ---
import HydrogenDetailSections from "../new-sections/HydrogenDetailSections";
import HeliumDetailSections from "../new-sections/HeliumDetailSections";
import LithiumDetailSections from "../new-sections/LithiumDetailSections";
import CarbonDetailSections from "../new-sections/CarbonDetailSections";
import NitrogenDetailSections from "../new-sections/NitrogenDetailSections";

interface PropertiesTabProps {
  element: Element;
  categoryColor?: string;
}

const PropertiesTab = ({ element, categoryColor }: PropertiesTabProps) => {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>{t.elementDetails.oxidationStates || "Oxidation States"}</CardTitle>
        </CardHeader>
        <CardContent>
          <ElementOxidationStatesSection element={element} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>{t.elementDetails.commonProperties || "Common Properties"}</CardTitle>
        </CardHeader>
        <CardContent>
          <ElementProperties element={element} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>{t.elementDetails.density || "Density"}</CardTitle>
        </CardHeader>
        <CardContent>
          {element?.density?.stp
            ? `${element.density.stp} g/cm³`
            : t.elementDetails.notAvailable}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>{t.elementDetails.conductivity || "Conductivity"}</CardTitle>
        </CardHeader>
        <CardContent>
          {element?.conductivity?.thermal
            ? `${element.conductivity.thermal} W/(m·K)`
            : t.elementDetails.notAvailable}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>{t.elementDetails.valence || "Valence Electrons"}</CardTitle>
        </CardHeader>
        <CardContent>
          {element.valence || t.elementDetails.notAvailable}
        </CardContent>
      </Card>

      {/* --- Все расширенные карточки элементов централизовано --- */}
      {element.atomic === "1" && <HydrogenDetailSections />}
      {element.atomic === "2" && <HeliumDetailSections />}
      {element.atomic === "3" && <LithiumDetailSections />}
      {element.atomic === "6" && <CarbonDetailSections />}
      {element.atomic === "7" && <NitrogenDetailSections />}
    </div>
  );
};

export default PropertiesTab;
