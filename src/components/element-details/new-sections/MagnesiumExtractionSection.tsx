
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const MagnesiumExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Production & Extraction</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Primary methods:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Electrolysis of molten magnesium chloride (Dow process)</li>
            <li>Thermal reduction of magnesium oxide with silicon (Pidgeon process)</li>
            <li>Electrolysis of fused magnesium chloride from seawater</li>
          </ul>
          <div><strong>Seawater extraction process:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Precipitation with lime: Mg²⁺ + Ca(OH)₂ → Mg(OH)₂ + Ca²⁺</li>
            <li>Treatment with HCl to form MgCl₂</li>
            <li>Electrolysis: MgCl₂ → Mg + Cl₂</li>
          </ul>
          <div><strong>Pidgeon process:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>2MgO + Si → 2Mg + SiO₂ (at 1200°C under vacuum)</li>
            <li>Used primarily in China</li>
            <li>More energy-intensive but simpler equipment</li>
          </ul>
          <div><strong>Global production:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>China: ~85% of world production</li>
            <li>Total production: ~1.1 million tonnes annually</li>
            <li>Growing demand from automotive industry</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default MagnesiumExtractionSection;
