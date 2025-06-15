
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
          <div><strong>Density (gas):</strong> 1.251 g/L at STP</div>
          <div><strong>Density (liquid):</strong> 0.808 g/cm³ at -196°C</div>
          <div><strong>Melting point:</strong> 63.15 K (-210°C)</div>
          <div><strong>Boiling point:</strong> 77.36 K (-195.8°C)</div>
          <div><strong>Critical temperature:</strong> 126.19 K</div>
          <div><strong>Critical pressure:</strong> 3.39 MPa</div>
          <div><strong>Heat of fusion:</strong> 0.72 kJ/mol</div>
          <div><strong>Heat of vaporization:</strong> 5.56 kJ/mol</div>
          <div><strong>Thermal conductivity:</strong> 25.83 mW/(m·K)</div>
          <div><strong>Viscosity (gas):</strong> 17.81 μPa·s</div>
          <div><strong>Bond dissociation energy:</strong> 945 kJ/mol (N≡N)</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NitrogenPhysicalConstantsSection;
