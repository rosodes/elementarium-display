
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BoronPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Atomic mass:</strong> 10.81 u</div>
          <div><strong>Density:</strong> 2.34 g/cm³</div>
          <div><strong>Melting point:</strong> 2349 K (2076°C)</div>
          <div><strong>Boiling point:</strong> 4200 K (3927°C)</div>
          <div><strong>Heat of fusion:</strong> 50.2 kJ/mol</div>
          <div><strong>Heat of vaporization:</strong> 507 kJ/mol</div>
          <div><strong>Thermal conductivity:</strong> 27.4 W/(m·K)</div>
          <div><strong>Electrical resistivity:</strong> &gt;10¹² Ω·m</div>
          <div><strong>Young's modulus:</strong> 320 GPa</div>
          <div><strong>Shear modulus:</strong> 180 GPa</div>
          <div><strong>Bulk modulus:</strong> 320 GPa</div>
          <div><strong>Hardness (Mohs):</strong> 9.3</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BoronPhysicalConstantsSection;
