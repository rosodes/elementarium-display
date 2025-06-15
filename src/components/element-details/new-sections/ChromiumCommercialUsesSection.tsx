
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Коммерческое применение хрома
const ChromiumCommercialUsesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Commercial Uses</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Stainless steel production (key alloy for corrosion resistance)</li>
        <li>Electroplating for decorative shiny surfaces</li>
        <li>Pigments, dyes, tanning leather</li>
        <li>Refractories for high-temperature applications</li>
      </ul>
    </CardContent>
  </Card>
);
export default ChromiumCommercialUsesSection;
