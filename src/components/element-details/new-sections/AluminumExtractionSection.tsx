
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const AluminumExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Hall-Héroult process (primary method):</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Electrolysis of alumina (Al₂O₃) in molten cryolite</li>
            <li>Temperature: 950-980°C</li>
            <li>Reaction: 2Al₂O₃ → 4Al + 3O₂</li>
            <li>Very energy-intensive process</li>
          </ul>
          <div><strong>Bayer process (alumina production):</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Extracts alumina from bauxite ore</li>
            <li>Uses sodium hydroxide at high temperature</li>
            <li>Removes impurities like iron oxide</li>
          </ul>
          <div><strong>Production scale:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Global production: ~65 million tonnes/year</li>
            <li>Major producers: China, Russia, Canada, UAE</li>
            <li>Requires ~13-15 kWh per kg of aluminum</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default AluminumExtractionSection;
