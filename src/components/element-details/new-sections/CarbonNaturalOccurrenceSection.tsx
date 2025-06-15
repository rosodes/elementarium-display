
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-gray-300 dark:border-gray-700">
    <CardHeader className="bg-slate-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Occurrence & Abundance</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs space-y-2">
      <div>
        <strong>Abundance:</strong> Carbon is the 15th most abundant element in Earth's crust (~200 ppm). It is the 4th most abundant in the universe by mass.
      </div>
      <div>
        <strong>Main forms:</strong>
        <ul className="list-disc pl-4 space-y-1">
          <li>Found as diamond, graphite, and amorphous carbon (e.g. coal, soot, charcoal).</li>
          <li>Carbonates (calcite, limestone, dolomite) are major reservoir in rocks.</li>
          <li>Occurs as carbon dioxide (CO<sub>2</sub>) in the atmosphere (~0.04%).</li>
          <li>Dissolved as bicarbonate/carbonate in oceans and lakes.</li>
        </ul>
      </div>
      <div>
        <strong>Biological occurrence:</strong> Component of all known life (organic molecules).</div>
      <div>
        <strong>Cosmic:</strong> Produced in stars, detected in meteorites, stellar atmospheres, and interstellar dust.
      </div>
    </CardContent>
  </Card>
);

export default CarbonNaturalOccurrenceSection;
