
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Физические константы ванадия
const VanadiumPhysicalConstantsSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Physical Constants</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="grid grid-cols-2 gap-2">
        <div><strong>Melting Point:</strong> 2183 K (1910°C)</div>
        <div><strong>Boiling Point:</strong> 3680 K (3407°C)</div>
        <div><strong>Density:</strong> 6.11 g/cm³</div>
        <div><strong>Atomic Radius:</strong> 134 pm (empirical)</div>
        <div><strong>Thermal Conductivity:</strong> 30.7 W/(m·K)</div>
        <div><strong>Hardness (Mohs):</strong> ~7</div>
      </div>
    </CardContent>
  </Card>
);

export default VanadiumPhysicalConstantsSection;
