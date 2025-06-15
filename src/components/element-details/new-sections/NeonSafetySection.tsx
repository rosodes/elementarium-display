
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NeonSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety Information</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>General safety:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Non-toxic and chemically inert</li>
            <li>No known biological effects</li>
            <li>Does not react with body tissues</li>
            <li>Generally considered safe</li>
          </ul>
          <div><strong>Physical hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Can cause asphyxiation by displacing oxygen</li>
            <li>High-pressure gas requires proper handling</li>
            <li>Extremely cold liquid can cause frostbite</li>
          </ul>
          <div><strong>Handling precautions:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Ensure adequate ventilation</li>
            <li>Use proper gas handling equipment</li>
            <li>Protect from extremely cold liquid</li>
            <li>Store cylinders upright and secured</li>
          </ul>
          <div><strong>Emergency measures:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Move to fresh air if oxygen-depleted environment</li>
            <li>Treat cold burns with standard first aid</li>
            <li>No specific antidote needed</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeonSafetySection;
