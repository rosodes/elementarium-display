
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PhosphorusSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-red-200 dark:border-red-700">
      <CardHeader className="bg-red-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Handling</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>White phosphorus hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Extremely pyrophoric - ignites spontaneously in air</li>
            <li>Highly toxic and can cause severe burns</li>
            <li>Fatal dose: 50-100mg for adults</li>
            <li>Must be stored under water</li>
          </ul>
          <div><strong>Red phosphorus safety:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Much safer than white phosphorus</li>
            <li>Non-toxic and stable in air</li>
            <li>Can convert to toxic white form when heated</li>
          </ul>
          <div><strong>Health effects:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Phosphorus poisoning affects liver and bones</li>
            <li>"Phossy jaw" - necrosis from chronic exposure</li>
            <li>Essential nutrient in proper amounts</li>
          </ul>
          <div><strong>Handling precautions:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Use inert atmosphere for white phosphorus</li>
            <li>Proper ventilation essential</li>
            <li>Emergency procedures for fires</li>
            <li>Specialized storage and transport</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhosphorusSafetySection;
