
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ZincPhysicalConstantsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Physical Constants</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Melting point: 419.53°C (692.68 K)</li>
        <li>Boiling point: 907°C (1180 K)</li>
        <li>Density: 7.14 g/cm³ (at 20°C)</li>
        <li>Atomic radius: 134 pm (empirical)</li>
        <li>Covalent radius: 122 pm</li>
        <li>Crystal structure: hexagonal close-packed</li>
        <li>Thermal conductivity: 116 W/(m·K)</li>
        <li>Electrical resistivity: 59.0 nΩ·m (at 20°C)</li>
      </ul>
    </CardContent>
  </Card>
);

export default ZincPhysicalConstantsSection;
