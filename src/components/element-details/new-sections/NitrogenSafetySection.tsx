
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Health</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>General safety:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Nitrogen gas is non-toxic but can cause asphyxiation</li>
            <li>Liquid nitrogen causes severe frostbite</li>
            <li>High pressure nitrogen can be dangerous</li>
            <li>Some nitrogen compounds are explosive</li>
          </ul>
          <div><strong>Health considerations:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Essential for life (proteins, DNA)</li>
            <li>Nitrogen narcosis in deep diving</li>
            <li>Decompression sickness (nitrogen bubbles)</li>
            <li>Nitrous oxide has anesthetic properties</li>
          </ul>
          <div><strong>Environmental impact:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Nitrogen oxides contribute to smog</li>
            <li>Nitrate pollution in waterways</li>
            <li>Eutrophication from excess nitrogen</li>
            <li>Greenhouse gas emissions (N₂O)</li>
          </ul>
          <div><strong>Handling precautions:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Ensure adequate ventilation</li>
            <li>Use proper PPE for liquid nitrogen</li>
            <li>Monitor oxygen levels in confined spaces</li>
            <li>Safe storage and transport procedures</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default NitrogenSafetySection;
