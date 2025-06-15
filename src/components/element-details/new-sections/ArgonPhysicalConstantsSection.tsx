
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ArgonPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Atomic mass:</strong> 39.948 u</div>
          <div><strong>Density (gas):</strong> 1.784 g/L at STP</div>
          <div><strong>Density (liquid):</strong> 1.40 g/cm³ at -186°C</div>
          <div><strong>Melting point:</strong> 83.80 K (-189.35°C)</div>
          <div><strong>Boiling point:</strong> 87.30 K (-185.85°C)</div>
          <div><strong>Critical temperature:</strong> 150.87 K</div>
          <div><strong>Critical pressure:</strong> 4.863 MPa</div>
          <div><strong>Heat of fusion:</strong> 1.18 kJ/mol</div>
          <div><strong>Heat of vaporization:</strong> 6.43 kJ/mol</div>
          <div><strong>Thermal conductivity:</strong> 17.72 mW/(m·K)</div>
          <div><strong>Speed of sound:</strong> 323 m/s (gas, 27°C)</div>
          <div><strong>Refractive index:</strong> 1.000281 (gas)</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArgonPhysicalConstantsSection;
