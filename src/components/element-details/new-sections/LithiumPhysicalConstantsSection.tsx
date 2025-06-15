
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
          <div><strong>Melting Point:</strong> 453.7 K (180.6°C)</div>
          <div><strong>Boiling Point:</strong> 1603 K (1330°C)</div>
          <div><strong>Density:</strong> 0.534 g/cm³</div>
          <div><strong>Hardness (Mohs):</strong> 0.6</div>
          <div><strong>Atomic Radius:</strong> 167 pm</div>
          <div><strong>Thermal Conductivity:</strong> 85 W/(m·K)</div>
          <div><strong>Electrical Resistivity:</strong> 92.8 nΩ·m</div>
          <div><strong>Heat Capacity:</strong> 24.9 J/(mol·K)</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LithiumPhysicalConstantsSection;
