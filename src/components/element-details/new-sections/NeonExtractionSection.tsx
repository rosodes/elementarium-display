
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NeonExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Primary source:</strong> Atmospheric air</div>
          <div><strong>Extraction process:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Fractional distillation of liquid air</li>
            <li>Separation at -246°C to -248°C</li>
            <li>Multiple distillation cycles required</li>
            <li>Final purification to remove impurities</li>
          </ul>
          <div><strong>Production facilities:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Air separation plants</li>
            <li>Cryogenic distillation columns</li>
            <li>High-purity gas production</li>
          </ul>
          <div><strong>Challenges:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Low atmospheric concentration (18 ppm)</li>
            <li>Energy-intensive process</li>
            <li>Expensive compared to other gases</li>
            <li>Requires specialized equipment</li>
          </ul>
          <div><strong>Major producers:</strong> Companies with air separation plants</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeonExtractionSection;
