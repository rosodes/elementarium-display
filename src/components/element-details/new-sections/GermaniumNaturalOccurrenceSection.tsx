
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const GermaniumNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Natural Occurrence</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Found in zinc ores and coal deposits</li>
        <li>Main sources: germanite, argyrodite</li>
        <li>Abundance in Earth's crust: 1.5 ppm</li>
        <li>Concentrated in certain coal types</li>
        <li>Present in some zinc and copper ores</li>
        <li>Rarely found as native metal</li>
        <li>Recovered as byproduct of zinc smelting</li>
      </ul>
    </CardContent>
  </Card>
);

export default GermaniumNaturalOccurrenceSection;
