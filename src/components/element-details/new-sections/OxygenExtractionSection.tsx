
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
            <li>Fractional distillation of liquid air</li>
            <li>Pressure swing adsorption (PSA)</li>
            <li>Electrolysis of water</li>
            <li>Membrane separation technology</li>
          </ul>
          <div><strong>Laboratory methods:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Thermal decomposition of metal oxides</li>
            <li>Catalytic decomposition of hydrogen peroxide</li>
            <li>Electrolysis of dilute sulfuric acid</li>
          </ul>
          <div><strong>Biological production:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Photosynthesis by plants and algae</li>
            <li>Cyanobacteria oxygen production</li>
            <li>Artificial photosynthesis research</li>
          </ul>
          <div><strong>Purification:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Removal of nitrogen and argon</li>
            <li>Molecular sieve technology</li>
            <li>Ultra-high purity for medical use</li>
            <li>Concentration systems for therapy</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default OxygenExtractionSection;
