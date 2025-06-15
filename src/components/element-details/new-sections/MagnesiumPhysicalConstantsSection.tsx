
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const MagnesiumPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Atomic mass:</strong> 24.305 u</div>
          <div><strong>Density:</strong> 1.738 g/cm³</div>
          <div><strong>Melting point:</strong> 923 K (650°C)</div>
          <div><strong>Boiling point:</strong> 1363 K (1090°C)</div>
          <div><strong>Heat of fusion:</strong> 8.48 kJ/mol</div>
          <div><strong>Heat of vaporization:</strong> 128 kJ/mol</div>
          <div><strong>Thermal conductivity:</strong> 156 W/(m·K)</div>
          <div><strong>Electrical resistivity:</strong> 43.9 nΩ·m</div>
          <div><strong>Young's modulus:</strong> 45 GPa</div>
          <div><strong>Shear modulus:</strong> 17 GPa</div>
          <div><strong>Bulk modulus:</strong> 45 GPa</div>
          <div><strong>Hardness (Brinell):</strong> 260-440 MPa</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MagnesiumPhysicalConstantsSection;
