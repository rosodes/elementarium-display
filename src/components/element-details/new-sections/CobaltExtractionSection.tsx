
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CobaltExtractionSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Extraction</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Mainly obtained as by-product of nickel/copper mining</li>
        <li>Flotation concentration of sulfide ores</li>
        <li>Roasting to convert sulfides to oxides</li>
        <li>Acid leaching and solvent extraction</li>
        <li>Electrowinning or hydrogen reduction</li>
        <li>Refining to 99.5%+ purity for commercial use</li>
      </ul>
    </CardContent>
  </Card>
);

export default CobaltExtractionSection;
