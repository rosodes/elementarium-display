
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Безопасность и воздействие на здоровье ванадия
const VanadiumSafetySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety & Health</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Elemental vanadium is not highly toxic, but compounds (especially dusts and fumes) can be hazardous</li>
        <li>Inhalation can cause respiratory problems; long-term exposure may affect kidneys and nervous system</li>
        <li>Environmental impact of mining and processing is significant—requires waste management</li>
      </ul>
    </CardContent>
  </Card>
);

export default VanadiumSafetySection;
