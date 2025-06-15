
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const HeliumSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Health</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <ul className="list-disc pl-4 space-y-1">
          <li>Non-toxic and chemically inert</li>
          <li>Can cause asphyxiation in enclosed spaces by displacing oxygen</li>
          <li>Voice-changing effect: safe in small amounts but can be dangerous</li>
          <li>High-pressure gas requires proper handling and storage</li>
          <li>Extremely cold liquid helium can cause severe frostbite</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default HeliumSafetySection;
