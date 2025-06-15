
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Безопасность и воздействие марганца
const ManganeseSafetySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety & Health</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Essential nutrient in small amounts</li>
        <li>Excessive exposure can cause neurological problems</li>
        <li>Inhalation of Mn dust—risk of "manganism" (Parkinson-like symptoms)</li>
        <li>Workplace exposure limits strictly regulated</li>
      </ul>
    </CardContent>
  </Card>
);
export default ManganeseSafetySection;
