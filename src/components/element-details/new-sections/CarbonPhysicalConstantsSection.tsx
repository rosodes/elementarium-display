
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Atomic mass:</strong> 12.011 u</div>
          <div><strong>Density (graphite):</strong> 2.267 g/cm³</div>
          <div><strong>Density (diamond):</strong> 3.515 g/cm³</div>
          <div><strong>Melting point:</strong> 3915 K (3642°C)</div>
          <div><strong>Boiling point:</strong> 4300 K (4027°C)</div>
          <div><strong>Sublimation point:</strong> 3915 K</div>
          <div><strong>Heat of fusion:</strong> 117 kJ/mol</div>
          <div><strong>Heat of vaporization:</strong> 355 kJ/mol</div>
          <div><strong>Thermal conductivity:</strong> 119-165 W/(m·K)</div>
          <div><strong>Electrical resistivity:</strong> Variable</div>
          <div><strong>Young's modulus:</strong> 1050 GPa (diamond)</div>
          <div><strong>Hardness (Mohs):</strong> 10 (diamond), 1-2 (graphite)</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarbonPhysicalConstantsSection;
