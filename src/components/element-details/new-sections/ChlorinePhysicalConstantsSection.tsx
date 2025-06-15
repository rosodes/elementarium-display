
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ChlorinePhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Atomic mass:</strong> 35.45 u</div>
          <div><strong>Density (gas, STP):</strong> 3.2 g/L</div>
          <div><strong>Density (liquid):</strong> 1.56 g/cm³</div>
          <div><strong>Melting point:</strong> 171.6 K (-101.5°C)</div>
          <div><strong>Boiling point:</strong> 239.11 K (-34.04°C)</div>
          <div><strong>Critical temperature:</strong> 416.9 K</div>
          <div><strong>Critical pressure:</strong> 7.991 MPa</div>
          <div><strong>Heat of fusion:</strong> 6.4 kJ/mol</div>
          <div><strong>Heat of vaporization:</strong> 20.4 kJ/mol</div>
          <div><strong>Thermal conductivity:</strong> 0.0089 W/(m·K)</div>
          <div><strong>Electronegativity:</strong> 3.16</div>
          <div><strong>Electrical resistivity:</strong> &gt;10¹⁰ Ω·m</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChlorinePhysicalConstantsSection;
