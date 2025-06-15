
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CobaltPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Melting Point:</strong> 1768 K (1495°C)</div>
          <div><strong>Boiling Point:</strong> 3200 K (2927°C)</div>
          <div><strong>Density:</strong> 8.90 g/cm³</div>
          <div><strong>Hardness (Mohs):</strong> 5.0</div>
          <div><strong>Atomic Radius:</strong> 125 pm</div>
          <div><strong>Thermal Conductivity:</strong> 100 W/(m·K)</div>
          <div><strong>Electrical Resistivity:</strong> 62.4 nΩ·m</div>
          <div><strong>Heat Capacity:</strong> 24.81 J/(mol·K)</div>
          <div><strong>Young's Modulus:</strong> 209 GPa</div>
          <div><strong>Shear Modulus:</strong> 75 GPa</div>
          <div><strong>Bulk Modulus:</strong> 180 GPa</div>
          <div><strong>Crystal Structure:</strong> Hexagonal close-packed</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CobaltPhysicalConstantsSection;
