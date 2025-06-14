import React from "react";
import { Element } from "../../../data/elementTypes";
import ElementOxidationStatesSection from "../ElementOxidationStatesSection";
import ElementProperties from "../ElementProperties";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { useLanguage } from "../../../context/LanguageContext";

interface PropertiesTabProps {
  element: Element;
  categoryColor?: string;
}

const PropertiesTab = ({ element, categoryColor }: PropertiesTabProps) => {
  const { t } = useLanguage();

  // Расширенный набор карточек свойств (можно вынести в отдельные компоненты)
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

      {/* ДОПОЛНЕНИЯ ДЛЯ ВОДОРОДА */}
      {element.atomic === "1" && (
        <>
          <HydrogenPhysicalConstantsSection />
          <HydrogenOxStatesSection />
          <HydrogenReactivitySection />
          <HydrogenNaturalOccurrenceSection />
        </>
      )}
    </div>
  );
};

export default PropertiesTab;
