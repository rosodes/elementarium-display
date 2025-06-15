
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ScandiumPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Melting Point:</strong> 1814 K (1541°C)</div>
          <div><strong>Boiling Point:</strong> 3109 K (2836°C)</div>
          <div><strong>Density:</strong> 2.985 g/cm³</div>
          <div><strong>Hardness (Mohs):</strong> 3.5</div>
          <div><strong>Atomic Radius:</strong> 162 pm</div>
          <div><strong>Thermal Conductivity:</strong> 15.8 W/(m·K)</div>
          <div><strong>Electrical Resistivity:</strong> 562 nΩ·m</div>
          <div><strong>Heat Capacity:</strong> 25.5 J/(mol·K)</div>
          <div><strong>Young's Modulus:</strong> 74.4 GPa</div>
          <div><strong>Shear Modulus:</strong> 29.1 GPa</div>
          <div><strong>Bulk Modulus:</strong> 56.6 GPa</div>
          <div><strong>Crystal Structure:</strong> Hexagonal</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScandiumPhysicalConstantsSection;
