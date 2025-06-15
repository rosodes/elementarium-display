
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const NickelReactivitySection: React.FC = () => (
  <Card className="my-4 border border-gray-200 dark:border-gray-700">
    <CardHeader className="bg-blue-50 dark:bg-gray-800 p-4">
      <CardTitle className="text-lg">Chemical Reactivity</CardTitle>
    </CardHeader>
    <CardContent className="p-4 text-xs">
      <ul className="pl-4 list-disc space-y-1">
        <li>Resistant to corrosion in air and water</li>
        <li>Forms protective oxide layer</li>
        <li>Dissolves slowly in dilute acids</li>
        <li>Reacts with halogens when heated</li>
        <li>Combines with carbon monoxide to form Ni(CO)₄</li>
        <li>Catalyzes hydrogenation reactions</li>
      </ul>
    </CardContent>
  </Card>
);

export default NickelReactivitySection;
