
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NickelExtractionSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Extraction</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Sulfide ores: flotation, roasting, smelting</li>
        <li>Laterite ores: acid leaching or pyrometallurgy</li>
        <li>Mond process: Ni + CO → Ni(CO)₄ → pure Ni</li>
        <li>Electrorefining for high-purity nickel</li>
        <li>Recycling from stainless steel scrap important</li>
        <li>Modern methods include pressure acid leaching</li>
      </ul>
    </CardContent>
  </Card>
);

export default NickelExtractionSection;
