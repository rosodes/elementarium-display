
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const GermaniumSafetySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety & Health</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Metallic germanium is relatively non-toxic</li>
        <li>Some germanium compounds can be harmful</li>
        <li>GeCl₄ is corrosive and toxic</li>
        <li>Avoid inhalation of germanium dust</li>
        <li>Use proper ventilation when handling</li>
        <li>Store in dry, inert atmosphere</li>
        <li>Medical uses require pharmaceutical grade</li>
      </ul>
    </CardContent>
  </Card>
);

export default GermaniumSafetySection;
