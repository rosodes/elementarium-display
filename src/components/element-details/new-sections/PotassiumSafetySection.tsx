
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PotassiumSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Precautions</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Physical hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Extremely reactive with water - explosive reaction</li>
            <li>Spontaneous ignition in humid air</li>
            <li>Corrosive to skin and eyes</li>
            <li>Must be stored under mineral oil</li>
          </ul>
          <div><strong>Health considerations:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Essential nutrient - deficiency causes health problems</li>
            <li>Excess can cause hyperkalemia (dangerous)</li>
            <li>Natural radioactivity from K-40 isotope</li>
            <li>Important for heart rhythm regulation</li>
          </ul>
          <div><strong>Handling:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Never handle with wet hands</li>
            <li>Use dry inert atmosphere</li>
            <li>Emergency procedures for water contact</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PotassiumSafetySection;
