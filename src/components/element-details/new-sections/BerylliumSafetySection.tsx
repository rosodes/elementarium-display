
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BerylliumSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-red-200 dark:border-red-700">
      <CardHeader className="bg-red-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Health Hazards</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Extreme toxicity:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Beryllium and compounds are highly toxic</li>
            <li>Chronic beryllium disease (berylliosis)</li>
            <li>Lung scarring and respiratory failure</li>
            <li>Possible carcinogen (lung cancer)</li>
          </ul>
          <div><strong>Exposure routes:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Inhalation of dust or fumes (most dangerous)</li>
            <li>Skin contact with compounds</li>
            <li>Ingestion (less common)</li>
          </ul>
          <div><strong>Safety measures:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Strict occupational exposure limits</li>
            <li>Specialized ventilation systems</li>
            <li>Personal protective equipment mandatory</li>
            <li>Regular health monitoring</li>
            <li>Waste disposal regulations</li>
          </ul>
          <div><strong>Regulations:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>OSHA permissible exposure limit: 0.2 μg/m³</li>
            <li>Classified as Group 1 carcinogen by IARC</li>
            <li>Beryllium Registry for exposed workers</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default BerylliumSafetySection;
