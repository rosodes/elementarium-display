
import React from "react";
import { Element } from "../../../data/elementTypes";
import ElementOxidationStatesSection from "../ElementOxidationStatesSection";
import ElementProperties from "../ElementProperties";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import PhysicalProperties from '../PhysicalProperties';
import { useLanguage } from "../../../context/LanguageContext";
// --- подключаем общие секции деталей элементов ---
import HydrogenDetailSections from "../new-sections/HydrogenDetailSections";
import HeliumDetailSections from "../new-sections/HeliumDetailSections";
import LithiumDetailSections from "../new-sections/LithiumDetailSections";
import BerylliumDetailSections from "../new-sections/BerylliumDetailSections";
import BoronDetailSections from "../new-sections/BoronDetailSections";
import CarbonDetailSections from "../new-sections/CarbonDetailSections";
import NitrogenDetailSections from "../new-sections/NitrogenDetailSections";
import OxygenDetailSections from "../new-sections/OxygenDetailSections";
import FluorineDetailSections from "../new-sections/FluorineDetailSections";
import NeonDetailSections from "../new-sections/NeonDetailSections";
import SodiumDetailSections from "../new-sections/SodiumDetailSections";
import MagnesiumDetailSections from "../new-sections/MagnesiumDetailSections";
import AluminumDetailSections from "../new-sections/AluminumDetailSections";
import SiliconDetailSections from "../new-sections/SiliconDetailSections";
import PhosphorusDetailSections from "../new-sections/PhosphorusDetailSections";
import SulfurDetailSections from "../new-sections/SulfurDetailSections";
import ChlorineDetailSections from "../new-sections/ChlorineDetailSections";
import ArgonDetailSections from "../new-sections/ArgonDetailSections";
import PotassiumDetailSections from "../new-sections/PotassiumDetailSections";
import CalciumDetailSections from "../new-sections/CalciumDetailSections";

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
      {element.atomic === "4" && <BerylliumDetailSections />}
      {element.atomic === "5" && <BoronDetailSections />}
      {element.atomic === "6" && <CarbonDetailSections />}
      {element.atomic === "7" && <NitrogenDetailSections />}
      {element.atomic === "8" && <OxygenDetailSections />}
      {element.atomic === "9" && <FluorineDetailSections />}
      {element.atomic === "10" && <NeonDetailSections />}
      {element.atomic === "11" && <SodiumDetailSections />}
      {element.atomic === "12" && <MagnesiumDetailSections />}
      {element.atomic === "13" && <AluminumDetailSections />}
      {element.atomic === "14" && <SiliconDetailSections />}
      {element.atomic === "15" && <PhosphorusDetailSections />}
      {element.atomic === "16" && <SulfurDetailSections />}
      {element.atomic === "17" && <ChlorineDetailSections />}
      {element.atomic === "18" && <ArgonDetailSections />}
      {element.atomic === "19" && <PotassiumDetailSections />}
      {element.atomic === "20" && <CalciumDetailSections />}
    </div>
  );
};

export default PropertiesTab;
