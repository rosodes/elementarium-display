
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Natural extraction:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Mining of coal deposits</li>
            <li>Diamond mining from kimberlite pipes</li>
            <li>Graphite mining from metamorphic rocks</li>
            <li>Petroleum and natural gas extraction</li>
          </ul>
          <div><strong>Industrial production:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Charcoal from wood pyrolysis</li>
            <li>Coke from coal processing</li>
            <li>Carbon black from incomplete combustion</li>
            <li>Activated carbon from various sources</li>
          </ul>
          <div><strong>Synthetic carbon materials:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Synthetic diamonds under high pressure</li>
            <li>Chemical vapor deposition for graphene</li>
            <li>Carbon nanotube synthesis</li>
            <li>Fullerene production by arc discharge</li>
          </ul>
          <div><strong>Purification methods:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>High-temperature treatment</li>
            <li>Chemical purification</li>
            <li>Mechanical separation</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarbonExtractionSection;
