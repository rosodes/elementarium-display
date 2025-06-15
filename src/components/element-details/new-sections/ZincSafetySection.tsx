
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ZincSafetySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety & Health</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Essential nutrient - required for health</li>
        <li>Zinc deficiency causes growth problems</li>
        <li>Excessive intake can interfere with copper absorption</li>
        <li>Zinc fumes can cause metal fume fever</li>
        <li>Generally safe for normal handling</li>
        <li>Important for immune system function</li>
      </ul>
    </CardContent>
  </Card>
);

export default ZincSafetySection;
