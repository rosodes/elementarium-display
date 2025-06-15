import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BoronNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Abundance in Earth's crust:</strong> 10 ppm</div>
          <div><strong>Main minerals & ores:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Borax (Na₂B₄O₇·10H₂O) — principal industrial source</li>
            <li>Kernite (Na₂B₄O₇·4H₂O), colemanite, ulexite, tourmaline</li>
          </ul>
          <div><strong>Global deposits:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Turkey — world’s largest resources and production</li>
            <li>United States (California), South America, Russia, China</li>
          </ul>
          <div><strong>In the biosphere:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Essential micronutrient for plants, vital for cell walls and growth</li>
            <li>Natural waters contain low levels (sea: ~4.6 ppm boron)</li>
          </ul>
          <div><strong>Atmospheric and cosmic presence:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Rare cosmically: made by cosmic ray spallation in interstellar space</li>
            <li>Traces found in meteorites</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default BoronNaturalOccurrenceSection;
