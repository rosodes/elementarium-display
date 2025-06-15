
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const LithiumCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Energy storage (65% of market):</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Lithium-ion batteries for smartphones, laptops</li>
            <li>Electric vehicle batteries</li>
            <li>Grid-scale energy storage systems</li>
          </ul>
          <div><strong>Industrial applications:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Glass and ceramics (high strength, low expansion)</li>
            <li>Lubricating greases (high temperature stability)</li>
            <li>Aluminum smelting (reduces melting point)</li>
            <li>Air conditioning systems (desiccant)</li>
          </ul>
          <div><strong>Medical:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Lithium carbonate for bipolar disorder treatment</li>
            <li>Mood stabilizer medications</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default LithiumCommercialUsesSection;
