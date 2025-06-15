
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
            <li>Air separation (cryogenic distillation) - most common method</li>
            <li>Pressure swing adsorption (PSA)</li>
            <li>Membrane separation</li>
            <li>Fractional distillation of liquid air</li>
          </ul>
          <div><strong>Laboratory methods:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Decomposition of sodium azide: 2NaN₃ → 2Na + 3N₂</li>
            <li>Thermal decomposition of ammonium nitrite: NH₄NO₂ → N₂ + 2H₂O</li>
            <li>Reaction of ammonia with copper oxide at high temperature</li>
          </ul>
          <div><strong>Purification:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Removal of oxygen using hot copper or hydrogen</li>
            <li>Carbon dioxide removal with alkali solutions</li>
            <li>Water removal using desiccants</li>
          </ul>
          <div><strong>Annual production:</strong> Over 150 million tonnes worldwide</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NitrogenExtractionSection;
