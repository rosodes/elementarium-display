
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const FluorinePhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Atomic mass:</strong> 18.998 u</div>
          <div><strong>Density (gas):</strong> 1.696 g/L at STP</div>
          <div><strong>Density (liquid):</strong> 1.505 g/cm³ at -188°C</div>
          <div><strong>Melting point:</strong> 53.53 K (-219.62°C)</div>
          <div><strong>Boiling point:</strong> 85.03 K (-188.12°C)</div>
          <div><strong>Critical temperature:</strong> 144.13 K</div>
          <div><strong>Critical pressure:</strong> 5.172 MPa</div>
          <div><strong>Heat of fusion:</strong> 0.51 kJ/mol</div>
          <div><strong>Heat of vaporization:</strong> 6.62 kJ/mol</div>
          <div><strong>Thermal conductivity:</strong> 27.7 mW/(m·K)</div>
          <div><strong>Electronegativity:</strong> 3.98 (highest)</div>
          <div><strong>Bond dissociation energy:</strong> 158 kJ/mol (F-F)</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FluorinePhysicalConstantsSection;
