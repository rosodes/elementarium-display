
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Физические константы хрома
const ChromiumPhysicalConstantsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Physical Constants</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Density (20°C): 7.19 g/cm³</li>
        <li>Melting point: 1907°C</li>
        <li>Boiling point: 2671°C</li>
        <li>Color: Steel-gray, lustrous</li>
        <li>Crystal structure: Body-centered cubic (bcc)</li>
        <li>Magnetic properties: Antiferromagnetic</li>
      </ul>
    </CardContent>
  </Card>
);
export default ChromiumPhysicalConstantsSection;
