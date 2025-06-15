
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const SulfurHistorySection: React.FC = () => {
  return (
    <Card className="my-4 border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
        <CardTitle className="text-lg">Discovery & History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-xs">
        <div className="space-y-2">
          <div><strong>Known since:</strong> Ancient times (prehistoric)</div>
          <div><strong>Ancient uses:</strong> Medicine, bleaching, fumigation</div>
          <div><strong>Timeline:</strong></div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Ancient Egypt - used in mummification</li>
            <li>Ancient Greece - called "theion" (divine substance)</li>
            <li>Middle Ages - component of gunpowder</li>
            <li>1777 - Antoine Lavoisier proved sulfur is an element</li>
            <li>1865 - Frasch process for sulfur extraction</li>
            <li>1909 - Contact process for sulfuric acid</li>
            <li>1930s - Rubber vulcanization perfected</li>
          </ul>
          <div><strong>Etymology:</strong> From Latin "sulphur" (burning stone)</div>
          <div><strong>Historical significance:</strong> Essential for gunpowder, matches, medicine</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SulfurHistorySection;
