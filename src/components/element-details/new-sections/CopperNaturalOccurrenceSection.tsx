
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CopperNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Natural Occurrence</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Main ores: Chalcopyrite (CuFeS₂), Bornite (Cu₅FeS₄)</li>
        <li>Also: Malachite (Cu₂CO₃(OH)₂), Azurite (Cu₃(CO₃)₂(OH)₂)</li>
        <li>Sometimes found as native copper metal</li>
        <li>Major producers: Chile, Peru, China, USA</li>
        <li>Concentration in crust: ~60 ppm</li>
        <li>Essential trace element for living organisms</li>
      </ul>
    </CardContent>
  </Card>
);

export default CopperNaturalOccurrenceSection;
