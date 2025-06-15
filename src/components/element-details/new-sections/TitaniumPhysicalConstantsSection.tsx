
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const TitaniumPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Melting Point:</strong> 1941 K (1668°C)</div>
          <div><strong>Boiling Point:</strong> 3560 K (3287°C)</div>
          <div><strong>Density:</strong> 4.506 g/cm³</div>
          <div><strong>Hardness (Mohs):</strong> 6.0</div>
          <div><strong>Atomic Radius:</strong> 147 pm</div>
          <div><strong>Thermal Conductivity:</strong> 21.9 W/(m·K)</div>
          <div><strong>Electrical Resistivity:</strong> 420 nΩ·m</div>
          <div><strong>Heat Capacity:</strong> 25.06 J/(mol·K)</div>
          <div><strong>Young's Modulus:</strong> 116 GPa</div>
          <div><strong>Shear Modulus:</strong> 44 GPa</div>
          <div><strong>Bulk Modulus:</strong> 110 GPa</div>
          <div><strong>Crystal Structure:</strong> Hexagonal</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TitaniumPhysicalConstantsSection;
