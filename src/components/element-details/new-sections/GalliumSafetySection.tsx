
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const GalliumSafetySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Safety & Health</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="list-disc pl-4 space-y-1">
        <li>Generally non-toxic to humans</li>
        <li>Some gallium compounds may be harmful</li>
        <li>Liquid gallium can stain skin temporarily</li>
        <li>Attacks aluminum and steel containers</li>
        <li>Store in plastic or glass containers</li>
        <li>Handle with care due to low melting point</li>
      </ul>
    </CardContent>
  </Card>
);

export default GalliumSafetySection;
