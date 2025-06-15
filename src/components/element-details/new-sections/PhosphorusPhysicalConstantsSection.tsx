
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const PhosphorusPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Atomic mass:</strong> 30.974 u</div>
          <div><strong>Density (white P):</strong> 1.823 g/cm³</div>
          <div><strong>Density (red P):</strong> 2.16 g/cm³</div>
          <div><strong>Melting point (white):</strong> 317.3 K (44.15°C)</div>
          <div><strong>Boiling point (white):</strong> 553 K (280°C)</div>
          <div><strong>Heat of fusion:</strong> 0.66 kJ/mol</div>
          <div><strong>Heat of vaporization:</strong> 12.4 kJ/mol</div>
          <div><strong>Thermal conductivity:</strong> 0.236 W/(m·K)</div>
          <div><strong>Electrical resistivity:</strong> 10¹⁷ Ω·m</div>
          <div><strong>Critical temperature:</strong> 994 K</div>
          <div><strong>Critical pressure:</strong> 6.2 MPa</div>
          <div><strong>Electronegativity:</strong> 2.19</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhosphorusPhysicalConstantsSection;
