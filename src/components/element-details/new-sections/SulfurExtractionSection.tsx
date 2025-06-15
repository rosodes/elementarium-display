
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SulfurExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Frasch process (historical):</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Melt underground sulfur with superheated water</li>
            <li>Force molten sulfur to surface with compressed air</li>
            <li>Produces 99.5% pure sulfur</li>
            <li>Used for salt dome deposits</li>
          </ul>
          <div><strong>Modern methods:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Recovery from natural gas and petroleum</li>
            <li>Claus process: H₂S → S + H₂O</li>
            <li>Roasting sulfide ores</li>
            <li>Recovery from smelter gases</li>
          </ul>
          <div><strong>Biological production:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Sulfur bacteria in hot springs</li>
            <li>Biodesulfurization processes</li>
          </ul>
          <div><strong>Production scale:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Global production: ~70 million tonnes/year</li>
            <li>Major producers: China, USA, Russia</li>
            <li>Mainly from petroleum refining</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SulfurExtractionSection;
