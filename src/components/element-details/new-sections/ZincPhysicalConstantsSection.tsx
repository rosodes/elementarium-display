
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ZincPhysicalConstantsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Physical Constants</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Density (20°C): 7.14 g/cm³</li>
        <li>Melting point: 419.5°C</li>
        <li>Boiling point: 907°C</li>
        <li>Color: Bluish-white, lustrous metal</li>
        <li>Crystal structure: Hexagonal close-packed (hcp)</li>
        <li>Magnetic properties: Diamagnetic</li>
        <li>Electrical conductivity: Good conductor</li>
        <li>Thermal conductivity: 116 W/(m·K)</li>
      </ul>
    </CardContent>
  </Card>
);

export default ZincPhysicalConstantsSection;
