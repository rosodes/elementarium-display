
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const ChlorineInterestingFactsSection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Interesting Facts</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Distinctive yellow-green color gives it its name</li>
          <li>Can be smelled at concentrations as low as 3 ppm</li>
          <li>Swimming pool smell is actually chloramines, not pure chlorine</li>
          <li>Essential for stomach acid production (HCl)</li>
          <li>Used in 85% of pharmaceuticals manufacturing</li>
          <li>Destroys ozone layer when released as CFCs</li>
          <li>Heavier than air - settles in low areas</li>
          <li>Used to make PVC plastic</li>
          <li>Table salt contains 60% chlorine by mass</li>
          <li>Chlorine dioxide is a more effective disinfectant than Cl₂</li>
          <li>Essential nutrient - humans need about 2g daily</li>
          <li>First chemical weapon used in WWI</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ChlorineInterestingFactsSection;
