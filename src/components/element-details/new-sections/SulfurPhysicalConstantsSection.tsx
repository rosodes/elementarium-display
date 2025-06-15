
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SulfurPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Atomic mass:</strong> 32.06 u</div>
          <div><strong>Density (α-sulfur):</strong> 2.07 g/cm³</div>
          <div><strong>Density (β-sulfur):</strong> 1.96 g/cm³</div>
          <div><strong>Melting point:</strong> 388.36 K (115.21°C)</div>
          <div><strong>Boiling point:</strong> 717.8 K (444.6°C)</div>
          <div><strong>Heat of fusion:</strong> 1.73 kJ/mol</div>
          <div><strong>Heat of vaporization:</strong> 45 kJ/mol</div>
          <div><strong>Thermal conductivity:</strong> 0.205 W/(m·K)</div>
          <div><strong>Electrical resistivity:</strong> 2×10¹⁵ Ω·m</div>
          <div><strong>Critical temperature:</strong> 1314 K</div>
          <div><strong>Critical pressure:</strong> 20.7 MPa</div>
          <div><strong>Electronegativity:</strong> 2.58</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SulfurPhysicalConstantsSection;
