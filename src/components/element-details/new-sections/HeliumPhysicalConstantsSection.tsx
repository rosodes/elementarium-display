
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumPhysicalConstantsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Physical Constants</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="grid grid-cols-2 gap-2">
          <div><strong>Melting Point:</strong> 0.95 K (-272.2°C)</div>
          <div><strong>Boiling Point:</strong> 4.22 K (-268.93°C)</div>
          <div><strong>Density (gas):</strong> 0.1786 g/L</div>
          <div><strong>Density (liquid):</strong> 0.125 g/cm³</div>
          <div><strong>Critical Point:</strong> 5.19 K, 0.227 MPa</div>
          <div><strong>Atomic Radius:</strong> 31 pm</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeliumPhysicalConstantsSection;
