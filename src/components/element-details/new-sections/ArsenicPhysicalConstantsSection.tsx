
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ArsenicPhysicalConstantsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Physical Constants</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Atomic radius: 139 pm</li>
        <li>Covalent radius: 119 pm</li>
        <li>Density: 5.78 g/cm³ (gray arsenic)</li>
        <li>Melting point: 817°C (at 28 atm pressure)</li>
        <li>Boiling point: 614°C (sublimes)</li>
        <li>Crystal structure: Rhombohedral</li>
        <li>Color: Metallic gray (stable form)</li>
        <li>Thermal conductivity: 50 W/(m·K)</li>
      </ul>
    </CardContent>
  </Card>
);

export default ArsenicPhysicalConstantsSection;
