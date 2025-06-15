
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BerylliumPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Atomic mass:</strong> 9.012 u</div>
          <div><strong>Density:</strong> 1.85 g/cm³</div>
          <div><strong>Melting point:</strong> 1560 K (1287°C)</div>
          <div><strong>Boiling point:</strong> 2742 K (2469°C)</div>
          <div><strong>Heat of fusion:</strong> 7.95 kJ/mol</div>
          <div><strong>Heat of vaporization:</strong> 297 kJ/mol</div>
          <div><strong>Thermal conductivity:</strong> 200 W/(m·K)</div>
          <div><strong>Electrical resistivity:</strong> 36 nΩ·m</div>
          <div><strong>Young's modulus:</strong> 287 GPa</div>
          <div><strong>Shear modulus:</strong> 132 GPa</div>
          <div><strong>Bulk modulus:</strong> 130 GPa</div>
          <div><strong>Hardness (Mohs):</strong> 5.5</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BerylliumPhysicalConstantsSection;
