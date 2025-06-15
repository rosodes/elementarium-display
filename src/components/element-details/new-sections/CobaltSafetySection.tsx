
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CobaltSafetySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety &amp; Health</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Essential nutrient in trace amounts (vitamin B12)</li>
        <li>Cobalt dust can cause lung disease (pneumoconiosis)</li>
        <li>Contact dermatitis from prolonged skin exposure</li>
        <li>"Hard metal disease" in tool manufacturing workers</li>
        <li>Co-60 requires radiation safety protocols</li>
        <li>Proper ventilation needed in mining/processing</li>
      </ul>
    </CardContent>
  </Card>
);

export default CobaltSafetySection;
