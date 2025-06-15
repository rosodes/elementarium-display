
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CalciumPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Melting Point:</strong> 1115 K (842°C)</div>
          <div><strong>Boiling Point:</strong> 1757 K (1484°C)</div>
          <div><strong>Density:</strong> 1.54 g/cm³</div>
          <div><strong>Hardness (Mohs):</strong> 1.75</div>
          <div><strong>Atomic Radius:</strong> 197 pm</div>
          <div><strong>Thermal Conductivity:</strong> 201 W/(m·K)</div>
          <div><strong>Electrical Resistivity:</strong> 33.6 nΩ·m</div>
          <div><strong>Heat Capacity:</strong> 25.9 J/(mol·K)</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalciumPhysicalConstantsSection;
