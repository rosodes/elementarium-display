
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Промышленное получение железа
const IronExtractionSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Extraction</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Blast furnace process: ore + coke + limestone</li>
        <li>Reduction: Fe₂O₃ + 3CO → 2Fe + 3CO₂</li>
        <li>Direct reduction methods for pure iron</li>
        <li>Electric arc furnaces for recycling scrap</li>
        <li>Modern steel production uses basic oxygen furnaces</li>
      </ul>
    </CardContent>
  </Card>
);

export default IronExtractionSection;
