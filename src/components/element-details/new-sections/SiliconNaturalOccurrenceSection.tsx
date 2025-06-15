
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SiliconNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Natural Occurrence & Abundance</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Second most abundant element in Earth’s crust (~27% by mass).</li>
        <li>Occurs naturally as silicon dioxide (SiO₂) and in silicate minerals (feldspar, mica, clays, etc.).</li>
        <li>Common in sand, granite, quartz, and many rocks.</li>
        <li>Not found free in nature; only as compounds.</li>
        <li>Silicates are vital components of soil and many natural formations.</li>
        <li>Also present in meteorites and the dust of planets and stars.</li>
      </ul>
    </CardContent>
  </Card>
);

export default SiliconNaturalOccurrenceSection;
