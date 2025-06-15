
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ZincNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Natural Occurrence</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Main ores: Sphalerite (ZnS), Smithsonite (ZnCO₃)</li>
        <li>Also: Hemimorphite (Zn₄Si₂O₇(OH)₂·H₂O)</li>
        <li>Major producers: China, Peru, Australia, USA</li>
        <li>Concentration in crust: ~70 ppm</li>
        <li>Essential trace element for all life forms</li>
        <li>Found in many zinc-containing minerals</li>
      </ul>
    </CardContent>
  </Card>
);

export default ZincNaturalOccurrenceSection;
