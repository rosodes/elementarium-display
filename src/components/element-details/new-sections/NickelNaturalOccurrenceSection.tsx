
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NickelNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Natural Occurrence</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Main ores: Pentlandite (Ni,Fe)₉S₈, Garnierite (hydrated Ni silicate)</li>
        <li>Major producers: Indonesia, Philippines, Russia, Canada</li>
        <li>Found in meteorites (iron-nickel alloys)</li>
        <li>Earth's core contains significant nickel</li>
        <li>Concentration in crust: ~84 ppm</li>
      </ul>
    </CardContent>
  </Card>
);

export default NickelNaturalOccurrenceSection;
