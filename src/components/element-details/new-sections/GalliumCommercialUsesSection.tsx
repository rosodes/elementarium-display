
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const GalliumCommercialUsesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Commercial Uses</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Semiconductors: GaAs, GaN, GaP (~95% of use)</li>
        <li>LEDs (blue, green, UV light)</li>
        <li>Solar cells and photovoltaics</li>
        <li>High-frequency electronics</li>
        <li>Medical imaging (Ga-67 scans)</li>
        <li>Thermometers (mercury-free)</li>
        <li>Research applications</li>
      </ul>
    </CardContent>
  </Card>
);

export default GalliumCommercialUsesSection;
