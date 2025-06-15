
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ZincCommercialUsesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Commercial Uses</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Galvanization of steel (~50% of use)</li>
        <li>Brass and bronze alloys</li>
        <li>Die-casting for automotive parts</li>
        <li>Zinc oxide in rubber and paints</li>
        <li>Batteries (zinc-carbon, alkaline)</li>
        <li>Nutritional supplements</li>
        <li>Sunscreens and cosmetics</li>
      </ul>
    </CardContent>
  </Card>
);

export default ZincCommercialUsesSection;
