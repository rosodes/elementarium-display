
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const LithiumSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Precautions</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Physical hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Highly reactive with water - violent reaction</li>
            <li>Corrosive to skin, eyes, and respiratory system</li>
            <li>Fire hazard - burns with intense heat</li>
            <li>Must be stored under mineral oil or inert atmosphere</li>
          </ul>
          <div><strong>Health considerations:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Lithium compounds have narrow therapeutic window</li>
            <li>Overdose can cause lithium toxicity</li>
            <li>Regular blood monitoring required for medical use</li>
            <li>Can affect kidney and thyroid function</li>
          </ul>
          <div><strong>Environmental:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Brine extraction can impact local water supplies</li>
            <li>Battery recycling is crucial for sustainability</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default LithiumSafetySection;
