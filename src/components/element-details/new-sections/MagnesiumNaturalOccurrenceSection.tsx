
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const MagnesiumNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Abundance:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>8th most abundant element in Earth's crust (2.3%)</li>
            <li>3rd most abundant element dissolved in seawater</li>
            <li>Never found free in nature due to high reactivity</li>
          </ul>
          <div><strong>Main minerals:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Dolomite (CaMg(CO₃)₂)</li>
            <li>Magnesite (MgCO₃)</li>
            <li>Olivine ((Mg,Fe)₂SiO₄)</li>
            <li>Serpentine (Mg₃Si₂O₅(OH)₄)</li>
            <li>Talc (Mg₃Si₄O₁₀(OH)₂)</li>
            <li>Carnallite (KMgCl₃·6H₂O)</li>
          </ul>
          <div><strong>Sources:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Seawater and brine wells</li>
            <li>Magnesium-rich minerals and rocks</li>
            <li>Chlorophyll in all green plants</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default MagnesiumNaturalOccurrenceSection;
