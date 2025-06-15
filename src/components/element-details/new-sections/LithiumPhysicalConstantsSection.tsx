
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const LithiumPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Melting Point:</strong> 453.69 K (180.5°C)</div>
          <div><strong>Boiling Point:</strong> 1615 K (1342°C)</div>
          <div><strong>Density:</strong> 0.534 g/cm³</div>
          <div><strong>Hardness (Mohs):</strong> 0.6</div>
          <div><strong>Atomic Radius:</strong> 167 pm</div>
          <div><strong>Thermal Conductivity:</strong> 84.8 W/(m·K)</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LithiumPhysicalConstantsSection;
