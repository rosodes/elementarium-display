
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Физические константы железа
const IronPhysicalConstantsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Physical Constants</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="grid grid-cols-2 gap-2">
        <div><strong>Melting Point:</strong> 1811 K (1538°C)</div>
        <div><strong>Boiling Point:</strong> 3134 K (2861°C)</div>
        <div><strong>Density:</strong> 7.87 g/cm³ (at 20°C)</div>
        <div><strong>Atomic Radius:</strong> 126 pm (empirical)</div>
        <div><strong>Thermal Conductivity:</strong> 80.4 W/(m·K)</div>
        <div><strong>Hardness (Mohs):</strong> ~4</div>
      </div>
    </CardContent>
  </Card>
);

export default IronPhysicalConstantsSection;
