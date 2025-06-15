
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const AluminumPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Atomic mass:</strong> 26.982 u</div>
          <div><strong>Density:</strong> 2.70 g/cm³</div>
          <div><strong>Melting point:</strong> 933.47 K (660.32°C)</div>
          <div><strong>Boiling point:</strong> 2792 K (2519°C)</div>
          <div><strong>Heat of fusion:</strong> 10.71 kJ/mol</div>
          <div><strong>Heat of vaporization:</strong> 294.0 kJ/mol</div>
          <div><strong>Thermal conductivity:</strong> 237 W/(m·K)</div>
          <div><strong>Electrical resistivity:</strong> 26.5 nΩ·m</div>
          <div><strong>Young's modulus:</strong> 70 GPa</div>
          <div><strong>Shear modulus:</strong> 26 GPa</div>
          <div><strong>Bulk modulus:</strong> 76 GPa</div>
          <div><strong>Hardness (Brinell):</strong> 245 MPa</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AluminumPhysicalConstantsSection;
