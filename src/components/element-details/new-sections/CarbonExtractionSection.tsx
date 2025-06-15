
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
          <div><strong>Diamond mining:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Open-pit mining of kimberlite pipes</li>
            <li>Underground mining for deeper deposits</li>
            <li>Alluvial mining from river deposits</li>
            <li>Marine mining from ocean floors</li>
          </ul>
          <div><strong>Graphite production:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Natural graphite mining from metamorphic rocks</li>
            <li>Synthetic graphite from petroleum coke</li>
            <li>High-temperature treatment (2500-3000°C)</li>
          </ul>
          <div><strong>Industrial carbon:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Coal mining for energy and steel production</li>
            <li>Carbon black from incomplete combustion of hydrocarbons</li>
            <li>Activated carbon from organic materials</li>
            <li>Carbon fiber from polyacrylonitrile (PAN)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarbonExtractionSection;
