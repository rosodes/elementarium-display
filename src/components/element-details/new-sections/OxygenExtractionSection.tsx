
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const OxygenExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Industrial production:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Fractional distillation of liquid air (most common method)</li>
            <li>Electrolysis of water: 2H₂O → 2H₂ + O₂</li>
            <li>Pressure swing adsorption (PSA) from air</li>
            <li>Membrane separation technology</li>
          </ul>
          <div><strong>Laboratory methods:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Decomposition of hydrogen peroxide: 2H₂O₂ → 2H₂O + O₂</li>
            <li>Heating potassium permanganate: 2KMnO₄ → K₂MnO₄ + MnO₂ + O₂</li>
            <li>Electrolysis of dilute sulfuric acid</li>
          </ul>
          <div><strong>Natural production:</strong> Photosynthesis by plants and algae</div>
          <div><strong>Storage:</strong> Compressed gas cylinders, liquid oxygen tanks</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OxygenExtractionSection;
