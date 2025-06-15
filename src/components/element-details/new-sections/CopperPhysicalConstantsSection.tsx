
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CopperPhysicalConstantsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Physical Constants</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Density (20°C): 8.96 g/cm³</li>
        <li>Melting point: 1084.62°C</li>
        <li>Boiling point: 2562°C</li>
        <li>Color: Reddish-orange metallic</li>
        <li>Crystal structure: Face-centered cubic (fcc)</li>
        <li>Thermal conductivity: 401 W/(m·K) - excellent conductor</li>
        <li>Electrical conductivity: 59.6 × 10⁶ S/m - second only to silver</li>
        <li>Magnetic properties: Diamagnetic</li>
      </ul>
    </CardContent>
  </Card>
);

export default CopperPhysicalConstantsSection;
