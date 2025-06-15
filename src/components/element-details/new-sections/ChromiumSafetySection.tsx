
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Безопасность и воздействие хрома
const ChromiumSafetySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety & Health</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Metallic chromium is not very toxic, but hexavalent compounds are carcinogenic and hazardous</li>
        <li>Inhalation of chromium(VI) dust/fumes—serious health risks</li>
        <li>Chromium compounds require careful waste management</li>
      </ul>
    </CardContent>
  </Card>
);
export default ChromiumSafetySection;
