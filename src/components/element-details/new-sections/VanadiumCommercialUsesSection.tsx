
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Коммерческое применение ванадия
const VanadiumCommercialUsesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Commercial Uses</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Over 80% is used to produce high-strength low-alloy steel (tools, beams, pipelines)</li>
        <li>Used in jet engines, springs, cutting tools</li>
        <li>Key role in vanadium redox-flow batteries for energy storage</li>
        <li>Catalyst in chemical industry (e.g., sulfuric acid production)</li>
      </ul>
    </CardContent>
  </Card>
);

export default VanadiumCommercialUsesSection;
