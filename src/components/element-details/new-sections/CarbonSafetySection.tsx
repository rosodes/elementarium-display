
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const CarbonSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Health</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>General safety:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Elemental carbon (graphite, diamond) is non-toxic</li>
            <li>Carbon dust can be respiratory irritant</li>
            <li>Some carbon compounds are highly toxic</li>
            <li>Carbon monoxide is deadly poisonous gas</li>
          </ul>
          <div><strong>Health considerations:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Essential element for all life</li>
            <li>Carbon black may cause lung irritation</li>
            <li>Long-term exposure to coal dust causes pneumoconiosis</li>
            <li>Activated carbon used medically for poisoning treatment</li>
          </ul>
          <div><strong>Environmental concerns:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>CO₂ emissions contribute to climate change</li>
            <li>Coal burning releases pollutants</li>
            <li>Proper disposal of carbon materials important</li>
            <li>Carbon sequestration efforts ongoing</li>
          </ul>
          <div><strong>Handling precautions:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Avoid inhalation of carbon dust</li>
            <li>Use ventilation when working with carbon materials</li>
            <li>Proper storage of carbon compounds</li>
            <li>Fire safety with combustible carbon forms</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarbonSafetySection;
