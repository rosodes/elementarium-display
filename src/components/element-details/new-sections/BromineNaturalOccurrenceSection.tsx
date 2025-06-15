
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const BromineNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Natural Occurrence</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Abundance in crust: ~2.4 ppm</li>
        <li>Found in seawater (~65 ppm as bromide)</li>
        <li>Salt lakes and brines (Dead Sea, Great Salt Lake)</li>
        <li>Mineral deposits: bromyrite (AgBr)</li>
        <li>Associated with chloride deposits</li>
        <li>Concentrated by evaporation processes</li>
        <li>No free bromine in nature due to reactivity</li>
      </ul>
    </CardContent>
  </Card>
);

export default BromineNaturalOccurrenceSection;
