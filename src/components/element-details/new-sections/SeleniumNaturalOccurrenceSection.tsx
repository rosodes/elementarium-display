
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SeleniumNaturalOccurrenceSection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Natural Occurrence</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <div className="space-y-2">
        <div><strong>Abundance in Earth's crust:</strong> 0.05 ppm (very rare)</div>
        <div><strong>Main sources:</strong></div>
        <ul className="list-disc pl-4 space-y-1">
          <li>Byproduct of copper refining</li>
          <li>Lead chamber mud from sulfuric acid production</li>
          <li>Selenides in sulfide ores</li>
          <li>Volcanic soils and sediments</li>
          <li>Coal combustion residues</li>
        </ul>
        <div><strong>Major producers:</strong> Japan, Germany, Belgium, Russia</div>
        <div><strong>Biological role:</strong> Essential trace element for humans</div>
      </div>
    </CardContent>
  </Card>
);

export default SeleniumNaturalOccurrenceSection;
