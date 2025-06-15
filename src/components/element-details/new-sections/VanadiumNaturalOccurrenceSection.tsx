
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Природная встречаемость ванадия
const VanadiumNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Natural Occurrence</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div><strong>Abundance in Earth's crust:</strong> ~160 ppm</div>
        <div><strong>Main sources:</strong></div>
        <ul className="list-disc pl-4 space-y-1">
          <li>Magnetite (Fe₃O₄) containing vanadium</li>
          <li>Patronite (VS₄), vanadinite (Pb₅(VO₄)₃Cl)</li>
          <li>Many complex ores, oil shales and phosphate rocks</li>
        </ul>
        <div><strong>Major deposits:</strong> Russia, China, South Africa, Brazil, USA</div>
      </div>
    </CardContent>
  </Card>
);

export default VanadiumNaturalOccurrenceSection;
