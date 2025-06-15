
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NickelPhysicalConstantsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Physical Constants</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Density (20°C): 8.908 g/cm³</li>
        <li>Melting point: 1455°C</li>
        <li>Boiling point: 2913°C</li>
        <li>Color: Silvery-white, lustrous</li>
        <li>Crystal structure: Face-centered cubic (fcc)</li>
        <li>Magnetic properties: Ferromagnetic (Curie temp: 358°C)</li>
      </ul>
    </CardContent>
  </Card>
);

export default NickelPhysicalConstantsSection;
