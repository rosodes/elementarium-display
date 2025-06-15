
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const GermaniumCommercialUsesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Commercial Uses</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Infrared optics and fiber optics (~40%)</li>
        <li>Polymerization catalysts (~20%)</li>
        <li>Electronics and solar cells (~15%)</li>
        <li>Metal alloys (~15%)</li>
        <li>Chemotherapy drugs</li>
        <li>Gamma ray detectors</li>
        <li>Wide-angle camera lenses</li>
      </ul>
    </CardContent>
  </Card>
);

export default GermaniumCommercialUsesSection;
