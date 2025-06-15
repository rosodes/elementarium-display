
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
          <div><strong>Natural forms:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Diamond - crystalline form</li>
            <li>Graphite - layered crystalline form</li>
            <li>Coal - fossilized organic matter</li>
            <li>Petroleum and natural gas</li>
            <li>Limestone and marble (CaCO₃)</li>
            <li>Organic matter in all living things</li>
          </ul>
          <div><strong>Atmospheric carbon:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Carbon dioxide (CO₂) - 0.04% of atmosphere</li>
            <li>Methane (CH₄) - trace amounts</li>
            <li>Carbon monoxide (CO) - trace amounts</li>
          </ul>
          <div><strong>Biological role:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Essential element for all known life</li>
            <li>18.5% of human body mass</li>
            <li>Backbone of biomolecules</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarbonNaturalOccurrenceSection;
