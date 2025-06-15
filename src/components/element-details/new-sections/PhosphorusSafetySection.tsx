
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PhosphorusSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-red-200 dark:border-red-700">
      <CardHeader className="bg-red-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Health</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>White phosphorus hazards:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Highly toxic - lethal dose 15mg for children, 100mg adults</li>
            <li>Causes severe burns on skin contact</li>
            <li>Spontaneously combustible in air</li>
            <li>Must be stored under water</li>
          </ul>
          <div><strong>Red phosphorus safety:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Much safer than white phosphorus</li>
            <li>Non-toxic in normal handling</li>
            <li>Stable at room temperature</li>
          </ul>
          <div><strong>Workplace precautions:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Use in well-ventilated areas</li>
            <li>Avoid skin and eye contact</li>
            <li>Emergency shower facilities required</li>
            <li>Proper fire suppression systems</li>
            <li>Regular health monitoring for workers</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhosphorusSafetySection;
