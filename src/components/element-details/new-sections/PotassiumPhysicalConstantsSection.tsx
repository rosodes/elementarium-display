
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PotassiumPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Melting Point:</strong> 336.7 K (63.5°C)</div>
          <div><strong>Boiling Point:</strong> 1032 K (759°C)</div>
          <div><strong>Density:</strong> 0.862 g/cm³</div>
          <div><strong>Hardness (Mohs):</strong> 0.4</div>
          <div><strong>Atomic Radius:</strong> 243 pm</div>
          <div><strong>Thermal Conductivity:</strong> 102.5 W/(m·K)</div>
          <div><strong>Electrical Resistivity:</strong> 72 nΩ·m</div>
          <div><strong>Heat Capacity:</strong> 29.6 J/(mol·K)</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PotassiumPhysicalConstantsSection;
