
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SeleniumPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Melting Point:</strong> 494 K (221°C)</div>
          <div><strong>Boiling Point:</strong> 958 K (685°C)</div>
          <div><strong>Density:</strong> 4.81 g/cm³ (gray selenium)</div>
          <div><strong>Hardness (Mohs):</strong> 2.0</div>
          <div><strong>Atomic Radius:</strong> 190 pm</div>
          <div><strong>Covalent Radius:</strong> 120 pm</div>
          <div><strong>Thermal Conductivity:</strong> 0.52 W/(m·K)</div>
          <div><strong>Electrical Resistivity:</strong> >10¹² Ω·m</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SeleniumPhysicalConstantsSection;
