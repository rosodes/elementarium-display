
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const GalliumNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Natural Occurrence</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>No independent minerals - found as trace element</li>
        <li>Main source: aluminum and zinc ores</li>
        <li>Concentration in crust: ~19 ppm</li>
        <li>Found in bauxite, sphalerite, germanite</li>
        <li>Major producers: China, Japan, South Korea</li>
        <li>Byproduct of aluminum and zinc smelting</li>
      </ul>
    </CardContent>
  </Card>
);

export default GalliumNaturalOccurrenceSection;
