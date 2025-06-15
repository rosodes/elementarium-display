
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const LithiumCommercialUsesSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Commercial Uses</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Batteries:</strong> Lithium-ion rechargeable, primary lithium cells</div>
          <div><strong>Glass & ceramics:</strong> Improves thermal shock resistance</div>
          <div><strong>Lubricating greases:</strong> High-temp application</div>
          <div><strong>Medicines:</strong> Lithium carbonate for bipolar disorder</div>
          <div><strong>Air purification:</strong> Removes CO₂ in confined spaces</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LithiumCommercialUsesSection;
