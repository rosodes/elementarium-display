
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

// Реактивность марганца
const ManganeseReactivitySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Reactivity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Reacts slowly with water to form hydrogen gas</li>
        <li>Dissolves readily in dilute acids</li>
        <li>Oxidizes in air, forming oxides</li>
        <li>Combines with halogens when heated</li>
      </ul>
    </CardContent>
  </Card>
);
export default ManganeseReactivitySection;
