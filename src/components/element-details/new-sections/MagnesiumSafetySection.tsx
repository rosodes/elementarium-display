
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const MagnesiumSafetySection: React.FC = () => (
  <Card className="my-4 border border-yellow-200 dark:border-yellow-700">
    <CardHeader className="bg-yellow-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety & Precautions</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div><strong>Hazards:</strong></div>
        <ul className="list-disc pl-4">
          <li>Finely divided magnesium (dust, powder, ribbon) is highly flammable</li>
          <li>Burns with an extremely hot, brilliant white flame (UV and infrared hazard)</li>
          <li>Magnesium fires cannot be extinguished with water—can cause hydrogen gas explosion</li>
          <li>Reacts with acids, releasing flammable hydrogen gas</li>
        </ul>
        <div><strong>Handling:</strong></div>
        <ul className="list-disc pl-4">
          <li>Store in dry conditions, away from sources of ignition</li>
          <li>Wear protective gloves, safety goggles, and lab coat when handling powder/ribbon</li>
        </ul>
        <div><strong>Firefighting:</strong> Use dry chemical (Class D), sand, or special extinguishers for magnesium fires. Never use water or CO<sub>2</sub> extinguishers.</div>
      </div>
    </CardContent>
  </Card>
);

export default MagnesiumSafetySection;
