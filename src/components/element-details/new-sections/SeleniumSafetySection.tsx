
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SeleniumSafetySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety & Health</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Essential micronutrient in small amounts</li>
        <li>Toxic in larger doses - narrow therapeutic window</li>
        <li>Hydrogen selenide gas is extremely toxic</li>
        <li>Can cause selenium poisoning (selenosis)</li>
        <li>Symptoms: garlic breath, hair loss, nail problems</li>
        <li>Proper ventilation required in processing</li>
        <li>Environmental monitoring important</li>
      </ul>
    </CardContent>
  </Card>
);

export default SeleniumSafetySection;
