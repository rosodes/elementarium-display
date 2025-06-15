
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Природная встречаемость железа
const IronNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Natural Occurrence</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div>
        <ul className="pl-4 list-disc space-y-1">
          <li>4th most abundant element in Earth's crust (~5%)</li>
          <li>Main ores: Hematite (Fe₂O₃), Magnetite (Fe₃O₄)</li>
          <li>Also: Limonite, Siderite, Pyrite</li>
          <li>Pure iron found in meteorites</li>
          <li>Major deposits: Australia, Brazil, China, Russia</li>
        </ul>
      </div>
    </CardContent>
  </Card>
);

export default IronNaturalOccurrenceSection;
