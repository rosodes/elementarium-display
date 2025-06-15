
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Коммерческое применение марганца
const ManganeseCommercialUsesSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Commercial Uses</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Steel production (>90% of use)—improves strength, hardness</li>
        <li>Aluminum alloys for beverage cans</li>
        <li>Dry cell batteries (as MnO₂)</li>
        <li>Chemical industry—permanganates, catalysts</li>
      </ul>
    </CardContent>
  </Card>
);
export default ManganeseCommercialUsesSection;
