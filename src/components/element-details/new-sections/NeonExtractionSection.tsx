
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
          <div><strong>Industrial production:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Fractional distillation of liquid air</li>
            <li>Cryogenic separation processes</li>
            <li>Multi-stage distillation columns</li>
            <li>High-purity separation techniques</li>
          </ul>
          <div><strong>Production process:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Air liquefaction at very low temperatures</li>
            <li>Separation based on boiling points</li>
            <li>Removal of oxygen and nitrogen</li>
            <li>Purification from other noble gases</li>
          </ul>
          <div><strong>Purification methods:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Activated carbon adsorption</li>
            <li>Molecular sieve separation</li>
            <li>Multiple distillation stages</li>
            <li>Ultra-high purity grades available</li>
          </ul>
          <div><strong>Production challenges:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Very low atmospheric concentration</li>
            <li>High energy requirements for separation</li>
            <li>Expensive production process</li>
            <li>Specialized cryogenic equipment needed</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeonExtractionSection;
