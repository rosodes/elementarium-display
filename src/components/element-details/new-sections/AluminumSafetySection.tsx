
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const AluminumSafetySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Safety & Health</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Health considerations:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Generally safe in normal use</li>
            <li>Aluminum dust can cause respiratory irritation</li>
            <li>Potential link to neurological disorders (debated)</li>
            <li>Safe for food contact when properly treated</li>
          </ul>
          <div><strong>Workplace safety:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Fine aluminum powder is combustible</li>
            <li>Welding fumes require proper ventilation</li>
            <li>Use respiratory protection when machining</li>
            <li>Avoid inhalation of aluminum dust</li>
          </ul>
          <div><strong>Environmental impact:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Highly recyclable - reduces environmental impact</li>
            <li>Energy-intensive primary production</li>
            <li>Bauxite mining affects local ecosystems</li>
            <li>Red mud waste from processing requires management</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default AluminumSafetySection;
