
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const GermaniumReactivitySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Stable in air at room temperature</li>
        <li>Forms protective oxide layer</li>
        <li>Reacts with halogens when heated</li>
        <li>Dissolves in hot nitric acid</li>
        <li>Attacked by molten alkalis</li>
        <li>Forms hydrides with hydrogen</li>
        <li>Similar chemical behavior to silicon</li>
      </ul>
    </CardContent>
  </Card>
);

export default GermaniumReactivitySection;
