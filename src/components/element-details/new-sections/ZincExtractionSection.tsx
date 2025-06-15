
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ZincExtractionSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Extraction</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Roasting of sulfide ores to form zinc oxide</li>
        <li>Reduction with carbon (pyrometallurgy)</li>
        <li>Hydrometallurgy: leaching with sulfuric acid</li>
        <li>Electrowinning for high-purity zinc</li>
        <li>Imperial Smelting Process for complex ores</li>
        <li>Recycling of galvanized steel important</li>
      </ul>
    </CardContent>
  </Card>
);

export default ZincExtractionSection;
