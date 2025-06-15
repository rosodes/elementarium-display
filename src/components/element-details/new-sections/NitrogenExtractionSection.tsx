
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Industrial production:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Fractional distillation of liquid air</li>
            <li>Air separation plants (cryogenic distillation)</li>
            <li>Pressure swing adsorption (PSA)</li>
            <li>Membrane separation technology</li>
          </ul>
          <div><strong>Laboratory methods:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Thermal decomposition of ammonium nitrite</li>
            <li>Reaction of ammonia with copper oxide</li>
            <li>Decomposition of sodium azide</li>
          </ul>
          <div><strong>Nitrogen compound production:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Haber-Bosch process for ammonia</li>
            <li>Ostwald process for nitric acid</li>
            <li>Direct synthesis of nitrogen compounds</li>
          </ul>
          <div><strong>Purification:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Removal of oxygen and moisture</li>
            <li>Catalytic purification</li>
            <li>Molecular sieve filtration</li>
            <li>Ultra-high purity grades available</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default NitrogenExtractionSection;
