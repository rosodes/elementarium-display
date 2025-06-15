
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const FluorineExtractionSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Extraction & Production</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Industrial production:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Electrolysis of potassium fluoride in anhydrous HF</li>
            <li>KF-2HF mixture at 70-130°C</li>
            <li>Carbon anodes and steel cathodes</li>
            <li>Extremely corrosive process</li>
          </ul>
          <div><strong>Raw materials:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Fluorite (CaF₂) - main ore</li>
            <li>Converted to hydrogen fluoride first</li>
            <li>High-purity materials required</li>
          </ul>
          <div><strong>Special equipment:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Nickel or Monel metal containers</li>
            <li>Fluorine-resistant materials only</li>
            <li>Elaborate safety systems</li>
            <li>Dry conditions essential</li>
          </ul>
          <div><strong>Production challenges:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Extreme reactivity with most materials</li>
            <li>High energy requirements</li>
            <li>Specialized handling equipment</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default FluorineExtractionSection;
