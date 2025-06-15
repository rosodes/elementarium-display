
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Безопасность и воздействие железа
const IronSafetySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety & Health</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Essential nutrient—deficiency causes anemia</li>
        <li>Iron dust can be fire/explosion hazard</li>
        <li>Excess iron can cause organ damage (hemochromatosis)</li>
        <li>Iron oxides (rust) generally non-toxic</li>
        <li>Proper ventilation needed when welding/cutting</li>
      </ul>
    </CardContent>
  </Card>
);

export default IronSafetySection;
