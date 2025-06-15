
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
          <div><strong>Main sources:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Borax (Na₂B₄O₇·10H₂O) - most important ore</li>
            <li>Kernite (Na₂B₄O₇·4H₂O)</li>
            <li>Colemanite (CaB₃O₄(OH)₃·H₂O)</li>
            <li>Ulexite (NaCaB₅O₆(OH)₆·5H₂O)</li>
            <li>Tourmaline group minerals</li>
          </ul>
          <div><strong>Major deposits:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Turkey (world's largest producer)</li>
            <li>United States (California)</li>
            <li>Argentina</li>
            <li>Chile</li>
            <li>Russia</li>
          </ul>
          <div><strong>Biological role:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Essential micronutrient for plants</li>
            <li>Important for cell wall formation</li>
            <li>Required for pollen tube growth</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default BoronNaturalOccurrenceSection;
