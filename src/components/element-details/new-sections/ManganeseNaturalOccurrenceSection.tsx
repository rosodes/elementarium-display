
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Природная встречаемость марганца
const ManganeseNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Natural Occurrence</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div>
        <ul className="pl-4 list-disc space-y-1">
          <li>Main ores: Pyrolusite (MnO₂), Rhodochrosite (MnCO₃)</li>
          <li>Abundant in Earth's crust (~0.1%)</li>
          <li>Found in ocean floor as manganese nodules</li>
          <li>Major producers: South Africa, Australia, China</li>
        </ul>
      </div>
    </CardContent>
  </Card>
);
export default ManganeseNaturalOccurrenceSection;
