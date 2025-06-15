
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NitrogenPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Atomic mass:</strong> 14.007 u</div>
          <div><strong>Density (gas, STP):</strong> 1.251 g/L</div>
          <div><strong>Density (liquid):</strong> 0.808 g/cm³</div>
          <div><strong>Melting point:</strong> 63.15 K (-210.00°C)</div>
          <div><strong>Boiling point:</strong> 77.36 K (-195.79°C)</div>
          <div><strong>Critical temperature:</strong> 126.21 K</div>
          <div><strong>Critical pressure:</strong> 3.39 MPa</div>
          <div><strong>Heat of fusion:</strong> 0.72 kJ/mol</div>
          <div><strong>Heat of vaporization:</strong> 5.56 kJ/mol</div>
          <div><strong>Thermal conductivity:</strong> 0.02583 W/(m·K)</div>
          <div><strong>Electronegativity:</strong> 3.04</div>
          <div><strong>Triple bond energy:</strong> 945 kJ/mol (N≡N)</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NitrogenPhysicalConstantsSection;
