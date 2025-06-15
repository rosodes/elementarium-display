
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ArgonExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Primary method - Air separation:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Fractional distillation of liquid air</li>
            <li>Air is cooled and compressed until it liquefies</li>
            <li>Different boiling points separate components</li>
            <li>Argon collected between oxygen and nitrogen fractions</li>
          </ul>
          <div><strong>Purification steps:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Removal of oxygen by hot copper</li>
            <li>Removal of nitrogen by selective adsorption</li>
            <li>Final purification to 99.99%+ purity</li>
          </ul>
          <div><strong>Alternative sources:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Recovery from ammonia synthesis plants</li>
            <li>Natural gas processing facilities</li>
            <li>Steel manufacturing exhaust gases</li>
          </ul>
          <div><strong>Production scale:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Global production: ~1.5 million tonnes/year</li>
            <li>Co-produced with oxygen and nitrogen</li>
            <li>Energy-intensive cryogenic process</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArgonExtractionSection;
