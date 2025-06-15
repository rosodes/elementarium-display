
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CopperExtractionSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Extraction</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Pyrometallurgy: Roasting, smelting, converting</li>
        <li>Hydrometallurgy: Leaching with acid solutions</li>
        <li>Electrorefining for high purity copper</li>
        <li>Flotation concentration of copper ores</li>
        <li>Recycling from scrap copper very important</li>
        <li>Bioleaching using bacteria for low-grade ores</li>
      </ul>
    </CardContent>
  </Card>
);

export default CopperExtractionSection;
