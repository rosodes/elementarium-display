
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const GalliumReactivitySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Slowly oxidizes in moist air</li>
        <li>Forms protective oxide layer</li>
        <li>Reacts with acids and strong bases</li>
        <li>Dissolves in aqua regia</li>
        <li>Forms intermetallic compounds</li>
        <li>Liquid gallium attacks glass and metals</li>
        <li>Combines with halogens when heated</li>
      </ul>
    </CardContent>
  </Card>
);

export default GalliumReactivitySection;
