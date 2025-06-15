
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Реактивность хрома
const ChromiumReactivitySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Reactivity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Stable in air due to passive oxide film</li>
        <li>Does not tarnish easily</li>
        <li>Resistant to acids and corrosion</li>
        <li>Reacts with halogens, and when powdered, also with oxygen</li>
      </ul>
    </CardContent>
  </Card>
);
export default ChromiumReactivitySection;
