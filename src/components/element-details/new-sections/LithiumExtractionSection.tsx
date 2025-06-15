
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const LithiumExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>From brine (most common):</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Evaporation of lithium-rich brine in solar ponds</li>
            <li>Concentration over 12-18 months</li>
            <li>Chemical precipitation to remove impurities</li>
            <li>Conversion to lithium carbonate (Li₂CO₃)</li>
          </ul>
          <div><strong>From hard rock mining:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Mining of spodumene ore</li>
            <li>Thermal treatment at 1000-1100°C</li>
            <li>Acid leaching and purification</li>
            <li>More energy-intensive than brine extraction</li>
          </ul>
          <div><strong>Electrolytic production:</strong> Molten LiCl electrolysis for pure metal</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LithiumExtractionSection;
