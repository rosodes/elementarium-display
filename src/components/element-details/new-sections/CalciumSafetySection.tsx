
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CalciumSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Precautions</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Physical hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Reactive with water - produces hydrogen gas</li>
            <li>Can ignite in moist air</li>
            <li>Corrosive to skin and eyes</li>
            <li>Store under inert atmosphere</li>
          </ul>
          <div><strong>Health considerations:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Essential nutrient - deficiency causes bone problems</li>
            <li>Excess can cause kidney stones</li>
            <li>Generally safe in food and supplements</li>
            <li>Important for cardiovascular health</li>
          </ul>
          <div><strong>Industrial safety:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Lime dust can cause respiratory irritation</li>
            <li>Proper ventilation required</li>
            <li>Eye protection when handling compounds</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalciumSafetySection;
