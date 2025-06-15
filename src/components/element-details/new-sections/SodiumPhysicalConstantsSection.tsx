
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SodiumPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Atomic mass:</strong> 22.990 u</div>
          <div><strong>Density:</strong> 0.968 g/cm³</div>
          <div><strong>Melting point:</strong> 370.87 K (97.72°C)</div>
          <div><strong>Boiling point:</strong> 1156 K (883°C)</div>
          <div><strong>Heat of fusion:</strong> 2.60 kJ/mol</div>
          <div><strong>Heat of vaporization:</strong> 97.42 kJ/mol</div>
          <div><strong>Thermal conductivity:</strong> 142 W/(m·K)</div>
          <div><strong>Electrical resistivity:</strong> 47.7 nΩ·m</div>
          <div><strong>Young's modulus:</strong> 10 GPa</div>
          <div><strong>Shear modulus:</strong> 3.3 GPa</div>
          <div><strong>Bulk modulus:</strong> 6.3 GPa</div>
          <div><strong>Hardness (Mohs):</strong> 0.5</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SodiumPhysicalConstantsSection;
