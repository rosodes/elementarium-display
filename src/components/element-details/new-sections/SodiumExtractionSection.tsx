
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SodiumExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Primary method - Downs cell process:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Electrolysis of molten NaCl at 600°C</li>
            <li>CaCl₂ added to lower melting point</li>
            <li>Reaction: 2NaCl → 2Na + Cl₂</li>
            <li>Sodium floats on molten salt and is collected</li>
          </ul>
          <div><strong>Historical methods:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Castner process - reduction of NaOH with carbon</li>
            <li>Thermal reduction of Na₂CO₃ with carbon</li>
          </ul>
          <div><strong>Production scale:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Global production: ~280,000 tonnes/year</li>
            <li>Major producers: USA, Russia, Germany</li>
            <li>High energy requirements for electrolysis</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SodiumExtractionSection;
