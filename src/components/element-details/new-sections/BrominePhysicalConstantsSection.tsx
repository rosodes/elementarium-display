
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BrominePhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Melting Point:</strong> 265.8 K (-7.2°C)</div>
          <div><strong>Boiling Point:</strong> 332.0 K (58.8°C)</div>
          <div><strong>Density:</strong> 3.1028 g/cm³ (liquid)</div>
          <div><strong>Density (gas):</strong> 7.59 g/L at STP</div>
          <div><strong>Atomic Radius:</strong> 185 pm</div>
          <div><strong>Covalent Radius:</strong> 120 pm</div>
          <div><strong>Van der Waals Radius:</strong> 185 pm</div>
          <div><strong>Thermal Conductivity:</strong> 0.122 W/(m·K)</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BrominePhysicalConstantsSection;
