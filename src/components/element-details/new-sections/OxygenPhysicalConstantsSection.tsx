
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const OxygenPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Atomic mass:</strong> 15.999 u</div>
          <div><strong>Density (gas, STP):</strong> 1.429 g/L</div>
          <div><strong>Density (liquid):</strong> 1.141 g/cm³</div>
          <div><strong>Melting point:</strong> 54.36 K (-218.79°C)</div>
          <div><strong>Boiling point:</strong> 90.20 K (-182.95°C)</div>
          <div><strong>Critical temperature:</strong> 154.59 K</div>
          <div><strong>Critical pressure:</strong> 5.043 MPa</div>
          <div><strong>Heat of fusion:</strong> 0.444 kJ/mol</div>
          <div><strong>Heat of vaporization:</strong> 6.82 kJ/mol</div>
          <div><strong>Thermal conductivity:</strong> 0.02658 W/(m·K)</div>
          <div><strong>Electronegativity:</strong> 3.44 (second highest)</div>
          <div><strong>Double bond energy:</strong> 498 kJ/mol (O=O)</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OxygenPhysicalConstantsSection;
