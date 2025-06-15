
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ArsenicNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Natural Occurrence</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Main ores: Arsenopyrite (FeAsS), Realgar (As₄S₄)</li>
        <li>Also: Orpiment (As₂S₃), Native arsenic</li>
        <li>Abundance in crust: 1.8 ppm</li>
        <li>Often found with copper, lead, gold ores</li>
        <li>Present in groundwater in some regions</li>
        <li>Major producers: China, Chile, Morocco</li>
        <li>Byproduct of copper and lead smelting</li>
      </ul>
    </CardContent>
  </Card>
);

export default ArsenicNaturalOccurrenceSection;
