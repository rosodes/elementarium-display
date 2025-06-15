
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonNaturalOccurrenceSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Natural Occurrence</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Abundance in Earth's crust:</strong> 200 ppm</div>
          <div><strong>Abundance in universe:</strong> 4th most abundant element</div>
          <div><strong>Natural forms:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Diamond - crystalline form in kimberlite pipes</li>
            <li>Graphite - metamorphic rocks</li>
            <li>Coal - fossil fuel deposits</li>
            <li>Petroleum and natural gas</li>
            <li>Limestone and carbonates (CaCO₃)</li>
            <li>Organic matter in all living organisms</li>
            <li>Carbon dioxide in atmosphere (0.04%)</li>
            <li>Dissolved CO₂ in oceans</li>
          </ul>
          <div><strong>Major deposits:</strong> South Africa (diamonds), China (graphite), coal worldwide</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarbonNaturalOccurrenceSection;
