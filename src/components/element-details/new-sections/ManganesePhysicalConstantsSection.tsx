
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Физические константы марганца
const ManganesePhysicalConstantsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Physical Constants</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Density (20°C): 7.44 g/cm³</li>
        <li>Melting point: 1246°C</li>
        <li>Boiling point: 2061°C</li>
        <li>Color: Silver-gray, metallic</li>
        <li>Crystal structure: Body-centered cubic (α-Mn) and others</li>
        <li>Magnetic properties: Paramagnetic</li>
      </ul>
    </CardContent>
  </Card>
);
export default ManganesePhysicalConstantsSection;
