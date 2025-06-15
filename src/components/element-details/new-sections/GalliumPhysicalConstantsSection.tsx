
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const GalliumPhysicalConstantsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Physical Constants</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Melting point: 29.76°C (302.91 K) - melts in hand!</li>
        <li>Boiling point: 2204°C (2477 K)</li>
        <li>Density: 5.91 g/cm³ (liquid), 5.904 g/cm³ (solid)</li>
        <li>Atomic radius: 187 pm (empirical)</li>
        <li>Covalent radius: 122 pm</li>
        <li>Crystal structure: orthorhombic</li>
        <li>Thermal conductivity: 40.6 W/(m·K)</li>
        <li>Electrical resistivity: 270 nΩ·m (at 20°C)</li>
      </ul>
    </CardContent>
  </Card>
);

export default GalliumPhysicalConstantsSection;
