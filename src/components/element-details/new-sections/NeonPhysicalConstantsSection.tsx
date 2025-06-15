
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NeonPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Atomic mass:</strong> 20.180 u</div>
          <div><strong>Density (gas):</strong> 0.900 g/L at STP</div>
          <div><strong>Density (liquid):</strong> 1.207 g/cm³ at -246°C</div>
          <div><strong>Melting point:</strong> 24.56 K (-248.59°C)</div>
          <div><strong>Boiling point:</strong> 27.07 K (-246.08°C)</div>
          <div><strong>Critical temperature:</strong> 44.4 K</div>
          <div><strong>Critical pressure:</strong> 2.76 MPa</div>
          <div><strong>Heat of fusion:</strong> 0.335 kJ/mol</div>
          <div><strong>Heat of vaporization:</strong> 1.71 kJ/mol</div>
          <div><strong>Thermal conductivity:</strong> 49.1 mW/(m·K)</div>
          <div><strong>Speed of sound:</strong> 435 m/s</div>
          <div><strong>Refractive index:</strong> 1.000067</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeonPhysicalConstantsSection;
