
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SiliconHistorySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">History & Discovery</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Discovered in 1824 by Jöns Jakob Berzelius, Sweden.</li>
        <li>The name “silicon” comes from Latin “silex,” meaning flint or hard stone.</li>
        <li>First isolated by heating potassium with silicon tetrafluoride.</li>
        <li>Silicon dioxide (quartz) and silicates were known since antiquity and used in glass, pottery, and sand.</li>
        <li>The role of silicon in electronics began in the 20th century with the development of semiconductors.</li>
        <li>The pure crystalline form crucial for microchips was first produced mid-20th century.</li>
      </ul>
    </CardContent>
  </Card>
);

export default SiliconHistorySection;
