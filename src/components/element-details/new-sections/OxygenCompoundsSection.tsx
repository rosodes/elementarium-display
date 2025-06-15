
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const OxygenCompoundsSection: React.FC = () => (
  <Card className="my-4 border border-blue-200 dark:border-blue-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Compounds &amp; Chemistry</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Oxygen is the most abundant element in the Earth's crust and forms oxides with nearly every other element.</li>
        <li>Water (H<sub>2</sub>O), carbon dioxide (CO<sub>2</sub>), ozone (O<sub>3</sub>), and many acids and organic molecules are oxygen compounds.</li>
        <li>Oxygen supports combustion, respiration, and oxidation in biology and industry.</li>
        <li>Occurs in -2 (most compounds), -1 (peroxides), 0 (O<sub>2</sub>), and +1/+2 (rare).</li>
      </ul>
    </CardContent>
  </Card>
);
export default OxygenCompoundsSection;
