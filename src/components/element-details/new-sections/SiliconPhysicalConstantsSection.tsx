
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SiliconPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Atomic mass:</strong> 28.085 u</div>
          <div><strong>Density:</strong> 2.3296 g/cm³</div>
          <div><strong>Melting point:</strong> 1687 K (1414°C)</div>
          <div><strong>Boiling point:</strong> 3538 K (3265°C)</div>
          <div><strong>Heat of fusion:</strong> 50.21 kJ/mol</div>
          <div><strong>Heat of vaporization:</strong> 383 kJ/mol</div>
          <div><strong>Thermal conductivity:</strong> 149 W/(m·K)</div>
          <div><strong>Electrical resistivity:</strong> 10³ Ω·m (pure)</div>
          <div><strong>Young's modulus:</strong> 130-188 GPa</div>
          <div><strong>Shear modulus:</strong> 51-80 GPa</div>
          <div><strong>Bulk modulus:</strong> 100 GPa</div>
          <div><strong>Hardness (Mohs):</strong> 6.5</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SiliconPhysicalConstantsSection;
