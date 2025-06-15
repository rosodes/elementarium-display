
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const GermaniumPhysicalConstantsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Physical Constants</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Atomic radius: 122 pm</li>
        <li>Covalent radius: 120 pm</li>
        <li>Crystal structure: Diamond cubic</li>
        <li>Thermal expansion: 6.0 × 10⁻⁶ /K</li>
        <li>Young's modulus: 103 GPa</li>
        <li>Bulk modulus: 75 GPa</li>
        <li>Hardness (Mohs): 6.0</li>
      </ul>
    </CardContent>
  </Card>
);

export default GermaniumPhysicalConstantsSection;
