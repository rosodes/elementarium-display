
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
            <li>Highly reactive with water—fires/explosions possible</li>
            <li>Corrosive to skin and eyes</li>
          </ul>
          <div><strong>Health considerations:</strong> Low-level exposure in salts may affect nervous system</div>
          <div><strong>Handling:</strong> Only under oil/inert atmosphere; no contact with water</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LithiumSafetySection;
